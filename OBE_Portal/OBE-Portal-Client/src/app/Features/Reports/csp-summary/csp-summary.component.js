import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { PagerService } from '../../../Shared/Services/Global/Pager';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { HighlightPipe } from '../../../Shared/Pipe/highlight.pipe';
import { FilterPipe } from '../../../Shared/Pipe/filter';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
let CSPSummaryComponent = class CSPSummaryComponent {
    constructor(_CoursesSearchService, toastr, ngxService, _ReportsService, pagerService) {
        this._CoursesSearchService = _CoursesSearchService;
        this.toastr = toastr;
        this.ngxService = ngxService;
        this._ReportsService = _ReportsService;
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
        this.Selected_Skill = "";
        this.Temp_Institute_ID = 0;
        this.Temp_Deaprtment_ID = 0;
        this.Is_Permission_Institute = GlobalService.Permissions.indexOf("Institute_Dropdown") >= 0 ? true : false;
        this.Is_Permission_Deaprtment = GlobalService.Permissions.indexOf("Department_Dropdown") >= 0 ? true : false;
        if (!this.Is_Permission_Institute) {
            this.Temp_Institute_ID = GlobalService.Institute_ID;
        }
        if (!this.Is_Permission_Deaprtment) {
            this.Temp_Deaprtment_ID = GlobalService.Deaprtment_ID;
        }
    }
    ngOnInit() {
        this.CSP_Summary = {};
        this.Get_Institutes();
    }
    Get_Institutes() {
        this.ngxService.start();
        this.Institutes = [];
        this._CoursesSearchService.Get_Institute().
            subscribe(response => {
            if (response != null) {
                if (this.Temp_Institute_ID != 0) {
                    this.Institutes = response.filter(x => x.InstituteID == this.Temp_Institute_ID);
                    this.Get_Department(this.Temp_Institute_ID);
                }
                else {
                    this.Institutes = response;
                }
            }
            this.ngxService.stop();
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
    Get_Department(val) {
        if (val == undefined || val == null || val == "")
            return;
        this.ngxService.start();
        this.Department = [];
        this._CoursesSearchService.Get_Department(Number(val)).
            subscribe(response => {
            if (response != null) {
                if (this.Temp_Deaprtment_ID != 0) {
                    this.Department = response.filter(x => x.DepartmentID == this.Temp_Deaprtment_ID);
                    this.Get_Intakes(this.Temp_Deaprtment_ID);
                }
                else {
                    this.Department = response;
                }
            }
            this.ngxService.stop();
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
    Get_Intakes(val) {
        if (val == undefined || val == null || val == "")
            return;
        this.ngxService.start();
        this.Intake = [];
        this._CoursesSearchService.Get_Intakes(Number(val)).
            subscribe(response => {
            if (response != null) {
                this.Intake = response;
            }
            this.ngxService.stop();
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
    GetResultsForSelctedIntake() {
        this.CSP_Summary = {};
        var IntakeID = $("#IntakeID").val();
        this.ngxService.start();
        this.pagesize = 50;
        this._ReportsService.GetCSPData(Number(IntakeID)).
            subscribe(response => {
            if (response != null) {
                this.dataset.push({ "Sr": 1 }, { "Sr": 1 }, { "Sr": 1 }, { "Sr": 1 }, { "Sr": 1 }, { "Sr": 1 }, { "Sr": 1 });
                this.CSP_Summary = response;
                this.setPage(1, this.pagesize);
            }
            this.ngxService.stop();
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
    setPage(page, pagesize) {
        this.query = "";
        if ((page < 1 || page > this.pager.totalPages) && page != "") {
            this.page = 1;
            page = 1;
        }
        this.page = page;
        this.pager = this.pagerService.getPager(this.dataset.length, page, pagesize);
        this.serialNumber = ((this.pager.currentPage * this.pagesize) - this.pagesize) + (this.serialNumber);
    }
    keyRestrict(e, validchars, casesensitives, onceevery, onceoneof) {
        onceevery = onceevery ? onceevery : "";
        onceoneof = onceoneof ? onceoneof : "";
        if (!validchars)
            return true;
        var keychar = '', i = 0;
        var key = e.which ? e.which : e.keyCode;
        var obj = e.target ? e.target : e.srcElement;
        if (key == null)
            return true;
        keychar = String.fromCharCode(key);
        validchars = (validchars + onceevery + onceoneof);
        if (!casesensitives) {
            keychar = keychar.toLowerCase();
            validchars = validchars.toLowerCase();
            onceevery = onceevery.toLowerCase();
            onceoneof = onceoneof.toLowerCase();
        }
        for (i = 0; i < (onceevery + onceoneof).length; i++) {
            if (i < onceevery.length) {
                if (obj.value.indexOf(onceevery.charAt(i)) != -1 && keychar == onceevery.charAt(i))
                    return false;
            }
            else {
                if (obj.value.indexOf(onceoneof.charAt(i - onceevery.length)) != -1 && onceoneof.indexOf(keychar) != -1)
                    return false;
            }
        }
        if (validchars.indexOf(keychar) != -1)
            return true;
        if (key == null || key == 0 || key == 8 || key == 9 || key == 13 || key == 27 || key == 39 || key == 32)
            return true;
        return false;
    }
    DownloadExcel() {
        if (this.dataset.length > 0) {
            var wb = XLSX.utils.book_new();
            var header = [];
            var Data = [];
            var Heading = [];
            header.push("Sr.#", "Statements", "Mapped PLOs", "Very strong(5)", "Strong(4)", "Moderate(3)", "Weak(2)", "very Weak(1)");
            Heading.push(header);
            var SrNumber = 1;
            Data.push({
                "SrNumber": 1,
                "Statements": "Ability to assess societal issues, keeping in view safety, legal and cultural constraints.",
                "Mapped PLOs": "PLO-06",
                "Very strong(5)": this.CSP_Summary.CSPQuestion1Count5,
                "Strong(4)": this.CSP_Summary.CSPQuestion1Count4,
                "Moderate(3)": this.CSP_Summary.CSPQuestion1Count3,
                "Weak(2)": this.CSP_Summary.CSPQuestion1Count2,
                "very Weak(1)": this.CSP_Summary.CSPQuestion1Count1
            }, {
                "SrNumber": 2,
                "Statements": "Demonstrate sensitivity towards various social and environmental problems.",
                "Mapped PLOs": "PLO-07",
                "Very strong(5)": this.CSP_Summary.CSPQuestion2Count5,
                "Strong(4)": this.CSP_Summary.CSPQuestion2Count4,
                "Moderate(3)": this.CSP_Summary.CSPQuestion2Count3,
                "Weak(2)": this.CSP_Summary.CSPQuestion2Count2,
                "very Weak(1)": this.CSP_Summary.CSPQuestion2Count1
            }, {
                "SrNumber": 3,
                "Statements": "Ability to demonstrate ethical principles and societal norms.",
                "Mapped PLOs": "PLO-08",
                "Very strong(5)": this.CSP_Summary.CSPQuestion3Count5,
                "Strong(4)": this.CSP_Summary.CSPQuestion3Count4,
                "Moderate(3)": this.CSP_Summary.CSPQuestion3Count3,
                "Weak(2)": this.CSP_Summary.CSPQuestion3Count2,
                "very Weak(1)": this.CSP_Summary.CSPQuestion3Count1
            }, {
                "SrNumber": 4,
                "Statements": "Ability to work independently as well as in a team.",
                "Mapped PLOs": "PLO-09",
                "Very strong(5)": this.CSP_Summary.CSPQuestion4Count5,
                "Strong(4)": this.CSP_Summary.CSPQuestion4Count4,
                "Moderate(3)": this.CSP_Summary.CSPQuestion4Count3,
                "Weak(2)": this.CSP_Summary.CSPQuestion4Count2,
                "very Weak(1)": this.CSP_Summary.CSPQuestion4Count1
            }, {
                "SrNumber": 5,
                "Statements": "Ability to communicate effectively.",
                "Mapped PLOs": "PLO-10",
                "Very strong(5)": this.CSP_Summary.CSPQuestion5Count5,
                "Strong(4)": this.CSP_Summary.CSPQuestion5Count4,
                "Moderate(3)": this.CSP_Summary.CSPQuestion5Count3,
                "Weak(2)": this.CSP_Summary.CSPQuestion5Count2,
                "very Weak(1)": this.CSP_Summary.CSPQuestion5Count1
            }, {
                "SrNumber": 6,
                "Statements": "Ability to demonstrate management skills and to accomplish given task in specific time.",
                "Mapped PLOs": "PLO-11",
                "Very strong(5)": this.CSP_Summary.CSPQuestion6Count5,
                "Strong(4)": this.CSP_Summary.CSPQuestion6Count4,
                "Moderate(3)": this.CSP_Summary.CSPQuestion6Count3,
                "Weak(2)": this.CSP_Summary.CSPQuestion6Count2,
                "very Weak(1)": this.CSP_Summary.CSPQuestion6Count1
            }, {
                "SrNumber": 7,
                "Statements": "Demonstrate the initiative and drive to learn new things.",
                "Mapped PLOs": "PLO-12",
                "Very strong(5)": this.CSP_Summary.CSPQuestion7Count5,
                "Strong(4)": this.CSP_Summary.CSPQuestion7Count4,
                "Moderate(3)": this.CSP_Summary.CSPQuestion7Count3,
                "Weak(2)": this.CSP_Summary.CSPQuestion7Count2,
                "very Weak(1)": this.CSP_Summary.CSPQuestion7Count1
            });
            var ws = XLSX.utils.aoa_to_sheet(Heading);
            ws["!cols"] = [
                { wpx: 25 },
                { wpx: 100 },
                { wpx: 60 },
                { wpx: 60 },
                { wpx: 60 },
                { wpx: 60 },
                { wpx: 60 },
                { wpx: 60 }
            ];
            XLSX.utils.sheet_add_json(ws, Data, {
                skipHeader: true,
                origin: -1,
            });
            XLSX.utils.book_append_sheet(wb, ws, "CSP_Summary");
            var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
            FileSaver.saveAs(new Blob([wbout], { type: "application/octet-stream" }), 'CSP_Summary' + ".xlsx");
        }
    }
};
CSPSummaryComponent = __decorate([
    Component({
        selector: 'app-csp-summary',
        templateUrl: './csp-summary.component.html',
        styleUrls: ['./csp-summary.component.css'],
        providers: [PagerService, HighlightPipe, FilterPipe]
    })
], CSPSummaryComponent);
export { CSPSummaryComponent };
//# sourceMappingURL=csp-summary.component.js.map