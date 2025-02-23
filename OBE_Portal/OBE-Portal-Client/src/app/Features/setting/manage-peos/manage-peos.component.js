import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FilterPipe } from 'src/app/Shared/Pipe/filter';
import { HighlightPipe } from 'src/app/Shared/Pipe/highlight.pipe';
import { GlobalService } from 'src/app/Shared/Services/Global/global.service';
import { PagerService } from 'src/app/Shared/Services/Global/Pager';
import Swal from 'sweetalert2';
let ManagePeosComponent = class ManagePeosComponent {
    constructor(_CoursesSearchService, toastr, ngxService, _SettingService, formBuilder, pagerService) {
        this._CoursesSearchService = _CoursesSearchService;
        this.toastr = toastr;
        this.ngxService = ngxService;
        this._SettingService = _SettingService;
        this.formBuilder = formBuilder;
        this.pagerService = pagerService;
        this.Institutes = [];
        this.Department = [];
        this.DepartmentTo = [];
        this.Intake = [];
        this.IntakeTo = [];
        this.Programs = [];
        this.ProgramsTo = [];
        this.PEOsInformationLst = [];
        this.Is_Permission_Institute = false;
        this.Is_Permission_Deaprtment = false;
        this.Is_Permission_Faculty = false;
        this.query = "";
        this.pager = {};
        this.pagesize = 50;
        this.dataset = [];
        this.departmentPLOs = [];
        this.submitted = false;
        this.addedPEOsTemp = [];
        this.admissionOpenProgramId = 0;
        this.programId = 0;
        this.All_Added_PEOS = [];
        this.PEO_Added_Count = 1;
        this.Added_Intake_PEOs = [];
        this.Temp_Institute_ID = 0;
        this.Temp_Deaprtment_ID = 0;
        this.Is_Permission_Institute = GlobalService.Permissions.indexOf("Institute_Dropdown") >= 0 ? true : false;
        this.Is_Permission_Deaprtment = GlobalService.Permissions.indexOf("Department_Dropdown") >= 0 ? true : false;
        this.Is_Permission_Faculty = GlobalService.Permissions.indexOf("Faculty_Dropdown") >= 0 ? true : false;
        if (!this.Is_Permission_Institute) {
            this.Temp_Institute_ID = GlobalService.Institute_ID;
        }
        if (!this.Is_Permission_Deaprtment) {
            this.Temp_Deaprtment_ID = GlobalService.Deaprtment_ID;
        }
    }
    ngOnInit() {
        var _a;
        this.PEOSForm = this.formBuilder.group({
            intakeOption: ['0'],
            instituteId: ['', [Validators.required]],
            departmentId: ['', [Validators.required]],
            programId: ['', [Validators.required]],
            admissionOpenProgramIdFrom: ['', [Validators.required]],
            admissionOpenProgramIdTo: [''],
            peoTitle: ['', [Validators.required]],
            description: ['', [Validators.required]]
        });
        (_a = this.PEOSForm.get('intakeOption')) === null || _a === void 0 ? void 0 : _a.valueChanges.subscribe((checked) => {
            var _a, _b, _c;
            if (checked === '1') {
                (_a = this.PEOSForm.get('admissionOpenProgramIdTo')) === null || _a === void 0 ? void 0 : _a.setValidators([Validators.required]);
            }
            else {
                (_b = this.PEOSForm.get('admissionOpenProgramIdTo')) === null || _b === void 0 ? void 0 : _b.clearValidators();
            }
            (_c = this.PEOSForm.get('admissionOpenProgramIdTo')) === null || _c === void 0 ? void 0 : _c.updateValueAndValidity();
        });
        this.CopyForm = this.formBuilder.group({
            instituteIdTo: ['', [Validators.required]],
            departmentIdTo: ['', [Validators.required]],
            programIdTo: ['', [Validators.required]],
            admissionOpenProgramIdFrom: ['', [Validators.required]],
            admissionOpenProgramIdTo: [''],
            intakeOption: ['0'],
            instituteIdFrom: ['', [Validators.required]],
            departmentIdFrom: ['', [Validators.required]],
            programIdFrom: ['', [Validators.required]],
            admissionOpenProgramId: ['', [Validators.required]],
        });
        this.Get_Institutes();
    }
    Get_Institutes() {
        this.ngxService.start();
        this.Institutes = [];
        this._CoursesSearchService.Get_Institute().
            subscribe(response => {
            try {
                if (response != null) {
                    if (this.Temp_Institute_ID != 0) {
                        this.Institutes = response.filter(x => x.InstituteID == this.Temp_Institute_ID);
                        this.Get_Department(this.Temp_Institute_ID);
                    }
                    else {
                        this.Institutes = response;
                    }
                }
                this.ngxService.stop();
            }
            catch (e) {
                this.ngxService.stop();
                this.toastr.error("Internal server error occured while processing your request", "Error!");
            }
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
    Get_Department(val) {
        if (val == undefined || val == null || val == "")
            return;
        this.ngxService.start();
        this.Department = [];
        this._CoursesSearchService.Get_Department(Number(val)).
            subscribe(response => {
            try {
                if (response != null) {
                    if (this.Temp_Deaprtment_ID != 0) {
                        this.Department = response.filter(x => x.DepartmentID == this.Temp_Deaprtment_ID);
                    }
                    else {
                        this.Department = response;
                    }
                }
                this.ngxService.stop();
            }
            catch (e) {
                this.ngxService.stop();
                this.toastr.error("Internal server error occured while processing your request", "Error!");
            }
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
    Get_Department_To(val) {
        if (val == undefined || val == null || val == "")
            return;
        this.ngxService.start();
        this.DepartmentTo = [];
        this._CoursesSearchService.Get_Department(Number(val)).
            subscribe(response => {
            try {
                if (response != null) {
                    this.DepartmentTo = response;
                }
                this.ngxService.stop();
            }
            catch (e) {
                this.ngxService.stop();
                this.toastr.error("Internal server error occured while processing your request", "Error!");
            }
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
    Get_Programs(val) {
        if (val == undefined || val == null || val == "")
            return;
        this.ngxService.start();
        this.Programs = [];
        this._CoursesSearchService.GetDepartmentPrograms(Number(val)).
            subscribe(response => {
            try {
                if (response != null) {
                    this.Programs = response;
                }
                this.ngxService.stop();
            }
            catch (e) {
                this.ngxService.stop();
                this.toastr.error("Internal server error occured while processing your request", "Error!");
            }
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
    Get_Programs_To(val) {
        if (val == undefined || val == null || val == "")
            return;
        this.ngxService.start();
        this.ProgramsTo = [];
        this._CoursesSearchService.GetDepartmentPrograms(Number(val)).
            subscribe(response => {
            try {
                if (response != null) {
                    this.ProgramsTo = response;
                }
                this.ngxService.stop();
            }
            catch (e) {
                this.ngxService.stop();
                this.toastr.error("Internal server error occured while processing your request", "Error!");
            }
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
    Set_Intakes(val) {
        this.admissionOpenProgramId = Number(val);
    }
    searchData(data) {
        let searchData = JSON.parse(data);
        this.programId = searchData === null || searchData === void 0 ? void 0 : searchData.programId;
        this.admissionOpenProgramId = searchData === null || searchData === void 0 ? void 0 : searchData.admissionOpenProgramId;
        this.GetPeosInformation();
    }
    GetProgramIntakes(programId) {
        this.ngxService.start();
        this.Intake = [];
        this.programId = Number(programId);
        this._CoursesSearchService.GetProgramIntakes(Number(programId)).
            subscribe(response => {
            try {
                if (response != null) {
                    this.Intake = response;
                }
                this.ngxService.stop();
            }
            catch (e) {
                this.ngxService.stop();
                this.toastr.error("Internal server error occured while processing your request", "Error!");
            }
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
    GetProgramIntakesTo(programId) {
        this.ngxService.start();
        this.IntakeTo = [];
        this._CoursesSearchService.GetProgramIntakes(Number(programId)).
            subscribe(response => {
            try {
                if (response != null) {
                    this.IntakeTo = response;
                }
                this.ngxService.stop();
            }
            catch (e) {
                this.ngxService.stop();
                this.toastr.error("Internal server error occured while processing your request", "Error!");
            }
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
    setPage(page, pagesize) {
        this.query = "";
        if ((page < 1 || page > this.pager.totalPages) && page != "") {
            this.page = 1;
            page = 1;
        }
        this.page = page;
        this.pager = this.pagerService.getPager(this.dataset.length, page, pagesize);
        this.serialNumber = ((this.pager.currentPage * this.pagesize) - this.pagesize) + (this.serialNumber);
        this.PEOsInformationLst = this.dataset.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
    keyRestrict(e, validchars, casesensitives, onceevery, onceoneof) {
        onceevery = onceevery ? onceevery : "";
        onceoneof = onceoneof ? onceoneof : "";
        if (!validchars)
            return true;
        var keychar = '', i = 0;
        var key = e.which ? e.which : e.keyCode;
        var obj = e.target ? e.target : e.srcElement;
        if (key == null)
            return true;
        keychar = String.fromCharCode(key);
        validchars = (validchars + onceevery + onceoneof);
        if (!casesensitives) {
            keychar = keychar.toLowerCase();
            validchars = validchars.toLowerCase();
            onceevery = onceevery.toLowerCase();
            onceoneof = onceoneof.toLowerCase();
        }
        for (i = 0; i < (onceevery + onceoneof).length; i++) {
            if (i < onceevery.length) {
                if (obj.value.indexOf(onceevery.charAt(i)) != -1 && keychar == onceevery.charAt(i))
                    return false;
            }
            else {
                if (obj.value.indexOf(onceoneof.charAt(i - onceevery.length)) != -1 && onceoneof.indexOf(keychar) != -1)
                    return false;
            }
        }
        if (validchars.indexOf(keychar) != -1)
            return true;
        if (key == null || key == 0 || key == 8 || key == 9 || key == 13 || key == 27 || key == 39 || key == 32)
            return true;
        return false;
    }
    addPEOsShowModal() {
        this.addedPEOsTemp = [];
        this.PEOSForm.reset();
        this.submitted = false;
        this.All_Added_PEOS = [];
        this.PEOSForm.get('intakeOption').setValue("0");
        this.PEOSForm.get('instituteId').setValue("");
        this.PEOSForm.get('departmentId').setValue("");
        this.PEOSForm.get('programId').setValue("");
        this.PEOSForm.get('admissionOpenProgramIdFrom').setValue("");
        this.PEOSForm.get('admissionOpenProgramIdTo').setValue("");
        $("#Add-PEOS-Modal").modal("show");
    }
    openCopyPEOsShowModal() {
        this.Added_Intake_PEOs = [];
        this.CopyForm.reset();
        this.submitted = false;
        this.CopyForm.get('instituteIdTo').setValue("");
        this.CopyForm.get('departmentIdTo').setValue("");
        this.CopyForm.get('programIdTo').setValue("");
        this.CopyForm.get('admissionOpenProgramIdFrom').setValue("");
        this.CopyForm.get('admissionOpenProgramIdTo').setValue("");
        this.CopyForm.get('intakeOption').setValue("0");
        this.CopyForm.get('instituteIdFrom').setValue("");
        this.CopyForm.get('departmentIdFrom').setValue("");
        this.CopyForm.get('programIdFrom').setValue("");
        this.CopyForm.get('admissionOpenProgramId').setValue("");
        $("#Copy-PEOS-Modal").modal("show");
    }
    onSubmit() {
        this.submitted = true;
        if (this.PEOSForm.invalid) {
            return;
        }
        this.All_Added_PEOS.push({
            "instituteId": Number(this.PEOSForm.get('instituteId').value),
            "departmentId": Number(this.PEOSForm.get('departmentId').value),
            "programId": Number(this.PEOSForm.get('programId').value),
            "admissionOpenProgramIdFrom": Number(this.PEOSForm.get('admissionOpenProgramIdFrom').value),
            "admissionOpenProgramIdTo": Number(Number(this.PEOSForm.get('intakeOption').value)) === 0 ? Number(this.PEOSForm.get('admissionOpenProgramIdFrom').value) : Number(this.PEOSForm.get('admissionOpenProgramIdTo').value),
            "peoTitle": this.PEOSForm.get('peoTitle').value,
            "description": this.PEOSForm.get('description').value,
            "Created_By": Number(GlobalService.FacultyMember_ID)
        });
        this.submitted = false;
        this.PEOSForm.get('peoTitle').setValue("");
        this.PEOSForm.get('peoTitle').markAsUntouched();
        this.PEOSForm.get('description').setValue("");
        this.PEOSForm.get('description').markAsUntouched();
    }
    copyPeos() {
        let payload = [];
        this.Added_Intake_PEOs.forEach(item => {
            payload.push({
                "instituteId": Number(this.CopyForm.get('instituteIdTo').value),
                "departmentId": Number(this.CopyForm.get('departmentIdTo').value),
                "programId": Number(this.CopyForm.get('programIdTo').value),
                "admissionOpenProgramIdFrom": Number(this.CopyForm.get('admissionOpenProgramIdFrom').value),
                "admissionOpenProgramIdTo": Number(Number(this.CopyForm.get('intakeOption').value)) === 0 ? Number(this.CopyForm.get('admissionOpenProgramIdFrom').value) : Number(this.CopyForm.get('admissionOpenProgramIdTo').value),
                "peoTitle": item.peoTitle,
                "description": item.peoDescription,
                "Created_By": Number(GlobalService.FacultyMember_ID)
            });
        });
        this.ngxService.start();
        this._SettingService.SaveAddedPEOS(payload).
            subscribe(data => {
            this.ngxService.stop();
            if (data) {
                this.toastr.success("PEOs added successfully", "Success");
                $("#Add-PEOS-Modal").modal("hide");
                $("#Copy-PEOS-Modal").modal("hide");
                //this.Get_Selected_Course_CLOS();
            }
            else {
                this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
            }
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
        });
    }
    deleteTempAddedPEOs(value) {
        this.All_Added_PEOS.splice(value, 1);
    }
    SaveAddedPEOs() {
        this.ngxService.start();
        this._SettingService.AddNewPeos(this.All_Added_PEOS).
            subscribe(data => {
            this.ngxService.stop();
            if (data) {
                this.toastr.success("PEOs added successfully", "Success");
                $("#Add-PEOS-Modal").modal("hide");
                //this.Get_Selected_Course_CLOS();
            }
            else {
                this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
            }
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
        });
    }
    GetPeosInformation() {
        this.pagesize = 50;
        this.dataset = [];
        this.PEOsInformationLst = [];
        this.ngxService.start();
        this._SettingService.GetPeosInformation({ programId: this.programId, admissionOpenProgramId: this.admissionOpenProgramId }).
            subscribe(response => {
            if (response != null) {
                this.dataset = response;
            }
            this.ngxService.stop();
            this.setPage(1, this.pagesize);
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
    GetIntakePeosInformation(admissionOpenProgramId) {
        this.Added_Intake_PEOs = [];
        this.ngxService.start();
        this._SettingService.GetPeosInformation({ programId: this.programId, admissionOpenProgramId: Number(admissionOpenProgramId) }).
            subscribe(response => {
            if (response != null) {
                this.Added_Intake_PEOs = response;
            }
            this.ngxService.stop();
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
    deletePeo(value) {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this again!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            reverseButtons: true,
        }).then((result) => {
            if (result.value) {
                this.ngxService.start();
                this._SettingService.DeletePeo({ "peoId": value, "Modified_By": GlobalService.FacultyMember_ID }).
                    subscribe(data => {
                    this.ngxService.stop();
                    if (data) {
                        Swal.fire('Deleted!', 'PEO deleted successfully.', 'success');
                        this.GetPeosInformation();
                    }
                    else {
                        Swal.fire('Cancelled', 'Your data is safe', 'error');
                    }
                }, error => {
                    this.ngxService.stop();
                    Swal.fire('Cancelled', 'Error occured while processing your request. Please contact to admin', 'error');
                });
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.close();
            }
        });
    }
    hide(modal) {
        $(`#${modal}`).modal('hide');
    }
};
ManagePeosComponent = __decorate([
    Component({
        selector: 'app-manage-peos',
        templateUrl: './manage-peos.component.html',
        styleUrls: ['./manage-peos.component.css'],
        providers: [PagerService, HighlightPipe, FilterPipe]
    })
], ManagePeosComponent);
export { ManagePeosComponent };
//# sourceMappingURL=manage-peos.component.js.map