import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
let RegisteredCoursesComponent = class RegisteredCoursesComponent {
    constructor(toastr, ngxService, _StudentService) {
        this.toastr = toastr;
        this.ngxService = ngxService;
        this._StudentService = _StudentService;
    }
    ngOnInit() {
        this.GetCourseCLOS = [];
        this.GetRegisteredCoursesDetails();
    }
    GetRegisteredCoursesDetails() {
        this.AllCoursesDetails = [];
        this.AllSemester = [];
        this.ngxService.start();
        this._StudentService.GetRegisteredCoursesDetails(GlobalService.StudentID).
            subscribe(response => {
            if (response != null) {
                this.AllSemester = response.filter(x => x.UniqueSemester == 1);
                this.AllCoursesDetails = response;
            }
            this.ngxService.stop();
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
    ShowCourseDetails(val) {
        $("#tab_Course_CLOS").removeClass('active');
        $("#tab-Course-CLOS").removeClass('active');
        $("#tab_Assessment_Details").removeClass('active');
        $("#tab-Assessment-Details").removeClass('active');
        $("#tab_Course_CLOS").addClass('active');
        $("#tab-Course-CLOS").addClass('active');
        this.OfferedCourseID = 0;
        this.GetCourseCLOS = [];
        this.AssessmentDetails = [];
        this.CourseTitle = val.Title;
        this.OfferedCourseID = Number(val.OfferedCourseID);
        this._StudentService.GetCourseCLOSForStudent({ StudentID: GlobalService.StudentID, OfferedCourseID: Number(val.OfferedCourseID) }).
            subscribe(response => {
            if (response != null) {
                this.GetCourseCLOS = response;
                $("#Course_Details").modal('show');
            }
            this.ngxService.stop();
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
    GetCourseAssessmentDetailsForStudent() {
        this.ngxService.start();
        this.AssessmentDetails = [];
        this._StudentService.GetCourseAssessmentDetailsForStudent({ StudentID: GlobalService.StudentID, OfferedCourseID: Number(this.OfferedCourseID) }).
            subscribe(data => {
            if (data != null) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].QuestionObtainedMarks.includes(',')) {
                        this.AssessmentDetails.push({
                            "AssessmentTitle": data[i].AssessmentTitle,
                            "AssessmentTotalMarks": data[i].AssessmentMarks,
                            "AssessmentTotalObtainedMarks": this.CalculateTotalObtainedMarks(data[i].QuestionObtainedMarks),
                            "QuestionMarks": data[i].QuestionMarks.split(','),
                            "ObtainedMarks": data[i].QuestionObtainedMarks.split(','),
                            "QuestionNumber": data[i].QuestionNumber.split(','),
                            "Weightage": data[i].Weightage.split(','),
                            "CLOTitle": data[i].CLOTitle.split(','),
                            "IsMultiple": true,
                            "IsCourse": (data[i].CourseCategory == 1) ? true : false
                        });
                    }
                    else {
                        this.AssessmentDetails.push({
                            "AssessmentTitle": data[i].AssessmentTitle,
                            "AssessmentTotalMarks": data[i].AssessmentMarks,
                            "AssessmentTotalObtainedMarks": data[i].QuestionObtainedMarks,
                            "QuestionMarks": data[i].QuestionMarks,
                            "ObtainedMarks": data[i].QuestionObtainedMarks,
                            "QuestionNumber": data[i].QuestionNumber,
                            "Weightage": data[i].Weightage,
                            "CLOTitle": data[i].CLOTitle,
                            "IsMultiple": false,
                            "IsCourse": (data[i].CourseCategory == 1) ? true : false
                        });
                    }
                }
            }
            this.ngxService.stop();
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
    CalculateTotalObtainedMarks(Val) {
        let response = 0;
        for (var i = 0; i < Val.split(',').length; i++) {
            response += Number(Val.split(',')[i]);
        }
        return response;
    }
};
RegisteredCoursesComponent = __decorate([
    Component({
        selector: 'app-registered-courses',
        templateUrl: './registered-courses.component.html',
        styleUrls: ['./registered-courses.component.css']
    })
], RegisteredCoursesComponent);
export { RegisteredCoursesComponent };
//# sourceMappingURL=registered-courses.component.js.map