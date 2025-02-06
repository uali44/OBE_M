(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/Services/AssignedCourses/assignedCourses.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Services/AssignedCourses/assignedCourses.service.ts ***!
  \*********************************************************************/
/*! exports provided: AssignedCoursesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignedCoursesService", function() { return AssignedCoursesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Shared/Services/Global/global.service */ "./src/app/Shared/Services/Global/global.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class AssignedCoursesService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"].ApiUrl;
    }
    GetAssignedCourses(data) {
        return this.http.post(this.baseUrl + 'AssignedCourses/GetAssignedCourses', data);
    }
}
AssignedCoursesService.ɵfac = function AssignedCoursesService_Factory(t) { return new (t || AssignedCoursesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AssignedCoursesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AssignedCoursesService, factory: AssignedCoursesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssignedCoursesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Services/CompiledResult/CompiledResult.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Services/CompiledResult/CompiledResult.service.ts ***!
  \*******************************************************************/
/*! exports provided: CompiledResultservice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompiledResultservice", function() { return CompiledResultservice; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Shared/Services/Global/global.service */ "./src/app/Shared/Services/Global/global.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class CompiledResultservice {
    constructor(http) {
        this.http = http;
        this.baseUrl = _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"].ApiUrl;
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
}
CompiledResultservice.ɵfac = function CompiledResultservice_Factory(t) { return new (t || CompiledResultservice)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CompiledResultservice.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CompiledResultservice, factory: CompiledResultservice.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompiledResultservice, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Services/CourseCLOS/coursesCLO.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/Services/CourseCLOS/coursesCLO.service.ts ***!
  \***********************************************************/
/*! exports provided: CoursesCLOSService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesCLOSService", function() { return CoursesCLOSService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Shared/Services/Global/global.service */ "./src/app/Shared/Services/Global/global.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class CoursesCLOSService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"].ApiUrl;
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
}
CoursesCLOSService.ɵfac = function CoursesCLOSService_Factory(t) { return new (t || CoursesCLOSService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CoursesCLOSService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CoursesCLOSService, factory: CoursesCLOSService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoursesCLOSService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Services/IndirectAssessment/IndirectAssessment.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/Services/IndirectAssessment/IndirectAssessment.service.ts ***!
  \***************************************************************************/
/*! exports provided: IndirectAssessment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndirectAssessment", function() { return IndirectAssessment; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Shared/Services/Global/global.service */ "./src/app/Shared/Services/Global/global.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class IndirectAssessment {
    constructor(http) {
        this.http = http;
        this.baseUrl = _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"].ApiUrl;
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
    AddSurvey(data) {
        return this.http.post(this.baseUrl + 'IndirectAssessment/AddSurvey', data);
    }
    GetSurvey(data) {
        return this.http.post(this.baseUrl + 'IndirectAssessment/GetSurvey', data);
    }
    GetAllSurvey(data) {
        return this.http.post(this.baseUrl + 'IndirectAssessment/GetAllSurvey', data);
    }
    DeleteQuestion(data) {
        return this.http.post(this.baseUrl + 'IndirectAssessment/DeleteQuestion', data);
    }
    SaveSurvey(data) {
        return this.http.post(this.baseUrl + 'IndirectAssessment/SaveSurveyResponses', data);
    }
}
IndirectAssessment.ɵfac = function IndirectAssessment_Factory(t) { return new (t || IndirectAssessment)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
IndirectAssessment.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IndirectAssessment, factory: IndirectAssessment.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndirectAssessment, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map