import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DashboardComponent = class DashboardComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.activeClass('d');
        $("#HeaderSemesterDropdown").removeClass('hidden');
    }
    activeClass(value) {
        if (value == 'd') {
            $('#Assigned-Courses-Active').removeClass('active');
            $('#Dashboard-Active').addClass('active');
        }
        else if (value == 'a') {
            $('#Assigned-Courses-Active').addClass('active');
            $('#Dashboard-Active').removeClass('active');
        }
        else {
            $('#Assigned-Courses-Active').removeClass('active');
            $('#Dashboard-Active').addClass('active');
            this.router.navigate(["/dashboard/analysis"]);
        }
    }
};
DashboardComponent = __decorate([
    Component({
        selector: 'app-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.css']
    })
], DashboardComponent);
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map