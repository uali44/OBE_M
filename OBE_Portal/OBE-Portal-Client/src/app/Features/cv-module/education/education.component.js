import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { Validators } from '@angular/forms';
let EducationComponent = class EducationComponent {
    constructor(_CoursesSearchService, toastr, ngxService, _ReportsService, formBuilder, ProfileService, pagerService, msgForDashboard) {
        this._CoursesSearchService = _CoursesSearchService;
        this.toastr = toastr;
        this.ngxService = ngxService;
        this._ReportsService = _ReportsService;
        this.formBuilder = formBuilder;
        this.ProfileService = ProfileService;
        this.pagerService = pagerService;
        this.msgForDashboard = msgForDashboard;
        this.educationData = [];
        this.educationForm = this.formBuilder.group({
            FacultyMemberID: GlobalService.FacultyMember_ID,
            eduInstitute: ['', Validators.required],
            degree: ['', Validators.required],
            field: ['', Validators.required],
            year: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]]
        });
    }
    ngOnInit() {
        this.getEduction();
    }
    getEduction() {
        const facultyMemberID = GlobalService.FacultyMember_ID;
        this.ProfileService.GetEducation(facultyMemberID).subscribe({
            next: (data) => {
                this.educationData = data;
                console.log("Education data" + this.educationData);
            },
            error: (err) => {
                console.error('Error fetching education data:', err);
            },
        });
    }
    addEducation() {
        if (this.educationForm.valid) {
            const educationData = this.educationForm.value;
            console.log('Education Data:', educationData);
            // Call your service to save the data
            this.ngxService.start();
            this.ProfileService.AddFacultyEducation([educationData]).
                subscribe(data => {
                this.ngxService.stop();
                this.toastr.success("Education successfully", "Success");
                $("#addFacultyEducation").modal("hide");
            }, error => {
                this.ngxService.stop();
                this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
            });
            this.educationForm.reset(); // Reset the form after submission
        }
    }
};
EducationComponent = __decorate([
    Component({
        selector: 'app-education',
        templateUrl: './education.component.html',
        styleUrls: ['./education.component.css']
    })
], EducationComponent);
export { EducationComponent };
//# sourceMappingURL=education.component.js.map