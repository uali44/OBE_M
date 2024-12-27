import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { GlobalService } from './../../Shared/Services/Global/global.service';
let CoursesSearchService = class CoursesSearchService {
    constructor(http) {
        this.http = http;
        this.baseUrl = GlobalService.ApiUrl;
    }
    Get_Institute() {
        return this.http.get(this.baseUrl + 'CourseSearch/GetInstitute');
    }
    Get_Department(data) {
        return this.http.post(this.baseUrl + 'CourseSearch/GetDepartment', data);
    }
    getFacultyMember(data) {
        return this.http.get(this.baseUrl + 'CourseSearch/getFacultyMember?username=' + data);
    }
    Get_FacultyMembers_For_Selected_Department_And_Semester(data) {
        return this.http.post(this.baseUrl + 'CourseSearch/GetFacultyMembersForSelectedDepartmentAndSemester', data);
    }
    Get_Intakes(data) {
        return this.http.post(this.baseUrl + 'CourseSearch/GetIntakes', data);
    }
  Get_Programs(data) {
    return this.http.post(this.baseUrl + 'CourseSearch/GetPrograms', data);
  }

  Get_Status(data) {
    return this.http.post(this.baseUrl + 'CourseSearch/GetStatus', data);
  }
    Get_All_Semester() {
        return this.http.get(this.baseUrl + 'CourseSearch/GetAllSemester');
    }
    GetIntakeStudents(data) {
        return this.http.post(this.baseUrl + 'CourseSearch/GetIntakeStudents', data);
    }
    GetCQILevelCourses(data) {
        return this.http.post(this.baseUrl + 'CourseSearch/GetCQILevelCourses', data);
    }
    GetSelectedFacultyCourses(data) {
        return this.http.post(this.baseUrl + 'CourseSearch/GetSelectedFacultyCourses', data);
    }
    DeleteStudentFromCourse(data) {
        return this.http.post(this.baseUrl + 'CourseSearch/DeleteStudentFromCourse', data);
    }
};
CoursesSearchService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CoursesSearchService);
export { CoursesSearchService };
//# sourceMappingURL=CourseSearch.service.js.map
