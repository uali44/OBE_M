import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from '../../Shared/Services/Global/global.service';
let IndirectAssessmentsComponent = class IndirectAssessmentsComponent {
    constructor(_InterconnectedService) {
        this._InterconnectedService = _InterconnectedService;
        this.Is_Sub_Active = false;
        this.Tab_Title = "";
        this.Is_Sub_Active = GlobalService.Report_Sub_Tab;
    }
    ngOnInit() {
        this.Tab_Title = "";
        this.Is_Sub_Active = false;
        $("#HeaderSemesterDropdown").addClass('hidden');
    }
    ShowTab(Title) {
        this.Tab_Title = Title;
        $("#IndirectAssessmentMainTab").removeClass('active');
        $("#IndirectAssessmentSubTab").addClass('active');
        this.Is_Sub_Active = true;
    }
    closeTab() {
        this.Is_Sub_Active = false;
        $("#IndirectAssessmentMainTab").addClass('active');
        this._InterconnectedService.CloseTriggeredTab("");
    }
};
IndirectAssessmentsComponent = __decorate([
    Component({
        selector: 'app-IndirectAssessments',
        templateUrl: './IndirectAssessments.component.html',
        styleUrls: ['./IndirectAssessments.component.css']
    })
], IndirectAssessmentsComponent);
export { IndirectAssessmentsComponent };
//# sourceMappingURL=IndirectAssessments.component.js.map