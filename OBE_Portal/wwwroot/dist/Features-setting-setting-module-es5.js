function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Features-setting-setting-module"], {
  /***/
  "./src/app/Features/setting/assessment-schemes/assessment-schemes.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/Features/setting/assessment-schemes/assessment-schemes.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: AssessmentSchemesComponent */

  /***/
  function srcAppFeaturesSettingAssessmentSchemesAssessmentSchemesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssessmentSchemesComponent", function () {
      return AssessmentSchemesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AssessmentSchemesComponent =
    /*#__PURE__*/
    function () {
      function AssessmentSchemesComponent() {
        _classCallCheck(this, AssessmentSchemesComponent);
      }

      _createClass(AssessmentSchemesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AssessmentSchemesComponent;
    }();

    AssessmentSchemesComponent.ɵfac = function AssessmentSchemesComponent_Factory(t) {
      return new (t || AssessmentSchemesComponent)();
    };

    AssessmentSchemesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AssessmentSchemesComponent,
      selectors: [["app-assessment-schemes"]],
      decls: 7,
      vars: 0,
      consts: [["role", "tabpanel", 1, "tab-pane", "active"], [1, "section-heading", "padding-b5"]],
      template: function AssessmentSchemesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Assessment ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "This is assessment Detail Component");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "This is assessment details component\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL3NldHRpbmcvYXNzZXNzbWVudC1zY2hlbWVzL2Fzc2Vzc21lbnQtc2NoZW1lcy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssessmentSchemesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-assessment-schemes',
          templateUrl: './assessment-schemes.component.html',
          styleUrls: ['./assessment-schemes.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/setting/exit-survey-form-enable/exit-survey-form-enable.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/Features/setting/exit-survey-form-enable/exit-survey-form-enable.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: ExitSurveyFormEnableComponent */

  /***/
  function srcAppFeaturesSettingExitSurveyFormEnableExitSurveyFormEnableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExitSurveyFormEnableComponent", function () {
      return ExitSurveyFormEnableComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../Shared/Services/Global/global.service */
    "./src/app/Shared/Services/Global/global.service.ts");
    /* harmony import */


    var _Services_CourseSearch_CourseSearch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../Services/CourseSearch/CourseSearch.service */
    "./src/app/Services/CourseSearch/CourseSearch.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-ui-loader */
    "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm2015/ngx-ui-loader.js");
    /* harmony import */


    var _Services_Settings_setting_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../Services/Settings/setting.service */
    "./src/app/Services/Settings/setting.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ExitSurveyFormEnableComponent_option_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r1476 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", i_r1476.InstituteID);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1476.InstituteShortName);
      }
    }

    function ExitSurveyFormEnableComponent_option_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r1477 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", i_r1477.DepartmentID);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1477.DepartmentName);
      }
    }

    function ExitSurveyFormEnableComponent_option_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r1478 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", i_r1478.AdmissionOpenProgramID);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1478.semesterAlia);
      }
    }

    var ExitSurveyFormEnableComponent =
    /*#__PURE__*/
    function () {
      function ExitSurveyFormEnableComponent(_CoursesSearchService, toastr, ngxService, _SettingService) {
        _classCallCheck(this, ExitSurveyFormEnableComponent);

        this._CoursesSearchService = _CoursesSearchService;
        this.toastr = toastr;
        this.ngxService = ngxService;
        this._SettingService = _SettingService;
        this.Institutes = [];
        this.Department = [];
        this.Intake = [];
        this.Is_Permission_Institute = false;
        this.Is_Permission_Deaprtment = false;
        this.Is_Permission_Faculty = false;
        this.query = "";
        this.pager = {};
        this.pagesize = 50;
        this.dataset = [];
        this.Selected_Skill = "";
        this.Temp_Institute_ID = 0;
        this.Temp_Deaprtment_ID = 0;
        this.Is_Permission_Institute = _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"].Permissions.indexOf("Institute_Dropdown") >= 0 ? true : false;
        this.Is_Permission_Deaprtment = _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"].Permissions.indexOf("Department_Dropdown") >= 0 ? true : false;

        if (!this.Is_Permission_Institute) {
          this.Temp_Institute_ID = _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"].Institute_ID;
        }

        if (!this.Is_Permission_Deaprtment) {
          this.Temp_Deaprtment_ID = _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"].Deaprtment_ID;
        }
      }

      _createClass(ExitSurveyFormEnableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.Exit_Summary = {};
          this.Get_Institutes();
        }
      }, {
        key: "Get_Institutes",
        value: function Get_Institutes() {
          var _this = this;

          this.ngxService.start();
          this.Institutes = [];

          this._CoursesSearchService.Get_Institute().subscribe(function (response) {
            if (response != null) {
              if (_this.Temp_Institute_ID != 0) {
                _this.Institutes = response.filter(function (x) {
                  return x.InstituteID == _this.Temp_Institute_ID;
                });

                _this.Get_Department(_this.Temp_Institute_ID);
              } else {
                _this.Institutes = response;
              }
            }

            _this.ngxService.stop();
          }, function (error) {
            _this.ngxService.stop();

            _this.toastr.error("Internal server error occured while processing your request", "Error!");
          });
        }
      }, {
        key: "Get_Department",
        value: function Get_Department(val) {
          var _this2 = this;

          if (val == undefined || val == null || val == "") return;
          this.ngxService.start();
          this.Department = [];

          this._CoursesSearchService.Get_Department(Number(val)).subscribe(function (response) {
            if (response != null) {
              if (_this2.Temp_Deaprtment_ID != 0) {
                _this2.Department = response.filter(function (x) {
                  return x.DepartmentID == _this2.Temp_Deaprtment_ID;
                });

                _this2.Get_Intakes(_this2.Temp_Deaprtment_ID);
              } else {
                _this2.Department = response;
              }
            }

            _this2.ngxService.stop();
          }, function (error) {
            _this2.ngxService.stop();

            _this2.toastr.error("Internal server error occured while processing your request", "Error!");
          });
        }
      }, {
        key: "Get_Intakes",
        value: function Get_Intakes(val) {
          var _this3 = this;

          if (val == undefined || val == null || val == "") return;
          this.ngxService.start();
          this.Intake = [];

          this._CoursesSearchService.Get_Intakes(Number(val)).subscribe(function (response) {
            if (response != null) {
              _this3.Intake = response;
            }

            _this3.ngxService.stop();
          }, function (error) {
            _this3.ngxService.stop();

            _this3.toastr.error("Internal server error occured while processing your request", "Error!");
          });
        }
      }, {
        key: "EnableExitSurveyForSelctedIntake",
        value: function EnableExitSurveyForSelctedIntake() {
          var _this4 = this;

          this.Exit_Summary = {};
          var IntakeID = $("#IntakeID").val();
          this.ngxService.start();
          this.pagesize = 50;

          this._SettingService.EnableExitSurveyForSelctedIntake(Number(IntakeID)).subscribe(function (response) {
            if (response) {
              _this4.toastr.success("Exit survey form is enabled successfully", "Success!");
            }

            _this4.ngxService.stop();
          }, function (error) {
            _this4.ngxService.stop();

            _this4.toastr.error("Internal server error occured while processing your request", "Error!");
          });
        }
      }]);

      return ExitSurveyFormEnableComponent;
    }();

    ExitSurveyFormEnableComponent.ɵfac = function ExitSurveyFormEnableComponent_Factory(t) {
      return new (t || ExitSurveyFormEnableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_CourseSearch_CourseSearch_service__WEBPACK_IMPORTED_MODULE_2__["CoursesSearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_Settings_setting_service__WEBPACK_IMPORTED_MODULE_5__["SettingService"]));
    };

    ExitSurveyFormEnableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExitSurveyFormEnableComponent,
      selectors: [["app-exit-survey-form-enable"]],
      decls: 41,
      vars: 7,
      consts: [["role", "tabpanel", 1, "tab-pane", "active"], [1, "section-heading", "padding-b5"], [1, "margin-b15"], [1, "row"], [1, "col-sm-12"], [1, "padding-b5"], [1, "form-group", "col-sm-3"], [1, "control-label"], [1, "text-danger"], [1, "form-control", 3, "ngModel", "change"], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "IntakeID", 1, "form-control"], [1, "col-sm-1", "margin-t17"], [1, "btn", "btn-info", 3, "click"], [3, "value"]],
      template: function ExitSurveyFormEnableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Exit Survey");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "fieldset", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "legend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Criteria");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Select Institute ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ExitSurveyFormEnableComponent_Template_select_change_16_listener($event) {
            return ctx.Get_Department($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Select Institute");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ExitSurveyFormEnableComponent_option_19_Template, 2, 2, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Select Department ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ExitSurveyFormEnableComponent_Template_select_change_25_listener($event) {
            return ctx.Get_Intakes($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Select Deparment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ExitSurveyFormEnableComponent_option_28_Template, 2, 2, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Select Intake ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "select", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Select Intake");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ExitSurveyFormEnableComponent_option_37_Template, 2, 2, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExitSurveyFormEnableComponent_Template_button_click_39_listener($event) {
            return ctx.EnableExitSurveyForSelctedIntake();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Enable");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Temp_Institute_ID);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.Temp_Institute_ID != 0 ? "disabled" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Institutes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Temp_Deaprtment_ID);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.Temp_Deaprtment_ID != 0 ? "disabled" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Department);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Intake);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL3NldHRpbmcvZXhpdC1zdXJ2ZXktZm9ybS1lbmFibGUvZXhpdC1zdXJ2ZXktZm9ybS1lbmFibGUuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExitSurveyFormEnableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-exit-survey-form-enable',
          templateUrl: './exit-survey-form-enable.component.html',
          styleUrls: ['./exit-survey-form-enable.component.css']
        }]
      }], function () {
        return [{
          type: _Services_CourseSearch_CourseSearch_service__WEBPACK_IMPORTED_MODULE_2__["CoursesSearchService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }, {
          type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderService"]
        }, {
          type: _Services_Settings_setting_service__WEBPACK_IMPORTED_MODULE_5__["SettingService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/setting/fyp-settings/fyp-settings.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/Features/setting/fyp-settings/fyp-settings.component.ts ***!
    \*************************************************************************/

  /*! exports provided: FypSettingsComponent */

  /***/
  function srcAppFeaturesSettingFypSettingsFypSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FypSettingsComponent", function () {
      return FypSettingsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../Shared/Services/Global/global.service */
    "./src/app/Shared/Services/Global/global.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _Shared_Pipe_highlight_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../Shared/Pipe/highlight.pipe */
    "./src/app/Shared/Pipe/highlight.pipe.ts");
    /* harmony import */


    var _Shared_Pipe_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../Shared/Pipe/filter */
    "./src/app/Shared/Pipe/filter.ts");
    /* harmony import */


    var _Shared_Services_Global_Pager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../Shared/Services/Global/Pager */
    "./src/app/Shared/Services/Global/Pager.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-ui-loader */
    "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm2015/ngx-ui-loader.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function FypSettingsComponent_div_23_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Assessment Title is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FypSettingsComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FypSettingsComponent_div_23_div_1_Template, 2, 0, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1452 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1452.Add_Assessment_Form.AssessmentToolTitle.errors.required);
      }
    }

    function FypSettingsComponent_div_31_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Assessment Total Marks is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FypSettingsComponent_div_31_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Minimum marks is 0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FypSettingsComponent_div_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FypSettingsComponent_div_31_div_1_Template, 2, 0, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FypSettingsComponent_div_31_div_2_Template, 2, 0, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1453 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1453.Add_Assessment_Form.AssessmentToolMarks.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1453.Add_Assessment_Form.AssessmentToolMarks.errors.min);
      }
    }

    function FypSettingsComponent_tr_57_Template(rf, ctx) {
      if (rf & 1) {
        var _r1464 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FypSettingsComponent_tr_57_Template_button_click_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1464);

          var idx_r1462 = ctx.index;

          var ctx_r1463 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1463.DeleteTempAssessment(idx_r1462);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r1461 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1461.ID);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1461.AssessmentToolTitle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1461.AssessmentToolMarks);
      }
    }

    function FypSettingsComponent_div_152_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Showing 0 to 0 of 0 entries");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FypSettingsComponent_div_153_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1456 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("Showing ", (ctx_r1456.pager == null ? null : ctx_r1456.pager.startIndex) + 1, " to ", (ctx_r1456.pager == null ? null : ctx_r1456.pager.endIndex) + 1, " of ", ctx_r1456.pager == null ? null : ctx_r1456.pager.totalItems, " entries");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        disabled: a0
      };
    };

    function FypSettingsComponent_div_155_Template(rf, ctx) {
      if (rf & 1) {
        var _r1466 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FypSettingsComponent_div_155_Template_button_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1466);

          var ctx_r1465 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1465.setPage(1, ctx_r1465.pagesize);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FypSettingsComponent_div_155_Template_button_click_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1466);

          var ctx_r1467 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1467.setPage((ctx_r1467.pager == null ? null : ctx_r1467.pager.currentPage) - 1, ctx_r1467.pagesize);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FypSettingsComponent_div_155_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1466);

          var ctx_r1468 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1468.page = $event;
        })("keyup", function FypSettingsComponent_div_155_Template_input_keyup_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1466);

          var ctx_r1469 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1469.setPage(ctx_r1469.page);
        })("keypress", function FypSettingsComponent_div_155_Template_input_keypress_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1466);

          var ctx_r1470 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1470.keyRestrict($event, "0123456789");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FypSettingsComponent_div_155_Template_button_click_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1466);

          var ctx_r1471 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1471.setPage((ctx_r1471.pager == null ? null : ctx_r1471.pager.currentPage) + 1, ctx_r1471.pagesize);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FypSettingsComponent_div_155_Template_button_click_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1466);

          var ctx_r1472 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1472.setPage(ctx_r1472.pager == null ? null : ctx_r1472.pager.totalPages, ctx_r1472.pagesize);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1457 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, (ctx_r1457.pager == null ? null : ctx_r1457.pager.currentPage) === 1))("disabled", (ctx_r1457.pager == null ? null : ctx_r1457.pager.currentPage) === 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, (ctx_r1457.pager == null ? null : ctx_r1457.pager.currentPage) === 1))("disabled", (ctx_r1457.pager == null ? null : ctx_r1457.pager.currentPage) === 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1457.page);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("of ", ctx_r1457.pager == null ? null : ctx_r1457.pager.totalPages, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, (ctx_r1457.pager == null ? null : ctx_r1457.pager.currentPage) === (ctx_r1457.pager == null ? null : ctx_r1457.pager.totalPages)))("disabled", (ctx_r1457.pager == null ? null : ctx_r1457.pager.currentPage) == (ctx_r1457.pager == null ? null : ctx_r1457.pager.totalPages));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, (ctx_r1457.pager == null ? null : ctx_r1457.pager.currentPage) === (ctx_r1457.pager == null ? null : ctx_r1457.pager.totalPages)))("disabled", (ctx_r1457.pager == null ? null : ctx_r1457.pager.currentPage) == (ctx_r1457.pager == null ? null : ctx_r1457.pager.totalPages));
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "has-error": a0
      };
    };

    var FypSettingsComponent =
    /*#__PURE__*/
    function () {
      function FypSettingsComponent(pagerService, toastr, ngxService, formBuilder) {
        _classCallCheck(this, FypSettingsComponent);

        this.pagerService = pagerService;
        this.toastr = toastr;
        this.ngxService = ngxService;
        this.formBuilder = formBuilder;
        this.query = "";
        this.pager = {};
        this.pagesize = 50;
        this.dataset = [];
        this.submitted = false;
      }

      _createClass(FypSettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.TempID = 0;
          this.FYPAllAssessmentTools = [];
          this.AddAssessmentForm = this.formBuilder.group({
            AssessmentToolTitle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            AssessmentToolMarks: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]]
          });
        }
      }, {
        key: "ShowAddModal",
        value: function ShowAddModal() {
          this.TempID = 0;
          this.FYPAllAssessmentToolsTemp = [];
          this.submitted = false;
          $("#Add-Assessment_Tool-Modal").modal('show');
        }
      }, {
        key: "HideAddModal",
        value: function HideAddModal() {
          this.submitted = false;
          $("#Add-Assessment_Tool-Modal").modal('hide');
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.submitted = true;

          if (this.AddAssessmentForm.invalid) {
            return;
          }

          this.TempID += 1;
          this.FYPAllAssessmentToolsTemp.push({
            "ID": this.TempID,
            "AssessmentToolTitle": this.Add_Assessment_Form.AssessmentToolTitle.value,
            "AssessmentToolMarks": Number(this.Add_Assessment_Form.AssessmentToolMarks.value),
            "CreatedBy": _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"].FacultyMember_ID
          });
        }
      }, {
        key: "DeleteTempAssessment",
        value: function DeleteTempAssessment(val) {
          this.TempID = 1;

          if (val == 0) {
            this.FYPAllAssessmentToolsTemp.splice(0, 1);
          } else {
            this.FYPAllAssessmentToolsTemp.splice(val, 1);
          }

          var tempArray = this.FYPAllAssessmentToolsTemp;

          if (this.FYPAllAssessmentToolsTemp.length > 0) {
            this.FYPAllAssessmentToolsTemp = [];

            for (var i = 0; i < tempArray.length; i++) {
              this.FYPAllAssessmentToolsTemp.push({
                "ID": this.TempID,
                "AssessmentToolTitle": tempArray[i].AssessmentToolTitle,
                "AssessmentToolMarks": Number(tempArray[i].AssessmentToolMarks),
                "CreatedBy": _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"].FacultyMember_ID
              });
              this.TempID += 1;
            }
          }
        }
      }, {
        key: "setPage",
        value: function setPage(page, pagesize) {
          this.query = "";

          if ((page < 1 || page > this.pager.totalPages) && page != "") {
            this.page = 1;
            page = 1;
          }

          this.page = page;
          this.pager = this.pagerService.getPager(this.dataset.length, page, pagesize);
          this.serialNumber = this.pager.currentPage * this.pagesize - this.pagesize + this.serialNumber;
          this.FYPAllAssessmentTools = this.dataset.slice(this.pager.startIndex, this.pager.endIndex + 1);
        }
      }, {
        key: "keyRestrict",
        value: function keyRestrict(e, validchars, casesensitives, onceevery, onceoneof) {
          onceevery = onceevery ? onceevery : "";
          onceoneof = onceoneof ? onceoneof : "";
          if (!validchars) return true;
          var keychar = '',
              i = 0;
          var key = e.which ? e.which : e.keyCode;
          var obj = e.target ? e.target : e.srcElement;
          if (key == null) return true;
          keychar = String.fromCharCode(key);
          validchars = validchars + onceevery + onceoneof;

          if (!casesensitives) {
            keychar = keychar.toLowerCase();
            validchars = validchars.toLowerCase();
            onceevery = onceevery.toLowerCase();
            onceoneof = onceoneof.toLowerCase();
          }

          for (i = 0; i < (onceevery + onceoneof).length; i++) {
            if (i < onceevery.length) {
              if (obj.value.indexOf(onceevery.charAt(i)) != -1 && keychar == onceevery.charAt(i)) return false;
            } else {
              if (obj.value.indexOf(onceoneof.charAt(i - onceevery.length)) != -1 && onceoneof.indexOf(keychar) != -1) return false;
            }
          }

          if (validchars.indexOf(keychar) != -1) return true;
          if (key == null || key == 0 || key == 8 || key == 9 || key == 13 || key == 27 || key == 39 || key == 32) return true;
          return false;
        }
      }, {
        key: "Add_Assessment_Form",
        get: function get() {
          return this.AddAssessmentForm.controls;
        }
      }]);

      return FypSettingsComponent;
    }();

    FypSettingsComponent.ɵfac = function FypSettingsComponent_Factory(t) {
      return new (t || FypSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Shared_Services_Global_Pager__WEBPACK_IMPORTED_MODULE_5__["PagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__["NgxUiLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]));
    };

    FypSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FypSettingsComponent,
      selectors: [["app-fyp-settings"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_Shared_Services_Global_Pager__WEBPACK_IMPORTED_MODULE_5__["PagerService"], _Shared_Pipe_highlight_pipe__WEBPACK_IMPORTED_MODULE_3__["HighlightPipe"], _Shared_Pipe_filter__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"]])],
      decls: 158,
      vars: 15,
      consts: [[1, "tab-content", "no-padding"], [1, "modal-section", 2, "position", "initial"], ["id", "Add-Assessment_Tool-Modal", "tabindex", "-1", "role", "dialog", 1, "modal", "fade", "modal-wide", "margin-t41"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "section-heading"], [1, "pull-left"], [1, "pull-right"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], [1, "app-icon-IconSet-1-12"], [1, "clearfix"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-sm-6"], [1, "form-group", 3, "ngClass"], [1, "control-label"], [1, "text-danger"], ["type", "text", "formControlName", "AssessmentToolTitle", 1, "form-control", "input-sm"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "number", "formControlName", "AssessmentToolMarks", 1, "form-control", "input-sm"], ["type", "submit", 1, "btn", "btn-info", "pull-right"], [1, "tab-pane", "margin-t20"], [1, "margin-b5"], [1, "margin-b15"], [1, "dashboard-scroller", "setups-widget", "mCustomScrollbar"], [1, "table-responsive"], [1, "table", "table-hover", "table-theme"], ["width", "5%"], ["width", "40%"], [4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-default", 3, "click"], ["type", "button", 1, "btn", "btn-info"], ["role", "tabpanel", 1, "tab-pane", "active"], [1, "section-tabs", "margin-t0"], [1, "tabs-head"], ["role", "tablist", 1, "nav", "nav-tabs"], ["role", "presentation", 1, "active"], ["aria-expanded", "true", "href", "#tab-Assessment-Tools", "role", "tab", "data-toggle", "tab"], [1, "notification"], ["role", "presentation"], ["aria-expanded", "true", "href", "#tab-Peformance-Indicators", "role", "tab", "data-toggle", "tab"], [1, "tab-content"], ["role", "tabpanel", "id", "tab-Assessment-Tools", 1, "tab-pane", "active"], [1, "section-heading", "padding-b5"], [1, "btn", "btn-info", 3, "click"], [1, "has-feedback", "width-300"], ["type", "text", "placeholder", "Search Records", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-control-feedback"], [1, "app-icon-IconSet-1-92"], [1, "pull-left", "margin-l5"], [1, "form-inline"], [1, "form-group", "margin-r10", 2, "width", "110%"], [1, "control-label", "margin-r10"], [1, "form-control", "input-xs", "margin-r5", 2, "width", "30%", 3, "ngModel", "change", "ngModelChange"], [1, "pull-left", "margin-t4", "margin-l20"], [1, "nav", "nav-pills", "margin-l5"], [1, "margin-r15"], [1, "fa", "fa-stop", "text-success"], [1, "fa", "fa-stop", "text-warning"], [1, "dashboard-box", "dash-box-right"], [1, "dashboard-scroller", "setups-widget", "mCustomScrollbar", 2, "max-height", "34vh"], ["width", "4%"], ["width", "88%"], ["align", "center"], [1, "blue"], [1, "btn-group"], ["type", "button", "title", "Edit Assessment", 1, "btn", "btn-default", "margin-r5"], [1, "app-icon-Amazing-Fusion-61", "f12", "blue"], ["type", "button", "title", "Delete Assessment", 1, "btn", "btn-default", "margin-r5"], [1, "app-icon-IconSet-1-33", "f12", "blue"], [1, "pagination-bottom"], ["class", "form-group", 4, "ngIf"], [1, "form-inline", "pull-right", "margin-b5"], ["class", "table-pagination pull-right", 4, "ngIf"], ["role", "tabpanel", "id", "tab-Peformance-Indicators", 1, "tab-pane"], [1, "invalid-feedback"], ["class", "text-danger", 4, "ngIf"], ["type", "button", "title", "Delete Assessment", 1, "btn", "btn-default", "margin-r5", 3, "click"], [1, "form-group"], [1, "control-label", "padding-t5"], [1, "table-pagination", "pull-right"], ["data-original-title", "First Page", "title", "", 1, "btn", "btn-default", 3, "ngClass", "disabled", "click"], [1, "fa", "fa-backward"], ["data-original-title", "Previous", "title", "", 1, "btn", "btn-default", 3, "ngClass", "disabled", "click"], [1, "fa", "fa-caret-left"], ["type", "text", "value", "1", "disabled", "", 1, "form-control", 2, "width", "50px", 3, "ngModel", "ngModelChange", "keyup", "keypress"], ["data-original-title", "Next", "title", "", 1, "btn", "btn-default", 3, "ngClass", "disabled", "click"], [1, "fa", "fa-caret-right"], ["data-original-title", "Last", "title", "", 1, "btn", "btn-default", 3, "ngClass", "disabled", "click"], [1, "fa", "fa-forward"]],
      template: function FypSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Add Assessment Tools");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FypSettingsComponent_Template_form_ngSubmit_14_listener($event) {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Assessment Title ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, FypSettingsComponent_div_23_Template, 2, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Assessment Total Marks ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, FypSettingsComponent_div_31_Template, 3, 2, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Assessment Tools");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "fieldset", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "legend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Added Assessment Tools");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "table", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Sr. #");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Assessment Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Assessment Total Marks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, FypSettingsComponent_tr_57_Template, 10, 3, "tr", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FypSettingsComponent_Template_button_click_59_listener($event) {
            return ctx.HideAddModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "ul", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Assessment Tools ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Performance Indicator ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Assessment Tools");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FypSettingsComponent_Template_button_click_85_listener($event) {
            return ctx.ShowAddModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Add Assessment Tools");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FypSettingsComponent_Template_input_ngModelChange_90_listener($event) {
            return ctx.query = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "i", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "label", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Show");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "select", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FypSettingsComponent_Template_select_change_98_listener($event) {
            return ctx.setPage(1, ctx.pagesize);
          })("ngModelChange", function FypSettingsComponent_Template_select_ngModelChange_98_listener($event) {
            return ctx.pagesize = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Per Page");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "ul", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "span", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " Used");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "span", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " Not Used");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "table", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "th", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Sr. #");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "th", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Assessment Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "td", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "b", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " Test ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Total Marks: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "button", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "i", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "button", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "i", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](152, FypSettingsComponent_div_152_Template, 3, 0, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](153, FypSettingsComponent_div_153_Template, 3, 3, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](155, FypSettingsComponent_div_155_Template, 12, 18, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.AddAssessmentForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx.submitted && ctx.Add_Assessment_Form.AssessmentToolTitle.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.Add_Assessment_Form.AssessmentToolTitle.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx.submitted && ctx.Add_Assessment_Form.AssessmentToolMarks.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.Add_Assessment_Form.AssessmentToolMarks.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.FYPAllAssessmentToolsTemp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.query);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pagesize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.FYPAllAssessmentTools == null || (ctx.FYPAllAssessmentTools == null ? null : ctx.FYPAllAssessmentTools.length) == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.FYPAllAssessmentTools == null ? null : ctx.FYPAllAssessmentTools.length) >= 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.pager == null ? null : ctx.pager.pages) && (ctx.pager == null ? null : ctx.pager.pages.length));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL3NldHRpbmcvZnlwLXNldHRpbmdzL2Z5cC1zZXR0aW5ncy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FypSettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-fyp-settings',
          templateUrl: './fyp-settings.component.html',
          styleUrls: ['./fyp-settings.component.css'],
          providers: [_Shared_Services_Global_Pager__WEBPACK_IMPORTED_MODULE_5__["PagerService"], _Shared_Pipe_highlight_pipe__WEBPACK_IMPORTED_MODULE_3__["HighlightPipe"], _Shared_Pipe_filter__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"]]
        }]
      }], function () {
        return [{
          type: _Shared_Services_Global_Pager__WEBPACK_IMPORTED_MODULE_5__["PagerService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
        }, {
          type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__["NgxUiLoaderService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/setting/manage-plos/manage-plos.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/Features/setting/manage-plos/manage-plos.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ManagePlosComponent */

  /***/
  function srcAppFeaturesSettingManagePlosManagePlosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManagePlosComponent", function () {
      return ManagePlosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_Shared_Pipe_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/Shared/Pipe/filter */
    "./src/app/Shared/Pipe/filter.ts");
    /* harmony import */


    var src_app_Shared_Pipe_highlight_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Shared/Pipe/highlight.pipe */
    "./src/app/Shared/Pipe/highlight.pipe.ts");
    /* harmony import */


    var src_app_Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Shared/Services/Global/global.service */
    "./src/app/Shared/Services/Global/global.service.ts");
    /* harmony import */


    var src_app_Shared_Services_Global_Pager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Shared/Services/Global/Pager */
    "./src/app/Shared/Services/Global/Pager.ts");
    /* harmony import */


    var src_app_Services_CourseSearch_CourseSearch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/Services/CourseSearch/CourseSearch.service */
    "./src/app/Services/CourseSearch/CourseSearch.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-ui-loader */
    "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm2015/ngx-ui-loader.js");
    /* harmony import */


    var src_app_Services_Settings_setting_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/Services/Settings/setting.service */
    "./src/app/Services/Settings/setting.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ManagePlosComponent_option_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r1492 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", i_r1492.InstituteID);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1492.InstituteShortName);
      }
    }

    function ManagePlosComponent_option_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r1493 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", i_r1493.DepartmentID);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1493.DepartmentName);
      }
    }

    function ManagePlosComponent_option_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r1494 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", i_r1494.AdmissionOpenProgramID);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1494.semesterAlia);
      }
    }

    function ManagePlosComponent_div_109_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1490 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("Showing ", (ctx_r1490.pager == null ? null : ctx_r1490.pager.startIndex) + 1, " to ", (ctx_r1490.pager == null ? null : ctx_r1490.pager.endIndex) + 1, " of ", ctx_r1490.pager == null ? null : ctx_r1490.pager.totalItems, " entries");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        disabled: a0
      };
    };

    function ManagePlosComponent_div_111_Template(rf, ctx) {
      if (rf & 1) {
        var _r1496 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagePlosComponent_div_111_Template_button_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1496);

          var ctx_r1495 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1495.setPage(1, ctx_r1495.pagesize);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagePlosComponent_div_111_Template_button_click_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1496);

          var ctx_r1497 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1497.setPage((ctx_r1497.pager == null ? null : ctx_r1497.pager.currentPage) - 1, ctx_r1497.pagesize);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManagePlosComponent_div_111_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1496);

          var ctx_r1498 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1498.page = $event;
        })("keyup", function ManagePlosComponent_div_111_Template_input_keyup_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1496);

          var ctx_r1499 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1499.setPage(ctx_r1499.page);
        })("keypress", function ManagePlosComponent_div_111_Template_input_keypress_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1496);

          var ctx_r1500 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1500.keyRestrict($event, "0123456789");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagePlosComponent_div_111_Template_button_click_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1496);

          var ctx_r1501 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1501.setPage((ctx_r1501.pager == null ? null : ctx_r1501.pager.currentPage) + 1, ctx_r1501.pagesize);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagePlosComponent_div_111_Template_button_click_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1496);

          var ctx_r1502 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1502.setPage(ctx_r1502.pager == null ? null : ctx_r1502.pager.totalPages, ctx_r1502.pagesize);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1491 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, (ctx_r1491.pager == null ? null : ctx_r1491.pager.currentPage) === 1))("disabled", (ctx_r1491.pager == null ? null : ctx_r1491.pager.currentPage) === 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, (ctx_r1491.pager == null ? null : ctx_r1491.pager.currentPage) === 1))("disabled", (ctx_r1491.pager == null ? null : ctx_r1491.pager.currentPage) === 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1491.page);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("of ", ctx_r1491.pager == null ? null : ctx_r1491.pager.totalPages, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, (ctx_r1491.pager == null ? null : ctx_r1491.pager.currentPage) === (ctx_r1491.pager == null ? null : ctx_r1491.pager.totalPages)))("disabled", (ctx_r1491.pager == null ? null : ctx_r1491.pager.currentPage) == (ctx_r1491.pager == null ? null : ctx_r1491.pager.totalPages));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, (ctx_r1491.pager == null ? null : ctx_r1491.pager.currentPage) === (ctx_r1491.pager == null ? null : ctx_r1491.pager.totalPages)))("disabled", (ctx_r1491.pager == null ? null : ctx_r1491.pager.currentPage) == (ctx_r1491.pager == null ? null : ctx_r1491.pager.totalPages));
      }
    }

    var ManagePlosComponent =
    /*#__PURE__*/
    function () {
      function ManagePlosComponent(_CoursesSearchService, toastr, ngxService, _SettingService, pagerService) {
        _classCallCheck(this, ManagePlosComponent);

        this._CoursesSearchService = _CoursesSearchService;
        this.toastr = toastr;
        this.ngxService = ngxService;
        this._SettingService = _SettingService;
        this.pagerService = pagerService;
        this.Institutes = [];
        this.Department = [];
        this.Intake = [];
        this.Is_Permission_Institute = false;
        this.Is_Permission_Deaprtment = false;
        this.Is_Permission_Faculty = false;
        this.query = "";
        this.pager = {};
        this.pagesize = 50;
        this.dataset = [];
        this.departmentPLOs = [];
        this.Temp_Institute_ID = 0;
        this.Temp_Deaprtment_ID = 0;
        this.Is_Permission_Institute = src_app_Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"].Permissions.indexOf("Institute_Dropdown") >= 0 ? true : false;
        this.Is_Permission_Deaprtment = src_app_Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"].Permissions.indexOf("Department_Dropdown") >= 0 ? true : false;
        this.Is_Permission_Faculty = src_app_Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"].Permissions.indexOf("Faculty_Dropdown") >= 0 ? true : false;

        if (!this.Is_Permission_Institute) {
          this.Temp_Institute_ID = src_app_Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"].Institute_ID;
        }

        if (!this.Is_Permission_Deaprtment) {
          this.Temp_Deaprtment_ID = src_app_Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"].Deaprtment_ID;
        }
      }

      _createClass(ManagePlosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.Get_Institutes();
        }
      }, {
        key: "Get_Institutes",
        value: function Get_Institutes() {
          var _this5 = this;

          this.ngxService.start();
          this.Institutes = [];

          this._CoursesSearchService.Get_Institute().subscribe(function (response) {
            try {
              if (response != null) {
                if (_this5.Temp_Institute_ID != 0) {
                  _this5.Institutes = response.filter(function (x) {
                    return x.InstituteID == _this5.Temp_Institute_ID;
                  });

                  _this5.Get_Department(_this5.Temp_Institute_ID);
                } else {
                  _this5.Institutes = response;
                }
              }

              _this5.ngxService.stop();
            } catch (e) {
              _this5.ngxService.stop();

              _this5.toastr.error("Internal server error occured while processing your request", "Error!");
            }
          }, function (error) {
            _this5.ngxService.stop();

            _this5.toastr.error("Internal server error occured while processing your request", "Error!");
          });
        }
      }, {
        key: "Get_Department",
        value: function Get_Department(val) {
          var _this6 = this;

          if (val == undefined || val == null || val == "") return;
          this.ngxService.start();
          this.Department = [];

          this._CoursesSearchService.Get_Department(Number(val)).subscribe(function (response) {
            try {
              if (response != null) {
                if (_this6.Temp_Deaprtment_ID != 0) {
                  _this6.Department = response.filter(function (x) {
                    return x.DepartmentID == _this6.Temp_Deaprtment_ID;
                  });

                  _this6.Get_Intakes(_this6.Temp_Deaprtment_ID);
                } else {
                  _this6.Department = response;
                }
              }

              _this6.ngxService.stop();
            } catch (e) {
              _this6.ngxService.stop();

              _this6.toastr.error("Internal server error occured while processing your request", "Error!");
            }
          }, function (error) {
            _this6.ngxService.stop();

            _this6.toastr.error("Internal server error occured while processing your request", "Error!");
          });
        }
      }, {
        key: "Get_Intakes",
        value: function Get_Intakes(val) {
          var _this7 = this;

          if (val == undefined || val == null || val == "") return;
          this.ngxService.start();
          this.Intake = [];

          this._CoursesSearchService.Get_Intakes(Number(val)).subscribe(function (response) {
            try {
              if (response != null) {
                _this7.Intake = response;
              }

              _this7.ngxService.stop();
            } catch (e) {
              _this7.ngxService.stop();

              _this7.toastr.error("Internal server error occured while processing your request", "Error!");
            }
          }, function (error) {
            _this7.ngxService.stop();

            _this7.toastr.error("Internal server error occured while processing your request", "Error!");
          });
        }
      }, {
        key: "setPage",
        value: function setPage(page, pagesize) {
          this.query = "";

          if ((page < 1 || page > this.pager.totalPages) && page != "") {
            this.page = 1;
            page = 1;
          }

          this.page = page;
          this.pager = this.pagerService.getPager(this.dataset.length, page, pagesize);
          this.serialNumber = this.pager.currentPage * this.pagesize - this.pagesize + this.serialNumber;
          this.departmentPLOs = this.dataset.slice(this.pager.startIndex, this.pager.endIndex + 1);
        }
      }, {
        key: "keyRestrict",
        value: function keyRestrict(e, validchars, casesensitives, onceevery, onceoneof) {
          onceevery = onceevery ? onceevery : "";
          onceoneof = onceoneof ? onceoneof : "";
          if (!validchars) return true;
          var keychar = '',
              i = 0;
          var key = e.which ? e.which : e.keyCode;
          var obj = e.target ? e.target : e.srcElement;
          if (key == null) return true;
          keychar = String.fromCharCode(key);
          validchars = validchars + onceevery + onceoneof;

          if (!casesensitives) {
            keychar = keychar.toLowerCase();
            validchars = validchars.toLowerCase();
            onceevery = onceevery.toLowerCase();
            onceoneof = onceoneof.toLowerCase();
          }

          for (i = 0; i < (onceevery + onceoneof).length; i++) {
            if (i < onceevery.length) {
              if (obj.value.indexOf(onceevery.charAt(i)) != -1 && keychar == onceevery.charAt(i)) return false;
            } else {
              if (obj.value.indexOf(onceoneof.charAt(i - onceevery.length)) != -1 && onceoneof.indexOf(keychar) != -1) return false;
            }
          }

          if (validchars.indexOf(keychar) != -1) return true;
          if (key == null || key == 0 || key == 8 || key == 9 || key == 13 || key == 27 || key == 39 || key == 32) return true;
          return false;
        }
      }]);

      return ManagePlosComponent;
    }();

    ManagePlosComponent.ɵfac = function ManagePlosComponent_Factory(t) {
      return new (t || ManagePlosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_CourseSearch_CourseSearch_service__WEBPACK_IMPORTED_MODULE_5__["CoursesSearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__["NgxUiLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_Settings_setting_service__WEBPACK_IMPORTED_MODULE_8__["SettingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Shared_Services_Global_Pager__WEBPACK_IMPORTED_MODULE_4__["PagerService"]));
    };

    ManagePlosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ManagePlosComponent,
      selectors: [["app-manage-plos"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_Shared_Services_Global_Pager__WEBPACK_IMPORTED_MODULE_4__["PagerService"], src_app_Shared_Pipe_highlight_pipe__WEBPACK_IMPORTED_MODULE_2__["HighlightPipe"], src_app_Shared_Pipe_filter__WEBPACK_IMPORTED_MODULE_1__["FilterPipe"]])],
      decls: 113,
      vars: 11,
      consts: [["role", "tabpanel", 1, "tab-pane", "active"], [1, "section-heading", "padding-b5"], [1, "margin-b15"], [1, "row"], [1, "col-sm-12"], [1, "padding-b5"], [1, "form-group", "col-sm-2"], [1, "control-label"], [1, "text-danger"], [1, "form-control", 3, "ngModel", "change"], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "IntakeID", 1, "form-control"], [1, "col-sm-2", "margin-t17"], [1, "btn", "btn-info", "pull-right"], [1, "section-heading"], [1, "margin-b5"], [1, "pull-left"], [1, "has-feedback", "pull-left"], ["type", "text", "placeholder", "Search Records", 1, "form-control", "width-200", 3, "ngModel", "ngModelChange"], [1, "form-control-feedback"], [1, "app-icon-IconSet-1-92"], [1, "pull-left", "margin-l5"], [1, "form-inline"], [1, "form-group", "margin-r10", 2, "width", "110%"], [1, "control-label", "margin-r10"], [1, "form-control", "input-xs", "margin-r5", 2, "width", "30%", 3, "ngModel", "change", "ngModelChange"], [1, "clearfix"], [1, "table-responsive", 2, "max-height", "34vh", "overflow-y", "auto"], [1, "table", "table-hover", "table-theme", "margin-b30"], ["align", "center"], [1, "pagination-bottom"], [1, "form-group"], [1, "control-label", "padding-t5"], ["class", "form-group", 4, "ngIf"], [1, "form-inline", "pull-right", "margin-b5"], ["class", "table-pagination pull-right", 4, "ngIf"], [3, "value"], [1, "table-pagination", "pull-right"], ["data-original-title", "First Page", "title", "", 1, "btn", "btn-default", 3, "ngClass", "disabled", "click"], [1, "fa", "fa-backward"], ["data-original-title", "Previous", "title", "", 1, "btn", "btn-default", 3, "ngClass", "disabled", "click"], [1, "fa", "fa-caret-left"], ["type", "text", "value", "1", "disabled", "", 1, "form-control", 2, "width", "50px", 3, "ngModel", "ngModelChange", "keyup", "keypress"], ["data-original-title", "Next", "title", "", 1, "btn", "btn-default", 3, "ngClass", "disabled", "click"], [1, "fa", "fa-caret-right"], ["data-original-title", "Last", "title", "", 1, "btn", "btn-default", 3, "ngClass", "disabled", "click"], [1, "fa", "fa-forward"]],
      template: function ManagePlosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Manage PLOs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "fieldset", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "legend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Criteria");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Select Institute ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ManagePlosComponent_Template_select_change_16_listener($event) {
            return ctx.Get_Department($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Select Institute");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ManagePlosComponent_option_19_Template, 2, 2, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Select Department ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ManagePlosComponent_Template_select_change_25_listener($event) {
            return ctx.Get_Intakes($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Select Deparment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ManagePlosComponent_option_28_Template, 2, 2, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Select Intake ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "select", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Select Intake");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ManagePlosComponent_option_37_Template, 2, 2, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Added PLOs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManagePlosComponent_Template_input_ngModelChange_47_listener($event) {
            return ctx.query = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Show");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "select", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ManagePlosComponent_Template_select_change_55_listener($event) {
            return ctx.setPage(1, ctx.pagesize);
          })("ngModelChange", function ManagePlosComponent_Template_select_ngModelChange_55_listener($event) {
            return ctx.pagesize = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Per Page");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "table", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Sr.#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "th", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "th", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "PLO1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "th", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "PLO2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "th", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "PLO3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "th", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "PLO4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "th", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "PLO5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "th", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "PLO6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "th", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "PLO7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "th", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "PLO8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "th", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "PLO9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "th", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "PLO10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "th", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "PLO11");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "th", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "PLO12");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Showing 0 to 0 of 0 entries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, ManagePlosComponent_div_109_Template, 3, 3, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, ManagePlosComponent_div_111_Template, 12, 18, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Temp_Institute_ID);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.Temp_Institute_ID != 0 ? "disabled" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Institutes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Temp_Deaprtment_ID);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.Temp_Deaprtment_ID != 0 ? "disabled" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Department);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Intake);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.query);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pagesize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.departmentPLOs == null ? null : ctx.departmentPLOs.length) >= 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.pager == null ? null : ctx.pager.pages) && (ctx.pager == null ? null : ctx.pager.pages.length));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL3NldHRpbmcvbWFuYWdlLXBsb3MvbWFuYWdlLXBsb3MuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagePlosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-manage-plos',
          templateUrl: './manage-plos.component.html',
          styleUrls: ['./manage-plos.component.css'],
          providers: [src_app_Shared_Services_Global_Pager__WEBPACK_IMPORTED_MODULE_4__["PagerService"], src_app_Shared_Pipe_highlight_pipe__WEBPACK_IMPORTED_MODULE_2__["HighlightPipe"], src_app_Shared_Pipe_filter__WEBPACK_IMPORTED_MODULE_1__["FilterPipe"]]
        }]
      }], function () {
        return [{
          type: src_app_Services_CourseSearch_CourseSearch_service__WEBPACK_IMPORTED_MODULE_5__["CoursesSearchService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
        }, {
          type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__["NgxUiLoaderService"]
        }, {
          type: src_app_Services_Settings_setting_service__WEBPACK_IMPORTED_MODULE_8__["SettingService"]
        }, {
          type: src_app_Shared_Services_Global_Pager__WEBPACK_IMPORTED_MODULE_4__["PagerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/setting/peos/peos.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/Features/setting/peos/peos.component.ts ***!
    \*********************************************************/

  /*! exports provided: PeosComponent */

  /***/
  function srcAppFeaturesSettingPeosPeosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PeosComponent", function () {
      return PeosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Shared_Services_Global_Pager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../Shared/Services/Global/Pager */
    "./src/app/Shared/Services/Global/Pager.ts");
    /* harmony import */


    var _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../Shared/Services/Global/global.service */
    "./src/app/Shared/Services/Global/global.service.ts");
    /* harmony import */


    var _Shared_Pipe_highlight_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../Shared/Pipe/highlight.pipe */
    "./src/app/Shared/Pipe/highlight.pipe.ts");
    /* harmony import */


    var _Shared_Pipe_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../Shared/Pipe/filter */
    "./src/app/Shared/Pipe/filter.ts");
    /* harmony import */


    var xlsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! xlsx */
    "./node_modules/xlsx/xlsx.js");
    /* harmony import */


    var xlsx__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! file-saver */
    "./node_modules/file-saver/dist/FileSaver.min.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _Services_CourseSearch_CourseSearch_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../Services/CourseSearch/CourseSearch.service */
    "./src/app/Services/CourseSearch/CourseSearch.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-ui-loader */
    "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm2015/ngx-ui-loader.js");
    /* harmony import */


    var _Services_Reports_reports_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../Services/Reports/reports.service */
    "./src/app/Services/Reports/reports.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _Services_CourseCLOS_coursesCLO_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./../../../Services/CourseCLOS/coursesCLO.service */
    "./src/app/Services/CourseCLOS/coursesCLO.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PeosComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Title is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PeosComponent_div_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Description is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PeosComponent_tr_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var entry_r1542 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entry_r1542.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entry_r1542.description);
      }
    }

    function PeosComponent_option_66_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r1543 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", i_r1543.InstituteID);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1543.InstituteShortName);
      }
    }

    function PeosComponent_option_75_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r1544 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", i_r1544.DepartmentID);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1544.DepartmentName);
      }
    }

    function PeosComponent_option_84_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r1545 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", i_r1545.AdmissionOpenProgramID);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1545.semesterAlia);
      }
    }

    function PeosComponent_ng_container_143_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "highlight");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "highlight");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var i_r1546 = ctx.$implicit;

        var ctx_r1538 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1546.Sr_Number);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 3, i_r1546.PLO_Title, ctx_r1538.query), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 6, i_r1546.PLO_Description, ctx_r1538.query), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function PeosComponent_div_148_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Showing 0 to 0 of 0 entries");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PeosComponent_div_149_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1540 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("Showing ", (ctx_r1540.pager == null ? null : ctx_r1540.pager.startIndex) + 1, " to ", (ctx_r1540.pager == null ? null : ctx_r1540.pager.endIndex) + 1, " of ", ctx_r1540.pager == null ? null : ctx_r1540.pager.totalItems, " entries");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        disabled: a0
      };
    };

    function PeosComponent_div_151_Template(rf, ctx) {
      if (rf & 1) {
        var _r1548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PeosComponent_div_151_Template_button_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1548);

          var ctx_r1547 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1547.setPage(1, ctx_r1547.pagesize);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PeosComponent_div_151_Template_button_click_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1548);

          var ctx_r1549 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1549.setPage((ctx_r1549.pager == null ? null : ctx_r1549.pager.currentPage) - 1, ctx_r1549.pagesize);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PeosComponent_div_151_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1548);

          var ctx_r1550 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1550.page = $event;
        })("keyup", function PeosComponent_div_151_Template_input_keyup_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1548);

          var ctx_r1551 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1551.setPage(ctx_r1551.page);
        })("keypress", function PeosComponent_div_151_Template_input_keypress_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1548);

          var ctx_r1552 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1552.keyRestrict($event, "0123456789");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PeosComponent_div_151_Template_button_click_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1548);

          var ctx_r1553 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1553.setPage((ctx_r1553.pager == null ? null : ctx_r1553.pager.currentPage) + 1, ctx_r1553.pagesize);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PeosComponent_div_151_Template_button_click_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1548);

          var ctx_r1554 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1554.setPage(ctx_r1554.pager == null ? null : ctx_r1554.pager.totalPages, ctx_r1554.pagesize);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1541 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, (ctx_r1541.pager == null ? null : ctx_r1541.pager.currentPage) === 1))("disabled", (ctx_r1541.pager == null ? null : ctx_r1541.pager.currentPage) === 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, (ctx_r1541.pager == null ? null : ctx_r1541.pager.currentPage) === 1))("disabled", (ctx_r1541.pager == null ? null : ctx_r1541.pager.currentPage) === 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1541.page);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("of ", ctx_r1541.pager == null ? null : ctx_r1541.pager.totalPages, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, (ctx_r1541.pager == null ? null : ctx_r1541.pager.currentPage) === (ctx_r1541.pager == null ? null : ctx_r1541.pager.totalPages)))("disabled", (ctx_r1541.pager == null ? null : ctx_r1541.pager.currentPage) == (ctx_r1541.pager == null ? null : ctx_r1541.pager.totalPages));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, (ctx_r1541.pager == null ? null : ctx_r1541.pager.currentPage) === (ctx_r1541.pager == null ? null : ctx_r1541.pager.totalPages)))("disabled", (ctx_r1541.pager == null ? null : ctx_r1541.pager.currentPage) == (ctx_r1541.pager == null ? null : ctx_r1541.pager.totalPages));
      }
    }

    var PeosComponent =
    /*#__PURE__*/
    function () {
      function PeosComponent(_CoursesSearchService, toastr, ngxService, _ReportsService, formBuilder, CoursesCLOSService, pagerService) {
        _classCallCheck(this, PeosComponent);

        this._CoursesSearchService = _CoursesSearchService;
        this.toastr = toastr;
        this.ngxService = ngxService;
        this._ReportsService = _ReportsService;
        this.formBuilder = formBuilder;
        this.CoursesCLOSService = CoursesCLOSService;
        this.pagerService = pagerService;
        this.newEntry = {
          title: '',
          description: ''
        };
        this.temporaryEntries = [];
        this.All_PLOS = [];
        this.Institutes = [];
        this.Department = [];
        this.Intake = [];
        this.Is_Permission_Institute = false;
        this.Is_Permission_Deaprtment = false;
        this.Is_Permission_Faculty = false;
        this.Is_Have_Special_Permission = false;
        this.Add_Permission = false;
        this.query = "";
        this.pager = {};
        this.pagesize = 50;
        this.dataset = [];
        this.Selected_Semester = "";
        this.Temp_Institute_ID = 0;
        this.Temp_Deaprtment_ID = 0;
        this.Is_Permission_Institute = _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"].Permissions.indexOf("Institute_Dropdown") >= 0 ? true : false;
        this.Is_Permission_Deaprtment = _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"].Permissions.indexOf("Department_Dropdown") >= 0 ? true : false;

        if (!this.Is_Permission_Institute) {
          this.Temp_Institute_ID = _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"].Institute_ID;
        }

        if (!this.Is_Permission_Deaprtment) {
          this.Temp_Deaprtment_ID = _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"].Deaprtment_ID;
        }
      }

      _createClass(PeosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.All_PLOS = [];
          this.Get_Institutes();
          this.Add_Permission = false;
          this.Is_Have_Special_Permission = false;
        }
      }, {
        key: "addEntry",
        value: function addEntry() {
          if (this.newEntry.title && this.newEntry.description) {
            this.temporaryEntries.push(Object.assign({}, this.newEntry));
            this.newEntry = {
              title: '',
              description: ''
            }; // Clear the form fields
          } else {
            alert("Please fill out both Title and Description.");
          }
        }
      }, {
        key: "saveEntries",
        value: function saveEntries() {}
      }, {
        key: "cancel",
        value: function cancel() {
          this.temporaryEntries = [];
        }
      }, {
        key: "Get_Institutes",
        value: function Get_Institutes() {
          var _this8 = this;

          this.ngxService.start();
          this.Institutes = [];

          this._CoursesSearchService.Get_Institute().subscribe(function (response) {
            try {
              if (response != null) {
                if (_this8.Temp_Institute_ID != 0) {
                  _this8.Institutes = response.filter(function (x) {
                    return x.InstituteID == _this8.Temp_Institute_ID;
                  });

                  _this8.Get_Department(_this8.Temp_Institute_ID);
                } else {
                  _this8.Institutes = response;
                }
              }

              _this8.ngxService.stop();
            } catch (e) {
              _this8.ngxService.stop();

              _this8.toastr.error("Internal server error occured while processing your request", "Error!");
            }
          }, function (error) {
            _this8.ngxService.stop();

            _this8.toastr.error("Internal server error occured while processing your request", "Error!");
          });
        }
      }, {
        key: "Get_Department",
        value: function Get_Department(val) {
          var _this9 = this;

          if (val == undefined || val == null || val == "") return;
          this.ngxService.start();
          this.Department = [];

          this._CoursesSearchService.Get_Department(Number(val)).subscribe(function (response) {
            try {
              if (response != null) {
                if (_this9.Temp_Deaprtment_ID != 0) {
                  _this9.Department = response.filter(function (x) {
                    return x.DepartmentID == _this9.Temp_Deaprtment_ID;
                  });

                  _this9.Get_Intakes(_this9.Temp_Deaprtment_ID);
                } else {
                  _this9.Department = response;
                }
              }

              _this9.ngxService.stop();
            } catch (e) {
              _this9.ngxService.stop();

              _this9.toastr.error("Internal server error occured while processing your request", "Error!");
            }
          }, function (error) {
            _this9.ngxService.stop();

            _this9.toastr.error("Internal server error occured while processing your request", "Error!");
          });
        }
      }, {
        key: "Get_Intakes",
        value: function Get_Intakes(val) {
          var _this10 = this;

          if (val == undefined || val == null || val == "") return;
          this.ngxService.start();
          this.Intake = [];

          this._CoursesSearchService.Get_Intakes(Number(val)).subscribe(function (response) {
            try {
              if (response != null) {
                _this10.Intake = response;
              }

              _this10.ngxService.stop();
            } catch (e) {
              _this10.ngxService.stop();

              _this10.toastr.error("Internal server error occured while processing your request", "Error!");
            }
          }, function (error) {
            _this10.ngxService.stop();

            _this10.toastr.error("Internal server error occured while processing your request", "Error!");
          });
        }
      }, {
        key: "GetPLOS",
        value: function GetPLOS() {
          var _this11 = this;

          var itake = $("#IntakeID").val();
          this.ngxService.start();
          this.CoursesCLOSService.GetCourseCLOS(itake).subscribe(function (response) {
            if (response != null) {
              _this11.dataset = response.Course_CLOS;
              _this11.All_PLOS = response.All_PLOS;
            } else {
              _this11.All_PLOS = [];
            }

            _this11.ngxService.stop();

            _this11.setPage(1, _this11.pagesize);
          }, function (error) {
            _this11.All_PLOS = [];

            _this11.ngxService.stop();

            _this11.toastr.error("Internal server error occured while processing your request", "Error!");
          });
        }
      }, {
        key: "setPage",
        value: function setPage(page, pagesize) {
          this.query = "";

          if ((page < 1 || page > this.pager.totalPages) && page != "") {
            this.page = 1;
            page = 1;
          }

          this.page = page;
          this.pager = this.pagerService.getPager(this.dataset.length, page, pagesize);
          this.serialNumber = this.pager.currentPage * this.pagesize - this.pagesize + this.serialNumber;
          this.All_PLOS = this.dataset.slice(this.pager.startIndex, this.pager.endIndex + 1);
        }
      }, {
        key: "keyRestrict",
        value: function keyRestrict(e, validchars, casesensitives, onceevery, onceoneof) {
          onceevery = onceevery ? onceevery : "";
          onceoneof = onceoneof ? onceoneof : "";
          if (!validchars) return true;
          var keychar = '',
              i = 0;
          var key = e.which ? e.which : e.keyCode;
          var obj = e.target ? e.target : e.srcElement;
          if (key == null) return true;
          keychar = String.fromCharCode(key);
          validchars = validchars + onceevery + onceoneof;

          if (!casesensitives) {
            keychar = keychar.toLowerCase();
            validchars = validchars.toLowerCase();
            onceevery = onceevery.toLowerCase();
            onceoneof = onceoneof.toLowerCase();
          }

          for (i = 0; i < (onceevery + onceoneof).length; i++) {
            if (i < onceevery.length) {
              if (obj.value.indexOf(onceevery.charAt(i)) != -1 && keychar == onceevery.charAt(i)) return false;
            } else {
              if (obj.value.indexOf(onceoneof.charAt(i - onceevery.length)) != -1 && onceoneof.indexOf(keychar) != -1) return false;
            }
          }

          if (validchars.indexOf(keychar) != -1) return true;
          if (key == null || key == 0 || key == 8 || key == 9 || key == 13 || key == 27 || key == 39 || key == 32) return true;
          return false;
        }
      }, {
        key: "DownloadExcel",
        value: function DownloadExcel() {
          if (this.dataset.length > 0) {
            var wb = xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].book_new();
            var header = [];
            var Data = [];
            var Heading = [];
            header.push("Sr.#", "Course Title", "Semester", "PLO1", "PLO2", "PLO3", "PLO4", "PLO5", "PLO6", "PLO7", "PLO8", "PLO9", "PLO10", "PLO11", "PLO12");
            Heading.push(header);
            var SrNumber = 1;

            for (var k = 0; k < this.dataset.length; k++) {
              Data.push({
                "SrNumber": SrNumber,
                "title": this.dataset[k].Title,
                "semesterAlia": this.dataset[k].semesterAlia,
                "PLO1": this.dataset[k].PLO_One_Skill_Mapped_Count != 0 ? 'X' : '-',
                "PLO2": this.dataset[k].PLO_Two_Skill_Mapped_Count != 0 ? 'X' : '-',
                "PLO3": this.dataset[k].PLO_Three_Skill_Mapped_Count != 0 ? 'X' : '-',
                "PLO4": this.dataset[k].PLO_Four_Skill_Mapped_Count != 0 ? 'X' : '-',
                "PLO5": this.dataset[k].PLO_Five_Skill_Mapped_Count != 0 ? 'X' : '-',
                "PLO6": this.dataset[k].PLO_Six_Skill_Mapped_Count != 0 ? 'X' : '-',
                "PLO7": this.dataset[k].PLO_Seven_Skill_Mapped_Count != 0 ? 'X' : '-',
                "PLO8": this.dataset[k].PLO_Eight_Skill_Mapped_Count != 0 ? 'X' : '-',
                "PLO9": this.dataset[k].PLO_Nine_Skill_Mapped_Count != 0 ? 'X' : '-',
                "PLO10": this.dataset[k].PLO_Ten_Skill_Mapped_Count != 0 ? 'X' : '-',
                "PLO11": this.dataset[k].PLO_Eleven_Skill_Mapped_Count != 0 ? 'X' : '-',
                "PLO12": this.dataset[k].PLO_Twelth_Skill_Mapped_Count != 0 ? 'X' : '-'
              });
              SrNumber += 1;
            }

            var ws = xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].aoa_to_sheet(Heading);
            ws["!cols"] = [{
              wpx: 25
            }, {
              wpx: 200
            }, {
              wpx: 100
            }, {
              wpx: 60
            }, {
              wpx: 60
            }, {
              wpx: 60
            }, {
              wpx: 60
            }, {
              wpx: 60
            }, {
              wpx: 60
            }, {
              wpx: 60
            }, {
              wpx: 60
            }, {
              wpx: 60
            }, {
              wpx: 60
            }, {
              wpx: 60
            }, {
              wpx: 60
            }];
            xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].sheet_add_json(ws, Data, {
              skipHeader: true,
              origin: -1
            });
            xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].book_append_sheet(wb, ws, "PLOs Course Mapping");
            var wbout = xlsx__WEBPACK_IMPORTED_MODULE_5__["write"](wb, {
              bookType: 'xlsx',
              type: 'array'
            });
            file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"](new Blob([wbout], {
              type: "application/octet-stream"
            }), 'PLOs Course Mapping' + ".xlsx");
          }
        }
      }]);

      return PeosComponent;
    }();

    PeosComponent.ɵfac = function PeosComponent_Factory(t) {
      return new (t || PeosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_CourseSearch_CourseSearch_service__WEBPACK_IMPORTED_MODULE_7__["CoursesSearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_9__["NgxUiLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_Reports_reports_service__WEBPACK_IMPORTED_MODULE_10__["ReportsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_CourseCLOS_coursesCLO_service__WEBPACK_IMPORTED_MODULE_12__["CoursesCLOSService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Shared_Services_Global_Pager__WEBPACK_IMPORTED_MODULE_1__["PagerService"]));
    };

    PeosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PeosComponent,
      selectors: [["app-peos"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_Shared_Services_Global_Pager__WEBPACK_IMPORTED_MODULE_1__["PagerService"], _Shared_Pipe_highlight_pipe__WEBPACK_IMPORTED_MODULE_3__["HighlightPipe"], _Shared_Pipe_filter__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"]])],
      decls: 153,
      vars: 22,
      consts: [["role", "tabpanel", 1, "tab-pane", "active"], [1, "section-heading", "padding-b5"], ["id", "addModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "addModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "addModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], ["entryForm", "ngForm"], [1, "form-group"], ["for", "title"], ["type", "text", "id", "title", "name", "title", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["title", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["for", "description"], ["id", "description", "name", "description", "rows", "3", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["description", "ngModel"], ["type", "button", 1, "btn", "btn-secondary", 3, "disabled", "click"], [1, "mt-4"], [1, "table", "table-bordered"], [4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["role", "tabpanel", 1, "tab-pane", "active", 2, "margin", "20px"], [1, "margin-b15"], [1, "row"], [1, "col-sm-12"], [1, "padding-b5"], [1, "form-group", "col-sm-3"], [1, "control-label"], [1, "text-danger"], [1, "form-control", 3, "ngModel", "change"], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "IntakeID", 1, "form-control"], [1, "col-sm-1", "margin-t17"], [1, "btn", "btn-info", 3, "click"], [1, "pull-right"], ["type", "button", "data-toggle", "modal", "data-target", "#addModal", 1, "btn", "btn-info"], [1, "section-heading"], [1, "margin-b5"], [1, "pull-left"], [1, "has-feedback", "pull-left"], ["type", "text", "placeholder", "Search Records", 1, "form-control", "width-200", 3, "ngModel", "ngModelChange"], [1, "form-control-feedback"], [1, "app-icon-IconSet-1-92"], [1, "pull-left", "margin-l5"], [1, "form-inline"], [1, "form-group", "margin-r10", 2, "width", "110%"], [1, "control-label", "margin-r10"], [1, "form-control", "input-xs", "margin-r5", 2, "width", "30%", 3, "ngModel", "change", "ngModelChange"], [1, "btn-group", "left-dropdown"], ["type", "button", "id", "dropdownMenu1", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-default", "btn-sm", "dropdown-toggle"], [1, "caret"], ["aria-labelledby", "dropdownMenu1", 1, "dropdown-menu"], [3, "click"], [1, "clearfix"], [1, "table-responsive", 2, "max-height", "34vh", "overflow-y", "auto"], [1, "table", "table-hover", "table-theme", "margin-b30"], [1, "pagination-bottom"], ["class", "form-group", 4, "ngIf"], [1, "form-inline", "pull-right", "margin-b5"], ["class", "table-pagination pull-right", 4, "ngIf"], [3, "value"], ["align", "center"], [1, "blue"], [3, "innerHTML"], ["onclick", ""], [1, "control-label", "padding-t5"], [1, "table-pagination", "pull-right"], ["data-original-title", "First Page", "title", "", 1, "btn", "btn-default", 3, "ngClass", "disabled", "click"], [1, "fa", "fa-backward"], ["data-original-title", "Previous", "title", "", 1, "btn", "btn-default", 3, "ngClass", "disabled", "click"], [1, "fa", "fa-caret-left"], ["type", "text", "value", "1", "disabled", "", 1, "form-control", 2, "width", "50px", 3, "ngModel", "ngModelChange", "keyup", "keypress"], ["data-original-title", "Next", "title", "", 1, "btn", "btn-default", 3, "ngClass", "disabled", "click"], [1, "fa", "fa-caret-right"], ["data-original-title", "Last", "title", "", 1, "btn", "btn-default", 3, "ngClass", "disabled", "click"], [1, "fa", "fa-forward"]],
      template: function PeosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Manage PEOs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Add New PEO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", null, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "PEO Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PeosComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.newEntry.title = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PeosComponent_div_21_Template, 2, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "textarea", 17, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PeosComponent_Template_textarea_ngModelChange_25_listener($event) {
            return ctx.newEntry.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, PeosComponent_div_28_Template, 2, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PeosComponent_Template_button_click_29_listener($event) {
            return ctx.addEntry();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Add ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Temporary Entries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "table", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "PEO Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, PeosComponent_tr_41_Template, 5, 2, "tr", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PeosComponent_Template_button_click_43_listener($event) {
            return ctx.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PeosComponent_Template_button_click_45_listener($event) {
            return ctx.saveEntries();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Current PEOs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "fieldset", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "legend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Criteria");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Select Institute ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "select", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PeosComponent_Template_select_change_63_listener($event) {
            return ctx.Get_Department($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Select Institute");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, PeosComponent_option_66_Template, 2, 2, "option", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Select Department ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "select", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PeosComponent_Template_select_change_72_listener($event) {
            return ctx.Get_Intakes($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Select Deparment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, PeosComponent_option_75_Template, 2, 2, "option", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Select Intake ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "select", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Select Intake");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, PeosComponent_option_84_Template, 2, 2, "option", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PeosComponent_Template_button_click_86_listener($event) {
            return ctx.GetPLOS();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Add New PEO ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "List Of Added PEOs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PeosComponent_Template_input_ngModelChange_98_listener($event) {
            return ctx.query = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Show");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "select", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PeosComponent_Template_select_change_106_listener($event) {
            return ctx.setPage(1, ctx.pagesize);
          })("ngModelChange", function PeosComponent_Template_select_ngModelChange_106_listener($event) {
            return ctx.pagesize = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Per Page");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "button", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " Export ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "span", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "ul", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PeosComponent_Template_a_click_126_listener($event) {
            return ctx.DownloadExcel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Excel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "table", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Sr#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "PEO TITLE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "PEO DESCRIPTION");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](143, PeosComponent_ng_container_143_Template, 14, 9, "ng-container", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](144, "filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](148, PeosComponent_div_148_Template, 3, 0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](149, PeosComponent_div_149_Template, 3, 3, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](151, PeosComponent_div_151_Template, 12, 18, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1529 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

          var _r1530 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

          var _r1532 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newEntry.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1530.invalid && _r1530.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newEntry.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1532.invalid && _r1532.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r1529.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.temporaryEntries);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Temp_Institute_ID);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.Temp_Institute_ID != 0 ? "disabled" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Institutes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Temp_Deaprtment_ID);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.Temp_Deaprtment_ID != 0 ? "disabled" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Department);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Intake);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.query);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pagesize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](144, 19, ctx.All_PLOS, ctx.query));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.All_PLOS == null || (ctx.All_PLOS == null ? null : ctx.All_PLOS.length) == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.All_PLOS == null ? null : ctx.All_PLOS.length) >= 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.pager == null ? null : ctx.pager.pages) && (ctx.pager == null ? null : ctx.pager.pages.length));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"]],
      pipes: [_Shared_Pipe_filter__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"], _Shared_Pipe_highlight_pipe__WEBPACK_IMPORTED_MODULE_3__["HighlightPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL3NldHRpbmcvcGVvcy9wZW9zLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-peos',
          templateUrl: './peos.component.html',
          styleUrls: ['./peos.component.css'],
          providers: [_Shared_Services_Global_Pager__WEBPACK_IMPORTED_MODULE_1__["PagerService"], _Shared_Pipe_highlight_pipe__WEBPACK_IMPORTED_MODULE_3__["HighlightPipe"], _Shared_Pipe_filter__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"]]
        }]
      }], function () {
        return [{
          type: _Services_CourseSearch_CourseSearch_service__WEBPACK_IMPORTED_MODULE_7__["CoursesSearchService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]
        }, {
          type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_9__["NgxUiLoaderService"]
        }, {
          type: _Services_Reports_reports_service__WEBPACK_IMPORTED_MODULE_10__["ReportsService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"]
        }, {
          type: _Services_CourseCLOS_coursesCLO_service__WEBPACK_IMPORTED_MODULE_12__["CoursesCLOSService"]
        }, {
          type: _Shared_Services_Global_Pager__WEBPACK_IMPORTED_MODULE_1__["PagerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/setting/plos/plos.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/Features/setting/plos/plos.component.ts ***!
    \*********************************************************/

  /*! exports provided: PlosComponent */

  /***/
  function srcAppFeaturesSettingPlosPlosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlosComponent", function () {
      return PlosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Shared_Services_Global_Pager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../Shared/Services/Global/Pager */
    "./src/app/Shared/Services/Global/Pager.ts");
    /* harmony import */


    var _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../Shared/Services/Global/global.service */
    "./src/app/Shared/Services/Global/global.service.ts");
    /* harmony import */


    var _Shared_Pipe_highlight_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../Shared/Pipe/highlight.pipe */
    "./src/app/Shared/Pipe/highlight.pipe.ts");
    /* harmony import */


    var _Shared_Pipe_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../Shared/Pipe/filter */
    "./src/app/Shared/Pipe/filter.ts");
    /* harmony import */


    var xlsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! xlsx */
    "./node_modules/xlsx/xlsx.js");
    /* harmony import */


    var xlsx__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! file-saver */
    "./node_modules/file-saver/dist/FileSaver.min.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _Services_CourseSearch_CourseSearch_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../Services/CourseSearch/CourseSearch.service */
    "./src/app/Services/CourseSearch/CourseSearch.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-ui-loader */
    "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm2015/ngx-ui-loader.js");
    /* harmony import */


    var _Services_Reports_reports_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../Services/Reports/reports.service */
    "./src/app/Services/Reports/reports.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _Services_CourseCLOS_coursesCLO_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./../../../Services/CourseCLOS/coursesCLO.service */
    "./src/app/Services/CourseCLOS/coursesCLO.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PlosComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Title is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PlosComponent_div_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Description is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PlosComponent_tr_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var entry_r1516 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entry_r1516.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entry_r1516.description);
      }
    }

    function PlosComponent_option_66_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r1517 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", i_r1517.InstituteID);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1517.InstituteShortName);
      }
    }

    function PlosComponent_option_75_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r1518 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", i_r1518.DepartmentID);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1518.DepartmentName);
      }
    }

    function PlosComponent_option_84_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r1519 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", i_r1519.AdmissionOpenProgramID);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1519.semesterAlia);
      }
    }

    function PlosComponent_ng_container_143_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "highlight");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "highlight");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var i_r1520 = ctx.$implicit;

        var ctx_r1512 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1520.Sr_Number);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 3, i_r1520.PLO_Title, ctx_r1512.query), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 6, i_r1520.PLO_Description, ctx_r1512.query), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function PlosComponent_div_148_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Showing 0 to 0 of 0 entries");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PlosComponent_div_149_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1514 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("Showing ", (ctx_r1514.pager == null ? null : ctx_r1514.pager.startIndex) + 1, " to ", (ctx_r1514.pager == null ? null : ctx_r1514.pager.endIndex) + 1, " of ", ctx_r1514.pager == null ? null : ctx_r1514.pager.totalItems, " entries");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        disabled: a0
      };
    };

    function PlosComponent_div_151_Template(rf, ctx) {
      if (rf & 1) {
        var _r1522 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlosComponent_div_151_Template_button_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1522);

          var ctx_r1521 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1521.setPage(1, ctx_r1521.pagesize);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlosComponent_div_151_Template_button_click_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1522);

          var ctx_r1523 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1523.setPage((ctx_r1523.pager == null ? null : ctx_r1523.pager.currentPage) - 1, ctx_r1523.pagesize);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PlosComponent_div_151_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1522);

          var ctx_r1524 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1524.page = $event;
        })("keyup", function PlosComponent_div_151_Template_input_keyup_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1522);

          var ctx_r1525 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1525.setPage(ctx_r1525.page);
        })("keypress", function PlosComponent_div_151_Template_input_keypress_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1522);

          var ctx_r1526 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1526.keyRestrict($event, "0123456789");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlosComponent_div_151_Template_button_click_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1522);

          var ctx_r1527 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1527.setPage((ctx_r1527.pager == null ? null : ctx_r1527.pager.currentPage) + 1, ctx_r1527.pagesize);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlosComponent_div_151_Template_button_click_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1522);

          var ctx_r1528 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1528.setPage(ctx_r1528.pager == null ? null : ctx_r1528.pager.totalPages, ctx_r1528.pagesize);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1515 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, (ctx_r1515.pager == null ? null : ctx_r1515.pager.currentPage) === 1))("disabled", (ctx_r1515.pager == null ? null : ctx_r1515.pager.currentPage) === 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, (ctx_r1515.pager == null ? null : ctx_r1515.pager.currentPage) === 1))("disabled", (ctx_r1515.pager == null ? null : ctx_r1515.pager.currentPage) === 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1515.page);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("of ", ctx_r1515.pager == null ? null : ctx_r1515.pager.totalPages, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, (ctx_r1515.pager == null ? null : ctx_r1515.pager.currentPage) === (ctx_r1515.pager == null ? null : ctx_r1515.pager.totalPages)))("disabled", (ctx_r1515.pager == null ? null : ctx_r1515.pager.currentPage) == (ctx_r1515.pager == null ? null : ctx_r1515.pager.totalPages));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, (ctx_r1515.pager == null ? null : ctx_r1515.pager.currentPage) === (ctx_r1515.pager == null ? null : ctx_r1515.pager.totalPages)))("disabled", (ctx_r1515.pager == null ? null : ctx_r1515.pager.currentPage) == (ctx_r1515.pager == null ? null : ctx_r1515.pager.totalPages));
      }
    }

    var PlosComponent =
    /*#__PURE__*/
    function () {
      function PlosComponent(_CoursesSearchService, toastr, ngxService, _ReportsService, formBuilder, CoursesCLOSService, pagerService) {
        _classCallCheck(this, PlosComponent);

        this._CoursesSearchService = _CoursesSearchService;
        this.toastr = toastr;
        this.ngxService = ngxService;
        this._ReportsService = _ReportsService;
        this.formBuilder = formBuilder;
        this.CoursesCLOSService = CoursesCLOSService;
        this.pagerService = pagerService;
        this.newEntry = {
          title: '',
          description: ''
        };
        this.temporaryEntries = [];
        this.All_PLOS = [];
        this.Institutes = [];
        this.Department = [];
        this.Intake = [];
        this.Is_Permission_Institute = false;
        this.Is_Permission_Deaprtment = false;
        this.Is_Permission_Faculty = false;
        this.Is_Have_Special_Permission = false;
        this.Add_Permission = false;
        this.query = "";
        this.pager = {};
        this.pagesize = 50;
        this.dataset = [];
        this.Selected_Semester = "";
        this.Temp_Institute_ID = 0;
        this.Temp_Deaprtment_ID = 0;
        this.Is_Permission_Institute = _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"].Permissions.indexOf("Institute_Dropdown") >= 0 ? true : false;
        this.Is_Permission_Deaprtment = _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"].Permissions.indexOf("Department_Dropdown") >= 0 ? true : false;

        if (!this.Is_Permission_Institute) {
          this.Temp_Institute_ID = _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"].Institute_ID;
        }

        if (!this.Is_Permission_Deaprtment) {
          this.Temp_Deaprtment_ID = _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"].Deaprtment_ID;
        }
      }

      _createClass(PlosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.All_PLOS = [];
          this.Get_Institutes();
          this.Add_Permission = false;
          this.Is_Have_Special_Permission = false;
        }
      }, {
        key: "addEntry",
        value: function addEntry() {
          if (this.newEntry.title && this.newEntry.description) {
            this.temporaryEntries.push(Object.assign({}, this.newEntry));
            this.newEntry = {
              title: '',
              description: ''
            }; // Clear the form fields
          } else {
            alert("Please fill out both Title and Description.");
          }
        }
      }, {
        key: "saveEntries",
        value: function saveEntries() {}
      }, {
        key: "cancel",
        value: function cancel() {
          this.temporaryEntries = [];
        }
      }, {
        key: "Get_Institutes",
        value: function Get_Institutes() {
          var _this12 = this;

          this.ngxService.start();
          this.Institutes = [];

          this._CoursesSearchService.Get_Institute().subscribe(function (response) {
            try {
              if (response != null) {
                if (_this12.Temp_Institute_ID != 0) {
                  _this12.Institutes = response.filter(function (x) {
                    return x.InstituteID == _this12.Temp_Institute_ID;
                  });

                  _this12.Get_Department(_this12.Temp_Institute_ID);
                } else {
                  _this12.Institutes = response;
                }
              }

              _this12.ngxService.stop();
            } catch (e) {
              _this12.ngxService.stop();

              _this12.toastr.error("Internal server error occured while processing your request", "Error!");
            }
          }, function (error) {
            _this12.ngxService.stop();

            _this12.toastr.error("Internal server error occured while processing your request", "Error!");
          });
        }
      }, {
        key: "Get_Department",
        value: function Get_Department(val) {
          var _this13 = this;

          if (val == undefined || val == null || val == "") return;
          this.ngxService.start();
          this.Department = [];

          this._CoursesSearchService.Get_Department(Number(val)).subscribe(function (response) {
            try {
              if (response != null) {
                if (_this13.Temp_Deaprtment_ID != 0) {
                  _this13.Department = response.filter(function (x) {
                    return x.DepartmentID == _this13.Temp_Deaprtment_ID;
                  });

                  _this13.Get_Intakes(_this13.Temp_Deaprtment_ID);
                } else {
                  _this13.Department = response;
                }
              }

              _this13.ngxService.stop();
            } catch (e) {
              _this13.ngxService.stop();

              _this13.toastr.error("Internal server error occured while processing your request", "Error!");
            }
          }, function (error) {
            _this13.ngxService.stop();

            _this13.toastr.error("Internal server error occured while processing your request", "Error!");
          });
        }
      }, {
        key: "Get_Intakes",
        value: function Get_Intakes(val) {
          var _this14 = this;

          if (val == undefined || val == null || val == "") return;
          this.ngxService.start();
          this.Intake = [];

          this._CoursesSearchService.Get_Intakes(Number(val)).subscribe(function (response) {
            try {
              if (response != null) {
                _this14.Intake = response;
              }

              _this14.ngxService.stop();
            } catch (e) {
              _this14.ngxService.stop();

              _this14.toastr.error("Internal server error occured while processing your request", "Error!");
            }
          }, function (error) {
            _this14.ngxService.stop();

            _this14.toastr.error("Internal server error occured while processing your request", "Error!");
          });
        }
      }, {
        key: "GetPLOS",
        value: function GetPLOS() {
          var _this15 = this;

          var itake = $("#IntakeID").val();
          this.ngxService.start();
          this.CoursesCLOSService.GetCourseCLOS(itake).subscribe(function (response) {
            if (response != null) {
              _this15.dataset = response.Course_CLOS;
              _this15.All_PLOS = response.All_PLOS;
            } else {
              _this15.All_PLOS = [];
            }

            _this15.ngxService.stop();

            _this15.setPage(1, _this15.pagesize);
          }, function (error) {
            _this15.All_PLOS = [];

            _this15.ngxService.stop();

            _this15.toastr.error("Internal server error occured while processing your request", "Error!");
          });
        }
      }, {
        key: "setPage",
        value: function setPage(page, pagesize) {
          this.query = "";

          if ((page < 1 || page > this.pager.totalPages) && page != "") {
            this.page = 1;
            page = 1;
          }

          this.page = page;
          this.pager = this.pagerService.getPager(this.dataset.length, page, pagesize);
          this.serialNumber = this.pager.currentPage * this.pagesize - this.pagesize + this.serialNumber;
          this.All_PLOS = this.dataset.slice(this.pager.startIndex, this.pager.endIndex + 1);
        }
      }, {
        key: "keyRestrict",
        value: function keyRestrict(e, validchars, casesensitives, onceevery, onceoneof) {
          onceevery = onceevery ? onceevery : "";
          onceoneof = onceoneof ? onceoneof : "";
          if (!validchars) return true;
          var keychar = '',
              i = 0;
          var key = e.which ? e.which : e.keyCode;
          var obj = e.target ? e.target : e.srcElement;
          if (key == null) return true;
          keychar = String.fromCharCode(key);
          validchars = validchars + onceevery + onceoneof;

          if (!casesensitives) {
            keychar = keychar.toLowerCase();
            validchars = validchars.toLowerCase();
            onceevery = onceevery.toLowerCase();
            onceoneof = onceoneof.toLowerCase();
          }

          for (i = 0; i < (onceevery + onceoneof).length; i++) {
            if (i < onceevery.length) {
              if (obj.value.indexOf(onceevery.charAt(i)) != -1 && keychar == onceevery.charAt(i)) return false;
            } else {
              if (obj.value.indexOf(onceoneof.charAt(i - onceevery.length)) != -1 && onceoneof.indexOf(keychar) != -1) return false;
            }
          }

          if (validchars.indexOf(keychar) != -1) return true;
          if (key == null || key == 0 || key == 8 || key == 9 || key == 13 || key == 27 || key == 39 || key == 32) return true;
          return false;
        }
      }, {
        key: "DownloadExcel",
        value: function DownloadExcel() {
          if (this.dataset.length > 0) {
            var wb = xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].book_new();
            var header = [];
            var Data = [];
            var Heading = [];
            header.push("Sr.#", "Course Title", "Semester", "PLO1", "PLO2", "PLO3", "PLO4", "PLO5", "PLO6", "PLO7", "PLO8", "PLO9", "PLO10", "PLO11", "PLO12");
            Heading.push(header);
            var SrNumber = 1;

            for (var k = 0; k < this.dataset.length; k++) {
              Data.push({
                "SrNumber": SrNumber,
                "title": this.dataset[k].Title,
                "semesterAlia": this.dataset[k].semesterAlia,
                "PLO1": this.dataset[k].PLO_One_Skill_Mapped_Count != 0 ? 'X' : '-',
                "PLO2": this.dataset[k].PLO_Two_Skill_Mapped_Count != 0 ? 'X' : '-',
                "PLO3": this.dataset[k].PLO_Three_Skill_Mapped_Count != 0 ? 'X' : '-',
                "PLO4": this.dataset[k].PLO_Four_Skill_Mapped_Count != 0 ? 'X' : '-',
                "PLO5": this.dataset[k].PLO_Five_Skill_Mapped_Count != 0 ? 'X' : '-',
                "PLO6": this.dataset[k].PLO_Six_Skill_Mapped_Count != 0 ? 'X' : '-',
                "PLO7": this.dataset[k].PLO_Seven_Skill_Mapped_Count != 0 ? 'X' : '-',
                "PLO8": this.dataset[k].PLO_Eight_Skill_Mapped_Count != 0 ? 'X' : '-',
                "PLO9": this.dataset[k].PLO_Nine_Skill_Mapped_Count != 0 ? 'X' : '-',
                "PLO10": this.dataset[k].PLO_Ten_Skill_Mapped_Count != 0 ? 'X' : '-',
                "PLO11": this.dataset[k].PLO_Eleven_Skill_Mapped_Count != 0 ? 'X' : '-',
                "PLO12": this.dataset[k].PLO_Twelth_Skill_Mapped_Count != 0 ? 'X' : '-'
              });
              SrNumber += 1;
            }

            var ws = xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].aoa_to_sheet(Heading);
            ws["!cols"] = [{
              wpx: 25
            }, {
              wpx: 200
            }, {
              wpx: 100
            }, {
              wpx: 60
            }, {
              wpx: 60
            }, {
              wpx: 60
            }, {
              wpx: 60
            }, {
              wpx: 60
            }, {
              wpx: 60
            }, {
              wpx: 60
            }, {
              wpx: 60
            }, {
              wpx: 60
            }, {
              wpx: 60
            }, {
              wpx: 60
            }, {
              wpx: 60
            }];
            xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].sheet_add_json(ws, Data, {
              skipHeader: true,
              origin: -1
            });
            xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].book_append_sheet(wb, ws, "PLOs Course Mapping");
            var wbout = xlsx__WEBPACK_IMPORTED_MODULE_5__["write"](wb, {
              bookType: 'xlsx',
              type: 'array'
            });
            file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"](new Blob([wbout], {
              type: "application/octet-stream"
            }), 'PLOs Course Mapping' + ".xlsx");
          }
        }
      }]);

      return PlosComponent;
    }();

    PlosComponent.ɵfac = function PlosComponent_Factory(t) {
      return new (t || PlosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_CourseSearch_CourseSearch_service__WEBPACK_IMPORTED_MODULE_7__["CoursesSearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_9__["NgxUiLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_Reports_reports_service__WEBPACK_IMPORTED_MODULE_10__["ReportsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_CourseCLOS_coursesCLO_service__WEBPACK_IMPORTED_MODULE_12__["CoursesCLOSService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Shared_Services_Global_Pager__WEBPACK_IMPORTED_MODULE_1__["PagerService"]));
    };

    PlosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PlosComponent,
      selectors: [["app-plos"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_Shared_Services_Global_Pager__WEBPACK_IMPORTED_MODULE_1__["PagerService"], _Shared_Pipe_highlight_pipe__WEBPACK_IMPORTED_MODULE_3__["HighlightPipe"], _Shared_Pipe_filter__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"]])],
      decls: 153,
      vars: 22,
      consts: [["role", "tabpanel", 1, "tab-pane", "active"], [1, "section-heading", "padding-b5"], ["id", "addModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "addModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "addModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], ["entryForm", "ngForm"], [1, "form-group"], ["for", "title"], ["type", "text", "id", "title", "name", "title", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["title", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["for", "description"], ["id", "description", "name", "description", "rows", "3", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["description", "ngModel"], ["type", "button", 1, "btn", "btn-secondary", 3, "disabled", "click"], [1, "mt-4"], [1, "table", "table-bordered"], [4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["role", "tabpanel", 1, "tab-pane", "active", 2, "margin", "20px"], [1, "margin-b15"], [1, "row"], [1, "col-sm-12"], [1, "padding-b5"], [1, "form-group", "col-sm-3"], [1, "control-label"], [1, "text-danger"], [1, "form-control", 3, "ngModel", "change"], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "IntakeID", 1, "form-control"], [1, "col-sm-1", "margin-t17"], [1, "btn", "btn-info", 3, "click"], [1, "pull-right"], ["type", "button", "data-toggle", "modal", "data-target", "#addModal", 1, "btn", "btn-info"], [1, "section-heading"], [1, "margin-b5"], [1, "pull-left"], [1, "has-feedback", "pull-left"], ["type", "text", "placeholder", "Search Records", 1, "form-control", "width-200", 3, "ngModel", "ngModelChange"], [1, "form-control-feedback"], [1, "app-icon-IconSet-1-92"], [1, "pull-left", "margin-l5"], [1, "form-inline"], [1, "form-group", "margin-r10", 2, "width", "110%"], [1, "control-label", "margin-r10"], [1, "form-control", "input-xs", "margin-r5", 2, "width", "30%", 3, "ngModel", "change", "ngModelChange"], [1, "btn-group", "left-dropdown"], ["type", "button", "id", "dropdownMenu1", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-default", "btn-sm", "dropdown-toggle"], [1, "caret"], ["aria-labelledby", "dropdownMenu1", 1, "dropdown-menu"], [3, "click"], [1, "clearfix"], [1, "table-responsive", 2, "max-height", "34vh", "overflow-y", "auto"], [1, "table", "table-hover", "table-theme", "margin-b30"], [1, "pagination-bottom"], ["class", "form-group", 4, "ngIf"], [1, "form-inline", "pull-right", "margin-b5"], ["class", "table-pagination pull-right", 4, "ngIf"], [3, "value"], ["align", "center"], [1, "blue"], [3, "innerHTML"], ["onclick", ""], [1, "control-label", "padding-t5"], [1, "table-pagination", "pull-right"], ["data-original-title", "First Page", "title", "", 1, "btn", "btn-default", 3, "ngClass", "disabled", "click"], [1, "fa", "fa-backward"], ["data-original-title", "Previous", "title", "", 1, "btn", "btn-default", 3, "ngClass", "disabled", "click"], [1, "fa", "fa-caret-left"], ["type", "text", "value", "1", "disabled", "", 1, "form-control", 2, "width", "50px", 3, "ngModel", "ngModelChange", "keyup", "keypress"], ["data-original-title", "Next", "title", "", 1, "btn", "btn-default", 3, "ngClass", "disabled", "click"], [1, "fa", "fa-caret-right"], ["data-original-title", "Last", "title", "", 1, "btn", "btn-default", 3, "ngClass", "disabled", "click"], [1, "fa", "fa-forward"]],
      template: function PlosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Manage PLOs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Add New Entry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", null, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PlosComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.newEntry.title = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PlosComponent_div_21_Template, 2, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "textarea", 17, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PlosComponent_Template_textarea_ngModelChange_25_listener($event) {
            return ctx.newEntry.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, PlosComponent_div_28_Template, 2, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlosComponent_Template_button_click_29_listener($event) {
            return ctx.addEntry();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Add ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Temporary Entries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "table", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, PlosComponent_tr_41_Template, 5, 2, "tr", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlosComponent_Template_button_click_43_listener($event) {
            return ctx.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlosComponent_Template_button_click_45_listener($event) {
            return ctx.saveEntries();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Current PLOs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "fieldset", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "legend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Criteria");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Select Institute ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "select", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PlosComponent_Template_select_change_63_listener($event) {
            return ctx.Get_Department($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Select Institute");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, PlosComponent_option_66_Template, 2, 2, "option", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Select Department ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "select", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PlosComponent_Template_select_change_72_listener($event) {
            return ctx.Get_Intakes($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Select Deparment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, PlosComponent_option_75_Template, 2, 2, "option", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Select Intake ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "select", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Select Intake");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, PlosComponent_option_84_Template, 2, 2, "option", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlosComponent_Template_button_click_86_listener($event) {
            return ctx.GetPLOS();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Add New Entry ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "List Of Added PLOs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PlosComponent_Template_input_ngModelChange_98_listener($event) {
            return ctx.query = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Show");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "select", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PlosComponent_Template_select_change_106_listener($event) {
            return ctx.setPage(1, ctx.pagesize);
          })("ngModelChange", function PlosComponent_Template_select_ngModelChange_106_listener($event) {
            return ctx.pagesize = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Per Page");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "button", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " Export ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "span", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "ul", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlosComponent_Template_a_click_126_listener($event) {
            return ctx.DownloadExcel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Excel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "table", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Sr#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "PLO TITLE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "PLO DESCRIPTION");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](143, PlosComponent_ng_container_143_Template, 14, 9, "ng-container", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](144, "filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](148, PlosComponent_div_148_Template, 3, 0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](149, PlosComponent_div_149_Template, 3, 3, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](151, PlosComponent_div_151_Template, 12, 18, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1503 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

          var _r1504 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

          var _r1506 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newEntry.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1504.invalid && _r1504.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newEntry.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1506.invalid && _r1506.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r1503.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.temporaryEntries);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Temp_Institute_ID);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.Temp_Institute_ID != 0 ? "disabled" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Institutes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Temp_Deaprtment_ID);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.Temp_Deaprtment_ID != 0 ? "disabled" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Department);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Intake);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.query);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pagesize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](144, 19, ctx.All_PLOS, ctx.query));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.All_PLOS == null || (ctx.All_PLOS == null ? null : ctx.All_PLOS.length) == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.All_PLOS == null ? null : ctx.All_PLOS.length) >= 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.pager == null ? null : ctx.pager.pages) && (ctx.pager == null ? null : ctx.pager.pages.length));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"]],
      pipes: [_Shared_Pipe_filter__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"], _Shared_Pipe_highlight_pipe__WEBPACK_IMPORTED_MODULE_3__["HighlightPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL3NldHRpbmcvcGxvcy9wbG9zLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-plos',
          templateUrl: './plos.component.html',
          styleUrls: ['./plos.component.css'],
          providers: [_Shared_Services_Global_Pager__WEBPACK_IMPORTED_MODULE_1__["PagerService"], _Shared_Pipe_highlight_pipe__WEBPACK_IMPORTED_MODULE_3__["HighlightPipe"], _Shared_Pipe_filter__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"]]
        }]
      }], function () {
        return [{
          type: _Services_CourseSearch_CourseSearch_service__WEBPACK_IMPORTED_MODULE_7__["CoursesSearchService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]
        }, {
          type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_9__["NgxUiLoaderService"]
        }, {
          type: _Services_Reports_reports_service__WEBPACK_IMPORTED_MODULE_10__["ReportsService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"]
        }, {
          type: _Services_CourseCLOS_coursesCLO_service__WEBPACK_IMPORTED_MODULE_12__["CoursesCLOSService"]
        }, {
          type: _Shared_Services_Global_Pager__WEBPACK_IMPORTED_MODULE_1__["PagerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/setting/send-form/send-form.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/Features/setting/send-form/send-form.component.ts ***!
    \*******************************************************************/

  /*! exports provided: SendFormComponent */

  /***/
  function srcAppFeaturesSettingSendFormSendFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SendFormComponent", function () {
      return SendFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Services_Settings_setting_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../Services/Settings/setting.service */
    "./src/app/Services/Settings/setting.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-ui-loader */
    "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm2015/ngx-ui-loader.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var SendFormComponent =
    /*#__PURE__*/
    function () {
      function SendFormComponent(settingService, toastr, ngxService) {
        _classCallCheck(this, SendFormComponent);

        this.settingService = settingService;
        this.toastr = toastr;
        this.ngxService = ngxService;
        this.CSPForm = "";
        this.InternshipForm = "";
        this.ExitSurveyForm = "";
      }

      _createClass(SendFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "SendEmail",
        value: function SendEmail(Status) {
          var _this16 = this;

          this.ngxService.start();
          var request = {};
          var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

          if (Status === 1) {
            request = {
              "Status": Status,
              "Email": this.CSPForm,
              "RootPath": ""
            };

            if (!filter.test(this.CSPForm)) {
              this.toastr.error("Invalid email", "Error!");
              return;
            }
          }

          if (Status === 2) {
            request = {
              "Status": Status,
              "Email": this.InternshipForm,
              "RootPath": ""
            };

            if (!filter.test(this.InternshipForm)) {
              this.toastr.error("Invalid email", "Error!");
              return;
            }
          }

          if (Status === 3) {
            request = {
              "Status": Status,
              "Email": this.ExitSurveyForm,
              "RootPath": ""
            };

            if (!filter.test(this.ExitSurveyForm)) {
              this.toastr.error("Invalid email", "Error!");
              return;
            }
          }

          this.settingService.SendSurveyForm(request).subscribe(function (response) {
            if (response != null) {
              _this16.toastr.success("Email sent successfully", "Success");

              _this16.CSPForm = "";
              _this16.InternshipForm = "";
              _this16.ExitSurveyForm = "";
            }

            _this16.ngxService.stop();
          }, function (error) {
            _this16.ngxService.stop();

            _this16.toastr.error("Internal server error occured while processing your request", "Error!");
          });
        }
      }]);

      return SendFormComponent;
    }();

    SendFormComponent.ɵfac = function SendFormComponent_Factory(t) {
      return new (t || SendFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_Settings_setting_service__WEBPACK_IMPORTED_MODULE_1__["SettingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"]));
    };

    SendFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SendFormComponent,
      selectors: [["app-send-form"]],
      decls: 48,
      vars: 3,
      consts: [[1, "dashboard-box", "dash-box-right"], [1, "dashboard-scroller", "setups-widget", "mCustomScrollbar"], [1, "table-responsive"], [1, "table", "table-hover", "table-theme"], ["align", "center"], [1, "blue"], ["type", "text", "name", "CSPForm", "placeholder", "Enter Email", 1, "form-control", "input-sm", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-info", 3, "click"], ["type", "text", "name", "InternshipForm", "placeholder", "Enter Email", 1, "form-control", "input-sm", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "ExitSurveyForm", "placeholder", "Enter Email", 1, "form-control", "input-sm", 3, "ngModel", "ngModelChange"]],
      template: function SendFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sr. #");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Form Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Send To");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " CSP Form ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SendFormComponent_Template_input_ngModelChange_22_listener($event) {
            return ctx.CSPForm = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SendFormComponent_Template_button_click_24_listener($event) {
            return ctx.SendEmail(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Send");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "b", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Internship Form ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SendFormComponent_Template_input_ngModelChange_33_listener($event) {
            return ctx.InternshipForm = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SendFormComponent_Template_button_click_35_listener($event) {
            return ctx.SendEmail(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Send");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Exit Survey Form ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SendFormComponent_Template_input_ngModelChange_44_listener($event) {
            return ctx.ExitSurveyForm = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SendFormComponent_Template_button_click_46_listener($event) {
            return ctx.SendEmail(3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Send");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.CSPForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.InternshipForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ExitSurveyForm);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL3NldHRpbmcvc2VuZC1mb3JtL3NlbmQtZm9ybS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SendFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-send-form',
          templateUrl: './send-form.component.html',
          styleUrls: ['./send-form.component.css']
        }]
      }], function () {
        return [{
          type: _Services_Settings_setting_service__WEBPACK_IMPORTED_MODULE_1__["SettingService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
        }, {
          type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/setting/setting-main/setting-main.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/Features/setting/setting-main/setting-main.component.ts ***!
    \*************************************************************************/

  /*! exports provided: SettingMainComponent */

  /***/
  function srcAppFeaturesSettingSettingMainSettingMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingMainComponent", function () {
      return SettingMainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../Shared/Services/Global/global.service */
    "./src/app/Shared/Services/Global/global.service.ts");
    /* harmony import */


    var _setting_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../setting.component */
    "./src/app/Features/setting/setting.component.ts");
    /* harmony import */


    var _Shared_Services_Global_interconnected_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../Shared/Services/Global/interconnected.service */
    "./src/app/Shared/Services/Global/interconnected.service.ts");
    /* harmony import */


    var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-ui-loader */
    "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm2015/ngx-ui-loader.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _fyp_settings_fyp_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../fyp-settings/fyp-settings.component */
    "./src/app/Features/setting/fyp-settings/fyp-settings.component.ts");
    /* harmony import */


    var _send_form_send_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../send-form/send-form.component */
    "./src/app/Features/setting/send-form/send-form.component.ts");
    /* harmony import */


    var _exit_survey_form_enable_exit_survey_form_enable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../exit-survey-form-enable/exit-survey-form-enable.component */
    "./src/app/Features/setting/exit-survey-form-enable/exit-survey-form-enable.component.ts");
    /* harmony import */


    var _update_role_and_password_update_role_and_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../update-role-and-password/update-role-and-password.component */
    "./src/app/Features/setting/update-role-and-password/update-role-and-password.component.ts");
    /* harmony import */


    var _plos_plos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../plos/plos.component */
    "./src/app/Features/setting/plos/plos.component.ts");
    /* harmony import */


    var _assessment_schemes_assessment_schemes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../assessment-schemes/assessment-schemes.component */
    "./src/app/Features/setting/assessment-schemes/assessment-schemes.component.ts");
    /* harmony import */


    var _peos_peos_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../peos/peos.component */
    "./src/app/Features/setting/peos/peos.component.ts");
    /* harmony import */


    var _skills_add_skill_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../skills/add-skill.component */
    "./src/app/Features/setting/skills/add-skill.component.ts");

    function SettingMainComponent_div_0_li_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r1441 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingMainComponent_div_0_li_16_Template_a_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1441);

          var ctx_r1440 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r1440.loadTab("Exit Survey Form");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Enable Exit Survey Form:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Enable exit survey form for selected intake");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SettingMainComponent_div_0_li_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r1443 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingMainComponent_div_0_li_17_Template_a_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1443);

          var ctx_r1442 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r1442.loadTab("Security");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Security and Role:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Update User Password and Role");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SettingMainComponent_div_0_ng_container_40_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-fyp-settings");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function SettingMainComponent_div_0_ng_container_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SettingMainComponent_div_0_ng_container_40_ng_container_1_Template, 2, 0, "ng-container", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1432 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1432.FYP_Settings);
      }
    }

    function SettingMainComponent_div_0_ng_container_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-send-form");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function SettingMainComponent_div_0_ng_container_43_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-exit-survey-form-enable");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function SettingMainComponent_div_0_ng_container_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SettingMainComponent_div_0_ng_container_43_ng_container_1_Template, 2, 0, "ng-container", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1434 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1434.Settings_Exit_Survey_Form);
      }
    }

    function SettingMainComponent_div_0_ng_container_44_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-update-role-and-password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function SettingMainComponent_div_0_ng_container_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SettingMainComponent_div_0_ng_container_44_ng_container_1_Template, 2, 0, "ng-container", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1435 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1435.Setting_Update_Password_And_Role);
      }
    }

    function SettingMainComponent_div_0_ng_container_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-plos");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function SettingMainComponent_div_0_ng_container_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-assessment-schemes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function SettingMainComponent_div_0_ng_container_50_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-peos");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function SettingMainComponent_div_0_ng_container_52_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-add-skill");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function SettingMainComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r1448 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Settings");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SettingMainComponent_div_0_li_16_Template, 6, 0, "li", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SettingMainComponent_div_0_li_17_Template, 6, 0, "li", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingMainComponent_div_0_Template_a_click_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1448);

          var ctx_r1447 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1447.loadTab("Manage PLOs");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Manage PLOs:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Add/Update PLOs intake wise");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingMainComponent_div_0_Template_a_click_25_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1448);

          var ctx_r1449 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1449.loadTab("Manage PEOs");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Manage PEOs:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingMainComponent_div_0_Template_a_click_30_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1448);

          var ctx_r1450 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1450.loadTab("Add skills");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Add Skills:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingMainComponent_div_0_Template_a_click_35_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1448);

          var ctx_r1451 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1451.loadTab("Assessment Schemes");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Assesment Schemes:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, SettingMainComponent_div_0_ng_container_40_Template, 2, 1, "ng-container", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, SettingMainComponent_div_0_ng_container_42_Template, 2, 0, "ng-container", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, SettingMainComponent_div_0_ng_container_43_Template, 2, 1, "ng-container", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, SettingMainComponent_div_0_ng_container_44_Template, 2, 1, "ng-container", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, SettingMainComponent_div_0_ng_container_46_Template, 2, 0, "ng-container", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, SettingMainComponent_div_0_ng_container_48_Template, 2, 0, "ng-container", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, SettingMainComponent_div_0_ng_container_50_Template, 2, 0, "ng-container", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, SettingMainComponent_div_0_ng_container_52_Template, 2, 0, "ng-container", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1429 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1429.Is_Permission_Settings_Exit_Survey_Form);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1429.Is_Permission_Setting_Update_Password_And_Role);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1429.Is_Permission_FYP_Settings);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1429.SendForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1429.Is_Permission_Settings_Exit_Survey_Form);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1429.Is_Permission_Setting_Update_Password_And_Role);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1429.Setting_Manage_PLOs);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1429.setting_manage_Assessment);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1429.setting_manage_peos);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1429.setting_add_skill);
      }
    }

    var SettingMainComponent =
    /*#__PURE__*/
    function () {
      function SettingMainComponent(SettingComponent, InterconnectedService, ngxService) {
        _classCallCheck(this, SettingMainComponent);

        this.SettingComponent = SettingComponent;
        this.InterconnectedService = InterconnectedService;
        this.ngxService = ngxService;
        this.FYP_Settings = false;
        this.SendForm = false;
        this.Settings_Exit_Survey_Form = false;
        this.Setting_Update_Password_And_Role = false;
        this.Setting_Manage_PLOs = false;
        this.setting_manage_Assessment = false;
        this.setting_manage_peos = false;
        this.setting_add_skill = false;
        this.Is_Permission_Setting_Main = false;
        this.Is_Permission_FYP_Settings = false;
        this.Is_Permission_FYP_Settings_Widget = false;
        this.Is_Permission_Settings_Exit_Survey_Form = false;
        this.Is_Permission_Setting_Update_Password_And_Role = false;
        this.Is_Permission_Setting_Manage_PLOs = false;
        this.Is_Permission_Setting_Main = _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"].Permissions.indexOf("Setting_Main") >= 0 ? true : false;
        this.Is_Permission_FYP_Settings = _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"].Permissions.indexOf("FYP_Settings") >= 0 ? true : false;
        this.Is_Permission_FYP_Settings_Widget = _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"].Permissions.indexOf("FYP_Settings_Widget") >= 0 ? true : false;
        this.Is_Permission_Settings_Exit_Survey_Form = _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"].Permissions.indexOf("Settings_Exit_Survey_Form") >= 0 ? true : false;
        this.Is_Permission_Setting_Update_Password_And_Role = _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"].Permissions.indexOf("Setting_Update_Password_And_Role") >= 0 ? true : false;
        this.Is_Permission_Setting_Manage_PLOs = _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"].Permissions.indexOf("Setting_Manage_PLOs") >= 0 ? true : false;
      }

      _createClass(SettingMainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.InterconnectedService.CloseTab.subscribe(function (search) {
            _this17.CloseTabContent();
          });
        }
      }, {
        key: "loadTab",
        value: function loadTab(Title) {
          $("#Content").removeClass('dashboard-bg');
          this.SettingComponent.ShowTab(Title);
          _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"].Report_Sub_Tab = true;

          if (Title == 'Add skills') {
            this.setting_add_skill = true;
            this.setting_manage_peos = false;
            this.setting_manage_Assessment = false;
            this.Setting_Manage_PLOs = false;
            this.Settings_Exit_Survey_Form = false;
            this.FYP_Settings = false;
            this.SendForm = false;
            this.Setting_Update_Password_And_Role = false;
          }

          if (Title == 'Manage PEOs') {
            this.setting_manage_peos = true;
            this.setting_manage_Assessment = false;
            this.Setting_Manage_PLOs = false;
            this.setting_add_skill = false;
            this.Settings_Exit_Survey_Form = false;
            this.FYP_Settings = false;
            this.SendForm = false;
            this.Setting_Update_Password_And_Role = false;
          }

          if (Title == 'Assessment Schemes') {
            this.setting_manage_Assessment = true;
            this.Setting_Manage_PLOs = false;
            this.Settings_Exit_Survey_Form = false;
            this.FYP_Settings = false;
            this.SendForm = false;
            this.Setting_Update_Password_And_Role = false;
            this.setting_manage_peos = false;
            this.setting_add_skill = false;
          }

          if (Title == 'FYP Module Settings') {
            this.FYP_Settings = true;
            this.SendForm = false;
            this.Settings_Exit_Survey_Form = false;
            this.Setting_Update_Password_And_Role = false;
            this.Setting_Manage_PLOs = false;
            this.setting_manage_peos = false;
            this.setting_manage_Assessment = false;
            this.setting_add_skill = false;
          }

          if (Title == 'Send Forms') {
            this.SendForm = true;
            this.setting_manage_Assessment = false;
            this.FYP_Settings = false;
            this.Settings_Exit_Survey_Form = false;
            this.Setting_Update_Password_And_Role = false;
            this.Setting_Manage_PLOs = false;
            this.setting_manage_peos = false;
            this.setting_add_skill = false;
          } else if (Title == 'Exit Survey Form') {
            this.Settings_Exit_Survey_Form = true;
            this.FYP_Settings = false;
            this.SendForm = false;
            this.Setting_Update_Password_And_Role = false;
            this.Setting_Manage_PLOs = false;
            this.setting_manage_Assessment = false;
            this.setting_manage_peos = false;
            this.setting_add_skill = false;
          } else if (Title == 'Security') {
            this.Setting_Update_Password_And_Role = true;
            this.Settings_Exit_Survey_Form = false;
            this.FYP_Settings = false;
            this.SendForm = false;
            this.Setting_Manage_PLOs = false;
            this.setting_manage_Assessment = false;
            this.setting_manage_peos = false;
            this.setting_add_skill = false;
          } else if (Title == 'Manage PLOs') {
            this.Setting_Manage_PLOs = true;
            this.Settings_Exit_Survey_Form = false;
            this.FYP_Settings = false;
            this.SendForm = false;
            this.Setting_Update_Password_And_Role = false;
            this.setting_manage_Assessment = false;
            this.setting_manage_peos = false;
            this.setting_add_skill = false;
          }

          $("#settings-tab").removeClass('active');
          $("#Any-tab").addClass('active');
        }
      }, {
        key: "CloseTabContent",
        value: function CloseTabContent() {
          $("#Content").addClass('dashboard-bg');
          $("#Any-tab").removeClass('active');
          $("#settings-tab").addClass('active');
          $("#SettingsMainTab").addClass('active');
        }
      }]);

      return SettingMainComponent;
    }();

    SettingMainComponent.ɵfac = function SettingMainComponent_Factory(t) {
      return new (t || SettingMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_setting_component__WEBPACK_IMPORTED_MODULE_2__["SettingComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Shared_Services_Global_interconnected_service__WEBPACK_IMPORTED_MODULE_3__["InterconnectedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderService"]));
    };

    SettingMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SettingMainComponent,
      selectors: [["app-setting-main"]],
      decls: 1,
      vars: 1,
      consts: [["class", "tab-content dashboard-bg", "id", "Content", 4, "ngIf"], ["id", "Content", 1, "tab-content", "dashboard-bg"], ["role", "tabpanel", "id", "settings-tab", 1, "tab-pane", "active", "MainReportTab"], [1, "row"], [1, "col-sm-6"], [1, "tab-content"], ["role", "tabpanel", "id", "dashboard-tab", 1, "tab-pane", "active", "main-dashboard"], [1, "dashboard-box"], [1, "box-panel-heading"], [1, "icon", "app-icon-IconSet-1-75"], [1, "box-panel-body"], [1, "col-xs-12"], [1, "arrow-blue-list"], [4, "ngIf"], [1, "underline", 3, "click"], [1, "text-muted"], ["role", "tabpanel", "id", "Any-tab", 1, "tab-pane", "active", "SubReportTab"]],
      template: function SettingMainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SettingMainComponent_div_0_Template, 53, 10, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Is_Permission_Setting_Main);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _fyp_settings_fyp_settings_component__WEBPACK_IMPORTED_MODULE_6__["FypSettingsComponent"], _send_form_send_form_component__WEBPACK_IMPORTED_MODULE_7__["SendFormComponent"], _exit_survey_form_enable_exit_survey_form_enable_component__WEBPACK_IMPORTED_MODULE_8__["ExitSurveyFormEnableComponent"], _update_role_and_password_update_role_and_password_component__WEBPACK_IMPORTED_MODULE_9__["UpdateRoleAndPasswordComponent"], _plos_plos_component__WEBPACK_IMPORTED_MODULE_10__["PlosComponent"], _assessment_schemes_assessment_schemes_component__WEBPACK_IMPORTED_MODULE_11__["AssessmentSchemesComponent"], _peos_peos_component__WEBPACK_IMPORTED_MODULE_12__["PeosComponent"], _skills_add_skill_component__WEBPACK_IMPORTED_MODULE_13__["AddSkillComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL3NldHRpbmcvc2V0dGluZy1tYWluL3NldHRpbmctbWFpbi5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingMainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-setting-main',
          templateUrl: './setting-main.component.html',
          styleUrls: ['./setting-main.component.css']
        }]
      }], function () {
        return [{
          type: _setting_component__WEBPACK_IMPORTED_MODULE_2__["SettingComponent"]
        }, {
          type: _Shared_Services_Global_interconnected_service__WEBPACK_IMPORTED_MODULE_3__["InterconnectedService"]
        }, {
          type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/setting/setting-routing.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/Features/setting/setting-routing.module.ts ***!
    \************************************************************/

  /*! exports provided: SettingRoutingModule */

  /***/
  function srcAppFeaturesSettingSettingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingRoutingModule", function () {
      return SettingRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _setting_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./setting.component */
    "./src/app/Features/setting/setting.component.ts");
    /* harmony import */


    var _setting_main_setting_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./setting-main/setting-main.component */
    "./src/app/Features/setting/setting-main/setting-main.component.ts");
    /* harmony import */


    var _Shared_Services_Global_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../Shared/Services/Global/auth.guard */
    "./src/app/Shared/Services/Global/auth.guard.ts");

    var routes = [{
      canActivate: [_Shared_Services_Global_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
      path: '',
      component: _setting_component__WEBPACK_IMPORTED_MODULE_2__["SettingComponent"],
      children: [{
        path: '',
        redirectTo: '/settings/main',
        pathMatch: 'full'
      }, {
        path: 'main',
        component: _setting_main_setting_main_component__WEBPACK_IMPORTED_MODULE_3__["SettingMainComponent"],
        canActivate: [_Shared_Services_Global_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }]
    }];

    var SettingRoutingModule = function SettingRoutingModule() {
      _classCallCheck(this, SettingRoutingModule);
    };

    SettingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SettingRoutingModule
    });
    SettingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SettingRoutingModule_Factory(t) {
        return new (t || SettingRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SettingRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/setting/setting.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Features/setting/setting.component.ts ***!
    \*******************************************************/

  /*! exports provided: SettingComponent */

  /***/
  function srcAppFeaturesSettingSettingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingComponent", function () {
      return SettingComponent;
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


    var _Shared_Services_Global_interconnected_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../Shared/Services/Global/interconnected.service */
    "./src/app/Shared/Services/Global/interconnected.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function SettingComponent_li_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r1428 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingComponent_li_8_Template_span_click_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1428);

          var ctx_r1427 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1427.closeTab();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1426 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1426.Tab_Title, " ");
      }
    }

    var SettingComponent =
    /*#__PURE__*/
    function () {
      function SettingComponent(_InterconnectedService) {
        _classCallCheck(this, SettingComponent);

        this._InterconnectedService = _InterconnectedService;
        this.Is_Sub_Active = false;
        this.Tab_Title = "";
        this.Is_Sub_Active = _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"].Report_Sub_Tab;
      }

      _createClass(SettingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.Tab_Title = "";
          this.Is_Sub_Active = false;
          $("#HeaderSemesterDropdown").addClass('hidden');
        }
      }, {
        key: "ShowTab",
        value: function ShowTab(Title) {
          this.Tab_Title = Title;
          $("#SettingsMainTab").removeClass('active');
          $("#SettingsSubTab").addClass('active');
          this.Is_Sub_Active = true;
        }
      }, {
        key: "closeTab",
        value: function closeTab() {
          this.Is_Sub_Active = false;
          $("#SettingsMainTab").addClass('active');

          this._InterconnectedService.CloseTriggeredTab("");
        }
      }]);

      return SettingComponent;
    }();

    SettingComponent.ɵfac = function SettingComponent_Factory(t) {
      return new (t || SettingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Shared_Services_Global_interconnected_service__WEBPACK_IMPORTED_MODULE_2__["InterconnectedService"]));
    };

    SettingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SettingComponent,
      selectors: [["app-setting"]],
      decls: 11,
      vars: 1,
      consts: [[1, "tab-content", "main-tab-content", "dragging-area"], ["id", "reports", 1, "tab-pane", "active"], [1, "tabs-menu"], ["role", "tablist", 1, "nav", "nav-tabs"], ["role", "presentation", "id", "SettingsMainTab", 1, "active"], ["href", "#settings-tab", "role", "tab", "data-toggle", "tab"], [1, "icon", "app-icon-IconSet-1-75", "padding-r5"], ["role", "presentation", "id", "SettingsSubTab", "class", "active", 4, "ngIf"], [1, "tab-content"], ["role", "presentation", "id", "SettingsSubTab", 1, "active"], ["href", "#Any-tab", "role", "tab", "data-toggle", "tab"], ["title", "", "data-original-title", "Close Tab", 1, "close-tab", 3, "click"], [1, "app-icon-IconSet-1-07"]],
      template: function SettingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Settings Main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SettingComponent_li_8_Template, 6, 1, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Is_Sub_Active);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL3NldHRpbmcvc2V0dGluZy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-setting',
          templateUrl: './setting.component.html',
          styleUrls: ['./setting.component.css']
        }]
      }], function () {
        return [{
          type: _Shared_Services_Global_interconnected_service__WEBPACK_IMPORTED_MODULE_2__["InterconnectedService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/setting/setting.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/Features/setting/setting.module.ts ***!
    \****************************************************/

  /*! exports provided: SettingModule */

  /***/
  function srcAppFeaturesSettingSettingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingModule", function () {
      return SettingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var angular_highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-highcharts */
    "./node_modules/angular-highcharts/__ivy_ngcc__/fesm2015/angular-highcharts.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _Shared_Services_Global_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../Shared/Services/Global/auth.guard */
    "./src/app/Shared/Services/Global/auth.guard.ts");
    /* harmony import */


    var _Shared_Services_Global_interceptor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../Shared/Services/Global/interceptor.service */
    "./src/app/Shared/Services/Global/interceptor.service.ts");
    /* harmony import */


    var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-ui-loader */
    "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm2015/ngx-ui-loader.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @sweetalert2/ngx-sweetalert2 */
    "./node_modules/@sweetalert2/ngx-sweetalert2/__ivy_ngcc__/fesm2015/sweetalert2-ngx-sweetalert2.js");
    /* harmony import */


    var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ng-pick-datetime */
    "./node_modules/ng-pick-datetime/__ivy_ngcc__/picker.js");
    /* harmony import */


    var _Shared_Pipe_pipesshared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../Shared/Pipe/pipesshared.module */
    "./src/app/Shared/Pipe/pipesshared.module.ts");
    /* harmony import */


    var _setting_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./setting-routing.module */
    "./src/app/Features/setting/setting-routing.module.ts");
    /* harmony import */


    var _setting_main_setting_main_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./setting-main/setting-main.component */
    "./src/app/Features/setting/setting-main/setting-main.component.ts");
    /* harmony import */


    var _setting_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./setting.component */
    "./src/app/Features/setting/setting.component.ts");
    /* harmony import */


    var _fyp_settings_fyp_settings_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./fyp-settings/fyp-settings.component */
    "./src/app/Features/setting/fyp-settings/fyp-settings.component.ts");
    /* harmony import */


    var _send_form_send_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./send-form/send-form.component */
    "./src/app/Features/setting/send-form/send-form.component.ts");
    /* harmony import */


    var _exit_survey_form_enable_exit_survey_form_enable_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./exit-survey-form-enable/exit-survey-form-enable.component */
    "./src/app/Features/setting/exit-survey-form-enable/exit-survey-form-enable.component.ts");
    /* harmony import */


    var _update_role_and_password_update_role_and_password_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./update-role-and-password/update-role-and-password.component */
    "./src/app/Features/setting/update-role-and-password/update-role-and-password.component.ts");
    /* harmony import */


    var _manage_plos_manage_plos_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./manage-plos/manage-plos.component */
    "./src/app/Features/setting/manage-plos/manage-plos.component.ts");
    /* harmony import */


    var _plos_plos_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./plos/plos.component */
    "./src/app/Features/setting/plos/plos.component.ts");
    /* harmony import */


    var _assessment_schemes_assessment_schemes_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./assessment-schemes/assessment-schemes.component */
    "./src/app/Features/setting/assessment-schemes/assessment-schemes.component.ts");
    /* harmony import */


    var _peos_peos_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./peos/peos.component */
    "./src/app/Features/setting/peos/peos.component.ts");
    /* harmony import */


    var _skills_add_skill_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./skills/add-skill.component */
    "./src/app/Features/setting/skills/add-skill.component.ts");

    var SettingModule = function SettingModule() {
      _classCallCheck(this, SettingModule);
    };

    SettingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SettingModule
    });
    SettingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SettingModule_Factory(t) {
        return new (t || SettingModule)();
      },
      providers: [_Shared_Services_Global_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
        useClass: _Shared_Services_Global_interceptor_service__WEBPACK_IMPORTED_MODULE_6__["InterceptorService"],
        multi: true
      }],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _setting_routing_module__WEBPACK_IMPORTED_MODULE_12__["SettingRoutingModule"], angular_highcharts__WEBPACK_IMPORTED_MODULE_2__["ChartModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__["NgxUiLoaderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_9__["SweetAlert2Module"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlDateTimeModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlNativeDateTimeModule"], _Shared_Pipe_pipesshared_module__WEBPACK_IMPORTED_MODULE_11__["PipessharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SettingModule, {
        declarations: [_setting_main_setting_main_component__WEBPACK_IMPORTED_MODULE_13__["SettingMainComponent"], _setting_component__WEBPACK_IMPORTED_MODULE_14__["SettingComponent"], _fyp_settings_fyp_settings_component__WEBPACK_IMPORTED_MODULE_15__["FypSettingsComponent"], _send_form_send_form_component__WEBPACK_IMPORTED_MODULE_16__["SendFormComponent"], _exit_survey_form_enable_exit_survey_form_enable_component__WEBPACK_IMPORTED_MODULE_17__["ExitSurveyFormEnableComponent"], _update_role_and_password_update_role_and_password_component__WEBPACK_IMPORTED_MODULE_18__["UpdateRoleAndPasswordComponent"], _manage_plos_manage_plos_component__WEBPACK_IMPORTED_MODULE_19__["ManagePlosComponent"], _plos_plos_component__WEBPACK_IMPORTED_MODULE_20__["PlosComponent"], _assessment_schemes_assessment_schemes_component__WEBPACK_IMPORTED_MODULE_21__["AssessmentSchemesComponent"], _peos_peos_component__WEBPACK_IMPORTED_MODULE_22__["PeosComponent"], _skills_add_skill_component__WEBPACK_IMPORTED_MODULE_23__["AddSkillComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _setting_routing_module__WEBPACK_IMPORTED_MODULE_12__["SettingRoutingModule"], angular_highcharts__WEBPACK_IMPORTED_MODULE_2__["ChartModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__["NgxUiLoaderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_9__["SweetAlert2Module"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlDateTimeModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlNativeDateTimeModule"], _Shared_Pipe_pipesshared_module__WEBPACK_IMPORTED_MODULE_11__["PipessharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_setting_main_setting_main_component__WEBPACK_IMPORTED_MODULE_13__["SettingMainComponent"], _setting_component__WEBPACK_IMPORTED_MODULE_14__["SettingComponent"], _fyp_settings_fyp_settings_component__WEBPACK_IMPORTED_MODULE_15__["FypSettingsComponent"], _send_form_send_form_component__WEBPACK_IMPORTED_MODULE_16__["SendFormComponent"], _exit_survey_form_enable_exit_survey_form_enable_component__WEBPACK_IMPORTED_MODULE_17__["ExitSurveyFormEnableComponent"], _update_role_and_password_update_role_and_password_component__WEBPACK_IMPORTED_MODULE_18__["UpdateRoleAndPasswordComponent"], _manage_plos_manage_plos_component__WEBPACK_IMPORTED_MODULE_19__["ManagePlosComponent"], _plos_plos_component__WEBPACK_IMPORTED_MODULE_20__["PlosComponent"], _assessment_schemes_assessment_schemes_component__WEBPACK_IMPORTED_MODULE_21__["AssessmentSchemesComponent"], _peos_peos_component__WEBPACK_IMPORTED_MODULE_22__["PeosComponent"], _skills_add_skill_component__WEBPACK_IMPORTED_MODULE_23__["AddSkillComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _setting_routing_module__WEBPACK_IMPORTED_MODULE_12__["SettingRoutingModule"], angular_highcharts__WEBPACK_IMPORTED_MODULE_2__["ChartModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__["NgxUiLoaderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_9__["SweetAlert2Module"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlDateTimeModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlNativeDateTimeModule"], _Shared_Pipe_pipesshared_module__WEBPACK_IMPORTED_MODULE_11__["PipessharedModule"]],
          providers: [_Shared_Services_Global_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
            useClass: _Shared_Services_Global_interceptor_service__WEBPACK_IMPORTED_MODULE_6__["InterceptorService"],
            multi: true
          }]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/setting/skills/add-skill.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/Features/setting/skills/add-skill.component.ts ***!
    \****************************************************************/

  /*! exports provided: AddSkillComponent */

  /***/
  function srcAppFeaturesSettingSkillsAddSkillComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddSkillComponent", function () {
      return AddSkillComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Shared_Services_Global_Pager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../Shared/Services/Global/Pager */
    "./src/app/Shared/Services/Global/Pager.ts");
    /* harmony import */


    var _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../Shared/Services/Global/global.service */
    "./src/app/Shared/Services/Global/global.service.ts");
    /* harmony import */


    var _Shared_Pipe_highlight_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../Shared/Pipe/highlight.pipe */
    "./src/app/Shared/Pipe/highlight.pipe.ts");
    /* harmony import */


    var _Shared_Pipe_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../Shared/Pipe/filter */
    "./src/app/Shared/Pipe/filter.ts");
    /* harmony import */


    var xlsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! xlsx */
    "./node_modules/xlsx/xlsx.js");
    /* harmony import */


    var xlsx__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! file-saver */
    "./node_modules/file-saver/dist/FileSaver.min.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _Services_CourseSearch_CourseSearch_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../Services/CourseSearch/CourseSearch.service */
    "./src/app/Services/CourseSearch/CourseSearch.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-ui-loader */
    "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm2015/ngx-ui-loader.js");
    /* harmony import */


    var _Services_Reports_reports_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../Services/Reports/reports.service */
    "./src/app/Services/Reports/reports.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _Services_CourseCLOS_coursesCLO_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./../../../Services/CourseCLOS/coursesCLO.service */
    "./src/app/Services/CourseCLOS/coursesCLO.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AddSkillComponent_option_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r1568 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r1568.CLO_Skill_Title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1568.CLO_Skill_Title);
      }
    }

    function AddSkillComponent_tr_39_Template(rf, ctx) {
      if (rf & 1) {
        var _r1572 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddSkillComponent_tr_39_Template_button_click_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1572);

          var i_r1570 = ctx.index;

          var ctx_r1571 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1571.editLevelItem(i_r1570);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddSkillComponent_tr_39_Template_button_click_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1572);

          var i_r1570 = ctx.index;

          var ctx_r1573 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1573.removeLevelItem(i_r1570);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1569 = ctx.$implicit;
        var i_r1570 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1570 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1569.skill);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1569.level);
      }
    }

    function AddSkillComponent_div_62_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Title is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddSkillComponent_tr_73_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var entry_r1574 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entry_r1574.title);
      }
    }

    function AddSkillComponent_option_98_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r1575 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", i_r1575.InstituteID);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1575.InstituteShortName);
      }
    }

    function AddSkillComponent_option_107_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r1576 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", i_r1576.DepartmentID);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1576.DepartmentName);
      }
    }

    function AddSkillComponent_option_116_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r1577 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", i_r1577.AdmissionOpenProgramID);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1577.semesterAlia);
      }
    }

    function AddSkillComponent_ng_container_178_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "highlight");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var i_r1578 = ctx.$implicit;
        var ind_r1579 = ctx.index;

        var ctx_r1564 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ind_r1579 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 2, i_r1578.CLO_Skill_Title, ctx_r1564.query), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function AddSkillComponent_div_183_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Showing 0 to 0 of 0 entries");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddSkillComponent_div_184_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1566 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("Showing ", (ctx_r1566.pager == null ? null : ctx_r1566.pager.startIndex) + 1, " to ", (ctx_r1566.pager == null ? null : ctx_r1566.pager.endIndex) + 1, " of ", ctx_r1566.pager == null ? null : ctx_r1566.pager.totalItems, " entries");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        disabled: a0
      };
    };

    function AddSkillComponent_div_186_Template(rf, ctx) {
      if (rf & 1) {
        var _r1581 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddSkillComponent_div_186_Template_button_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1581);

          var ctx_r1580 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1580.setPage(1, ctx_r1580.pagesize);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddSkillComponent_div_186_Template_button_click_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1581);

          var ctx_r1582 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1582.setPage((ctx_r1582.pager == null ? null : ctx_r1582.pager.currentPage) - 1, ctx_r1582.pagesize);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddSkillComponent_div_186_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1581);

          var ctx_r1583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1583.page = $event;
        })("keyup", function AddSkillComponent_div_186_Template_input_keyup_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1581);

          var ctx_r1584 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1584.setPage(ctx_r1584.page);
        })("keypress", function AddSkillComponent_div_186_Template_input_keypress_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1581);

          var ctx_r1585 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1585.keyRestrict($event, "0123456789");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddSkillComponent_div_186_Template_button_click_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1581);

          var ctx_r1586 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1586.setPage((ctx_r1586.pager == null ? null : ctx_r1586.pager.currentPage) + 1, ctx_r1586.pagesize);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddSkillComponent_div_186_Template_button_click_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1581);

          var ctx_r1587 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1587.setPage(ctx_r1587.pager == null ? null : ctx_r1587.pager.totalPages, ctx_r1587.pagesize);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1567 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, (ctx_r1567.pager == null ? null : ctx_r1567.pager.currentPage) === 1))("disabled", (ctx_r1567.pager == null ? null : ctx_r1567.pager.currentPage) === 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, (ctx_r1567.pager == null ? null : ctx_r1567.pager.currentPage) === 1))("disabled", (ctx_r1567.pager == null ? null : ctx_r1567.pager.currentPage) === 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1567.page);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("of ", ctx_r1567.pager == null ? null : ctx_r1567.pager.totalPages, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, (ctx_r1567.pager == null ? null : ctx_r1567.pager.currentPage) === (ctx_r1567.pager == null ? null : ctx_r1567.pager.totalPages)))("disabled", (ctx_r1567.pager == null ? null : ctx_r1567.pager.currentPage) == (ctx_r1567.pager == null ? null : ctx_r1567.pager.totalPages));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, (ctx_r1567.pager == null ? null : ctx_r1567.pager.currentPage) === (ctx_r1567.pager == null ? null : ctx_r1567.pager.totalPages)))("disabled", (ctx_r1567.pager == null ? null : ctx_r1567.pager.currentPage) == (ctx_r1567.pager == null ? null : ctx_r1567.pager.totalPages));
      }
    }

    var AddSkillComponent =
    /*#__PURE__*/
    function () {
      function AddSkillComponent(_CoursesSearchService, toastr, ngxService, _ReportsService, formBuilder, CoursesCLOSService, pagerService) {
        _classCallCheck(this, AddSkillComponent);

        this._CoursesSearchService = _CoursesSearchService;
        this.toastr = toastr;
        this.ngxService = ngxService;
        this._ReportsService = _ReportsService;
        this.formBuilder = formBuilder;
        this.CoursesCLOSService = CoursesCLOSService;
        this.pagerService = pagerService;
        this.newEntry = {
          title: ''
        };
        this.temporaryEntries = [];
        this.selectedskill = '';
        this.level = '';
        this.temporaryLevelData = [];
        this.All_PLOS = [];
        this.Institutes = [];
        this.Department = [];
        this.Intake = [];
        this.PLO_skills = [];
        this.Is_Permission_Institute = false;
        this.Is_Permission_Deaprtment = false;
        this.Is_Permission_Faculty = false;
        this.Is_Have_Special_Permission = false;
        this.Add_Permission = false;
        this.query = "";
        this.pager = {};
        this.pagesize = 50;
        this.dataset = [];
        this.Selected_Semester = "";
        this.Temp_Institute_ID = 0;
        this.Temp_Deaprtment_ID = 0;
        this.Is_Permission_Institute = _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"].Permissions.indexOf("Institute_Dropdown") >= 0 ? true : false;
        this.Is_Permission_Deaprtment = _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"].Permissions.indexOf("Department_Dropdown") >= 0 ? true : false;

        if (!this.Is_Permission_Institute) {
          this.Temp_Institute_ID = _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"].Institute_ID;
        }

        if (!this.Is_Permission_Deaprtment) {
          this.Temp_Deaprtment_ID = _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"].Deaprtment_ID;
        }
      }

      _createClass(AddSkillComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          this.All_PLOS = [];
          this.Get_Institutes();
          this.Add_Permission = false;
          this.Is_Have_Special_Permission = false;
          this.ngxService.start();
          this.CoursesCLOSService.GetCourseCLOS(11111).subscribe(function (response) {
            if (response != null) {
              _this18.dataset = response.All_PLOS_Skills;
              _this18.All_PLOS = response.All_PLOS;
              _this18.PLO_skills = response.All_PLOS_Skills;
            } else {
              _this18.All_PLOS = [];
              _this18.PLO_skills = [];
            }

            _this18.ngxService.stop();

            _this18.setPage(1, _this18.pagesize);
          }, function (error) {
            _this18.All_PLOS = [];
            _this18.PLO_skills = [];

            _this18.ngxService.stop();

            _this18.toastr.error("Internal server error occured while processing your request", "Error!");
          });
        }
      }, {
        key: "addEntry",
        value: function addEntry() {
          if (this.newEntry.title) {
            this.temporaryEntries.push(Object.assign({}, this.newEntry));
            this.newEntry = {
              title: ''
            }; // Clear the form fields
          } else {
            alert("Please fill out both Title and Description.");
          }
        }
      }, {
        key: "saveEntries",
        value: function saveEntries() {}
      }, {
        key: "cancel",
        value: function cancel() {
          this.temporaryEntries = [];
        }
      }, {
        key: "Get_Institutes",
        value: function Get_Institutes() {
          var _this19 = this;

          this.ngxService.start();
          this.Institutes = [];

          this._CoursesSearchService.Get_Institute().subscribe(function (response) {
            try {
              if (response != null) {
                if (_this19.Temp_Institute_ID != 0) {
                  _this19.Institutes = response.filter(function (x) {
                    return x.InstituteID == _this19.Temp_Institute_ID;
                  });

                  _this19.Get_Department(_this19.Temp_Institute_ID);
                } else {
                  _this19.Institutes = response;
                }
              }

              _this19.ngxService.stop();
            } catch (e) {
              _this19.ngxService.stop();

              _this19.toastr.error("Internal server error occured while processing your request", "Error!");
            }
          }, function (error) {
            _this19.ngxService.stop();

            _this19.toastr.error("Internal server error occured while processing your request", "Error!");
          });
        }
      }, {
        key: "Get_Department",
        value: function Get_Department(val) {
          var _this20 = this;

          if (val == undefined || val == null || val == "") return;
          this.ngxService.start();
          this.Department = [];

          this._CoursesSearchService.Get_Department(Number(val)).subscribe(function (response) {
            try {
              if (response != null) {
                if (_this20.Temp_Deaprtment_ID != 0) {
                  _this20.Department = response.filter(function (x) {
                    return x.DepartmentID == _this20.Temp_Deaprtment_ID;
                  });

                  _this20.Get_Intakes(_this20.Temp_Deaprtment_ID);
                } else {
                  _this20.Department = response;
                }
              }

              _this20.ngxService.stop();
            } catch (e) {
              _this20.ngxService.stop();

              _this20.toastr.error("Internal server error occured while processing your request", "Error!");
            }
          }, function (error) {
            _this20.ngxService.stop();

            _this20.toastr.error("Internal server error occured while processing your request", "Error!");
          });
        }
      }, {
        key: "Get_Intakes",
        value: function Get_Intakes(val) {
          var _this21 = this;

          if (val == undefined || val == null || val == "") return;
          this.ngxService.start();
          this.Intake = [];

          this._CoursesSearchService.Get_Intakes(Number(val)).subscribe(function (response) {
            try {
              if (response != null) {
                _this21.Intake = response;
              }

              _this21.ngxService.stop();
            } catch (e) {
              _this21.ngxService.stop();

              _this21.toastr.error("Internal server error occured while processing your request", "Error!");
            }
          }, function (error) {
            _this21.ngxService.stop();

            _this21.toastr.error("Internal server error occured while processing your request", "Error!");
          });
        }
      }, {
        key: "GetPLOS",
        value: function GetPLOS() {
          var _this22 = this;

          var itake = $("#IntakeID").val();
          this.ngxService.start();
          this.CoursesCLOSService.GetCourseCLOS(itake).subscribe(function (response) {
            if (response != null) {
              _this22.dataset = response.Course_CLOS;
              _this22.All_PLOS = response.All_PLOS;
            } else {
              _this22.All_PLOS = [];
            }

            _this22.ngxService.stop();

            _this22.setPage(1, _this22.pagesize);
          }, function (error) {
            _this22.All_PLOS = [];

            _this22.ngxService.stop();

            _this22.toastr.error("Internal server error occured while processing your request", "Error!");
          });
        }
      }, {
        key: "setPage",
        value: function setPage(page, pagesize) {
          this.query = "";

          if ((page < 1 || page > this.pager.totalPages) && page != "") {
            this.page = 1;
            page = 1;
          }

          this.page = page;
          this.pager = this.pagerService.getPager(this.dataset.length, page, pagesize);
          this.serialNumber = this.pager.currentPage * this.pagesize - this.pagesize + this.serialNumber;
          this.All_PLOS = this.dataset.slice(this.pager.startIndex, this.pager.endIndex + 1);
        }
      }, {
        key: "keyRestrict",
        value: function keyRestrict(e, validchars, casesensitives, onceevery, onceoneof) {
          onceevery = onceevery ? onceevery : "";
          onceoneof = onceoneof ? onceoneof : "";
          if (!validchars) return true;
          var keychar = '',
              i = 0;
          var key = e.which ? e.which : e.keyCode;
          var obj = e.target ? e.target : e.srcElement;
          if (key == null) return true;
          keychar = String.fromCharCode(key);
          validchars = validchars + onceevery + onceoneof;

          if (!casesensitives) {
            keychar = keychar.toLowerCase();
            validchars = validchars.toLowerCase();
            onceevery = onceevery.toLowerCase();
            onceoneof = onceoneof.toLowerCase();
          }

          for (i = 0; i < (onceevery + onceoneof).length; i++) {
            if (i < onceevery.length) {
              if (obj.value.indexOf(onceevery.charAt(i)) != -1 && keychar == onceevery.charAt(i)) return false;
            } else {
              if (obj.value.indexOf(onceoneof.charAt(i - onceevery.length)) != -1 && onceoneof.indexOf(keychar) != -1) return false;
            }
          }

          if (validchars.indexOf(keychar) != -1) return true;
          if (key == null || key == 0 || key == 8 || key == 9 || key == 13 || key == 27 || key == 39 || key == 32) return true;
          return false;
        } //--------------add skill level secttion-------------------

      }, {
        key: "addToTemporaryLevelArray",
        value: function addToTemporaryLevelArray() {
          if (this.selectedskill && this.level) {
            this.temporaryLevelData.push({
              skill: this.selectedskill,
              level: this.level
            }); // Clear fields after adding

            this.selectedskill = '';
            this.level = '';
          } else {
            alert('Both fields are required!');
          }
        }
      }, {
        key: "editLevelItem",
        value: function editLevelItem(index) {
          var item = this.temporaryLevelData[index];
          this.selectedskill = item.skill;
          this.level = item.level;
          this.temporaryLevelData.splice(index, 1); // Remove the item to re-add after editing
        } // Remove level item

      }, {
        key: "removeLevelItem",
        value: function removeLevelItem(index) {
          this.temporaryLevelData.splice(index, 1);
        } // Save levels to database

      }, {
        key: "saveLevelToDatabase",
        value: function saveLevelToDatabase() {
          console.log('Saving level data to database:', this.temporaryLevelData); // Call your service here 

          alert('Level data saved successfully!');
          this.temporaryLevelData = [];
        }
      }, {
        key: "DownloadExcel",
        value: function DownloadExcel() {
          if (this.dataset.length > 0) {
            var wb = xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].book_new();
            var header = [];
            var Data = [];
            var Heading = [];
            header.push("Sr.#", "Course Title", "Semester", "PLO1", "PLO2", "PLO3", "PLO4", "PLO5", "PLO6", "PLO7", "PLO8", "PLO9", "PLO10", "PLO11", "PLO12");
            Heading.push(header);
            var SrNumber = 1;

            for (var k = 0; k < this.dataset.length; k++) {
              Data.push({
                "SrNumber": SrNumber,
                "title": this.dataset[k].Title,
                "semesterAlia": this.dataset[k].semesterAlia,
                "PLO1": this.dataset[k].PLO_One_Skill_Mapped_Count != 0 ? 'X' : '-',
                "PLO2": this.dataset[k].PLO_Two_Skill_Mapped_Count != 0 ? 'X' : '-',
                "PLO3": this.dataset[k].PLO_Three_Skill_Mapped_Count != 0 ? 'X' : '-',
                "PLO4": this.dataset[k].PLO_Four_Skill_Mapped_Count != 0 ? 'X' : '-',
                "PLO5": this.dataset[k].PLO_Five_Skill_Mapped_Count != 0 ? 'X' : '-',
                "PLO6": this.dataset[k].PLO_Six_Skill_Mapped_Count != 0 ? 'X' : '-',
                "PLO7": this.dataset[k].PLO_Seven_Skill_Mapped_Count != 0 ? 'X' : '-',
                "PLO8": this.dataset[k].PLO_Eight_Skill_Mapped_Count != 0 ? 'X' : '-',
                "PLO9": this.dataset[k].PLO_Nine_Skill_Mapped_Count != 0 ? 'X' : '-',
                "PLO10": this.dataset[k].PLO_Ten_Skill_Mapped_Count != 0 ? 'X' : '-',
                "PLO11": this.dataset[k].PLO_Eleven_Skill_Mapped_Count != 0 ? 'X' : '-',
                "PLO12": this.dataset[k].PLO_Twelth_Skill_Mapped_Count != 0 ? 'X' : '-'
              });
              SrNumber += 1;
            }

            var ws = xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].aoa_to_sheet(Heading);
            ws["!cols"] = [{
              wpx: 25
            }, {
              wpx: 200
            }, {
              wpx: 100
            }, {
              wpx: 60
            }, {
              wpx: 60
            }, {
              wpx: 60
            }, {
              wpx: 60
            }, {
              wpx: 60
            }, {
              wpx: 60
            }, {
              wpx: 60
            }, {
              wpx: 60
            }, {
              wpx: 60
            }, {
              wpx: 60
            }, {
              wpx: 60
            }, {
              wpx: 60
            }];
            xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].sheet_add_json(ws, Data, {
              skipHeader: true,
              origin: -1
            });
            xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].book_append_sheet(wb, ws, "PLOs Course Mapping");
            var wbout = xlsx__WEBPACK_IMPORTED_MODULE_5__["write"](wb, {
              bookType: 'xlsx',
              type: 'array'
            });
            file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"](new Blob([wbout], {
              type: "application/octet-stream"
            }), 'PLOs Course Mapping' + ".xlsx");
          }
        }
      }]);

      return AddSkillComponent;
    }();

    AddSkillComponent.ɵfac = function AddSkillComponent_Factory(t) {
      return new (t || AddSkillComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_CourseSearch_CourseSearch_service__WEBPACK_IMPORTED_MODULE_7__["CoursesSearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_9__["NgxUiLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_Reports_reports_service__WEBPACK_IMPORTED_MODULE_10__["ReportsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_CourseCLOS_coursesCLO_service__WEBPACK_IMPORTED_MODULE_12__["CoursesCLOSService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Shared_Services_Global_Pager__WEBPACK_IMPORTED_MODULE_1__["PagerService"]));
    };

    AddSkillComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddSkillComponent,
      selectors: [["app-add-skill"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_Shared_Services_Global_Pager__WEBPACK_IMPORTED_MODULE_1__["PagerService"], _Shared_Pipe_highlight_pipe__WEBPACK_IMPORTED_MODULE_3__["HighlightPipe"], _Shared_Pipe_filter__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"]])],
      decls: 188,
      vars: 24,
      consts: [["role", "tabpanel", 1, "tab-pane", "active"], [1, "section-heading", "padding-b5"], ["id", "addLevelModal", "tabindex", "-1", "aria-labelledby", "addLevelModalLabel", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "addLevelModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "mb-3"], ["for", "skillSelect", 1, "form-label"], ["id", "skillSelect", "name", "selectedskill", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "levelInput", 1, "form-label"], ["id", "levelInput", "name", "level", "rows", "3", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "table", "table-bordered"], [4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["id", "addModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "addModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], ["id", "addModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], ["entryForm", "ngForm"], [1, "form-group"], ["for", "title"], ["type", "text", "id", "title", "name", "title", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["title", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", 3, "disabled", "click"], [1, "mt-4"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["role", "tabpanel", 1, "tab-pane", "active", 2, "margin", "20px"], [1, "margin-b15"], [1, "row"], [1, "col-sm-12"], [1, "padding-b5"], [1, "form-group", "col-sm-3"], [1, "control-label"], [1, "text-danger"], [1, "form-control", 3, "ngModel", "change"], ["value", "0"], ["id", "IntakeID", 1, "form-control"], [1, "col-sm-1", "margin-t17"], [1, "btn", "btn-info", 3, "click"], [1, "pull-right"], ["type", "button", "data-toggle", "modal", "data-target", "#addModal", 1, "btn", "btn-info"], ["type", "button", "data-toggle", "modal", "data-target", "#addLevelModal", 1, "btn", "btn-info"], [1, "section-heading"], [1, "margin-b5"], [1, "pull-left"], [1, "has-feedback", "pull-left"], ["type", "text", "placeholder", "Search Records", 1, "form-control", "width-200", 3, "ngModel", "ngModelChange"], [1, "form-control-feedback"], [1, "app-icon-IconSet-1-92"], [1, "pull-left", "margin-l5"], [1, "form-inline"], [1, "form-group", "margin-r10", 2, "width", "110%"], [1, "control-label", "margin-r10"], [1, "form-control", "input-xs", "margin-r5", 2, "width", "30%", 3, "ngModel", "change", "ngModelChange"], [1, "btn-group", "left-dropdown"], ["type", "button", "id", "dropdownMenu1", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-default", "btn-sm", "dropdown-toggle"], [1, "caret"], ["aria-labelledby", "dropdownMenu1", 1, "dropdown-menu"], [3, "click"], [1, "clearfix"], [1, "table-responsive", 2, "max-height", "34vh", "overflow-y", "auto"], [1, "table", "table-hover", "table-theme", "margin-b30"], [1, "pagination-bottom"], ["class", "form-group", 4, "ngIf"], [1, "form-inline", "pull-right", "margin-b5"], ["class", "table-pagination pull-right", 4, "ngIf"], [3, "value"], ["type", "button", 1, "btn", "btn-warning", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"], ["align", "center"], [1, "blue"], [3, "innerHTML"], ["onclick", ""], [1, "control-label", "padding-t5"], [1, "table-pagination", "pull-right"], ["data-original-title", "First Page", "title", "", 1, "btn", "btn-default", 3, "ngClass", "disabled", "click"], [1, "fa", "fa-backward"], ["data-original-title", "Previous", "title", "", 1, "btn", "btn-default", 3, "ngClass", "disabled", "click"], [1, "fa", "fa-caret-left"], ["type", "text", "value", "1", "disabled", "", 1, "form-control", 2, "width", "50px", 3, "ngModel", "ngModelChange", "keyup", "keypress"], ["data-original-title", "Next", "title", "", 1, "btn", "btn-default", 3, "ngClass", "disabled", "click"], [1, "fa", "fa-caret-right"], ["data-original-title", "Last", "title", "", 1, "btn", "btn-default", 3, "ngClass", "disabled", "click"], [1, "fa", "fa-forward"]],
      template: function AddSkillComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Add skill Level");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Select Level");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddSkillComponent_Template_select_ngModelChange_16_listener($event) {
            return ctx.selectedskill = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AddSkillComponent_option_17_Template, 2, 2, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Level");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "textarea", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddSkillComponent_Template_textarea_ngModelChange_21_listener($event) {
            return ctx.level = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddSkillComponent_Template_button_click_22_listener($event) {
            return ctx.addToTemporaryLevelArray();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Skill levels");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "table", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Skill");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Level");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, AddSkillComponent_tr_39_Template, 12, 3, "tr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddSkillComponent_Template_button_click_41_listener($event) {
            return ctx.saveLevelToDatabase();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h5", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Add New Entry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "form", null, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Skill Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 28, 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddSkillComponent_Template_input_ngModelChange_60_listener($event) {
            return ctx.newEntry.title = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, AddSkillComponent_div_62_Template, 2, 0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddSkillComponent_Template_button_click_63_listener($event) {
            return ctx.addEntry();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Add ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h5", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Temporary Entries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "table", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Skill Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, AddSkillComponent_tr_73_Template, 3, 1, "tr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddSkillComponent_Template_button_click_75_listener($event) {
            return ctx.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddSkillComponent_Template_button_click_77_listener($event) {
            return ctx.saveEntries();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Current Skillss");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "fieldset", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "legend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Criteria");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "label", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Select Institute ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "select", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddSkillComponent_Template_select_change_95_listener($event) {
            return ctx.Get_Department($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "option", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Select Institute");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, AddSkillComponent_option_98_Template, 2, 2, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "label", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Select Department ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "select", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddSkillComponent_Template_select_change_104_listener($event) {
            return ctx.Get_Intakes($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "option", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Select Deparment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](107, AddSkillComponent_option_107_Template, 2, 2, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "label", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Select Intake ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "select", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "option", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Select Intake");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](116, AddSkillComponent_option_116_Template, 2, 2, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddSkillComponent_Template_button_click_118_listener($event) {
            return ctx.GetPLOS();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " Add New Skill ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " Add New Skill Level ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "List Of Added skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddSkillComponent_Template_input_ngModelChange_135_listener($event) {
            return ctx.query = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "span", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "i", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "label", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Show");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "select", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddSkillComponent_Template_select_change_143_listener($event) {
            return ctx.setPage(1, ctx.pagesize);
          })("ngModelChange", function AddSkillComponent_Template_select_ngModelChange_143_listener($event) {
            return ctx.pagesize = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "label", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Per Page");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "button", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " Export ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "span", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "ul", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "a", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddSkillComponent_Template_a_click_163_listener($event) {
            return ctx.DownloadExcel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Excel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "table", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Sr#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Skill TITLE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](178, AddSkillComponent_ng_container_178_Template, 11, 5, "ng-container", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](179, "filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](183, AddSkillComponent_div_183_Template, 3, 0, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](184, AddSkillComponent_div_184_Template, 3, 3, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](186, AddSkillComponent_div_186_Template, 12, 18, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1557 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](56);

          var _r1558 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedskill);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.PLO_skills);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.level);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.temporaryLevelData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newEntry.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1558.invalid && _r1558.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r1557.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.temporaryEntries);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Temp_Institute_ID);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.Temp_Institute_ID != 0 ? "disabled" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Institutes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Temp_Deaprtment_ID);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.Temp_Deaprtment_ID != 0 ? "disabled" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Department);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Intake);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.query);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pagesize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](179, 21, ctx.PLO_skills, ctx.query));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.PLO_skills == null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.PLO_skills == null ? null : ctx.PLO_skills.length) >= 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.pager == null ? null : ctx.pager.pages) && (ctx.pager == null ? null : ctx.pager.pages.length));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"]],
      pipes: [_Shared_Pipe_filter__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"], _Shared_Pipe_highlight_pipe__WEBPACK_IMPORTED_MODULE_3__["HighlightPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL3NldHRpbmcvc2tpbGxzL2FkZC1za2lsbC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddSkillComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-skill',
          templateUrl: './add-skill.component.html',
          styleUrls: ['./add-skill.component.css'],
          providers: [_Shared_Services_Global_Pager__WEBPACK_IMPORTED_MODULE_1__["PagerService"], _Shared_Pipe_highlight_pipe__WEBPACK_IMPORTED_MODULE_3__["HighlightPipe"], _Shared_Pipe_filter__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"]]
        }]
      }], function () {
        return [{
          type: _Services_CourseSearch_CourseSearch_service__WEBPACK_IMPORTED_MODULE_7__["CoursesSearchService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]
        }, {
          type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_9__["NgxUiLoaderService"]
        }, {
          type: _Services_Reports_reports_service__WEBPACK_IMPORTED_MODULE_10__["ReportsService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"]
        }, {
          type: _Services_CourseCLOS_coursesCLO_service__WEBPACK_IMPORTED_MODULE_12__["CoursesCLOSService"]
        }, {
          type: _Shared_Services_Global_Pager__WEBPACK_IMPORTED_MODULE_1__["PagerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Features/setting/update-role-and-password/update-role-and-password.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/Features/setting/update-role-and-password/update-role-and-password.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: UpdateRoleAndPasswordComponent */

  /***/
  function srcAppFeaturesSettingUpdateRoleAndPasswordUpdateRoleAndPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateRoleAndPasswordComponent", function () {
      return UpdateRoleAndPasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-ui-loader */
    "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm2015/ngx-ui-loader.js");
    /* harmony import */


    var src_app_Services_Settings_setting_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Services/Settings/setting.service */
    "./src/app/Services/Settings/setting.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _Shared_Pipe_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../Shared/Pipe/filter */
    "./src/app/Shared/Pipe/filter.ts");
    /* harmony import */


    var _Shared_Pipe_highlight_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../Shared/Pipe/highlight.pipe */
    "./src/app/Shared/Pipe/highlight.pipe.ts");

    function UpdateRoleAndPasswordComponent_ng_container_51_option_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r1483 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", i_r1483.Role_ID);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1483.Role_Title);
      }
    }

    function UpdateRoleAndPasswordComponent_ng_container_51_Template(rf, ctx) {
      if (rf & 1) {
        var _r1485 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "highlight");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "highlight");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "highlight");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "highlight");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UpdateRoleAndPasswordComponent_ng_container_51_Template_select_change_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1485);

          var i_r1480 = ctx.$implicit;

          var ctx_r1484 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1484.changeRole($event.target.value, i_r1480.FacultyMemberID);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Select Institute");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, UpdateRoleAndPasswordComponent_ng_container_51_option_22_Template, 2, 2, "option", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateRoleAndPasswordComponent_ng_container_51_Template_button_click_24_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1485);

          var i_r1480 = ctx.$implicit;

          var ctx_r1486 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1486.resetPassword(i_r1480.FacultyMemberID);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Reset Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var i_r1480 = ctx.$implicit;
        var idx_r1481 = ctx.index;

        var ctx_r1479 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](idx_r1481 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 7, i_r1480.Name, ctx_r1479.query), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 10, i_r1480.UserName, ctx_r1479.query), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 13, i_r1480.Email, ctx_r1479.query), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 16, i_r1480.InstituteName, ctx_r1479.query), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", i_r1480.UserStatus);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1479.role);
      }
    }

    var UpdateRoleAndPasswordComponent =
    /*#__PURE__*/
    function () {
      function UpdateRoleAndPasswordComponent(toastr, ngxService, settingService) {
        _classCallCheck(this, UpdateRoleAndPasswordComponent);

        this.toastr = toastr;
        this.ngxService = ngxService;
        this.settingService = settingService;
        this.users = [];
        this.role = [];
        this.userName = '';
        this.query = "";
        this.pager = {};
        this.pagesize = 50;
        this.dataset = [];
      }

      _createClass(UpdateRoleAndPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "searchUser",
        value: function searchUser() {
          var _this23 = this;

          if (this.userName === '') {
            return;
          }

          this.ngxService.start();
          var request = {
            userName: this.userName
          };
          this.settingService.getUserForUpdates(request).subscribe(function (response) {
            if (response != null) {
              _this23.users = response.users;
              _this23.role = response.roles;
            }

            _this23.ngxService.stop();
          }, function (error) {
            _this23.ngxService.stop();

            _this23.toastr.error("Internal server error occured while processing your request", "Error!");
          });
        }
      }, {
        key: "resetPassword",
        value: function resetPassword(FacultyMemberID) {
          var _this24 = this;

          this.settingService.updatePassword({
            "FacultyMemberID": FacultyMemberID,
            "Password": "11223344"
          }).subscribe(function (data) {
            if (data) {
              _this24.toastr.success("Password updated successfully", 'Password Updation!');
            }
          }, function (error) {
            _this24.toastr.error("Internal server error occured while processing your request", "Error!");
          });
        }
      }, {
        key: "changeRole",
        value: function changeRole(role, facultyId) {
          var _this25 = this;

          this.settingService.updateRole({
            "role": Number(role),
            "facultyId": facultyId
          }).subscribe(function (data) {
            if (data) {
              _this25.toastr.success("Role updated successfully", 'Password Updation!');
            }
          }, function (error) {
            _this25.toastr.error("Internal server error occured while processing your request", "Error!");
          });
        }
      }]);

      return UpdateRoleAndPasswordComponent;
    }();

    UpdateRoleAndPasswordComponent.ɵfac = function UpdateRoleAndPasswordComponent_Factory(t) {
      return new (t || UpdateRoleAndPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["NgxUiLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_Settings_setting_service__WEBPACK_IMPORTED_MODULE_3__["SettingService"]));
    };

    UpdateRoleAndPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UpdateRoleAndPasswordComponent,
      selectors: [["app-update-role-and-password"]],
      decls: 53,
      vars: 6,
      consts: [["role", "tabpanel", 1, "tab-pane", "active"], [1, "section-heading", "padding-b5"], [1, "margin-b15"], [1, "row"], [1, "col-sm-12"], [1, "padding-b5"], [1, "form-group", "col-sm-3"], [1, "control-label"], [1, "text-danger"], ["placeholder", "Enter Username", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-sm-1", "margin-t17"], [1, "btn", "btn-info", 3, "click"], [1, "section-heading"], [1, "margin-b5"], [1, "pull-left"], [1, "has-feedback", "pull-left"], ["type", "text", "placeholder", "Search Records", 1, "form-control", "width-200", 3, "ngModel", "ngModelChange"], [1, "form-control-feedback"], [1, "app-icon-IconSet-1-92"], [1, "clearfix"], [1, "dashboard-scroller", "setups-widget", "mCustomScrollbar", 2, "max-height", "53vh"], [1, "table-responsive"], [1, "table", "table-hover", "table-theme", "margin-b30"], ["align", "center"], [4, "ngFor", "ngForOf"], [3, "innerHTML"], [1, "form-group"], [1, "form-control", 3, "ngModel", "change"], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
      template: function UpdateRoleAndPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Reset Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "fieldset", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "legend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Reset Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Enter Username ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateRoleAndPasswordComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.userName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateRoleAndPasswordComponent_Template_button_click_18_listener($event) {
            return ctx.searchUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Reset Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateRoleAndPasswordComponent_Template_input_ngModelChange_26_listener($event) {
            return ctx.query = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "table", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Sr.#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "UserName");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Institute Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Role");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, UpdateRoleAndPasswordComponent_ng_container_51_Template, 26, 19, "ng-container", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.query);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](52, 3, ctx.users, ctx.query));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]],
      pipes: [_Shared_Pipe_filter__WEBPACK_IMPORTED_MODULE_6__["FilterPipe"], _Shared_Pipe_highlight_pipe__WEBPACK_IMPORTED_MODULE_7__["HighlightPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL3NldHRpbmcvdXBkYXRlLXJvbGUtYW5kLXBhc3N3b3JkL3VwZGF0ZS1yb2xlLWFuZC1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateRoleAndPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-update-role-and-password',
          templateUrl: './update-role-and-password.component.html',
          styleUrls: ['./update-role-and-password.component.css']
        }]
      }], function () {
        return [{
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]
        }, {
          type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["NgxUiLoaderService"]
        }, {
          type: src_app_Services_Settings_setting_service__WEBPACK_IMPORTED_MODULE_3__["SettingService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Services/Settings/setting.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/Services/Settings/setting.service.ts ***!
    \******************************************************/

  /*! exports provided: SettingService */

  /***/
  function srcAppServicesSettingsSettingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingService", function () {
      return SettingService;
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

    var SettingService =
    /*#__PURE__*/
    function () {
      function SettingService(http) {
        _classCallCheck(this, SettingService);

        this.http = http;
        this.baseUrl = _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"].ApiUrl;
      }

      _createClass(SettingService, [{
        key: "SendSurveyForm",
        value: function SendSurveyForm(data) {
          return this.http.post(this.baseUrl + 'Settings/SendSurveyForm', data);
        }
      }, {
        key: "EnableExitSurveyForSelctedIntake",
        value: function EnableExitSurveyForSelctedIntake(data) {
          return this.http.post(this.baseUrl + 'Settings/EnableExitSurveyForSelctedIntake', data);
        }
      }, {
        key: "getUserForUpdates",
        value: function getUserForUpdates(data) {
          return this.http.post(this.baseUrl + 'Settings/getUserForUpdates', data);
        }
      }, {
        key: "updatePassword",
        value: function updatePassword(data) {
          return this.http.post(this.baseUrl + 'Settings/updatePassword', data);
        }
      }, {
        key: "updateRole",
        value: function updateRole(data) {
          return this.http.post(this.baseUrl + 'Settings/updateRole', data);
        }
      }]);

      return SettingService;
    }();

    SettingService.ɵfac = function SettingService_Factory(t) {
      return new (t || SettingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    SettingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SettingService,
      factory: SettingService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingService, [{
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
//# sourceMappingURL=Features-setting-setting-module-es5.js.map