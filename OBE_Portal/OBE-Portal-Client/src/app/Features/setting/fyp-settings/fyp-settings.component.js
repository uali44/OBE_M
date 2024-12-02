import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { Validators } from '@angular/forms';
import { HighlightPipe } from '../../../Shared/Pipe/highlight.pipe';
import { FilterPipe } from '../../../Shared/Pipe/filter';
import { PagerService } from '../../../Shared/Services/Global/Pager';
let FypSettingsComponent = class FypSettingsComponent {
    constructor(pagerService, toastr, ngxService, formBuilder) {
        this.pagerService = pagerService;
        this.toastr = toastr;
        this.ngxService = ngxService;
        this.formBuilder = formBuilder;
        this.query = "";
        this.pager = {};
        this.pagesize = 50;
        this.dataset = [];
        this.submitted = false;
    }
    ngOnInit() {
        this.TempID = 0;
        this.FYPAllAssessmentTools = [];
        this.AddAssessmentForm = this.formBuilder.group({
            AssessmentToolTitle: ['', [Validators.required]],
            AssessmentToolMarks: ['', [Validators.required, Validators.min(0)]],
        });
    }
    get Add_Assessment_Form() { return this.AddAssessmentForm.controls; }
    ShowAddModal() {
        this.TempID = 0;
        this.FYPAllAssessmentToolsTemp = [];
        this.submitted = false;
        $("#Add-Assessment_Tool-Modal").modal('show');
    }
    HideAddModal() {
        this.submitted = false;
        $("#Add-Assessment_Tool-Modal").modal('hide');
    }
    onSubmit() {
        this.submitted = true;
        if (this.AddAssessmentForm.invalid) {
            return;
        }
        this.TempID += 1;
        this.FYPAllAssessmentToolsTemp.push({
            "ID": this.TempID,
            "AssessmentToolTitle": this.Add_Assessment_Form.AssessmentToolTitle.value,
            "AssessmentToolMarks": Number(this.Add_Assessment_Form.AssessmentToolMarks.value),
            "CreatedBy": GlobalService.FacultyMember_ID
        });
    }
    DeleteTempAssessment(val) {
        this.TempID = 1;
        if (val == 0) {
            this.FYPAllAssessmentToolsTemp.splice(0, 1);
        }
        else {
            this.FYPAllAssessmentToolsTemp.splice(val, 1);
        }
        var tempArray = this.FYPAllAssessmentToolsTemp;
        if (this.FYPAllAssessmentToolsTemp.length > 0) {
            this.FYPAllAssessmentToolsTemp = [];
            for (var i = 0; i < tempArray.length; i++) {
                this.FYPAllAssessmentToolsTemp.push({
                    "ID": this.TempID,
                    "AssessmentToolTitle": tempArray[i].AssessmentToolTitle,
                    "AssessmentToolMarks": Number(tempArray[i].AssessmentToolMarks),
                    "CreatedBy": GlobalService.FacultyMember_ID
                });
                this.TempID += 1;
            }
        }
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
        this.FYPAllAssessmentTools = this.dataset.slice(this.pager.startIndex, this.pager.endIndex + 1);
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
};
FypSettingsComponent = __decorate([
    Component({
        selector: 'app-fyp-settings',
        templateUrl: './fyp-settings.component.html',
        styleUrls: ['./fyp-settings.component.css'],
        providers: [PagerService, HighlightPipe, FilterPipe]
    })
], FypSettingsComponent);
export { FypSettingsComponent };
//# sourceMappingURL=fyp-settings.component.js.map