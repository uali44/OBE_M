function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Features-Framework-framework-module"], {
  /***/
  "./src/app/Features/Framework/framework-main/framework-main.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/Features/Framework/framework-main/framework-main.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: FrameworkMainComponent */

  /***/
  function srcAppFeaturesFrameworkFrameworkMainFrameworkMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FrameworkMainComponent", function () {
      return FrameworkMainComponent;
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


    var _framework_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../framework.component */
    "./src/app/Features/Framework/framework.component.ts");
    /* harmony import */


    var _Shared_Services_Global_interconnected_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../Shared/Services/Global/interconnected.service */
    "./src/app/Shared/Services/Global/interconnected.service.ts");
    /* harmony import */


    var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-ui-loader */
    "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm2015/ngx-ui-loader.js");

    var FrameworkMainComponent =
    /*#__PURE__*/
    function () {
      function FrameworkMainComponent(FrameworkComponent, InterconnectedService, ngxService) {
        _classCallCheck(this, FrameworkMainComponent);

        this.FrameworkComponent = FrameworkComponent;
        this.InterconnectedService = InterconnectedService;
        this.ngxService = ngxService;
      }

      _createClass(FrameworkMainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.InterconnectedService.CloseTab.subscribe(function (search) {
            _this.CloseTabContent();
          });
        }
      }, {
        key: "loadTab",
        value: function loadTab(Title) {
          $("#Content").removeClass('dashboard-bg');
          this.FrameworkComponent.ShowTab(Title);
          _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"].Report_Sub_Tab = true;
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

      return FrameworkMainComponent;
    }();

    FrameworkMainComponent.ɵfac = function FrameworkMainComponent_Factory(t) {
      return new (t || FrameworkMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_framework_component__WEBPACK_IMPORTED_MODULE_2__["FrameworkComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Shared_Services_Global_interconnected_service__WEBPACK_IMPORTED_MODULE_3__["InterconnectedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderService"]));
    };

    FrameworkMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FrameworkMainComponent,
      selectors: [["app-framework-main"]],
      decls: 270,
      vars: 0,
      consts: [["role", "tabpanel", "id", "scheduler-tab", 1, "tab-pane", "active"], [1, "section-tabs", "no-margin"], [1, "tabs-head"], ["role", "tablist", 1, "nav", "nav-tabs"], ["role", "presentation", 1, "active"], ["aria-expanded", "true", "href", "#Vision", "role", "tab", "data-toggle", "tab"], ["role", "presentation"], ["aria-expanded", "true", "href", "#Mission", "aria-controls", "scheduler-weekly", "role", "tab", "data-toggle", "tab"], ["aria-expanded", "true", "href", "#Software-Engineering", "aria-controls", "scheduler-weekly", "role", "tab", "data-toggle", "tab"], ["aria-expanded", "true", "href", "#Electrical-Engineering", "aria-controls", "scheduler-weekly", "role", "tab", "data-toggle", "tab"], ["aria-expanded", "true", "href", "#Computer-Engineering", "aria-controls", "scheduler-weekly", "role", "tab", "data-toggle", "tab"], ["aria-expanded", "true", "href", "#PLOs", "aria-controls", "scheduler-weekly", "role", "tab", "data-toggle", "tab"], ["aria-expanded", "true", "href", "#Bloom", "aria-controls", "scheduler-weekly", "role", "tab", "data-toggle", "tab"], [1, "tab-content"], ["role", "tabpanel", "id", "Vision", 1, "tab-pane", "active"], [1, "text-center"], ["role", "tabpanel", "id", "Mission", 1, "tab-pane"], ["role", "tabpanel", "id", "Software-Engineering", 1, "tab-pane"], ["role", "tabpanel", "id", "Electrical-Engineering", 1, "tab-pane"], ["role", "tabpanel", "id", "Computer-Engineering", 1, "tab-pane"], ["role", "tabpanel", "id", "PLOs", 1, "tab-pane"], ["role", "tabpanel", "id", "Bloom", 1, "tab-pane"], [1, "margin-l30"]],
      template: function FrameworkMainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Vision");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Mission");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "PEO-BSE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "PEO-BEE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "PEO-BCE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Program Learning Outcomes (PLOs)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Learning Domains");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "To become a knowledge and creativity driven international university that contributes towards development of society.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "To ensure academic excellence through deliverance of quality education and applied research in a collegiate environment having strong linkages with industry and international community to meet the societal challenges.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "PEOs.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "PEO-1:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Graduates should demonstrate competence in applying Software Engineering principles & practices in various phases of software/system development life cycle in their respective professional career.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "PEO-2:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Graduates should demonstrate effective team member or leadership skills with strong managerial skills and a sound sense of social responsibility for the sustainable development of society.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "PEO-3:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Graduates should demonstrate sustained career development and progression through ethical engineering practices, effective communication skills and continuous learning.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "PEOs.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "PEO-1:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "To exhibit the expertise in the field of electrical engineering to compete with technical challenges and find the solutions of complex engineering problems.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "PEO-2:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "To be skillful employable graduates in different domains of design, development, operation and maintenance, as well as explore opportunities for entrepreneurship.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "PEO-3:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "To pursue professional growth by taking up higher studies, ascertain technologies, develop proficiency in the usage of new tools.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "PEO-4:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "To work in multicultural environment and communities, providing leadership in their domain, and responsive to ethical, moral, and societal issues.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "PEOs.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "PEO-1:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Attain an ability to identify and solve challenging problems in their professions by applying theory, principles and modern tools learnt during degree program.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "PEO-2:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Demonstrate effective communication as an individual or team player with strong managerial and entrepreneurial skills.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "PEO-3:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Maintain highest ethical and professional standards in pursuing their careers.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "PEO-4:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Engage in life-long learning to continually polish their professional capabilities for their personal growth and the betterment of society.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "PLO 1 Engineering Knowledge:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "An ability to apply knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "PLO 2 Problem Analysis:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "An ability to identify, formulate, research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences and engineering sciences.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "PLO 3 Design/Development of Solutions:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "An ability to design solutions for complex engineering problems and design systems, components or processes that meet specified needs with appropriate consideration for public health and safety, cultural, societal, and environmental considerations.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "PLO 4 Investigation:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "An ability to investigate complex engineering problems in a methodical way including literature survey, design and conduct of experiments, analysis and interpretation of experimental data, and synthesis of information to derive valid conclusions. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "PLO 5 Modern Tool Usage:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "An ability to create, select and apply appropriate techniques, resources, and modern engineering and IT tools, including prediction and modeling, to complex engineering activities, with an understanding of the limitations.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "PLO 6 The Engineer and Society:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "An ability to apply reasoning informed by contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to professional engineering practice and solution to complex engineering problems.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "PLO 7 Environment and Sustainability:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "An ability to understand the impact of professional engineering solutions in societal and environmental contexts and demonstrate knowledge of and need for sustainable development.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "PLO 8 Ethics:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Apply ethical principles and commit to professional ethics and responsibilities and norms of engineering practice.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "PLO 9 Individual and Team Work:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "An ability to work effectively, as an individual or in a team, on multifaceted and /or multidisciplinary settings.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "PLO 10 Communication:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "An ability to communicate effectively, orally as well as in writing, on complex engineering activities with the engineering community and with society at large, such as being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "PLO 11 Project Management:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "An ability to demonstrate management skills and apply engineering principles to one\u2019s own work, as a member and/or leader in a team, to manage projects in a multidisciplinary environment.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "PLO 12 Lifelong Learning:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "An ability to recognize the need for, and have the preparation and ability to engage in, independent and life-long learning in the broadest context of technological change.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Cognitive:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "ul", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Knowledge:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " Knowledge is the ability to recall data and/or information. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Key Words: (Define,Describe,Identify,Label,List,Name,Recognize,Recall,Repeat,State)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Comprehension:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " Comprehension is the ability to understand the meaning of what is known. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Key Words: (Characterize,Classify,Convert,Defend,Discuss,Distinguish,Establish,Estimate,Explain,Express,Extend,Generalized,Illustrate,Indicate,Infer,Locate,Paraphrase,Predict,Recognize,Relate,Review,Rewrite,Summarize,Translate)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Application:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " Application is the ability to utilize an abstraction or to use knowledge in a new situation.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Key Words: (,Apply,Change,Choose,Compute,Demonstrate,Discover,Dramatize,Employ,Interpret,Manipulate,Model,Modify,Operate,Practice,Predict,Prepare,Produce,Relate,Schedule,Show,Sketch,Solve,Use,Write)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Analysis:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " the ability to differentiate facts and opinions. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Key Words: (Analyze ,Appraise ,Breakdown ,Calculate ,Categorize ,Compare ,Contrast ,Criticize ,Diagram ,Differentiate ,Discriminate ,Distinguish ,Examine ,Experiment ,Identify ,Illustrate ,Infer ,Model ,Outline ,Point out ,Question ,Relate ,Select ,Separate ,Subdivide ,Test)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Synthesis:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " Synthesis the ability to integrate different elements or concepts in order to form a sound pattern or structure so a new meaning can be established. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Key Words: (Arrange ,Assemble ,Collect ,Combine ,Comply ,Compose ,Construct ,Create ,Design ,Develop ,Devise ,Explain ,Formulate ,Generate ,Plan ,Prepare ,Rearrange ,Reconstruct ,Relate ,Reorganize ,Revise ,Rewrite ,Set up ,Synthesize ,Tell ,Write)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Evaluation:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " Evaluation is the ability to come up with judgments about the importance of concepts. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Key Words: (Appraise,Argue,Assess,Choose,Compare,Conclude,Contrast,Defend,Describe,Discriminate,Estimate,Evaluate,Explain,Interpret,Judge,Justify,Predict,Rate,Relate,Select,Support,Value)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Affective:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "ul", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Receiving:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " The receiving is the awareness of feelings, emotions, and the ability to utilize selected attention. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Key Words: (Ask ,Acknowledge ,Attend (to) ,Follow ,Listen ,Meet ,Observe ,Receive)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Responding to Phenomena:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " Responding is active participation of the learner. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Key Words: (Agree ,Allow ,Answer ,Ask ,Assist ,Attempt ,Choose ,Communicate ,Comply ,Conform ,Cooperate ,Demonstrate ,Describe ,Discuss ,Display ,Exhibit ,Follow ,Give ,Help ,Identify ,Locate ,Notify ,Obey ,Offer ,Participate (in) ,Present ,Read ,Relay ,Reply ,Report ,Respond ,Select ,Try)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Valuing:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, " Valuing is the ability to see the worth of something and express it. Valuing is concerned with the worth you attach to a particular object, phenomenon, behavior, or piece of information. This level ranges from simple acceptance to the more complex state of commitment. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Key Words: (Adopt ,Aid ,Care (for) ,Complete ,Complement ,Contribute ,Delay ,Encourage ,Endorse ,Enforce ,Evaluate ,Expedite ,Foster ,Guide ,Initiate ,Interact ,Join ,Justify ,Maintain ,Monitor ,Praise ,Preserve ,Propose ,Query ,React ,Respect ,Seek ,Share ,Study ,Subscribe ,Suggest ,Support ,Thank ,Uphold)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Organization:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, " ability to prioritize a value over another and create a unique value system. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Key Words: (Anticipate ,Collaborate ,Confer ,Consider ,Consult ,Coordinate ,Design ,Direct ,Establish ,Facilitate ,Follow through ,Investigate ,Judge ,Lead ,Manage ,Modify ,Organize ,Oversee ,Plan ,Qualify ,Recommend ,Revise ,Simplify ,Specify ,Submit ,Synthesize ,Test ,Vary ,Weigh)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Characterization:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, " the ability to internalize values and let them control the person`s behavior. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Key Words: (Act ,Administer ,Advance ,Advocate ,Aid ,Challenge ,Change ,Commit (to) ,Counsel ,Criticize ,Debate ,Defend ,Disagree ,Dispute ,Empathize ,Enhance ,Excuse ,Forgive ,Influence ,Motivate ,Negotiate ,Object ,Persevere ,Persist ,Praise ,Profess ,Promote ,Promulgate ,Question ,Reject ,Resolve ,Seek ,Serve ,Strive ,Solve ,Tolerate ,Volunteer (for))");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Psychomotor:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "ul", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "Perception:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, " the ability to apply sensory information to motor activity Set: the readiness to act. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Key Words: (Choose,Describe,Detect,Differentiate,Distinguish,Identify,Isolate,,Relate,Select,Separate)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Set:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, " Readiness to take action. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Key Words: (Begin,Display,Explain,Move,Proceed,React,Respond,Show,Start,Volunteer)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Guided Response:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, " the ability to imitate a displayed behavior or to utilize trial and error.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Key Words: (Assemble,Build,Calibrate,Construct,Dismantle,Display,Dissect,Fasten,Fix,Grind,Heat,Manipulate,Measure,Mend,Mix,Organize,Sketch,Work)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Mechanism:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, " the ability to convert learned responses into habitual actions with proficiency and confidence. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Key Words: (Assemble,Build,Calibrate,Construct,Dismantle,Display,Dissect,Fasten,Fix,Grind,Heat,Manipulate,Measure,Mend,Mix,Organize,Sketch,Work)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Complex Overt Response:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, " the ability to skilfully perform complex patterns of actions. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "Key Words: (Assemble,Build,Calibrate,Construct,Dismantle,Display,Dissect,Fasten,Fix,Grind,Heat,Manipulate,Measure,Mend,Mix,Organize,Sketch,Work)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "Adaptation:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, " the ability to modify learned skills to meet special events.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Key Words: (Adapt,Alter,Change,Rearrange,Reorganize,Revise,Vary)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "Origination:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, " creating new movement patterns for a specific situation. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "Key Words: (Arrange,Combine,Compose,Construct,Design,Originate)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL0ZyYW1ld29yay9mcmFtZXdvcmstbWFpbi9mcmFtZXdvcmstbWFpbi5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FrameworkMainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-framework-main',
          templateUrl: './framework-main.component.html',
          styleUrls: ['./framework-main.component.css']
        }]
      }], function () {
        return [{
          type: _framework_component__WEBPACK_IMPORTED_MODULE_2__["FrameworkComponent"]
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
  "./src/app/Features/Framework/framework-routing.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/Features/Framework/framework-routing.module.ts ***!
    \****************************************************************/

  /*! exports provided: FrameworkRoutingModule */

  /***/
  function srcAppFeaturesFrameworkFrameworkRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FrameworkRoutingModule", function () {
      return FrameworkRoutingModule;
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


    var _framework_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./framework.component */
    "./src/app/Features/Framework/framework.component.ts");
    /* harmony import */


    var _framework_main_framework_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./framework-main/framework-main.component */
    "./src/app/Features/Framework/framework-main/framework-main.component.ts");
    /* harmony import */


    var _Shared_Services_Global_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../Shared/Services/Global/auth.guard */
    "./src/app/Shared/Services/Global/auth.guard.ts");

    var routes = [{
      canActivate: [_Shared_Services_Global_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
      path: '',
      component: _framework_component__WEBPACK_IMPORTED_MODULE_2__["FrameworkComponent"],
      children: [{
        path: '',
        redirectTo: '/framework/main',
        pathMatch: 'full'
      }, {
        path: 'main',
        component: _framework_main_framework_main_component__WEBPACK_IMPORTED_MODULE_3__["FrameworkMainComponent"],
        canActivate: [_Shared_Services_Global_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }]
    }];

    var FrameworkRoutingModule = function FrameworkRoutingModule() {
      _classCallCheck(this, FrameworkRoutingModule);
    };

    FrameworkRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FrameworkRoutingModule
    });
    FrameworkRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FrameworkRoutingModule_Factory(t) {
        return new (t || FrameworkRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FrameworkRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FrameworkRoutingModule, [{
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
  "./src/app/Features/Framework/framework.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/Features/Framework/framework.component.ts ***!
    \***********************************************************/

  /*! exports provided: FrameworkComponent */

  /***/
  function srcAppFeaturesFrameworkFrameworkComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FrameworkComponent", function () {
      return FrameworkComponent;
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

    function FrameworkComponent_li_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r1425 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " OBE Framework ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FrameworkComponent_li_8_Template_span_click_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1425);

          var ctx_r1424 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1424.closeTab();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var FrameworkComponent =
    /*#__PURE__*/
    function () {
      function FrameworkComponent(_InterconnectedService) {
        _classCallCheck(this, FrameworkComponent);

        this._InterconnectedService = _InterconnectedService;
        this.Is_Sub_Active = false;
        this.Tab_Title = "";
        this.Is_Sub_Active = _Shared_Services_Global_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"].Report_Sub_Tab;
      }

      _createClass(FrameworkComponent, [{
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
          $("#FrameworkMainTab").removeClass('active');
          $("#FrameworkSubTab").addClass('active');
          this.Is_Sub_Active = true;
        }
      }, {
        key: "closeTab",
        value: function closeTab() {
          this.Is_Sub_Active = false;
          $("#FrameworkMainTab").addClass('active');

          this._InterconnectedService.CloseTriggeredTab("");
        }
      }]);

      return FrameworkComponent;
    }();

    FrameworkComponent.ɵfac = function FrameworkComponent_Factory(t) {
      return new (t || FrameworkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Shared_Services_Global_interconnected_service__WEBPACK_IMPORTED_MODULE_2__["InterconnectedService"]));
    };

    FrameworkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FrameworkComponent,
      selectors: [["app-framework"]],
      decls: 11,
      vars: 1,
      consts: [[1, "tab-content", "main-tab-content", "dragging-area"], ["id", "reports", 1, "tab-pane", "active"], [1, "tabs-menu"], ["role", "tablist", 1, "nav", "nav-tabs"], ["role", "presentation", "id", "FrameworkMainTab", 1, "active"], ["href", "#framework-tab", "role", "tab", "data-toggle", "tab"], [1, "icon", "app-icon-IconSet-1-75", "padding-r5"], ["role", "presentation", "id", "FrameworkSubTab", "class", "active", 4, "ngIf"], [1, "tab-content"], ["role", "presentation", "id", "FrameworkSubTab", 1, "active"], ["href", "#Any-tab", "role", "tab", "data-toggle", "tab"], ["title", "", "data-original-title", "Close Tab", 1, "close-tab", 3, "click"], [1, "app-icon-IconSet-1-07"]],
      template: function FrameworkComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " OBE framework");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FrameworkComponent_li_8_Template, 6, 0, "li", 7);

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
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZlYXR1cmVzL0ZyYW1ld29yay9mcmFtZXdvcmsuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FrameworkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-framework',
          templateUrl: './framework.component.html',
          styleUrls: ['./framework.component.css']
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
  "./src/app/Features/Framework/framework.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/Features/Framework/framework.module.ts ***!
    \********************************************************/

  /*! exports provided: FrameworkModule */

  /***/
  function srcAppFeaturesFrameworkFrameworkModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FrameworkModule", function () {
      return FrameworkModule;
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


    var _framework_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./framework-routing.module */
    "./src/app/Features/Framework/framework-routing.module.ts");
    /* harmony import */


    var _framework_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./framework.component */
    "./src/app/Features/Framework/framework.component.ts");
    /* harmony import */


    var _framework_main_framework_main_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./framework-main/framework-main.component */
    "./src/app/Features/Framework/framework-main/framework-main.component.ts");

    var FrameworkModule = function FrameworkModule() {
      _classCallCheck(this, FrameworkModule);
    };

    FrameworkModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FrameworkModule
    });
    FrameworkModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FrameworkModule_Factory(t) {
        return new (t || FrameworkModule)();
      },
      providers: [_Shared_Services_Global_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
        useClass: _Shared_Services_Global_interceptor_service__WEBPACK_IMPORTED_MODULE_6__["InterceptorService"],
        multi: true
      }],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _framework_routing_module__WEBPACK_IMPORTED_MODULE_12__["FrameworkRoutingModule"], angular_highcharts__WEBPACK_IMPORTED_MODULE_2__["ChartModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__["NgxUiLoaderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_9__["SweetAlert2Module"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlDateTimeModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlNativeDateTimeModule"], _Shared_Pipe_pipesshared_module__WEBPACK_IMPORTED_MODULE_11__["PipessharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FrameworkModule, {
        declarations: [_framework_main_framework_main_component__WEBPACK_IMPORTED_MODULE_14__["FrameworkMainComponent"], _framework_component__WEBPACK_IMPORTED_MODULE_13__["FrameworkComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _framework_routing_module__WEBPACK_IMPORTED_MODULE_12__["FrameworkRoutingModule"], angular_highcharts__WEBPACK_IMPORTED_MODULE_2__["ChartModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__["NgxUiLoaderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_9__["SweetAlert2Module"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlDateTimeModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlNativeDateTimeModule"], _Shared_Pipe_pipesshared_module__WEBPACK_IMPORTED_MODULE_11__["PipessharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FrameworkModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_framework_main_framework_main_component__WEBPACK_IMPORTED_MODULE_14__["FrameworkMainComponent"], _framework_component__WEBPACK_IMPORTED_MODULE_13__["FrameworkComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _framework_routing_module__WEBPACK_IMPORTED_MODULE_12__["FrameworkRoutingModule"], angular_highcharts__WEBPACK_IMPORTED_MODULE_2__["ChartModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__["NgxUiLoaderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_9__["SweetAlert2Module"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlDateTimeModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlNativeDateTimeModule"], _Shared_Pipe_pipesshared_module__WEBPACK_IMPORTED_MODULE_11__["PipessharedModule"]],
          providers: [_Shared_Services_Global_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
            useClass: _Shared_Services_Global_interceptor_service__WEBPACK_IMPORTED_MODULE_6__["InterceptorService"],
            multi: true
          }]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=Features-Framework-framework-module-es5.js.map