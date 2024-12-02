import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { GlobalService } from './../../Shared/Services/Global/global.service';
let HeaderService = class HeaderService {
    constructor(http) {
        this.http = http;
        this.baseUrl = GlobalService.ApiUrl;
    }
    GetSemesterListBasedOnFaculty(data) {
        return this.http.post(this.baseUrl + 'Header/GetSemesterListBasedOnFaculty', data);
    }
    UpdatePassword(data) {
        return this.http.post(this.baseUrl + 'Header/UpdatePassword', data);
    }
};
HeaderService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], HeaderService);
export { HeaderService };
//# sourceMappingURL=header.service.js.map