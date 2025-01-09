import { __decorate } from "tslib";
// cv-component.component.ts
import { Component } from '@angular/core';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { Validators } from '@angular/forms';
let CvComponentComponent = class CvComponentComponent {
    constructor(_CoursesSearchService, toastr, ngxService, _ReportsService, formBuilder, ProfileService, pagerService, msgForDashboard) {
        this._CoursesSearchService = _CoursesSearchService;
        this.toastr = toastr;
        this.ngxService = ngxService;
        this._ReportsService = _ReportsService;
        this.formBuilder = formBuilder;
        this.ProfileService = ProfileService;
        this.pagerService = pagerService;
        this.msgForDashboard = msgForDashboard;
        this.activities = [];
        this.fields = [];
        this.selectedActivityId = null;
        this.groupedActivities = [];
        this.activityForm = this.formBuilder.group({
            activity: ['', Validators.required]
        });
        this.initForm();
    }
    ngOnInit() {
        this.name = GlobalService.Name;
        this.fetchActivities();
        this.loadActivities(GlobalService.FacultyMember_ID);
    }
    initForm() {
    }
    fetchActivities() {
        this.ProfileService.GetActivities().subscribe((data) => {
            this.activities = data;
        }, (error) => {
            console.error('Error fetching activities:', error);
        });
    }
    onActivityChange(val) {
        this.selectedActivityId = val;
        Object.keys(this.activityForm.controls).forEach(key => {
            if (key !== 'activity') {
                this.activityForm.removeControl(key);
            }
        });
        this.fetchFields(val);
        this.activityForm.controls['activity'].setValue(this.selectedActivityId);
    }
    fetchFields(val) {
        const requestdata = { ActivityID: val };
        this.ProfileService.GetActivitySubDetails(requestdata).subscribe((data) => {
            this.fields = data;
            console.log(this.fields);
            // Dynamically add controls to the form
            this.fields.forEach((field) => {
                this.activityForm.addControl(field.subDetail, this.formBuilder.control('', Validators.required));
            });
        }, (error) => {
            console.error('Error fetching fields:', error);
        });
    }
    onSubmit() {
        if (this.activityForm.invalid) {
            return;
        }
        const activityData = {
            FacultyID: GlobalService.FacultyMember_ID,
            ActivityID: this.selectedActivityId,
            Details: this.fields.map((field) => ({
                DetailName: field.subDetail,
                DetailValue: this.activityForm.value[field.subDetail],
            })),
        };
        this.ProfileService.SaveActivity(activityData).subscribe((response) => {
            if (response) {
                this.toastr.success('Activity saved successfully.');
                this.activityForm.reset();
                this.loadActivities(GlobalService.FacultyMember_ID);
            }
            else {
                this.toastr.error('Failed to save activity.');
            }
        });
    }
    loadActivities(facultyId) {
        this.ProfileService.GetFacultyActivity(facultyId).subscribe((response) => {
            this.groupedActivities = response;
            console.log(response);
            console.log(this.groupedActivities);
        });
    }
    groupDataByActivity(data) {
        const grouped = data.reduce((result, current) => {
            const activityName = current.ActivityName;
            // If activity doesn't exist in the result, initialize it
            if (!result[activityName]) {
                result[activityName] = {
                    ActivityName: activityName,
                    Details: [],
                };
            }
            // Find the existing detail entry by DetailID
            let detailEntry = result[activityName].Details.find((d) => d.DetailID === current.DetailID);
            // If the detail entry doesn't exist, create a new one
            if (!detailEntry) {
                detailEntry = {
                    DetailID: current.DetailID,
                    SubDetails: {},
                };
                result[activityName].Details.push(detailEntry);
            }
            // Add the sub-detail name and value
            detailEntry.SubDetails[current.DetailName] = current.DetailValue;
            return result;
        }, {});
        // Convert the grouped object to an array for iteration
        return Object.values(grouped);
    }
    /**
     * Extracts unique sub-detail names (headers) for a given activity.
     * @param activity Activity object.
     * @returns Array of unique sub-detail names.
     */
    getDetailNames(activity) {
        if (!activity.Details || activity.Details.length === 0) {
            return [];
        }
        // Extract keys (DetailNames) from the first SubDetails object
        return Object.keys(activity.Details[0].SubDetails);
    }
};
CvComponentComponent = __decorate([
    Component({
        selector: 'app-cv-component',
        templateUrl: './cv-component.component.html',
        styleUrls: ['./cv-component.component.css']
    })
], CvComponentComponent);
export { CvComponentComponent };
//# sourceMappingURL=cv-component.component.js.map