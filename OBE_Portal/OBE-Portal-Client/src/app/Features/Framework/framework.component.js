import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from '../../Shared/Services/Global/global.service';
let FrameworkComponent = class FrameworkComponent {
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
        $("#FrameworkMainTab").removeClass('active');
        $("#FrameworkSubTab").addClass('active');
        this.Is_Sub_Active = true;
    }
    closeTab() {
        this.Is_Sub_Active = false;
        $("#FrameworkMainTab").addClass('active');
        this._InterconnectedService.CloseTriggeredTab("");
    }
};
FrameworkComponent = __decorate([
    Component({
        selector: 'app-framework',
        templateUrl: './framework.component.html',
        styleUrls: ['./framework.component.css']
    })
], FrameworkComponent);
export { FrameworkComponent };
//# sourceMappingURL=framework.component.js.map