import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
let ExitSurveyFormEnableComponent = class ExitSurveyFormEnableComponent {
    constructor(_CoursesSearchService, toastr, ngxService, _SettingService) {
        this._CoursesSearchService = _CoursesSearchService;
        this.toastr = toastr;
        this.ngxService = ngxService;
        this._SettingService = _SettingService;
        this.Institutes = [];
        this.Department = [];
        this.Intake = [];
        this.Is_Permission_Institute = false;
        this.Is_Permission_Deaprtment = false;
        this.Is_Permission_Faculty = false;
        this.query = "";
        this.pager = {};
        this.pagesize = 50;
        this.dataset = [];
        this.Selected_Skill = "";
        this.Temp_Institute_ID = 0;
        this.Temp_Deaprtment_ID = 0;
        this.Is_Permission_Institute = GlobalService.Permissions.indexOf("Institute_Dropdown") >= 0 ? true : false;
        this.Is_Permission_Deaprtment = GlobalService.Permissions.indexOf("Department_Dropdown") >= 0 ? true : false;
        if (!this.Is_Permission_Institute) {
            this.Temp_Institute_ID = GlobalService.Institute_ID;
        }
        if (!this.Is_Permission_Deaprtment) {
            this.Temp_Deaprtment_ID = GlobalService.Deaprtment_ID;
        }
    }
    ngOnInit() {
        this.Exit_Summary = {};
        this.Get_Institutes();
    }
    Get_Institutes() {
        this.ngxService.start();
        this.Institutes = [];
        this._CoursesSearchService.Get_Institute().
            subscribe(response => {
            if (response != null) {
                if (this.Temp_Institute_ID != 0) {
                    this.Institutes = response.filter(x => x.InstituteID == this.Temp_Institute_ID);
                    this.Get_Department(this.Temp_Institute_ID);
                }
                else {
                    this.Institutes = response;
                }
            }
            this.ngxService.stop();
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
    Get_Department(val) {
        if (val == undefined || val == null || val == "")
            return;
        this.ngxService.start();
        this.Department = [];
        this._CoursesSearchService.Get_Department(Number(val)).
            subscribe(response => {
            if (response != null) {
                if (this.Temp_Deaprtment_ID != 0) {
                    this.Department = response.filter(x => x.DepartmentID == this.Temp_Deaprtment_ID);
                    this.Get_Intakes(this.Temp_Deaprtment_ID);
                }
                else {
                    this.Department = response;
                }
            }
            this.ngxService.stop();
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
    Get_Intakes(val) {
        if (val == undefined || val == null || val == "")
            return;
        this.ngxService.start();
        this.Intake = [];
        this._CoursesSearchService.Get_Intakes(Number(val)).
            subscribe(response => {
            if (response != null) {
                this.Intake = response;
            }
            this.ngxService.stop();
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
    EnableExitSurveyForSelctedIntake() {
        this.Exit_Summary = {};
        var IntakeID = $("#IntakeID").val();
        this.ngxService.start();
        this.pagesize = 50;
        this._SettingService.EnableExitSurveyForSelctedIntake(Number(IntakeID)).
            subscribe(response => {
            if (response) {
                this.toastr.success("Exit survey form is enabled successfully", "Success!");
            }
            this.ngxService.stop();
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
};
ExitSurveyFormEnableComponent = __decorate([
    Component({
        selector: 'app-exit-survey-form-enable',
        templateUrl: './exit-survey-form-enable.component.html',
        styleUrls: ['./exit-survey-form-enable.component.css']
    })
], ExitSurveyFormEnableComponent);
export { ExitSurveyFormEnableComponent };
//# sourceMappingURL=exit-survey-form-enable.component.js.map