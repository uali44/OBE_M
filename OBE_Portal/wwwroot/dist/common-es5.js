function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/Services/AssignedCourses/assignedCourses.service.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/Services/AssignedCourses/assignedCourses.service.ts ***!
    \*********************************************************************/

  /*! exports provided: AssignedCoursesService */

  /***/
  function srcAppServicesAssignedCoursesAssignedCoursesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssignedCoursesService", function () {
      return AssignedCoursesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../Shared/Services/Global/global.service */
    "./src/app/Shared/Services/Global/global.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AssignedCoursesService =
    /*#__PURE__*/
    function () {
      function AssignedCoursesService(http) {
        _classCallCheck(this, AssignedCoursesService);

        this.http = http;
        this.baseUrl = _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"].ApiUrl;
      }

      _createClass(AssignedCoursesService, [{
        key: "GetAssignedCourses",
        value: function GetAssignedCourses(data) {
          return this.http.post(this.baseUrl + 'AssignedCourses/GetAssignedCourses', data);
        }
      }]);

      return AssignedCoursesService;
    }();

    AssignedCoursesService.ɵfac = function AssignedCoursesService_Factory(t) {
      return new (t || AssignedCoursesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    AssignedCoursesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AssignedCoursesService,
      factory: AssignedCoursesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssignedCoursesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Services/CompiledResult/CompiledResult.service.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/Services/CompiledResult/CompiledResult.service.ts ***!
    \*******************************************************************/

  /*! exports provided: CompiledResultservice */

  /***/
  function srcAppServicesCompiledResultCompiledResultServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompiledResultservice", function () {
      return CompiledResultservice;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../Shared/Services/Global/global.service */
    "./src/app/Shared/Services/Global/global.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CompiledResultservice =
    /*#__PURE__*/
    function () {
      function CompiledResultservice(http) {
        _classCallCheck(this, CompiledResultservice);

        this.http = http;
        this.baseUrl = _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"].ApiUrl;
      }

      _createClass(CompiledResultservice, [{
        key: "GetAllStudentAndGradesForCourse",
        value: function GetAllStudentAndGradesForCourse(data) {
          return this.http.post(this.baseUrl + 'CompiledResult/GetAllStudentAndGradesForCourse', data);
        }
      }, {
        key: "GetAssessmentMarksDetails",
        value: function GetAssessmentMarksDetails(data) {
          return this.http.post(this.baseUrl + 'CompiledResult/GetAssessmentMarksDetails', data);
        }
      }, {
        key: "GetCLOSMarksDetails",
        value: function GetCLOSMarksDetails(data) {
          return this.http.post(this.baseUrl + 'CompiledResult/GetCLOSMarksDetails', data);
        }
      }, {
        key: "SubmitResult",
        value: function SubmitResult(data) {
          return this.http.post(this.baseUrl + 'CompiledResult/SubmitResult', data);
        }
      }, {
        key: "GetAllStudentAndGradesForFYP",
        value: function GetAllStudentAndGradesForFYP(data) {
          return this.http.post(this.baseUrl + 'CompiledResult/GetAllStudentAndGradesForFYP', data);
        }
      }]);

      return CompiledResultservice;
    }();

    CompiledResultservice.ɵfac = function CompiledResultservice_Factory(t) {
      return new (t || CompiledResultservice)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    CompiledResultservice.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CompiledResultservice,
      factory: CompiledResultservice.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompiledResultservice, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Services/CourseCLOS/coursesCLO.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/Services/CourseCLOS/coursesCLO.service.ts ***!
    \***********************************************************/

  /*! exports provided: CoursesCLOSService */

  /***/
  function srcAppServicesCourseCLOSCoursesCLOServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoursesCLOSService", function () {
      return CoursesCLOSService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../Shared/Services/Global/global.service */
    "./src/app/Shared/Services/Global/global.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CoursesCLOSService =
    /*#__PURE__*/
    function () {
      function CoursesCLOSService(http) {
        _classCallCheck(this, CoursesCLOSService);

        this.http = http;
        this.baseUrl = _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"].ApiUrl;
      }

      _createClass(CoursesCLOSService, [{
        key: "GetCourseCLOS",
        value: function GetCourseCLOS(data) {
          return this.http.post(this.baseUrl + 'CourseCLOS/GetCourseCLOS', data);
        }
      }, {
        key: "SaveCourseAddedCLOS",
        value: function SaveCourseAddedCLOS(data) {
          return this.http.post(this.baseUrl + 'CourseCLOS/SaveCourseAddedCLOS', data);
        }
      }, {
        key: "DeleteCourseAddedCLOS",
        value: function DeleteCourseAddedCLOS(data) {
          return this.http.post(this.baseUrl + 'CourseCLOS/DeleteCourseAddedCLOS', data);
        }
      }, {
        key: "UpdateCourseAddedCLOS",
        value: function UpdateCourseAddedCLOS(data) {
          return this.http.post(this.baseUrl + 'CourseCLOS/UpdateCourseAddedCLOS', data);
        }
      }]);

      return CoursesCLOSService;
    }();

    CoursesCLOSService.ɵfac = function CoursesCLOSService_Factory(t) {
      return new (t || CoursesCLOSService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    CoursesCLOSService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CoursesCLOSService,
      factory: CoursesCLOSService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoursesCLOSService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Services/IndirectAssessment/IndirectAssessment.service.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/Services/IndirectAssessment/IndirectAssessment.service.ts ***!
    \***************************************************************************/

  /*! exports provided: IndirectAssessment */

  /***/
  function srcAppServicesIndirectAssessmentIndirectAssessmentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndirectAssessment", function () {
      return IndirectAssessment;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../Shared/Services/Global/global.service */
    "./src/app/Shared/Services/Global/global.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var IndirectAssessment =
    /*#__PURE__*/
    function () {
      function IndirectAssessment(http) {
        _classCallCheck(this, IndirectAssessment);

        this.http = http;
        this.baseUrl = _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"].ApiUrl;
      }

      _createClass(IndirectAssessment, [{
        key: "SaveCSPForm",
        value: function SaveCSPForm(data) {
          return this.http.post(this.baseUrl + 'IndirectAssessment/SaveCSPForm', data);
        }
      }, {
        key: "SaveExitForm",
        value: function SaveExitForm(data) {
          return this.http.post(this.baseUrl + 'IndirectAssessment/SaveExitForm', data);
        }
      }, {
        key: "SaveInternshipForm",
        value: function SaveInternshipForm(data) {
          return this.http.post(this.baseUrl + 'IndirectAssessment/SaveInternshipForm', data);
        }
      }, {
        key: "AddSurvey",
        value: function AddSurvey(data) {
          return this.http.post(this.baseUrl + 'IndirectAssessment/AddSurvey', data);
        }
      }, {
        key: "GetSurvey",
        value: function GetSurvey(data) {
          return this.http.post(this.baseUrl + 'IndirectAssessment/GetSurvey', data);
        }
      }, {
        key: "GetAllSurvey",
        value: function GetAllSurvey(data) {
          return this.http.post(this.baseUrl + 'IndirectAssessment/GetAllSurvey', data);
        }
      }, {
        key: "DeleteQuestion",
        value: function DeleteQuestion(data) {
          return this.http.post(this.baseUrl + 'IndirectAssessment/DeleteQuestion', data);
        }
      }]);

      return IndirectAssessment;
    }();

    IndirectAssessment.ɵfac = function IndirectAssessment_Factory(t) {
      return new (t || IndirectAssessment)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    IndirectAssessment.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: IndirectAssessment,
      factory: IndirectAssessment.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndirectAssessment, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map