
import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
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
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { OwlDateTimeComponent } from 'ng-pick-datetime';

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
  activitySub: any[] = [];
  tempData: any[] = [];

  selectedFile: File | null = null;
  fileError: string = '';
  compressedImage: string | null = null;
  selectedFileData: { fileName: string; fileType: string; fileContent: string } | null = null;
  selectedFilePath: SafeResourceUrl | null = null;
  selectedFileType: string;






  constructor(
    private _CoursesSearchService: CoursesSearchService,
    private toastr: ToastrService,
    private ngxService: NgxUiLoaderService,
    private _ReportsService: ReportsService,
    private formBuilder: FormBuilder,
    private ProfileService: ProfileService,
    private pagerService: PagerService,
    private msgForDashboard: InterconnectedService,
    private sanitizer: DomSanitizer,


  ) {
    this.activityForm = this.formBuilder.group({
      activity: ['', Validators.required],
      imageFile: [null],
    });
    this.initForm();
    this.selectedTab = this.getActivityTypes()[0];
    this.Is_Permission_Search_Criteria = GlobalService.Permissions.indexOf("Search_Criteria_Main") >= 0 ? true : false;
  }

  ngOnInit(): void {
    this.facultyID = GlobalService.FacultyMember_ID
   
    this.name = GlobalService.Name;
    this.loaddata();
  
    this.groupActivitiesByType();
    this.activityTypes = this.getActivityTypes();
   
  }

  getActivityTypes(): string[] {
    const activityTypes = this.activities.map(activity => activity.ActivityType);
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
        this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
      }
    );
  }


  onActivityChange(val): void {

    this.selectedActivityId = val;
    Object.keys(this.activityForm.controls).forEach(key => {
      if (key !== 'activity' && key!=='imageFile') { 
        this.activityForm.removeControl(key);
      }
    });

    this.fetchFields(val);
    this.activityForm.controls['activity'].setValue(this.selectedActivityId);
  }
  onDateChange(event: any, controlName: string) {
    const formattedDate = this.FormateDate(event);
    this.activityForm.patchValue({ [controlName]: formattedDate });
  }


  private FormateDate(event: any) {
    const date = new Date(event);
    
    const formattedDate = date.toLocaleDateString('en-CA') // Gets 'YYYY-MM-DD'
    return formattedDate;
  }
  fetchFields(val): void {
    const requestdata = { ActivityID: val }
    this.ProfileService.GetActivitySubDetails(requestdata).subscribe(
      (data) => {

        this.fields = data;
       
        // Dynamically add controls to the form
        this.fields.forEach((field) => {
          this.activityForm.addControl(this.sanitizeType( field.subDetail), this.formBuilder.control('', Validators.required));
        });
      },
      (error) => {
        this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
      }
    );
  }




  onSubmit(): void {

   
    const activityData = this.tempData;
    this.ProfileService.SaveActivity(activityData).subscribe((response) => {
      if (response) {
        this.toastr.success('Activity saved successfully.');
        this.activityForm.reset();
        this.tempData = [];
        this.selectedFileData = null;
        $("#dynamicModal").modal("hide");
        this.loadActivities();
      } else {
        this.toastr.error('Failed to save activity.');
      }
    });
  }


  add() {
   
    const activityData = {
      FacultyID: this.facultyID,
      ActivityID: this.selectedActivityId,
      imageFile: this.selectedFileData ,
      Details: this.fields.map((field) => {
        let value = this.activityForm.value[this.sanitizeType(field.subDetail)];

        // Check if value is a valid date
        if (value && !isNaN(Date.parse(value))) {
          const date = new Date(value);
          value = date.toLocaleDateString('en-CA'); // Format as 'YYYY-MM-DD'
        }

        return {
          DetailName: field.subDetail,
          DetailValue: value,
        };



        
      }),
      CreatedBy: GlobalService.FacultyMember_ID,
    };
    this.tempData.push(activityData);
    this.selectedFileData = null;
    this.activityForm.reset();
    this.activityForm.controls['activity'].setValue(this.selectedActivityId);
   
  }

  deleteEntry(index: number) {
    this.tempData.splice(index, 1);
  }

  ClearImage() {
    this.selectedFileData = null;
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement; // Cast to HTMLInputElement
    const file = input.files[0]; // Use optional chaining to check for files


    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'application/pdf'];

    if (!validTypes.includes(file.type)) {
      this.fileError = 'Invalid file type. Please upload a JPEG, PNG, or PDF.';
      return;
    }

    // Validate file size
    const maxSize = 1024 * 1024; // 1 MB
    if (file.size > maxSize) {
      this.fileError = 'File size exceeds the 1 MB limit.';
      return;
    }
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        // Clean Base64 string
        const base64String = (reader.result as string).split(',')[1]; // Remove prefix (e.g., "data:image/jpeg;base64,")
        this.selectedFileData = {
          fileName: file.name,
          fileType: file.type,
          fileContent: base64String, // Clean Base64 string without prefix
        };
      };

      reader.readAsDataURL(file);
    }

    this.selectedFile = file;
    this.fileError = null;
  

  }

  openFileViewer(filePath: string): void {
    // Set the file path to display in the modal
    this.selectedFilePath = this.sanitizer.bypassSecurityTrustResourceUrl(filePath);

    // Check the file type based on the extension or MIME type
    if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg') || filePath.endsWith('.png')) {
      this.selectedFileType = 'image';
    } else if (filePath.endsWith('.pdf')) {
      this.selectedFileType = 'pdf';
    } else {
      this.selectedFileType = 'other';  // Handle other file types as needed
    }


    $("#fileViewerModal").modal("show");
  }

  extractFileName(filePath: string): string {
    const parts = filePath.split('/');
    return parts[parts.length - 1]; // Get the last part, which is the file name
  }


  // Helper method to check if the file is an image
  isImage(fileType: string): boolean {
    return fileType === 'image';
  }

  // Helper method to check if the file is a PDF
  isPDF(fileType: string): boolean {
    return fileType === 'pdf';
  }







  groupExists(gactivity: string): boolean {
    return this.groupedActivities.some(activity => activity.ActivityName === gactivity);
  }

  loaddata(): void {
  
    this.facultyID = GlobalService.FacultyMember_ID
    this.ProfileService.getAllData(this.facultyID).subscribe((response) => {
      
      this.education = response.FacultyEducation;
     
      this.groupedActivities = response.ActivityDetails;
      this.experience = response.facultyExperience;
      this.activities = response.ActivityList
      this.Faculty = response.FacultyDetails;
      this.activitySub = response.ActivitySubDetail
 

      this.setActiveTab(this.activities[0].ActivityType);
      $("#" + this.sanitizeType( this.activities[0].ActivityType) + "0").class = 'active';
      $("#" + this.sanitizeType(this.activities[0].ActivityType) + "0").active = true;
    

    });

  }

  filterdDetail(id: number): any {
    return this.activitySub.filter(detail => detail.ActivityID === id);


  }




  loadActivities(): void {

   
    this.facultyID = GlobalService.FacultyMember_ID
  

    this.ProfileService.GetFacultyActivity(this.facultyID).subscribe((response) => {
      this.groupedActivities = response;
     

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
      const payload = {
        ID: detailID,
        ModifiedBy: GlobalService.FacultyMember_ID,
      }
    


      if (result.value) {
        this.ProfileService.DeleteActivity(payload).subscribe(
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

  
  getDetailNames(activity: any): string[] {
    if (!activity.Details || activity.Details.length === 0) {
      return [];
    }
    // Extract keys (DetailNames) from the first SubDetails object
    return Object.keys(activity.Details[0].SubDetails);
  }

 


  openModal(activityN: any): void {
    this.tempData = [];
    this.selectedActivity = this.activities.find(activity => activity.ActivityName === activityN);

    this.activityForm.get('activity')?.setValue(this.selectedActivity.ActivityID, { emitEvent: true });
    this.onActivityChange(this.selectedActivity.ActivityID);
    this.selectedFileData = null;
    $('#dynamicModal').modal('show');  
  }



}
