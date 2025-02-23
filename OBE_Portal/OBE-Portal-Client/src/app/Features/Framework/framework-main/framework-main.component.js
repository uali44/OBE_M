import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
let FrameworkMainComponent = class FrameworkMainComponent {
    constructor(FrameworkComponent, InterconnectedService, ngxService) {
        this.FrameworkComponent = FrameworkComponent;
        this.InterconnectedService = InterconnectedService;
        this.ngxService = ngxService;
    }
    ngOnInit() {
        this.InterconnectedService.CloseTab.subscribe(search => {
            this.CloseTabContent();
        });
    }
    receiveData(data) {
        this.Intake = data; // Update the parent component's variable with the data
    }
    loadTab(Title) {
        $("#Content").removeClass('dashboard-bg');
        this.FrameworkComponent.ShowTab(Title);
        GlobalService.Report_Sub_Tab = true;
        $("#settings-tab").removeClass('active');
        $("#Any-tab").addClass('active');
    }
    CloseTabContent() {
        $("#Content").addClass('dashboard-bg');
        $("#Any-tab").removeClass('active');
        $("#settings-tab").addClass('active');
        $("#SettingsMainTab").addClass('active');
    }
};
FrameworkMainComponent = __decorate([
    Component({
        selector: 'app-framework-main',
        templateUrl: './framework-main.component.html',
        styleUrls: ['./framework-main.component.css']
    })
], FrameworkMainComponent);
export { FrameworkMainComponent };
//# sourceMappingURL=framework-main.component.js.map