import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from '../../Shared/Services/Global/global.service';
let SettingComponent = class SettingComponent {
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
        $("#SettingsMainTab").removeClass('active');
        $("#SettingsSubTab").addClass('active');
        this.Is_Sub_Active = true;
    }
    closeTab() {
        this.Is_Sub_Active = false;
        $("#SettingsMainTab").addClass('active');
        this._InterconnectedService.CloseTriggeredTab("");
    }
};
SettingComponent = __decorate([
    Component({
        selector: 'app-setting',
        templateUrl: './setting.component.html',
        styleUrls: ['./setting.component.css']
    })
], SettingComponent);
export { SettingComponent };
//# sourceMappingURL=setting.component.js.map