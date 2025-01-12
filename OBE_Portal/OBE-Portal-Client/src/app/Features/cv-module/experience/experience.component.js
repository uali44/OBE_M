import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { Validators } from '@angular/forms';
let ExperienceComponent = class ExperienceComponent {
    constructor(_CoursesSearchService, toastr, ngxService, _ReportsService, formBuilder, ProfileService, pagerService, msgForDashboard) {
        this._CoursesSearchService = _CoursesSearchService;
        this.toastr = toastr;
        this.ngxService = ngxService;
        this._ReportsService = _ReportsService;
        this.formBuilder = formBuilder;
        this.ProfileService = ProfileService;
        this.pagerService = pagerService;
        this.msgForDashboard = msgForDashboard;
        this.experienceData = [];
        this.experienceForm = this.formBuilder.group({
            FacultyMemberID: GlobalService.FacultyMember_ID,
            Position: ['', Validators.required],
            Company: ['', Validators.required],
            StartDate: ['', Validators.required],
            EndDate: ['']
        });
    }
    ngOnInit() {
        this.getExperience();
    }
    getExperience() {
        const facultyMemberID = GlobalService.FacultyMember_ID; // Replace with the actual FacultyMemberID
        this.ProfileService.GetExperience(facultyMemberID).subscribe({
            next: (data) => {
                this.experienceData = data;
                console.log("Education data" + this.experienceData);
            },
            error: (err) => {
                console.error('Error fetching education data:', err);
            },
        });
    }
    addExperience() {
        if (this.experienceForm.valid) {
            const experienceData = this.experienceForm.value;
            console.log('Education Data:', experienceData);
            // Call your service to save the data
            this.ngxService.start();
            this.ProfileService.AddFacultyExperience([experienceData]).
                subscribe(data => {
                this.ngxService.stop();
                /* if (data) {*/
                this.toastr.success("Experience added successfully", "Success");
                $("#addFacultyExpereince").modal("hide");
                // this.msgForDashboard.UpdateCourseDetailsCounts(GlobalService.TempFacultyMember_ID.toString());
                //}
                //else {
                //  console.log(data);
                //  this.toastr.error("Error occured while processing your request.", "Error");
                //}
            }, error => {
                this.ngxService.stop();
                this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
            });
            this.experienceForm.reset(); // Reset the form after submission
        }
    }
};
ExperienceComponent = __decorate([
    Component({
        selector: 'app-experience',
        templateUrl: './experience.component.html',
        styleUrls: ['./experience.component.css']
    })
], ExperienceComponent);
export { ExperienceComponent };
//# sourceMappingURL=experience.component.js.map