// cv-component.component.ts
import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { CoursesSearchService } from '../../../Services/CourseSearch/CourseSearch.service';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ReportsService } from '../../../Services/Reports/reports.service';
import { PagerService } from '../../../Shared/Services/Global/Pager';
import { HighlightPipe } from '../../../Shared/Pipe/highlight.pipe';
import { FilterPipe } from '../../../Shared/Pipe/filter';
import { ProfileService } from './../../../Services/Profile/profile.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal, { SweetAlertResult } from 'sweetalert2';
import { InterconnectedService } from '../../../Shared/Services/Global/interconnected.service';
declare const $: any;

@Component({
  selector: 'app-cv-component',
  templateUrl: './cv-component.component.html',
  styleUrls: ['./cv-component.component.css']
})
export class CvComponentComponent implements OnInit {
  activityForm: FormGroup;
  name: string;
  activities: any[] = [];
  fields: any[] = [];
  selectedActivityId: number = null;
  selectedActivity: any = null;
  groupedActivities: any[] = [];
  groupedActivitiest: { [key: string]: any[] } = {}; // Grouped by ActivityType
  activityTypes: string[] = []; // Unique Activity Types
  selectedTab: string;
  Is_Permission_Search_Criteria: boolean = false;
  facultyID: number;
  education: any[] = [];
  experience: any[] = [];
  filterYear: number | null = null;
  filteredActivities: any[] = [];
  Faculty: any[] = [];

  constructor(
    private _CoursesSearchService: CoursesSearchService,
    private toastr: ToastrService,
    private ngxService: NgxUiLoaderService,
    private _ReportsService: ReportsService,
    private formBuilder: FormBuilder,
    private ProfileService: ProfileService,
    private pagerService: PagerService,
    private msgForDashboard: InterconnectedService


  ) {
    this.activityForm = this.formBuilder.group({
      activity: ['', Validators.required]
    });
    this.initForm();
    this.selectedTab = this.getActivityTypes()[0];
    this.Is_Permission_Search_Criteria = GlobalService.Permissions.indexOf("Search_Criteria_Main") >= 0 ? true : false;
  }

  ngOnInit(): void {
    if (GlobalService.TempFacultyMember_ID == null) {
      this.facultyID = GlobalService.FacultyMember_ID
    }
    else {

      this.facultyID = GlobalService.TempFacultyMember_ID;
    }
    this.name = GlobalService.Name;
    this.loaddata();
   // this.fetchActivities();
   // this.loadActivities();
    this.groupActivitiesByType();
    this.activityTypes = this.getActivityTypes();
   
  }

  getActivityTypes(): string[] {
    const activityTypes = this.groupedActivities.map(activity => activity.ActivityType);
    const uniqueTypes = [...new Set(activityTypes)]; 
  
   
    return uniqueTypes;
  }
  sanitizeType(type: string): string {
    return type.replace(/\s+/g, '_');
  }

  groupActivitiesByType() {
    this.groupedActivitiest = this.groupedActivities.reduce((acc, activity) => {
      const type = activity.ActivityType;
      if (!acc[type]) {
        acc[type] = [];
      }
      acc[type].push(activity);
      return acc;
    }, {});
  }
  setActiveTab(type: string): void {
    this.selectedTab = type;
  }
  //getActivityTypes(): string[] {
  //  return Object.keys(this.groupedActivitiest);
  //}

  getDetailKeys(activity: any): string[] {
    return activity.Details?.[0]?.SubDetails ? Object.keys(activity.Details[0].SubDetails) : [];
  }





  private initForm(): void {

  }


  fetchActivities(): void {
    this.ProfileService.GetActivities().subscribe(
      (data) => {
        this.activities = data;
      },
      (error) => {
        console.error('Error fetching activities:', error);
      }
    );
  }


  onActivityChange(val): void {

    this.selectedActivityId = val;
    Object.keys(this.activityForm.controls).forEach(key => {
      if (key !== 'activity') { 
        this.activityForm.removeControl(key);
      }
    });

    this.fetchFields(val);
    this.activityForm.controls['activity'].setValue(this.selectedActivityId);
  }

  fetchFields(val): void {
    const requestdata = { ActivityID: val }
    this.ProfileService.GetActivitySubDetails(requestdata).subscribe(
      (data) => {

        this.fields = data;
        console.log(this.fields);
        // Dynamically add controls to the form
        this.fields.forEach((field) => {
          this.activityForm.addControl(this.sanitizeType( field.subDetail), this.formBuilder.control('', Validators.required));
        });
      },
      (error) => {
        console.error('Error fetching fields:', error);
      }
    );
  }




  onSubmit(): void {

    if (this.activityForm.invalid) {

      this.toastr.error("Please Enter All Fields", "Error");
     
      return;
    }

    const activityData = {
      FacultyID: this.facultyID , 
      ActivityID: this.selectedActivityId,
      Details: this.fields.map((field) => ({
        DetailName: field.subDetail,
        DetailValue: this.activityForm.value[this.sanitizeType( field.subDetail)],
      })),
    };

    this.ProfileService.SaveActivity(activityData).subscribe((response) => {
      if (response) {
        this.toastr.success('Activity saved successfully.');
        this.activityForm.reset();
        $("#dynamicModal").modal("hide");
        this.loadActivities();
      } else {
        this.toastr.error('Failed to save activity.');
      }
    });
  }

  applyYearFilter() {

    if (!this.filterYear) {
      Swal.fire('Error!', 'Please enter a valid year to filter.', 'error');
      return;
    }
    this.filteredActivities = this.filterActivities(this.groupedActivities, this.filterYear);
    //const filtered = this.filterActivities(this.groupedActivities, 2020);
    //console.log("filter", filtered);
  }

  filterActivities(groupedActivities: any, filterValue: number): any {
    const filterKeys = ['StartDate', 'Date', 'Year','Start-Year']; // Possible keys to filter by

    return groupedActivities.filter(activity =>
      activity.Details.some(detail =>
        filterKeys.some(key => {
          const value = detail.SubDetails[key];
          // Convert value to a number (or Date object) for comparison
          if (key === 'Year' || key=== 'Start-Year') {
            return Number(value) > filterValue; // Compare year as a number
          } else if (key === 'StartDate' || key === 'Date') {
            return new Date(value) > new Date(`${filterValue}-01-01`); // Compare dates
          }
          return false;
        })
      )
    );
  }






  loaddata(): void {
    if (GlobalService.TempFacultyMember_ID == null) {
      this.facultyID = GlobalService.FacultyMember_ID
    }
    else {

      this.facultyID = GlobalService.TempFacultyMember_ID;
    }

    this.ProfileService.getAllData(this.facultyID).subscribe((response) => {
      
      this.education = response.FacultyEducation;
     
      this.groupedActivities = response.ActivityDetails;
      this.experience = response.facultyExperience;
      this.activities = response.ActivityList
      this.Faculty = response.FacultyDetails
   //   console.log("xp", this.experience);
      console.log("grp",this.groupedActivities);
      //this.selectedTab = this.groupedActivities[0].ActivityType;

      this.setActiveTab(this.activities[0].ActivityType);
      $("#" + this.sanitizeType( this.activities[0].ActivityType) + "0").class = 'active';
      $("#" + this.sanitizeType(this.activities[0].ActivityType) + "0").active=true;


    });

  } 
  loadActivities(): void {

    if (GlobalService.TempFacultyMember_ID == null) {
      this.facultyID = GlobalService.FacultyMember_ID
    }
    else {

      this.facultyID = GlobalService.TempFacultyMember_ID;
    }
    console.log(GlobalService.TempFacultyMember_ID);

    this.ProfileService.GetFacultyActivity(this.facultyID).subscribe((response) => {
      this.groupedActivities = response;
      //console.log(response);
      //console.log(this.groupedActivities);

      this.selectedTab = this.groupedActivities[0].ActivityType;
     



    });

   

  }
  deleteActivity(detailID: number) {

    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this activity!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {

    


      if (result.value) {
        this.ProfileService.DeleteActivity(detailID).subscribe(
          () => {
            Swal.fire('Deleted!', 'Your activity has been deleted.', 'success');
            this.loadActivities();
          },
          error => {
            Swal.fire('Error!', 'Failed to delete activity.', 'error');
          }
        );
      }
    });


    //if (confirm('Are you sure you want to delete this experience?')) {
    //  this.ProfileService.DeleteActivity(detailID).subscribe({
    //    next: (response) => {
    //      console.log('Delete Response:', response);
    //      this.toastr.success("Acivity deleted successfully.", "Success");

    //      this.loadActivities(GlobalService.FacultyMember_ID);
    //    },
    //    error: (err) => {
    //      console.error('Error deleting experience:', err);
    //      this.toastr.error("Failed to delete Activity.", "Failed");

    //    },
    //  });

   // }
  }
  groupDataByActivity(data: any[]): any[] {
    const grouped = data.reduce((result, current) => {
      const activityName = current.ActivityName;

      // If activity doesn't exist in the result, initialize it
      if (!result[activityName]) {
        result[activityName] = {
          ActivityName: activityName,
          Details: [],
        };
      }

      // Find the existing detail entry by DetailID
      let detailEntry = result[activityName].Details.find(
        (d: any) => d.DetailID === current.DetailID
      );

      // If the detail entry doesn't exist, create a new one
      if (!detailEntry) {
        detailEntry = {
          DetailID: current.DetailID,
          SubDetails: {},
        };
        result[activityName].Details.push(detailEntry);
      }

      // Add the sub-detail name and value
      detailEntry.SubDetails[current.DetailName] = current.DetailValue;

      return result;
    }, {});

    // Convert the grouped object to an array for iteration
    return Object.values(grouped);
  }

  /**
   * Extracts unique sub-detail names (headers) for a given activity.
   * @param activity Activity object.
   * @returns Array of unique sub-detail names.
   */
  getDetailNames(activity: any): string[] {
    if (!activity.Details || activity.Details.length === 0) {
      return [];
    }
    // Extract keys (DetailNames) from the first SubDetails object
    return Object.keys(activity.Details[0].SubDetails);
  }

 


  openModal(activityN: any): void {
    
    this.selectedActivity = this.activities.find(activity => activity.ActivityName === activityN);

    this.activityForm.get('activity')?.setValue(this.selectedActivity.ActivityID, { emitEvent: true });
    this.onActivityChange(this.selectedActivity.ActivityID);
   
    $('#dynamicModal').modal('show');  
  }



}
