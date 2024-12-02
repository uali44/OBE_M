import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { GlobalService } from './../../Shared/Services/Global/global.service';
let AssessmentDetailsService = class AssessmentDetailsService {
    constructor(http) {
        this.http = http;
        this.baseUrl = GlobalService.ApiUrl;
    }
    GetAssessmentDetailsCourse(data) {
        return this.http.post(this.baseUrl + 'AssessmentDetails/GetAssessmentDetailsCourse', data);
    }
    SaveAssessmentDetailsCourse(data) {
        return this.http.post(this.baseUrl + 'AssessmentDetails/SaveAssessmentDetailsCourse', data);
    }
    DeleteSelectedAssessmentDetails(data) {
        return this.http.post(this.baseUrl + 'AssessmentDetails/DeleteSelectedAssessmentDetails', data);
    }
    UpdateAssessmentDetailsCourse(data) {
        return this.http.post(this.baseUrl + 'AssessmentDetails/UpdateAssessmentDetailsCourse', data);
    }
    SaveAssessmentDetailsLab(data) {
        return this.http.post(this.baseUrl + 'AssessmentDetails/SaveAssessmentDetailsLab', data);
    }
    UpdateAssessmentDetailsLab(data) {
        return this.http.post(this.baseUrl + 'AssessmentDetails/UpdateAssessmentDetailsLab', data);
    }
    SaveAssessmentDetailsFYP(data) {
        return this.http.post(this.baseUrl + 'AssessmentDetails/SaveAssessmentDetailsFYP', data);
    }
    UpdateAssessmentDetailsFYP(data) {
        return this.http.post(this.baseUrl + 'AssessmentDetails/UpdateAssessmentDetailsFYP', data);
    }
};
AssessmentDetailsService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AssessmentDetailsService);
export { AssessmentDetailsService };
//# sourceMappingURL=assessmentDetails.service.js.map