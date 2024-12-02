import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { GlobalService } from './../../Shared/Services/Global/global.service';
let CompiledResultservice = class CompiledResultservice {
    constructor(http) {
        this.http = http;
        this.baseUrl = GlobalService.ApiUrl;
    }
    GetAllStudentAndGradesForCourse(data) {
        return this.http.post(this.baseUrl + 'CompiledResult/GetAllStudentAndGradesForCourse', data);
    }
    GetAssessmentMarksDetails(data) {
        return this.http.post(this.baseUrl + 'CompiledResult/GetAssessmentMarksDetails', data);
    }
    GetCLOSMarksDetails(data) {
        return this.http.post(this.baseUrl + 'CompiledResult/GetCLOSMarksDetails', data);
    }
    SubmitResult(data) {
        return this.http.post(this.baseUrl + 'CompiledResult/SubmitResult', data);
    }
    GetAllStudentAndGradesForFYP(data) {
        return this.http.post(this.baseUrl + 'CompiledResult/GetAllStudentAndGradesForFYP', data);
    }
};
CompiledResultservice = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CompiledResultservice);
export { CompiledResultservice };
//# sourceMappingURL=CompiledResult.service.js.map