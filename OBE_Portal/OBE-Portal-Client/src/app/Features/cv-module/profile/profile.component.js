import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
let ProfileComponent = class ProfileComponent {
    constructor(_CoursesSearchService, toastr, ngxService, _ReportsService, formBuilder, ProfileService, pagerService, msgForDashboard, cdr) {
        this._CoursesSearchService = _CoursesSearchService;
        this.toastr = toastr;
        this.ngxService = ngxService;
        this._ReportsService = _ReportsService;
        this.formBuilder = formBuilder;
        this.ProfileService = ProfileService;
        this.pagerService = pagerService;
        this.msgForDashboard = msgForDashboard;
        this.cdr = cdr;
        this.faculty = {
            FacultyMemberID: 0,
            phone: '',
            FacultyType: '',
            FacultyRole: '',
            DriveLink: '',
        };
        this.FacultyType = ['Permanent/Participating', 'Visiting/Supporting'];
        this.FacultyRole = ['SA', 'PA', 'SP', 'IP', 'Additional'];
    }
    ngOnInit() {
        //this.getFaculty();
        this.username = this.facultydata.Name;
        this.faculty.FacultyMemberID = GlobalService.FacultyMember_ID;
        this.faculty.phone = this.facultydata.phone;
    }
    openFacultyModal() {
        var _a, _b, _c;
        // Set values for the modal
        this.faculty = {
            phone: ((_a = this.facultydata[0]) === null || _a === void 0 ? void 0 : _a.Phone) || '',
            FacultyType: ((_b = this.facultydata[0]) === null || _b === void 0 ? void 0 : _b.FacultyType) || '',
            FacultyRole: ((_c = this.facultydata[0]) === null || _c === void 0 ? void 0 : _c.FacultyRole) || '',
        };
        $('#addFacultyModal').modal('show');
    }
    addFaculty() {
        this.faculty.FacultyMemberID = GlobalService.FacultyMember_ID;
        this.ngxService.start();
        this.ProfileService.AddFacultyData([this.faculty]).
            subscribe(data => {
            this.ngxService.stop();
            this.toastr.success("Profile Updated successfully", "Success");
            $("#addFacultyModal").modal("hide");
            this.getFaculty();
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
        });
    }
    getFaculty() {
        this.facultyId = GlobalService.FacultyMember_ID;
        this.ngxService.start();
        this.ProfileService.GetFacultyDetails(this.facultyId).
            subscribe(data => {
            this.ngxService.stop();
            this.facultydata = data;
            this.email = (data === null || data === void 0 ? void 0 : data.Email) || '';
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
        });
    }
};
__decorate([
    Input()
], ProfileComponent.prototype, "facultydata", void 0);
ProfileComponent = __decorate([
    Component({
        selector: 'app-profile',
        templateUrl: './profile.component.html',
        styleUrls: ['./profile.component.css']
    })
], ProfileComponent);
export { ProfileComponent };
//# sourceMappingURL=profile.component.js.map