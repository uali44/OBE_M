import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
let ProfileComponent = class ProfileComponent {
    constructor(_CoursesSearchService, toastr, ngxService, _ReportsService, formBuilder, ProfileService, pagerService, msgForDashboard) {
        this._CoursesSearchService = _CoursesSearchService;
        this.toastr = toastr;
        this.ngxService = ngxService;
        this._ReportsService = _ReportsService;
        this.formBuilder = formBuilder;
        this.ProfileService = ProfileService;
        this.pagerService = pagerService;
        this.msgForDashboard = msgForDashboard;
        this.faculty = {
            FacultyMemberID: Number,
            phone: '',
            FacultyType: '',
            FacultyRole: '',
        };
        this.FacultyType = ['Permanent', 'Visiting', 'Adjunct'];
    }
    ngOnInit() {
        this.username = GlobalService.Name;
        this.faculty.FacultyMemberID = GlobalService.FacultyMember_ID;
    }
    addFaculty() {
        console.log(this.faculty);
        this.faculty.FacultyMemberID = GlobalService.FacultyMember_ID;
        this.ngxService.start();
        this.ProfileService.AddFacultyData(this.faculty).
            subscribe(data => {
            this.ngxService.stop();
            if (data) {
                this.toastr.success("CLOs added successfully", "Success");
                $("#addFacultyModal").modal("hide");
                // this.msgForDashboard.UpdateCourseDetailsCounts(GlobalService.TempFacultyMember_ID.toString());
            }
            else {
                this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
            }
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
        });
    }
};
ProfileComponent = __decorate([
    Component({
        selector: 'app-profile',
        templateUrl: './profile.component.html',
        styleUrls: ['./profile.component.css']
    })
], ProfileComponent);
export { ProfileComponent };
//# sourceMappingURL=profile.component.js.map