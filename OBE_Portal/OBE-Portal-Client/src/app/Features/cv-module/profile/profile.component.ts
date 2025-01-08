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
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: string;

  faculty: any = {
    FacultyMemberID: 0,
    phone: '',
    FacultyType: '',
    FacultyRole: '',
  };

  FacultyType: string[] = ['Permanent', 'Visiting', 'Adjunct'];
  constructor(
    private _CoursesSearchService: CoursesSearchService,
    private toastr: ToastrService,
    private ngxService: NgxUiLoaderService,
    private _ReportsService: ReportsService,
    private formBuilder: FormBuilder,
    private ProfileService: ProfileService,
    private pagerService: PagerService,
    private msgForDashboard: InterconnectedService
  ) { }

  ngOnInit(): void {
    this.username = GlobalService.Name;
    this.faculty.FacultyMemberID = GlobalService.FacultyMember_ID;
  }
  addFaculty()
  {
    console.log(this.faculty);
    this.faculty.FacultyMemberID = GlobalService.FacultyMember_ID;
    this.ngxService.start();
    this.ProfileService.AddFacultyData([this.faculty]).
      subscribe(
        data => {
          this.ngxService.stop();
          if (data) {
            this.toastr.success("CLOs added successfully", "Success");
            $("#addFacultyModal").modal("hide");
            
           // this.msgForDashboard.UpdateCourseDetailsCounts(GlobalService.TempFacultyMember_ID.toString());
          }
          else {
            this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
          }
        },
        error => {
          this.ngxService.stop();
          this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
        });
  }

  }

