import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { GlobalService } from './../../Shared/Services/Global/global.service';
let CoursesCLOSService = class CoursesCLOSService {
    constructor(http) {
        this.http = http;
        this.baseUrl = GlobalService.ApiUrl;
    }
    GetCourseCLOS(data) {
        return this.http.post(this.baseUrl + 'CourseCLOS/GetCourseCLOS', data);
    }
    SaveCourseAddedCLOS(data) {
        return this.http.post(this.baseUrl + 'CourseCLOS/SaveCourseAddedCLOS', data);
    }
    DeleteCourseAddedCLOS(data) {
        return this.http.post(this.baseUrl + 'CourseCLOS/DeleteCourseAddedCLOS', data);
    }
    UpdateCourseAddedCLOS(data) {
        return this.http.post(this.baseUrl + 'CourseCLOS/UpdateCourseAddedCLOS', data);
    }
};
CoursesCLOSService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CoursesCLOSService);
export { CoursesCLOSService };
//# sourceMappingURL=coursesCLO.service.js.map