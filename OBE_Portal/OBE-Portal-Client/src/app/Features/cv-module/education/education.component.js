import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { Validators } from '@angular/forms';
import Swal from 'sweetalert2';
let EducationComponent = class EducationComponent {
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
        this.educations = [];
        this.viewFile = new EventEmitter();
        this.tempData = [];
        this.selectedFile = null;
        this.fileError = '';
        this.compressedImage = null;
        this.selectedFileData = null;
        this.selectedFilePath = null;
        this.educationForm = this.formBuilder.group({
            FacultyMemberID: GlobalService.FacultyMember_ID,
            eduInstitute: ['', Validators.required],
            degree: ['', Validators.required],
            field: ['', Validators.required],
            year: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]],
            imageFile: [null],
        });
    }
    ngOnInit() {
        // this.getEduction();
    }
    getEduction() {
        const facultyMemberID = GlobalService.FacultyMember_ID;
        this.ProfileService.GetEducation(facultyMemberID).subscribe({
            next: (data) => {
                this.educations = data;
            },
            error: (err) => {
                console.error('Error fetching education data:', err);
            },
        });
    }
    addEducation() {
        /*  const educationData = this.educationForm.value;*/
        const educationData = this.tempData;
        this.ngxService.start();
        this.ProfileService.AddFacultyEducation(educationData).
            subscribe(data => {
            this.ngxService.stop();
            this.toastr.success("Education successfully", "Success");
            this.educationForm.reset();
            this.educationForm.controls['FacultyMemberID'].setValue(GlobalService.FacultyMember_ID);
            this.tempData = [];
            $("#addEducationModal").modal("hide");
            this.getEduction();
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
        });
    }
    add() {
        const payload = {
            FacultyMemberID: this.educationForm.value.FacultyMemberID,
            eduInstitute: this.educationForm.value.eduInstitute,
            degree: this.educationForm.value.degree,
            field: this.educationForm.value.field,
            year: this.educationForm.value.year,
            imageFile: this.selectedFileData, // Include file data
        };
        this.tempData.push(payload);
        this.educationForm.reset();
        this.educationForm.controls['imageFile'].setValue('');
        this.educationForm.controls['FacultyMemberID'].setValue(GlobalService.FacultyMember_ID);
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
    confirmDelete(eduID) {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this Education Data!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                this.ProfileService.DeleteEducation(eduID).subscribe(() => {
                    Swal.fire('Deleted!', 'Your Education Data has been deleted.', 'success');
                    this.getEduction();
                }, error => {
                    Swal.fire('Error!', 'Failed to delete Education Data.', 'error');
                });
            }
        });
    }
};
__decorate([
    Input()
], EducationComponent.prototype, "educations", void 0);
__decorate([
    Output()
], EducationComponent.prototype, "viewFile", void 0);
EducationComponent = __decorate([
    Component({
        selector: 'app-education',
        templateUrl: './education.component.html',
        styleUrls: ['./education.component.css']
    })
], EducationComponent);
export { EducationComponent };
//# sourceMappingURL=education.component.js.map