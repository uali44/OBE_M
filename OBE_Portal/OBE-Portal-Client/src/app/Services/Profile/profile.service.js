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
    AddFacultyEducation(data) {
        return this.http.post(this.baseUrl + 'Profile/AddFacultyEducation', data);
    }
    AddFacultyExperience(data) {
        return this.http.post(this.baseUrl + 'Profile/AddFacultyExperience', data);
    }
    GetActivities() {
        return this.http.get(this.baseUrl + 'Profile/GetActivities');
    }
    GetActivitySubDetails(data) {
        return this.http.post(this.baseUrl + 'Profile/GetActivitySubDetails', data);
    }
    SaveActivity(data) {
        return this.http.post(this.baseUrl + 'Profile/SaveActivityData', data);
    }
    GetFacultyActivity(data) {
        return this.http.post(this.baseUrl + 'Profile/GetFacultyActivity', data);
    }
};
ProfileService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ProfileService);
export { ProfileService };
//# sourceMappingURL=profile.service.js.map