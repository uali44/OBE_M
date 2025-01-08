import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { GlobalService } from './../../Shared/Services/Global/global.service';
let ProfileService = class ProfileService {
    constructor(http) {
        this.http = http;
        this.baseUrl = GlobalService.ApiUrl;
    }
    AddFacultyData(data) {
        return this.http.post(this.baseUrl + 'Profile/AddFacultyData', data);
    }
};
ProfileService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ProfileService);
export { ProfileService };
//# sourceMappingURL=profile.service.js.map