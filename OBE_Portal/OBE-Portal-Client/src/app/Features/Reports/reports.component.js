import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from '../../Shared/Services/Global/global.service';
let ReportsComponent = class ReportsComponent {
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
        $("#ReportMainTab").removeClass('active');
        $("#ReportSubTab").addClass('active');
        this.Is_Sub_Active = true;
    }
    closeTab() {
        this.Is_Sub_Active = false;
        $("#ReportMainTab").addClass('active');
        this._InterconnectedService.CloseTriggeredTab("");
    }
};
ReportsComponent = __decorate([
    Component({
        selector: 'app-reports',
        templateUrl: './reports.component.html',
        styleUrls: ['./reports.component.css']
    })
], ReportsComponent);
export { ReportsComponent };
//# sourceMappingURL=reports.component.js.map