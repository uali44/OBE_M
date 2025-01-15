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
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experienceForm: FormGroup;
  experienceData: any[] = [];
  currentlyWorking: boolean = false;
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
    this.experienceForm = this.formBuilder.group({
      FacultyMemberID: GlobalService.FacultyMember_ID,
      Position: ['', Validators.required],
      Company: ['', Validators.required],
      StartDate: ['', Validators.required],
      EndDate: ['']
     
    });

  }

  ngOnInit(): void {
    this.getExperience();
  }

  getExperience() {
    const facultyMemberID = GlobalService.FacultyMember_ID;
   
    this.ProfileService.GetExperience(facultyMemberID).subscribe({
      next: (data) => {
        this.experienceData = data;
        console.log("Exp data" + this.experienceData);
        
      },
      error: (err) => {
        console.error('Error fetching education data:', err);
      },
    });
  }



  addExperience() {
    if (this.experienceForm.valid) {
      const experienceData = this.experienceForm.value;
      experienceData.FacultyMemberID = GlobalService.FacultyMember_ID;
      console.log('Experience Data:', experienceData);
      if (this.currentlyWorking) {
        experienceData.EndDate = null;
      }
      this.ngxService.start();
      this.ProfileService.AddFacultyExperience([experienceData]).
        subscribe(
          data => {
            this.ngxService.stop();

            this.toastr.success("Experience added successfully", "Success");
            $("#addExperienceModal").modal("hide");
            this.getExperience();


          },
          error => {
            this.ngxService.stop();
            this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
          });


      this.experienceForm.reset();
    }
    else {
     
      Swal.fire("Please enter all fields ");
    }
  }
  onCurrentlyWorkingChange(event: any) {
    this.currentlyWorking = event.target.checked;
    if (this.currentlyWorking) {
      this.experienceForm.get('EndDate')?.setValue(null); // Clear EndDate
      this.experienceForm.get('EndDate')?.disable(); // Disable EndDate input
    } else {
      this.experienceForm.get('EndDate')?.enable(); // Enable EndDate input
    }
  }


  confirmDelete(expID: number) {


    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Experience Data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {




      if (result.value) {
        this.ProfileService.DeleteExperience(expID).subscribe(
          () => {
            Swal.fire('Deleted!', 'Your Experience Data has been deleted.', 'success');
            this.getExperience(); 
          },
          error => {
            Swal.fire('Error!', 'Failed to delete Experience Data.', 'error');
          }
        );
      }
    });
    //if (confirm('Are you sure you want to delete this experience?')) {
    //  this.ProfileService.DeleteExperience(expID).subscribe({
    //    next: (response) => {
    //      console.log('Delete Response:', response);
    //      this.toastr.success("Experience deleted successfully.", "Success");
         
    //      this.getExperience(); 
    //    },
    //    error: (err) => {
    //      console.error('Error deleting experience:', err);
    //      this.toastr.error("Failed to delete experience.", "Failed");
          
    //    },
    //  });
    //}
  }





}
