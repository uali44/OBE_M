import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { GlobalService } from './../../Shared/Services/Global/global.service';
let DashboardService = class DashboardService {
    constructor(http) {
        this.http = http;
        this.baseUrl = GlobalService.ApiUrl;
    }
    GetAssessmentDataForDashboardCourse(data) {
        return this.http.post(this.baseUrl + 'Dashboard/GetAssessmentDataForDashboardCourse', data);
    }
};
DashboardService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], DashboardService);
export { DashboardService };
//# sourceMappingURL=dashboard.service.js.map