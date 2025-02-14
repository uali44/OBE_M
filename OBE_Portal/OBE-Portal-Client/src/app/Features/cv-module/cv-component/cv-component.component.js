import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { Validators } from '@angular/forms';
import Swal from 'sweetalert2';
let CvComponentComponent = class CvComponentComponent {
    constructor(_CoursesSearchService, toastr, ngxService, _ReportsService, formBuilder, ProfileService, pagerService, msgForDashboard, sanitizer) {
        this._CoursesSearchService = _CoursesSearchService;
        this.toastr = toastr;
        this.ngxService = ngxService;
        this._ReportsService = _ReportsService;
        this.formBuilder = formBuilder;
        this.ProfileService = ProfileService;
        this.pagerService = pagerService;
        this.msgForDashboard = msgForDashboard;
        this.sanitizer = sanitizer;
        this.activities = [];
        this.fields = [];
        this.selectedActivityId = null;
        this.selectedActivity = null;
        this.groupedActivities = [];
        this.groupedActivitiest = {}; // Grouped by ActivityType
        this.activityTypes = []; // Unique Activity Types
        this.Is_Permission_Search_Criteria = false;
        this.education = [];
        this.experience = [];
        this.filterYear = null;
        this.filteredActivities = [];
        this.Faculty = [];
        this.activitySub = [];
        this.tempData = [];
        this.selectedFile = null;
        this.fileError = '';
        this.compressedImage = null;
        this.selectedFileData = null;
        this.selectedFilePath = null;
        this.activityForm = this.formBuilder.group({
            activity: ['', Validators.required],
            imageFile: [null],
        });
        this.initForm();
        this.selectedTab = this.getActivityTypes()[0];
        this.Is_Permission_Search_Criteria = GlobalService.Permissions.indexOf("Search_Criteria_Main") >= 0 ? true : false;
    }
    ngOnInit() {
        this.facultyID = GlobalService.FacultyMember_ID;
        this.name = GlobalService.Name;
        this.loaddata();
        this.groupActivitiesByType();
        this.activityTypes = this.getActivityTypes();
    }
    getActivityTypes() {
        const activityTypes = this.activities.map(activity => activity.ActivityType);
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
            this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
        });
    }
    onActivityChange(val) {
        this.selectedActivityId = val;
        Object.keys(this.activityForm.controls).forEach(key => {
            if (key !== 'activity' && key !== 'imageFile') {
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
            // Dynamically add controls to the form
            this.fields.forEach((field) => {
                this.activityForm.addControl(this.sanitizeType(field.subDetail), this.formBuilder.control('', Validators.required));
            });
        }, (error) => {
            this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
        });
    }
    onSubmit() {
        const activityData = this.tempData;
        this.ProfileService.SaveActivity(activityData).subscribe((response) => {
            if (response) {
                this.toastr.success('Activity saved successfully.');
                this.activityForm.reset();
                $("#dynamicModal").modal("hide");
                this.loadActivities();
            }
            else {
                this.toastr.error('Failed to save activity.');
            }
        });
    }
    add() {
        const activityData = {
            FacultyID: this.facultyID,
            ActivityID: this.selectedActivityId,
            imageFile: this.selectedFileData,
            Details: this.fields.map((field) => ({
                DetailName: field.subDetail,
                DetailValue: this.activityForm.value[this.sanitizeType(field.subDetail)],
            })),
        };
        this.tempData.push(activityData);
        this.activityForm.reset();
        this.activityForm.controls['activity'].setValue(this.selectedActivityId);
    }
    deleteEntry(index) {
        this.tempData.splice(index, 1);
    }
    onFileSelected(event) {
        const input = event.target; // Cast to HTMLInputElement
        const file = input.files[0]; // Use optional chaining to check for files
        // Validate file type
        const validTypes = ['image/jpeg', 'image/png', 'application/pdf'];
        if (!validTypes.includes(file.type)) {
            this.fileError = 'Invalid file type. Please upload a JPEG, PNG, or PDF.';
            return;
        }
        // Validate file size
        const maxSize = 1024 * 1024; // 1 MB
        if (file.size > maxSize) {
            this.fileError = 'File size exceeds the 1 MB limit.';
            return;
        }
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                // Clean Base64 string
                const base64String = reader.result.split(',')[1]; // Remove prefix (e.g., "data:image/jpeg;base64,")
                this.selectedFileData = {
                    fileName: file.name,
                    fileType: file.type,
                    fileContent: base64String, // Clean Base64 string without prefix
                };
            };
            reader.readAsDataURL(file);
        }
        this.selectedFile = file;
        this.fileError = null;
    }
    openFileViewer(filePath) {
        // Set the file path to display in the modal
        this.selectedFilePath = this.sanitizer.bypassSecurityTrustResourceUrl(filePath);
        // Check the file type based on the extension or MIME type
        if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg') || filePath.endsWith('.png')) {
            this.selectedFileType = 'image';
        }
        else if (filePath.endsWith('.pdf')) {
            this.selectedFileType = 'pdf';
        }
        else {
            this.selectedFileType = 'other'; // Handle other file types as needed
        }
        $("#fileViewerModal").modal("show");
    }
    extractFileName(filePath) {
        const parts = filePath.split('/');
        return parts[parts.length - 1]; // Get the last part, which is the file name
    }
    // Helper method to check if the file is an image
    isImage(fileType) {
        return fileType === 'image';
    }
    // Helper method to check if the file is a PDF
    isPDF(fileType) {
        return fileType === 'pdf';
    }
    groupExists(gactivity) {
        return this.groupedActivities.some(activity => activity.ActivityName === gactivity);
    }
    loaddata() {
        this.facultyID = GlobalService.FacultyMember_ID;
        this.ProfileService.getAllData(this.facultyID).subscribe((response) => {
            this.education = response.FacultyEducation;
            this.groupedActivities = response.ActivityDetails;
            this.experience = response.facultyExperience;
            this.activities = response.ActivityList;
            this.Faculty = response.FacultyDetails;
            this.activitySub = response.ActivitySubDetail;
            this.setActiveTab(this.activities[0].ActivityType);
            $("#" + this.sanitizeType(this.activities[0].ActivityType) + "0").class = 'active';
            $("#" + this.sanitizeType(this.activities[0].ActivityType) + "0").active = true;
        });
    }
    filterdDetail(id) {
        return this.activitySub.filter(detail => detail.ActivityID === id);
    }
    loadActivities() {
        this.facultyID = GlobalService.FacultyMember_ID;
        this.ProfileService.GetFacultyActivity(this.facultyID).subscribe((response) => {
            this.groupedActivities = response;
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
                    this.loadActivities();
                }, error => {
                    Swal.fire('Error!', 'Failed to delete activity.', 'error');
                });
            }
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