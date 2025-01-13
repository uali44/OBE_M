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
  educationData: any[] = [];


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
        this.educationData = data;

        console.log("Education data"+this.educationData);

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
      // Call your service to save the data
      this.ngxService.start();
      this.ProfileService.AddFacultyEducation([educationData]).
        subscribe(
          data => {
            this.ngxService.stop();
         
            this.toastr.success("Education successfully", "Success");
            $("#addFacultyEducation").modal("hide");

           
          },
          error => {
            this.ngxService.stop();
            this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
          });


      this.educationForm.reset(); // Reset the form after submission
    }
  }
}
