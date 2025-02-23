import { __decorate } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { GlobalService } from '../../Services/Global/global.service';
let SearchComponent = class SearchComponent {
    constructor(_CoursesSearchService, toastr, ngxService) {
        this._CoursesSearchService = _CoursesSearchService;
        this.toastr = toastr;
        this.ngxService = ngxService;
        this.searchEmit = new EventEmitter();
        this.Institutes = [];
        this.Department = [];
        this.Intake = [];
        this.Programs = [];
        this.Is_Permission_Institute = false;
        this.Is_Permission_Deaprtment = false;
        this.Is_Permission_Faculty = false;
        this.searchCriteria = {};
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
    ngOnInit() {
        this.Get_Institutes();
    }
    Get_Institutes() {
        this.searchCriteria = {};
        this.searchCriteria.instituteId = "";
        this.searchCriteria.departmentId = "";
        this.searchCriteria.programId = "";
        this.searchCriteria.admissionOpenProgramId = "";
        this.ngxService.start();
        this.Institutes = [];
        this._CoursesSearchService.Get_Institute().
            subscribe(response => {
            try {
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
            }
            catch (e) {
                this.ngxService.stop();
                this.toastr.error("Internal server error occured while processing your request", "Error!");
            }
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
    Get_Department(val) {
        this.searchCriteria.instituteId = Number(val);
        if (val == undefined || val == null || val == "")
            return;
        this.ngxService.start();
        this.Department = [];
        this._CoursesSearchService.Get_Department(Number(val)).
            subscribe(response => {
            try {
                if (response != null) {
                    if (this.Temp_Deaprtment_ID != 0) {
                        this.Department = response.filter(x => x.DepartmentID == this.Temp_Deaprtment_ID);
                    }
                    else {
                        this.Department = response;
                    }
                }
                this.ngxService.stop();
            }
            catch (e) {
                this.ngxService.stop();
                this.toastr.error("Internal server error occured while processing your request", "Error!");
            }
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
    Get_Programs(val) {
        this.searchCriteria.departmentId = Number(val);
        if (val == undefined || val == null || val == "")
            return;
        this.ngxService.start();
        this.Programs = [];
        this._CoursesSearchService.GetDepartmentPrograms(Number(val)).
            subscribe(response => {
            try {
                if (response != null) {
                    this.Programs = response;
                }
                this.ngxService.stop();
            }
            catch (e) {
                this.ngxService.stop();
                this.toastr.error("Internal server error occured while processing your request", "Error!");
            }
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
    Get_Program_Intakes(programId) {
        this.ngxService.start();
        this.Intake = [];
        this.searchCriteria.programId = Number(programId);
        this._CoursesSearchService.GetProgramIntakes(Number(programId)).
            subscribe(response => {
            try {
                if (response != null) {
                    this.Intake = response;
                }
                this.ngxService.stop();
            }
            catch (e) {
                this.ngxService.stop();
                this.toastr.error("Internal server error occured while processing your request", "Error!");
            }
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
    Set_Intakes(val) {
        this.searchCriteria.admissionOpenProgramId = Number(val);
    }
    Emit_Data() {
        this.searchEmit.emit(JSON.stringify(this.searchCriteria));
    }
};
__decorate([
    Output()
], SearchComponent.prototype, "searchEmit", void 0);
SearchComponent = __decorate([
    Component({
        selector: 'app-search',
        templateUrl: './search.component.html',
        styleUrls: ['./search.component.css']
    })
], SearchComponent);
export { SearchComponent };
//# sourceMappingURL=search.component.js.map