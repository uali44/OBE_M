import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from '../../Services/Global/global.service';
let SideBarComponent = class SideBarComponent {
    constructor(router) {
        this.router = router;
        this.Is_Permission_Reports_Side_Bar = false;
        this.Is_Permission_Setting_Side_Bar = false;
        this.Is_Permission_Indirect_Assessment_Side_Bar = false;
        this.IsStudent = false;
        if (GlobalService.IsStudent == 1) {
            this.Is_Permission_Reports_Side_Bar = false;
            this.Is_Permission_Setting_Side_Bar = false;
            this.Is_Permission_Indirect_Assessment_Side_Bar = false;
            this.IsStudent = true;
        }
        else {
            this.IsStudent = false;
            this.Is_Permission_Reports_Side_Bar = GlobalService.Permissions.indexOf("Reports_Side_Bar") >= 0 ? true : false;
            this.Is_Permission_Setting_Side_Bar = GlobalService.Permissions.indexOf("Setting_Side_Bar") >= 0 ? true : false;
            this.Is_Permission_Indirect_Assessment_Side_Bar = GlobalService.Permissions.indexOf("Indirect_Assessment") >= 0 ? true : false;
        }
    }
    ngOnInit() {
    }
};
SideBarComponent = __decorate([
    Component({
        selector: 'app-side-bar',
        templateUrl: './side-bar.component.html',
        styleUrls: ['./side-bar.component.css']
    })
], SideBarComponent);
export { SideBarComponent };
//# sourceMappingURL=side-bar.component.js.map