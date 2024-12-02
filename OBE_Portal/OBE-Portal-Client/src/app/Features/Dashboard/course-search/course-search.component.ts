import { Component, OnInit, Input } from '@angular/core';
import { AssignedCoursesComponent } from '../assigned-courses/assigned-courses.component';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CoursesSearchService } from '../../../Services/CourseSearch/CourseSearch.service';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { DashboardMainComponent } from '../Dashboard-Main/DashboardMain.component';
import { InterconnectedService } from '../../../Shared/Services/Global/interconnected.service';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.css'],
  providers: [AssignedCoursesComponent, DashboardMainComponent]
})
export class CourseSearchComponent implements OnInit {
  @Input('Module') Module: any;
  Institutes: [] = [];
  Department: [] = [];
  Faculty: [] = [];
  FacultyMemberID: number;
  Is_Permission_Institute: boolean = false;
  Is_Permission_Deaprtment: boolean = false;
  Is_Permission_Faculty: boolean = false;
  Temp_Institute_ID: number;
  Temp_Deaprtment_ID: number;
  constructor(
    private _CoursesSearchService: CoursesSearchService,
    private toastr: ToastrService,
    private ngxService: NgxUiLoaderService,
    private _InterconnectedService: InterconnectedService
  ) {
    this.Temp_Institute_ID = 0;
    this.Temp_Deaprtment_ID = 0;
    this.Is_Permission_Institute = GlobalService.Permissions.indexOf("Institute_Dropdown") >= 0 ? true : false;
    this.Is_Permission_Deaprtment = GlobalService.Permissions.indexOf("Department_Dropdown") >= 0 ? true : false;
    this.Is_Permission_Faculty = GlobalService.Permissions.indexOf("Faculty_Dropdown") >= 0 ? true : false;
    if (!this.Is_Permission_Institute) {
      this.Temp_Institute_ID = GlobalService.Institute_ID;
    }
    if (!this.Is_Permission_Deaprtment) {
      this.Temp_Deaprtment_ID = GlobalService.Deaprtment_ID;
    }
  }
  ngOnInit(): void {
    this._InterconnectedService.searchvaluetemp.subscribe(search => {
      this.Get_Institutes();
    });
  }
  Get_Institutes() {
    this.FacultyMemberID = 0;
    this.ngxService.start();
    this.Institutes = [];
    this._CoursesSearchService.Get_Institute().
      subscribe(
        response => {
          if (response != null) {
            if (this.Temp_Institute_ID != 0) {
              this.Institutes = response.filter(x => x.InstituteID == this.Temp_Institute_ID);
              this.Get_Department(this.Temp_Institute_ID);
            } else {
              this.Institutes = response;
            }

          }
          this.ngxService.stop();
        },
        error => {
          this.ngxService.stop();
          this.toastr.error("Internal server error occured while processing your request", "Error!")
        });
  }
  Get_Department(val) {
    if (val == undefined || val == null || val == "")
      return;
    this.ngxService.start();
    this.Department = [];
    this._CoursesSearchService.Get_Department(Number(val)).
      subscribe(
        response => {
          if (response != null) {
            if (this.Temp_Deaprtment_ID != 0) {
              this.Department = response.filter(x => x.DepartmentID == this.Temp_Deaprtment_ID);
              this.Get_FacultyMembers(this.Temp_Deaprtment_ID);
            } else {
              this.Department = response;
            }
          }
          this.ngxService.stop();

        },
        error => {
          this.ngxService.stop();
          this.toastr.error("Internal server error occured while processing your request", "Error!")
        });
  }
  Get_FacultyMembers(val) {
    this.FacultyMemberID = 0;
    if (val == undefined || val == null || val == "")
      return;
    this.ngxService.start();
    this.Faculty = [];
    this._CoursesSearchService.Get_FacultyMembers_For_Selected_Department_And_Semester({
      "Department_ID": Number(val), "Semester_ID": Number(GlobalService.Semester_ID)
    }).
      subscribe(
        response => {
          if (response != null) {
            this.Faculty = response;
          }
          this.ngxService.stop();
        },
        error => {
          this.ngxService.stop();
          this.toastr.error("Internal server error occured while processing your request", "Error!")
        });
  }
  GetAssignedCourses() {
    GlobalService.TempFacultyMember_ID = this.FacultyMemberID;
    if (this.Module == 1) {
      this._InterconnectedService.SetSelectedFacultyDataForDashboard(this.FacultyMemberID.toString());
    } else if (this.Module == 2) {
      this._InterconnectedService.SetSelectedCoursesData(this.FacultyMemberID.toString());
    }
  }
}
