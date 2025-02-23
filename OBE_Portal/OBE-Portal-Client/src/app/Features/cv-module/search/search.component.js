import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
let SearchComponent = class SearchComponent {
    constructor(_CoursesSearchService, toastr, ngxService, _InterconnectedService) {
        this._CoursesSearchService = _CoursesSearchService;
        this.toastr = toastr;
        this.ngxService = ngxService;
        this._InterconnectedService = _InterconnectedService;
        this.Institutes = [];
        this.Department = [];
        this.Faculty = [];
        this.Is_Permission_Institute = false;
        this.Is_Permission_Deaprtment = false;
        this.Is_Permission_Faculty = false;
    }
    ngOnInit() {
        this.Temp_Institute_ID = 0;
        this.Temp_Deaprtment_ID = 0;
        this.Get_Institutes();
    }
    Get_Institutes() {
        this.FacultyMemberID = 0;
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
                    this.Get_FacultyMembers(this.Temp_Deaprtment_ID);
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
    Get_FacultyMembers(val) {
        this.FacultyMemberID = 0;
        if (val == undefined || val == null || val == "")
            return;
        this.ngxService.start();
        this.Faculty = [];
        this._CoursesSearchService.Get_FacultyMembers_For_Selected_Department_And_Semester({
            "Department_ID": Number(val), "Semester_ID": Number(GlobalService.Semester_ID)
        }).
            subscribe(response => {
            if (response != null) {
                this.Faculty = response;
            }
            this.ngxService.stop();
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
    GetAssignedCourses() {
        GlobalService.TempFacultyMember_ID = this.FacultyMemberID;
    }
};
SearchComponent = __decorate([
    Component({
        selector: 'app-search',
        templateUrl: './search.component.html',
        styleUrls: ['./search.component.css']
    })
], SearchComponent);
export { SearchComponent };
//# sourceMappingURL=search.component.js.map