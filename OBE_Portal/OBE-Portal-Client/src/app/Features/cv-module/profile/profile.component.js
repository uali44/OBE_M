import { __decorate } from "tslib";
import { Component } from '@angular/core';
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
        };
        //facultydata: any = {
        //  FacultyMemberID :0,
        //  Name :"",
        //  Email :"" ,
        //  Phone:"",
        //  FacultyType :"",
        //  FacultyRole :"",
        //};
        this.facultydata = null;
        this.FacultyType = ['Permanent/Participating', 'Visiting/Supporting'];
        this.FacultyRole = ['SA', 'PA', 'SP', 'IP', 'Additional'];
    }
    ngOnInit() {
        this.getFaculty();
        this.username = GlobalService.Name;
        this.faculty.FacultyMemberID = GlobalService.FacultyMember_ID;
        this.faculty.phone = this.facultydata.phone;
    }
    openFacultyModal() {
        // Set values for the modal
        this.faculty = {
            phone: this.facultydata[0].Phone,
            FacultyType: this.facultydata[0].FacultyType,
            FacultyRole: this.facultydata[0].FacultyRole,
        };
        // Open the modal (using jQuery for simplicity, you can replace with Angular modal handling)
        $('#addFacultyModal').modal('show');
    }
    addFaculty() {
        console.log(this.faculty);
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
        console.log(this.faculty);
        this.ngxService.start();
        this.ProfileService.GetFacultyDetails(GlobalService.FacultyMember_ID).
            subscribe(data => {
            this.ngxService.stop();
            this.facultydata = data;
            this.email = data.Email;
            console.log(this.facultydata);
            console.log(this.facultydata[0].Email);
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