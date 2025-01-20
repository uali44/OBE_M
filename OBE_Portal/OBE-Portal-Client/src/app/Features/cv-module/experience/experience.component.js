import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { Validators } from '@angular/forms';
import Swal from 'sweetalert2';
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
        this.currentlyWorking = false;
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
        const facultyMemberID = GlobalService.FacultyMember_ID;
        this.ProfileService.GetExperience(facultyMemberID).subscribe({
            next: (data) => {
                this.experienceData = data;
                console.log("Exp data" + this.experienceData);
            },
            error: (err) => {
                console.error('Error fetching education data:', err);
            },
        });
    }
    addExperience() {
        if (this.experienceForm.valid) {
            const experienceData = this.experienceForm.value;
            experienceData.FacultyMemberID = GlobalService.FacultyMember_ID;
            console.log('Experience Data:', experienceData);
            if (this.currentlyWorking) {
                experienceData.EndDate = null;
            }
            this.ngxService.start();
            this.ProfileService.AddFacultyExperience([experienceData]).
                subscribe(data => {
                this.ngxService.stop();
                this.toastr.success("Experience added successfully", "Success");
                $("#addExperienceModal").modal("hide");
                this.getExperience();
            }, error => {
                this.ngxService.stop();
                this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
            });
            this.experienceForm.reset();
        }
        else {
            this.toastr.error("Please Enter All Fields", "Error");
        }
    }
    onCurrentlyWorkingChange(event) {
        var _a, _b, _c;
        this.currentlyWorking = event.target.checked;
        if (this.currentlyWorking) {
            (_a = this.experienceForm.get('EndDate')) === null || _a === void 0 ? void 0 : _a.setValue(null); // Clear EndDate
            (_b = this.experienceForm.get('EndDate')) === null || _b === void 0 ? void 0 : _b.disable(); // Disable EndDate input
        }
        else {
            (_c = this.experienceForm.get('EndDate')) === null || _c === void 0 ? void 0 : _c.enable(); // Enable EndDate input
        }
    }
    confirmDelete(expID) {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this Experience Data!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                this.ProfileService.DeleteExperience(expID).subscribe(() => {
                    Swal.fire('Deleted!', 'Your Experience Data has been deleted.', 'success');
                    this.getExperience();
                }, error => {
                    Swal.fire('Error!', 'Failed to delete Experience Data.', 'error');
                });
            }
        });
        //if (confirm('Are you sure you want to delete this experience?')) {
        //  this.ProfileService.DeleteExperience(expID).subscribe({
        //    next: (response) => {
        //      console.log('Delete Response:', response);
        //      this.toastr.success("Experience deleted successfully.", "Success");
        //      this.getExperience(); 
        //    },
        //    error: (err) => {
        //      console.error('Error deleting experience:', err);
        //      this.toastr.error("Failed to delete experience.", "Failed");
        //    },
        //  });
        //}
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