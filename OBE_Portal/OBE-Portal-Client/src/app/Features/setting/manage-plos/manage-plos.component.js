import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FilterPipe } from 'src/app/Shared/Pipe/filter';
import { HighlightPipe } from 'src/app/Shared/Pipe/highlight.pipe';
import { GlobalService } from 'src/app/Shared/Services/Global/global.service';
import { PagerService } from 'src/app/Shared/Services/Global/Pager';
import Swal from 'sweetalert2';
let ManagePlosComponent = class ManagePlosComponent {
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
        this.PLOsInformationLst = [];
        this.Is_Permission_Institute = false;
        this.Is_Permission_Deaprtment = false;
        this.Is_Permission_Faculty = false;
        this.query = "";
        this.pager = {};
        this.pagesize = 50;
        this.dataset = [];
        this.departmentPLOs = [];
        this.submitted = false;
        this.addedPLOsTemp = [];
        this.admissionOpenProgramId = 0;
        this.programId = 0;
        this.PLO_Added_Count = 1;
        this.All_Added_PLOS = [];
        this.searchSelection = {};
        this.Added_Intake_PLOs = [];
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
        this.PLOSForm = this.formBuilder.group({
            intakeOption: ['0'],
            instituteId: ['', [Validators.required]],
            departmentId: ['', [Validators.required]],
            programId: ['', [Validators.required]],
            admissionOpenProgramIdFrom: ['', [Validators.required]],
            admissionOpenProgramIdTo: [''],
            PLOTitle: ['', [Validators.required]],
            description: ['', [Validators.required]]
        });
        (_a = this.PLOSForm.get('intakeOption')) === null || _a === void 0 ? void 0 : _a.valueChanges.subscribe((checked) => {
            var _a, _b, _c;
            if (checked === '1') {
                (_a = this.PLOSForm.get('admissionOpenProgramIdTo')) === null || _a === void 0 ? void 0 : _a.setValidators([Validators.required]);
            }
            else {
                (_b = this.PLOSForm.get('admissionOpenProgramIdTo')) === null || _b === void 0 ? void 0 : _b.clearValidators();
            }
            (_c = this.PLOSForm.get('admissionOpenProgramIdTo')) === null || _c === void 0 ? void 0 : _c.updateValueAndValidity();
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
                    this.Institutes = response;
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
    searchData(data) {
        this.searchSelection = JSON.parse(data);
        this.GetPlosInformation();
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
                    this.Department = response;
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
    Set_Intakes(val) {
        this.admissionOpenProgramId = Number(val);
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
        this.PLOsInformationLst = this.dataset.slice(this.pager.startIndex, this.pager.endIndex + 1);
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
    addPLOsShowModal() {
        this.addedPLOsTemp = [];
        this.PLOSForm.reset();
        this.submitted = false;
        this.All_Added_PLOS = [];
        this.PLOSForm.get('intakeOption').setValue("0");
        this.PLOSForm.get('instituteId').setValue("");
        this.PLOSForm.get('departmentId').setValue("");
        this.PLOSForm.get('programId').setValue("");
        this.PLOSForm.get('admissionOpenProgramIdFrom').setValue("");
        this.PLOSForm.get('admissionOpenProgramIdTo').setValue("");
        $("#Add-PLOS-Modal").modal("show");
    }
    openCopyPLOsShowModal() {
        this.Added_Intake_PLOs = [];
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
        $("#Copy-PLOS-Modal").modal("show");
    }
    onSubmit() {
        this.submitted = true;
        if (this.PLOSForm.invalid) {
            return;
        }
        this.All_Added_PLOS.push({
            "instituteId": Number(this.PLOSForm.get('instituteId').value),
            "departmentId": Number(this.PLOSForm.get('departmentId').value),
            "programId": Number(this.PLOSForm.get('programId').value),
            "admissionOpenProgramIdFrom": Number(this.PLOSForm.get('admissionOpenProgramIdFrom').value),
            "admissionOpenProgramIdTo": Number(Number(this.PLOSForm.get('intakeOption').value)) === 0 ? Number(this.PLOSForm.get('admissionOpenProgramIdFrom').value) : Number(this.PLOSForm.get('admissionOpenProgramIdTo').value),
            "PLOTitle": this.PLOSForm.get('PLOTitle').value,
            "description": this.PLOSForm.get('description').value,
            "Created_By": Number(GlobalService.FacultyMember_ID)
        });
        this.submitted = false;
        this.PLOSForm.get('PLOTitle').setValue("");
        this.PLOSForm.get('PLOTitle').markAsUntouched();
        this.PLOSForm.get('description').setValue("");
        this.PLOSForm.get('description').markAsUntouched();
    }
    copyPLOs() {
        let payload = [];
        this.Added_Intake_PLOs.forEach(item => {
            payload.push({
                "instituteId": Number(this.CopyForm.get('instituteIdTo').value),
                "departmentId": Number(this.CopyForm.get('departmentIdTo').value),
                "programId": Number(this.CopyForm.get('programIdTo').value),
                "admissionOpenProgramIdFrom": Number(this.CopyForm.get('admissionOpenProgramIdFrom').value),
                "admissionOpenProgramIdTo": Number(Number(this.CopyForm.get('intakeOption').value)) === 0 ? Number(this.CopyForm.get('admissionOpenProgramIdFrom').value) : Number(this.CopyForm.get('admissionOpenProgramIdTo').value),
                "PLO_ID": Number(item.PLO_ID),
                "PLOTitle": item.PLO_Title,
                "description": item.ploDescription,
                "Created_By": Number(GlobalService.FacultyMember_ID)
            });
        });
        this.ngxService.start();
        this._SettingService.SaveAddedPLOS(payload).
            subscribe(data => {
            this.ngxService.stop();
            if (data) {
                this.toastr.success("PLOs copied successfully", "Success");
                $("#Add-PLOS-Modal").modal("hide");
                $("#Copy-PLOS-Modal").modal("hide");
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
    deleteTempAddedPLOs(value) {
        this.All_Added_PLOS.splice(value, 1);
    }
    SaveAddedPLOs() {
        this.ngxService.start();
        this._SettingService.AddNewPlos(this.All_Added_PLOS).
            subscribe(data => {
            this.ngxService.stop();
            if (data) {
                this.toastr.success("PLOs added successfully", "Success");
                $("#Add-PLOS-Modal").modal("hide");
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
    GetPlosInformation() {
        this.pagesize = 50;
        this.dataset = [];
        this.PLOsInformationLst = [];
        this.ngxService.start();
        this._SettingService.GetPlosInformation({
            programId: Number(this.searchSelection.programId),
            admissionOpenProgramId: Number(this.searchSelection.admissionOpenProgramId)
        }).
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
    GetIntakePLOsInformation(admissionOpenProgramId) {
        this.Added_Intake_PLOs = [];
        this.ngxService.start();
        this._SettingService.GetPlosInformation({ programId: this.programId, admissionOpenProgramId: Number(admissionOpenProgramId) }).
            subscribe(response => {
            if (response != null) {
                this.Added_Intake_PLOs = response;
            }
            this.ngxService.stop();
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
    deletePLO(value) {
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
                this._SettingService.DeletePlo({ "ploId": value, "Modified_By": GlobalService.FacultyMember_ID }).
                    subscribe(data => {
                    this.ngxService.stop();
                    if (data) {
                        Swal.fire('Deleted!', 'PLO deleted successfully.', 'success');
                        this.GetPlosInformation();
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
ManagePlosComponent = __decorate([
    Component({
        selector: 'app-manage-plos',
        templateUrl: './manage-plos.component.html',
        styleUrls: ['./manage-plos.component.css'],
        providers: [PagerService, HighlightPipe, FilterPipe]
    })
], ManagePlosComponent);
export { ManagePlosComponent };
//# sourceMappingURL=manage-plos.component.js.map