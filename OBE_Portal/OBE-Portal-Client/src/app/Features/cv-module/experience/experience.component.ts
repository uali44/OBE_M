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
      console.log('Education Data:', experienceData);
      // Call your service to save the data
      this.ngxService.start();
      this.ProfileService.AddFacultyExperience([experienceData]).
        subscribe(
          data => {
            this.ngxService.stop();
            /* if (data) {*/
            this.toastr.success("Experience added successfully", "Success");
            $("#addFacultyExpereince").modal("hide");

            // this.msgForDashboard.UpdateCourseDetailsCounts(GlobalService.TempFacultyMember_ID.toString());
            //}
            //else {
            //  console.log(data);
            //  this.toastr.error("Error occured while processing your request.", "Error");
            //}
          },
          error => {
            this.ngxService.stop();
            this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
          });


      this.experienceForm.reset(); // Reset the form after submission
    }
  }
}
