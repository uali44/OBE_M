import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { GlobalService } from '../../Shared/Services/Global/global.service';
let StudentService = class StudentService {
    constructor(http) {
        this.http = http;
        this.baseUrl = GlobalService.ApiUrl;
    }
    GetPLOsResultForStudent(data) {
        return this.http.post(this.baseUrl + 'Student/GetPLOsResultForStudent', data);
    }
    GetRegisteredCoursesDetails(data) {
        return this.http.post(this.baseUrl + 'Student/GetRegisteredCoursesDetails', data);
    }
    GetCourseCLOSForStudent(data) {
        return this.http.post(this.baseUrl + 'Student/GetCourseCLOSForStudent', data);
    }
    GetCourseAssessmentDetailsForStudent(data) {
        return this.http.post(this.baseUrl + 'Student/GetCourseAssessmentDetailsForStudent', data);
    }
};
StudentService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], StudentService);
export { StudentService };
//# sourceMappingURL=student.service.js.map