import { __decorate } from "tslib";
// cv-component.component.ts
import { Component } from '@angular/core';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { Validators } from '@angular/forms';
import Swal from 'sweetalert2';
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
        this.selectedActivity = null;
        this.groupedActivities = [];
        this.groupedActivitiest = {}; // Grouped by ActivityType
        this.activityTypes = []; // Unique Activity Types
        this.Is_Permission_Search_Criteria = false;
        this.activityForm = this.formBuilder.group({
            activity: ['', Validators.required]
        });
        this.initForm();
        this.selectedTab = this.getActivityTypes()[0];
        this.Is_Permission_Search_Criteria = GlobalService.Permissions.indexOf("Search_Criteria_Main") >= 0 ? true : false;
    }
    ngOnInit() {
        if (GlobalService.TempFacultyMember_ID == null) {
            this.facultyID = GlobalService.FacultyMember_ID;
        }
        else {
            this.facultyID = GlobalService.TempFacultyMember_ID;
        }
        this.name = GlobalService.Name;
        this.fetchActivities();
        this.loadActivities(this.facultyID);
        this.groupActivitiesByType();
        this.activityTypes = this.getActivityTypes();
    }
    getActivityTypes() {
        const activityTypes = this.groupedActivities.map(activity => activity.ActivityType);
        const uniqueTypes = [...new Set(activityTypes)];
        return uniqueTypes;
    }
    sanitizeType(type) {
        return type.replace(/\s+/g, '_');
    }
    groupActivitiesByType() {
        this.groupedActivitiest = this.groupedActivities.reduce((acc, activity) => {
            const type = activity.ActivityType;
            if (!acc[type]) {
                acc[type] = [];
            }
            acc[type].push(activity);
            return acc;
        }, {});
    }
    setActiveTab(type) {
        this.selectedTab = type;
    }
    //getActivityTypes(): string[] {
    //  return Object.keys(this.groupedActivitiest);
    //}
    getDetailKeys(activity) {
        var _a, _b;
        return ((_b = (_a = activity.Details) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.SubDetails) ? Object.keys(activity.Details[0].SubDetails) : [];
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
                this.activityForm.addControl(this.sanitizeType(field.subDetail), this.formBuilder.control('', Validators.required));
            });
        }, (error) => {
            console.error('Error fetching fields:', error);
        });
    }
    onSubmit() {
        if (this.activityForm.invalid) {
            this.toastr.error("Please Enter All Fields", "Error");
            return;
        }
        const activityData = {
            FacultyID: this.facultyID,
            ActivityID: this.selectedActivityId,
            Details: this.fields.map((field) => ({
                DetailName: field.subDetail,
                DetailValue: this.activityForm.value[this.sanitizeType(field.subDetail)],
            })),
        };
        this.ProfileService.SaveActivity(activityData).subscribe((response) => {
            if (response) {
                this.toastr.success('Activity saved successfully.');
                this.activityForm.reset();
                $("#dynamicModal").modal("hide");
                this.loadActivities(this.facultyID);
            }
            else {
                this.toastr.error('Failed to save activity.');
            }
        });
    }
    loadActivities(facultyId) {
        this.ProfileService.GetFacultyActivity(facultyId).subscribe((response) => {
            this.groupedActivities = response;
            //console.log(response);
            //console.log(this.groupedActivities);
            this.selectedTab = this.groupedActivities[0].ActivityType;
        });
    }
    deleteActivity(detailID) {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this activity!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                this.ProfileService.DeleteActivity(detailID).subscribe(() => {
                    Swal.fire('Deleted!', 'Your activity has been deleted.', 'success');
                    this.loadActivities(this.facultyID);
                }, error => {
                    Swal.fire('Error!', 'Failed to delete activity.', 'error');
                });
            }
        });
        //if (confirm('Are you sure you want to delete this experience?')) {
        //  this.ProfileService.DeleteActivity(detailID).subscribe({
        //    next: (response) => {
        //      console.log('Delete Response:', response);
        //      this.toastr.success("Acivity deleted successfully.", "Success");
        //      this.loadActivities(GlobalService.FacultyMember_ID);
        //    },
        //    error: (err) => {
        //      console.error('Error deleting experience:', err);
        //      this.toastr.error("Failed to delete Activity.", "Failed");
        //    },
        //  });
        // }
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
    openModal(activityN) {
        var _a;
        this.selectedActivity = this.activities.find(activity => activity.ActivityName === activityN);
        (_a = this.activityForm.get('activity')) === null || _a === void 0 ? void 0 : _a.setValue(this.selectedActivity.ActivityID, { emitEvent: true });
        this.onActivityChange(this.selectedActivity.ActivityID);
        $('#dynamicModal').modal('show');
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