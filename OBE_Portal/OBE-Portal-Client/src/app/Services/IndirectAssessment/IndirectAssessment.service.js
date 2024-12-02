import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { GlobalService } from '../../Shared/Services/Global/global.service';
let IndirectAssessment = class IndirectAssessment {
    constructor(http) {
        this.http = http;
        this.baseUrl = GlobalService.ApiUrl;
    }
    SaveCSPForm(data) {
        return this.http.post(this.baseUrl + 'IndirectAssessment/SaveCSPForm', data);
    }
    SaveExitForm(data) {
        return this.http.post(this.baseUrl + 'IndirectAssessment/SaveExitForm', data);
    }
    SaveInternshipForm(data) {
        return this.http.post(this.baseUrl + 'IndirectAssessment/SaveInternshipForm', data);
    }
};
IndirectAssessment = __decorate([
    Injectable({
        providedIn: 'root'
    })
], IndirectAssessment);
export { IndirectAssessment };
//# sourceMappingURL=IndirectAssessment.service.js.map