import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { PagerService } from '../../../Shared/Services/Global/Pager';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { HighlightPipe } from '../../../Shared/Pipe/highlight.pipe';
import { FilterPipe } from '../../../Shared/Pipe/filter';
import { Validators } from '@angular/forms';
import Swal from 'sweetalert2';
let AssessmentSchemesComponent = class AssessmentSchemesComponent {
    constructor(_CoursesSearchService, toastr, ngxService, _ReportsService, formBuilder, CoursesCLOSService, pagerService) {
        this._CoursesSearchService = _CoursesSearchService;
        this.toastr = toastr;
        this.ngxService = ngxService;
        this._ReportsService = _ReportsService;
        this.formBuilder = formBuilder;
        this.CoursesCLOSService = CoursesCLOSService;
        this.pagerService = pagerService;
        this.All_PLOS = [];
        this.Institutes = [];
        this.Department = [];
        this.Intake = [];
        this.Is_Permission_Institute = false;
        this.Is_Permission_Deaprtment = false;
        this.Is_Permission_Faculty = false;
        this.Is_Have_Special_Permission = false;
        this.Add_Permission = false;
        this.dataEntries = [];
        this.dataTable = [];
        this.formFields = [
            { name: 'passingCr', label: 'Passing Critria', type: 'number' },
            { name: 'CLOpassingCr', label: 'CLO Passing Critria', type: 'number' },
            { name: 'PLOpassingCr', label: 'PLO Passing Critria', type: 'number' },
            { name: 'assessment', label: 'Assessment Type', type: 'text' },
            { name: 'percentage', label: 'Percentage', type: 'number' },
        ];
        const formGroupConfig = {};
        this.formFields.forEach(field => {
            formGroupConfig[field.name] = ['', Validators.required];
        });
        this.dataForm = this.formBuilder.group(formGroupConfig);
        this.Temp_Institute_ID = 0;
        this.Temp_Deaprtment_ID = 0;
        this.Is_Permission_Institute = GlobalService.Permissions.indexOf("Institute_Dropdown") >= 0 ? true : false;
        this.Is_Permission_Deaprtment = GlobalService.Permissions.indexOf("Department_Dropdown") >= 0 ? true : false;
        if (!this.Is_Permission_Institute) {
            this.Temp_Institute_ID = GlobalService.Institute_ID;
        }
        if (!this.Is_Permission_Deaprtment) {
            this.Temp_Deaprtment_ID = GlobalService.Deaprtment_ID;
        }
    }
    ngOnInit() {
        this.All_PLOS = [];
    }
    receiveData(data) {
        this.childData = data; // Update the parent component's variable with the data
    }
    GetAScheme() {
        console.log(GlobalService.temp_intake);
        console.log(this.childData);
        Swal.fire("method called");
    }
    addData() {
        var _a, _b;
        if (this.dataForm.valid) {
            this.dataTable.push([(_a = this.dataForm.get('assessment')) === null || _a === void 0 ? void 0 : _a.value, (_b = this.dataForm.get('percentage')) === null || _b === void 0 ? void 0 : _b.value]);
            // this.dataEntries.push(this.dataForm.value);
            this.dataForm.get('assessment').reset('');
            this.dataForm.get('percentage').reset('');
            const element = document.getElementById('assessment'); // Get the input element to focus
            if (element) {
                element.focus(); // Shift focus to the new field
            }
            //  this.dataForm.reset();
        }
    }
    deleteEntry(index) {
        this.dataTable.splice(index, 1);
    }
    saveData() {
        // Save dataEntries to the database via service
        console.log('Saving data to database:', this.dataEntries);
    }
};
AssessmentSchemesComponent = __decorate([
    Component({
        selector: 'app-assessment-schemes',
        templateUrl: './assessment-schemes.component.html',
        styleUrls: ['./assessment-schemes.component.css'],
        providers: [PagerService, HighlightPipe, FilterPipe]
    })
], AssessmentSchemesComponent);
export { AssessmentSchemesComponent };
//# sourceMappingURL=assessment-schemes.component.js.map