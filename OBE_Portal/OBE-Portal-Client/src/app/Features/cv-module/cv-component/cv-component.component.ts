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
import Swal from 'sweetalert2';
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
  }

  ngOnInit(): void {

    this.name = GlobalService.Name;
    this.fetchActivities();
    this.loadActivities(GlobalService.FacultyMember_ID);
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
          this.activityForm.addControl(field.subDetail, this.formBuilder.control('', Validators.required));
        });
      },
      (error) => {
        console.error('Error fetching fields:', error);
      }
    );
  }




  onSubmit(): void {

    if (this.activityForm.invalid) {
      return;
    }

    const activityData = {
      FacultyID: GlobalService.FacultyMember_ID, 
      ActivityID: this.selectedActivityId,
      Details: this.fields.map((field) => ({
        DetailName: field.subDetail,
        DetailValue: this.activityForm.value[field.subDetail],
      })),
    };

    this.ProfileService.SaveActivity(activityData).subscribe((response) => {
      if (response) {
        this.toastr.success('Activity saved successfully.');
        this.activityForm.reset();
        this.loadActivities(GlobalService.FacultyMember_ID);
      } else {
        this.toastr.error('Failed to save activity.');
      }
    });
  }

  loadActivities(facultyId: number): void {
    this.ProfileService.GetFacultyActivity(facultyId).subscribe((response) => {
      this.groupedActivities = response;
      console.log(response);
      console.log(this.groupedActivities);
    });
  }
  deleteActivity(detailID: number) {
    if (confirm('Are you sure you want to delete this experience?')) {
      this.ProfileService.DeleteActivity(detailID).subscribe({
        next: (response) => {
          console.log('Delete Response:', response);
          this.toastr.success("Acivity deleted successfully.", "Success");

          this.loadActivities(GlobalService.FacultyMember_ID);
        },
        error: (err) => {
          console.error('Error deleting experience:', err);
          this.toastr.error("Failed to delete Activity.", "Failed");

        },
      });

    }
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
