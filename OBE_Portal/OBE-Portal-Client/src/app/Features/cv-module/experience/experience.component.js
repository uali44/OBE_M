import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { Validators } from '@angular/forms';
import Swal from 'sweetalert2';
let ExperienceComponent = class ExperienceComponent {
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
        this.exper = [];
        this.viewFile = new EventEmitter();
        this.tempData = [];
        this.experienceData = this.exper;
        this.currentlyWorking = false;
        this.selectedFile = null;
        this.fileError = '';
        this.compressedImage = null;
        this.selectedFileData = null;
        this.selectedFilePath = null;
        this.experienceForm = this.formBuilder.group({
            FacultyMemberID: GlobalService.FacultyMember_ID,
            Position: ['', Validators.required],
            Company: ['', Validators.required],
            StartDate: ['', Validators.required],
            EndDate: [''],
            imageFile: null,
        });
    }
    ngOnInit() {
        // this.getExperience();
        this.experienceData = this.exper;
    }
    getExperience() {
        const facultyMemberID = GlobalService.FacultyMember_ID;
        this.ProfileService.GetExperience(facultyMemberID).subscribe({
            next: (data) => {
                this.exper = data;
            },
            error: (err) => {
                this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
            },
        });
    }
    addExperience() {
        const experienceData = this.tempData;
        this.ngxService.start();
        this.ProfileService.AddFacultyExperience(experienceData).
            subscribe(data => {
            this.ngxService.stop();
            this.toastr.success("Experience added successfully", "Success");
            this.experienceForm.reset();
            this.experienceForm.controls['FacultyMemberID'].setValue(GlobalService.FacultyMember_ID);
            this.tempData = [];
            $("#addExperienceModal").modal("hide");
            this.getExperience();
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
        });
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
    add() {
        const payload = {
            FacultyMemberID: GlobalService.FacultyMember_ID,
            Position: this.experienceForm.value.Position,
            Company: this.experienceForm.value.Company,
            StartDate: this.experienceForm.value.StartDate,
            EndDate: this.experienceForm.value.EndDate,
            ImageFile: this.selectedFileData,
        };
        this.tempData.push(payload);
        this.experienceForm.reset();
        this.experienceForm.controls['FacultyMemberID'].setValue(GlobalService.FacultyMember_ID);
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
        this.viewFile.emit({ fileUrl: filePath });
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
    }
};
__decorate([
    Input()
], ExperienceComponent.prototype, "exper", void 0);
__decorate([
    Output()
], ExperienceComponent.prototype, "viewFile", void 0);
ExperienceComponent = __decorate([
    Component({
        selector: 'app-experience',
        templateUrl: './experience.component.html',
        styleUrls: ['./experience.component.css']
    })
], ExperienceComponent);
export { ExperienceComponent };
//# sourceMappingURL=experience.component.js.map