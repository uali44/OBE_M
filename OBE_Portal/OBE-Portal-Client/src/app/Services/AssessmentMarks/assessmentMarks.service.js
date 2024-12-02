import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { GlobalService } from './../../Shared/Services/Global/global.service';
let AssessmentMarksService = class AssessmentMarksService {
    constructor(http) {
        this.http = http;
        this.baseUrl = GlobalService.ApiUrl;
    }
    GetRegisteredStudent(data) {
        return this.http.post(this.baseUrl + 'AssessmentMarks/GetRegisteredStudent', data);
    }
    AddMarksThroughExcel(data) {
        return this.http.post(this.baseUrl + 'AssessmentMarks/AddMarksThroughExcel', data);
    }
    GetStudentsMarksForSelectedAssessment(data) {
        return this.http.post(this.baseUrl + 'AssessmentMarks/GetStudentsMarksForSelectedAssessment', data);
    }
    SaveUpdatedMarks(data) {
        return this.http.post(this.baseUrl + 'AssessmentMarks/SaveUpdatedMarks', data);
    }
};
AssessmentMarksService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AssessmentMarksService);
export { AssessmentMarksService };
//# sourceMappingURL=assessmentMarks.service.js.map