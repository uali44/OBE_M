import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { GlobalService } from './../../Shared/Services/Global/global.service';
let AssignedCoursesService = class AssignedCoursesService {
    constructor(http) {
        this.http = http;
        this.baseUrl = GlobalService.ApiUrl;
    }
    GetAssignedCourses(data) {
        return this.http.post(this.baseUrl + 'AssignedCourses/GetAssignedCourses', data);
    }
};
AssignedCoursesService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AssignedCoursesService);
export { AssignedCoursesService };
//# sourceMappingURL=assignedCourses.service.js.map