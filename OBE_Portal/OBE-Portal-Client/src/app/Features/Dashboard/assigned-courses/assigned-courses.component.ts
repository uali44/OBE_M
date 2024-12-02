import { Component, OnInit } from '@angular/core';
import { InterconnectedService } from '../../../Shared/Services/Global/interconnected.service';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { AssignedCourse_Request } from '../../../Models/AssignedCourses/AssignedCourses_Request';
import { ToastrService } from 'ngx-toastr';
import { AssignedCoursesService } from './../../../Services/AssignedCourses/assignedCourses.service'
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { debug } from 'console';

declare const $: any;

@Component({
  selector: 'app-assigned-courses',
  templateUrl: './assigned-courses.component.html',
  styleUrls: ['./assigned-courses.component.css'],
})
export class AssignedCoursesComponent implements OnInit {
  updatedSemester_ID: any;
  AssignedCourse_Request_Obj: AssignedCourse_Request;
  AssignedCourse_Request_lst: any;
  Is_Course_CLOS: boolean;
  Is_Assessment_Tools: boolean;
  Is_Assessment_Marks: boolean;
  Is_Compiled_Result: boolean;
  Is_Assessment_Achievement: boolean;
  Is_Student_For_CQI: boolean;
  offered_Course_ID_First_Time: number;
  Sr_number: number;
  CLOS_Count: number;
  Assessment_Count: number;
  Marks_Added_Assessment_Count: number;
  Student_Count: number;
  Failed_CLOs_Students_Count: number;
  Is_Permission_Search_Criteria: boolean = false;

  constructor(private msgForDashboard: InterconnectedService,
    private toastr: ToastrService,
    private AssignedCoursesservice: AssignedCoursesService,
    private ngxService: NgxUiLoaderService) {
    this.Is_Course_CLOS = false;
    this.Is_Assessment_Tools = false;
    this.Is_Assessment_Marks = false;
    this.Is_Compiled_Result = false;
    this.Is_Assessment_Achievement = false;
    this.AssignedCourse_Request_lst = [];
    this.Sr_number = 1;
    this.CLOS_Count = 0;
    this.Assessment_Count = 0;
    this.Marks_Added_Assessment_Count = 0;
    this.Student_Count = 0;
    this.Failed_CLOs_Students_Count = 0;
    this.Is_Permission_Search_Criteria = false;
    this.AssignedCourse_Request_Obj = new AssignedCourse_Request();
    this.Is_Permission_Search_Criteria = GlobalService.Permissions.indexOf("Search_Criteria_Main") >= 0 ? true : false;
  }
  ngOnInit() {
    this.msgForDashboard.searchvaluetemp.subscribe(search => {
      if (search == "") {
        this.AssignedCourse_Request_Obj.FacultyMember_ID = GlobalService.FacultyMember_ID;
        this.AssignedCourse_Request_Obj.Semester_ID = GlobalService.Semester_ID;
        this.GetAssignedCoruses();
        return;
      }
      else {
        GlobalService.Semester_ID = Number(search);
        this.AssignedCourse_Request_Obj.FacultyMember_ID = GlobalService.FacultyMember_ID;
        this.AssignedCourse_Request_Obj.Semester_ID = GlobalService.Semester_ID; 
        this.GetAssignedCoruses();
        return;
      }
    });
    if (this.Is_Permission_Search_Criteria) {
      this.msgForDashboard.SetSelectedCoursesCLOs.subscribe(search => {
        if (search != "") {
          this.GetAssignedCorusesSearch(search);
        }
      });
    } else {
      this.GetAssignedCoruses();
    }
    this.msgForDashboard.SetCourseDetailsCounts.subscribe(search => {
      if (search != "") {
        this.CourseCounts(search);
      }
    });
  }
  GetAssignedCoruses() {
    this.Is_Course_CLOS = false;
    this.Is_Assessment_Tools = false;
    this.Is_Assessment_Marks = false;
    this.Is_Compiled_Result = false;
    this.Is_Assessment_Achievement = false;
    this.AssignedCourse_Request_lst = [];
    this.Sr_number = 1;
    this.CLOS_Count = 0;
    this.Assessment_Count = 0;
    this.Marks_Added_Assessment_Count = 0;
    this.Student_Count = 0;
    this.Failed_CLOs_Students_Count = 0;
    this.ngxService.start();
    GlobalService.TempFacultyMember_ID = Number(GlobalService.FacultyMember_ID);
    this.AssignedCourse_Request_Obj.FacultyMember_ID = Number(GlobalService.FacultyMember_ID);
    this.AssignedCourse_Request_Obj.Semester_ID = Number(GlobalService.Semester_ID);
    this.AssignedCoursesservice.GetAssignedCourses(this.AssignedCourse_Request_Obj).
      subscribe(
        response => {
          if (response != null) {
            this.Is_Course_CLOS = true;
            this.AssignedCourse_Request_lst = response;
            var temp = this.AssignedCourse_Request_lst.filter(x => x.Sr_Number == this.Sr_number)[0];
            if (temp != null) {
              GlobalService.Offered_Course_ID = Number(temp.OfferedCourseID);
              GlobalService.Is_Course = temp.Is_Course;
              GlobalService.Is_Completed = temp.Is_Completed;
              GlobalService.CourseCategory = temp.CourseCategory;
              this.CLOS_Count = temp.CLOS_Count;
              this.Assessment_Count = temp.Assessment_Count;
              this.Marks_Added_Assessment_Count = temp.Marks_Added_Assessment_Count;
              this.Student_Count = temp.Student_Count;
              this.Failed_CLOs_Students_Count = temp.Failed_CLOs_Students_Count;
              
              $("#tab_Course_CLOS").addClass('active');
              $("#tab-Course-CLOS").addClass('active');

            }
          }
          else {
            this.AssignedCourse_Request_lst = [];
          }
          this.ngxService.stop();
        },
        error => {
          this.ngxService.stop();
          this.toastr.error(error.message, "Error!")
        });
  }
  SelectedCourse(value) {
    if (value.CourseCategory == 1) {
      GlobalService.Is_Course = true;
    } else {
      GlobalService.Is_Course = false;
    }
    GlobalService.Is_Completed = value.Is_Completed;
    GlobalService.CourseCategory = value.CourseCategory;
    this.Is_Course_CLOS = false;
    GlobalService.Offered_Course_ID = Number(value.OfferedCourseID);
    this.Sr_number = value.Sr_Number;
    this.CLOS_Count = value.CLOS_Count;
    this.Assessment_Count = value.Assessment_Count;
    this.Marks_Added_Assessment_Count = value.Marks_Added_Assessment_Count;
    this.Student_Count = value.Student_Count;
    this.Failed_CLOs_Students_Count = value.Failed_CLOs_Students_Count;
    
    $("#tab_Course_CLOS").addClass('active');
    $("#tab-Course-CLOS").addClass('active');
    $("#tab_Assessment_Details").removeClass('active');
    $("#tab-Assessment-Details").removeClass('active');
    $("#tab_Assessment_Marks").removeClass('active');
    $("#tab-Assessment-Marks").removeClass('active');
    $("#tab_Compiled_Result").removeClass('active');
    $("#tab-Compiled-Result").removeClass('active');
    $("#tab_Assessment_Achievement").removeClass('active');
    $("#tab-Assessment-Achievement").removeClass('active');
    $("#tab_Student_For_CQI").removeClass('active');
    $("#tab-Student-For-CQI").removeClass('active');
    this.LoadCoursesCLOS();
  }
  LoadCoursesCLOS() {
    this.msgForDashboard.SetSelectedCoursesData("");
    this.Is_Course_CLOS = true;
    this.Is_Assessment_Tools = false;
    this.Is_Assessment_Marks = false;
    this.Is_Compiled_Result = false;
    this.Is_Assessment_Achievement = false;
    this.Is_Student_For_CQI = false;
  }
  LoadAssessmentTools() {
    this.Is_Assessment_Tools = true;
    this.Is_Course_CLOS= false;
    this.Is_Assessment_Marks = false;
    this.Is_Compiled_Result = false;
    this.Is_Assessment_Achievement = false;
    this.Is_Student_For_CQI = false;
  }
  LoadAssessmentMarks() {
    this.Is_Assessment_Marks= true;
    this.Is_Assessment_Tools = false;
    this.Is_Course_CLOS  = false;
    this.Is_Compiled_Result = false;
    this.Is_Assessment_Achievement = false;
    this.Is_Student_For_CQI = false;
  }
  LoadCompiledResult() {
    this.Is_Compiled_Result= true;
    this.Is_Assessment_Tools = false;
    this.Is_Assessment_Marks = false;
    this.Is_Course_CLOS  = false;
    this.Is_Assessment_Achievement = false;
    this.Is_Student_For_CQI = false;
  }
  LoadAssessmentAchievement() {
    this.Is_Assessment_Achievement= true;
    this.Is_Assessment_Tools = false;
    this.Is_Assessment_Marks = false;
    this.Is_Compiled_Result = false;
    this.Is_Course_CLOS = false;
    this.Is_Student_For_CQI = false;
  }
  LoadStudentForCQI() {
    this.Is_Student_For_CQI= true;
    this.Is_Assessment_Tools = false;
    this.Is_Assessment_Marks = false;
    this.Is_Compiled_Result = false;
    this.Is_Course_CLOS = false;
    this.Is_Assessment_Achievement  = false;
  }
  GetAssignedCorusesSearch(FacultyMember_ID: any) {
    this.ngxService.start();
    this.Sr_number = 1;
    this.AssignedCourse_Request_Obj = new AssignedCourse_Request();
    this.AssignedCourse_Request_Obj.FacultyMember_ID = Number(FacultyMember_ID);
    this.AssignedCourse_Request_Obj.Semester_ID = Number(GlobalService.Semester_ID);
    this.AssignedCoursesservice.GetAssignedCourses({ FacultyMember_ID: Number(FacultyMember_ID), Semester_ID: Number(GlobalService.Semester_ID)}).
      subscribe(
        response => {
          if (response != null) {
            this.AssignedCourse_Request_lst = response;
            var temp = this.AssignedCourse_Request_lst.filter(x => x.Sr_Number == this.Sr_number)[0];
            if (temp != null) {
              $("#tab_Course_CLOS").addClass('active');
              $("#tab-Course-CLOS").addClass('active');
              $("#tab_Assessment_Details").removeClass('active');
              $("#tab-Assessment-Details").removeClass('active');
              $("#tab_Assessment_Marks").removeClass('active');
              $("#tab-Assessment-Marks").removeClass('active');
              $("#tab_Compiled_Result").removeClass('active');
              $("#tab-Compiled-Result").removeClass('active');
              $("#tab_Assessment_Achievement").removeClass('active');
              $("#tab-Assessment-Achievement").removeClass('active');
              $("#tab_Student_For_CQI").removeClass('active');
              $("#tab-Student-For-CQI").removeClass('active');
              GlobalService.Offered_Course_ID = Number(temp.OfferedCourseID);
              GlobalService.Is_Course = temp.Is_Course;
              GlobalService.Is_Completed = temp.Is_Completed;
              GlobalService.CourseCategory = temp.CourseCategory;
              this.CLOS_Count = temp.CLOS_Count;
              this.Assessment_Count = temp.Assessment_Count;
              this.Marks_Added_Assessment_Count = temp.Marks_Added_Assessment_Count;
              this.Student_Count = temp.Student_Count;
              this.Failed_CLOs_Students_Count = temp.Failed_CLOs_Students_Count;
              $("#tab_Course_CLOS").addClass('active');
              this.LoadCoursesCLOS();
            }
          }
          else {
            this.AssignedCourse_Request_lst = [];
          }
          this.ngxService.stop();
        },
        error => {
          this.ngxService.stop();
          this.toastr.error(error.message, "Error!")
        });
  }
  CourseCounts(FacultyMember_ID: any) {
    this.AssignedCourse_Request_Obj = new AssignedCourse_Request();
    this.AssignedCourse_Request_Obj.FacultyMember_ID = Number(FacultyMember_ID);
    this.AssignedCourse_Request_Obj.Semester_ID = Number(GlobalService.Semester_ID);
    this.AssignedCoursesservice.GetAssignedCourses(this.AssignedCourse_Request_Obj).
      subscribe(
        response => {
          if (response != null) {
            this.AssignedCourse_Request_lst = response;
            var temp = this.AssignedCourse_Request_lst.filter(x => x.Sr_Number == this.Sr_number)[0];
            if (temp != null) {
              this.CLOS_Count = temp.CLOS_Count;
              this.Assessment_Count = temp.Assessment_Count;
              this.Marks_Added_Assessment_Count = temp.Marks_Added_Assessment_Count;
              this.Student_Count = temp.Student_Count;
              this.Failed_CLOs_Students_Count = temp.Failed_CLOs_Students_Count;
              
            }
          }
        },
        error => {
          this.ngxService.stop();
          this.toastr.error(error.message, "Error!")
        });
  }
}
