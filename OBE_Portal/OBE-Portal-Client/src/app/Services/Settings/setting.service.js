import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { GlobalService } from '../../Shared/Services/Global/global.service';
let SettingService = class SettingService {
    constructor(http) {
        this.http = http;
        this.baseUrl = GlobalService.ApiUrl;
    }
    SendSurveyForm(data) {
        return this.http.post(this.baseUrl + 'Settings/SendSurveyForm', data);
    }
    EnableExitSurveyForSelctedIntake(data) {
        return this.http.post(this.baseUrl + 'Settings/EnableExitSurveyForSelctedIntake', data);
    }
    getUserForUpdates(data) {
        return this.http.post(this.baseUrl + 'Settings/getUserForUpdates', data);
    }
    updatePassword(data) {
        return this.http.post(this.baseUrl + 'Settings/updatePassword', data);
    }
    updateRole(data) {
        return this.http.post(this.baseUrl + 'Settings/updateRole', data);
    }
};
SettingService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], SettingService);
export { SettingService };
//# sourceMappingURL=setting.service.js.map