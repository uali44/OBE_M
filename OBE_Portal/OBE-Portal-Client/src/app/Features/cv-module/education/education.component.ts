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
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationForm: FormGroup;
  educations: any[]=[];


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
    this.educationForm = this.formBuilder.group({
      FacultyMemberID: GlobalService.FacultyMember_ID,
      eduInstitute: ['', Validators.required],
      degree: ['', Validators.required],
      field: ['', Validators.required],
      year: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]]
    });


  }

  ngOnInit(): void {
    this.getEduction();
  }

  getEduction() {
    const facultyMemberID = GlobalService.FacultyMember_ID;

    this.ProfileService.GetEducation(facultyMemberID).subscribe({
      next: (data) => {
        this.educations = data;
        console.log( data)
        console.log("Education data" , this.educations);

      },
      error: (err) => {
        console.error('Error fetching education data:', err);
      },
    });
  }
  addEducation() {
    if (this.educationForm.valid) {
      const educationData = this.educationForm.value;
      console.log('Education Data:', educationData);

      this.ngxService.start();
      this.ProfileService.AddFacultyEducation([educationData]).
        subscribe(
          data => {
            this.ngxService.stop();

            this.toastr.success("Education successfully", "Success");
            $("#addEducationModal").modal("hide");

            this.getEduction();
          },
          error => {
            this.ngxService.stop();
            this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
          });


      this.educationForm.reset(); 
    }
    else {
      
      this.toastr.error("Please Enter All Fields.The value for year must be greater than 1900", "Error");
     
      
    }
  }


  confirmDelete(eduID: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Education Data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {




      if (result.value) {
        this.ProfileService.DeleteEducation(eduID).subscribe(
          () => {
            Swal.fire('Deleted!', 'Your Education Data has been deleted.', 'success');
            this.getEduction();
          },
          error => {
            Swal.fire('Error!', 'Failed to delete Education Data.', 'error');
          }
        );
      }
    });


  //  if (confirm('Are you sure you want to delete this Education Data?')) {
  //    this.ProfileService.DeleteEducation(eduID).subscribe({
  //      next: (response) => {
  //        console.log('Delete Response:', response);
  //        this.toastr.success("Education deleted successfully.", "Success");

  //        this.getEduction();
  //      },
  //      error: (err) => {
  //        console.error('Error deleting experience:', err);
  //        this.toastr.error("Failed to delete education.", "Failed");

  //      },
  //    });
  //  }
  }



}
