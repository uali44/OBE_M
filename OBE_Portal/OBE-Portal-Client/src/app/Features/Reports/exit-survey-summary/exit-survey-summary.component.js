import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { PagerService } from '../../../Shared/Services/Global/Pager';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { HighlightPipe } from '../../../Shared/Pipe/highlight.pipe';
import { FilterPipe } from '../../../Shared/Pipe/filter';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
let ExitSurveySummaryComponent = class ExitSurveySummaryComponent {
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
        this.Exit_Summary = {};
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
        this.Exit_Summary = {};
        var IntakeID = $("#IntakeID").val();
        this.ngxService.start();
        this.pagesize = 50;
        this._ReportsService.GetExitData(Number(IntakeID)).
            subscribe(response => {
            if (response != null) {
                this.dataset.push({ "Sr": 1 }, { "Sr": 1 }, { "Sr": 1 }, { "Sr": 1 }, { "Sr": 1 }, { "Sr": 1 }, { "Sr": 1 }, { "Sr": 1 }, { "Sr": 1 }, { "Sr": 1 }, { "Sr": 1 }, { "Sr": 1 });
                this.Exit_Summary = response;
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
                "Statements": "Gained the ability to apply current scientific and engineering knowledge to solve complex engineering problems.",
                "Mapped PLOs": "PLO-01",
                "Very strong(5)": this.Exit_Summary.ExitQuestion1Count5,
                "Strong(4)": this.Exit_Summary.ExitQuestion1Count4,
                "Moderate(3)": this.Exit_Summary.ExitQuestion1Count3,
                "Weak(2)": this.Exit_Summary.ExitQuestion1Count2,
                "very Weak(1)": this.Exit_Summary.ExitQuestion1Count1
            }, {
                "SrNumber": 2,
                "Statements": "Gained the ability to identify complex engineering problems and formulate solutions based on current scientific and engineering knowledge.",
                "Mapped PLOs": "PLO-02",
                "Very strong(5)": this.Exit_Summary.ExitQuestion2Count5,
                "Strong(4)": this.Exit_Summary.ExitQuestion2Count4,
                "Moderate(3)": this.Exit_Summary.ExitQuestion2Count3,
                "Weak(2)": this.Exit_Summary.ExitQuestion2Count2,
                "very Weak(1)": this.Exit_Summary.ExitQuestion2Count1
            }, {
                "SrNumber": 3,
                "Statements": "Gained the ability to design and develop solutions for complex engineering problems while keeping in view health, safety and environmental considerations.",
                "Mapped PLOs": "PLO-03",
                "Very strong(5)": this.Exit_Summary.ExitQuestion3Count5,
                "Strong(4)": this.Exit_Summary.ExitQuestion3Count4,
                "Moderate(3)": this.Exit_Summary.ExitQuestion3Count3,
                "Weak(2)": this.Exit_Summary.ExitQuestion3Count2,
                "very Weak(1)": this.Exit_Summary.ExitQuestion3Count1
            }, {
                "SrNumber": 4,
                "Statements": "Gained the ability to review and investigate complex engineering problems in a scientific way, starting from survey, inference and experimentation.",
                "Mapped PLOs": "PLO-04",
                "Very strong(5)": this.Exit_Summary.ExitQuestion4Count5,
                "Strong(4)": this.Exit_Summary.ExitQuestion4Count4,
                "Moderate(3)": this.Exit_Summary.ExitQuestion4Count3,
                "Weak(2)": this.Exit_Summary.ExitQuestion4Count2,
                "very Weak(1)": this.Exit_Summary.ExitQuestion4Count1
            }, {
                "SrNumber": 5,
                "Statements": "	Gained the ability to utilize modern tools for your problem solving, to provide solution for a complex engineering problem.",
                "Mapped PLOs": "PLO-05",
                "Very strong(5)": this.Exit_Summary.ExitQuestion5Count5,
                "Strong(4)": this.Exit_Summary.ExitQuestion5Count4,
                "Moderate(3)": this.Exit_Summary.ExitQuestion5Count3,
                "Weak(2)": this.Exit_Summary.ExitQuestion5Count2,
                "very Weak(1)": this.Exit_Summary.ExitQuestion5Count1
            }, {
                "SrNumber": 6,
                "Statements": "	Gained the ability to apply engineering knowledge to assess societal issues in a professional way, keeping in view the safety, legal and cultural constraints.",
                "Mapped PLOs": "PLO-06",
                "Very strong(5)": this.Exit_Summary.ExitQuestion6Count5,
                "Strong(4)": this.Exit_Summary.ExitQuestion6Count4,
                "Moderate(3)": this.Exit_Summary.ExitQuestion6Count3,
                "Weak(2)": this.Exit_Summary.ExitQuestion6Count2,
                "very Weak(1)": this.Exit_Summary.ExitQuestion6Count1
            }, {
                "SrNumber": 7,
                "Statements": "Gained the ability to apply engineering knowledge to develop environmental friendly sustainable solutions.",
                "Mapped PLOs": "PLO-07",
                "Very strong(5)": this.Exit_Summary.ExitQuestion7Count5,
                "Strong(4)": this.Exit_Summary.ExitQuestion7Count4,
                "Moderate(3)": this.Exit_Summary.ExitQuestion7Count3,
                "Weak(2)": this.Exit_Summary.ExitQuestion7Count2,
                "very Weak(1)": this.Exit_Summary.ExitQuestion7Count1
            }, {
                "SrNumber": 8,
                "Statements": "Gained the ability to apply ethical principles and commit to professional ethics and norms of engineering practice.",
                "Mapped PLOs": "PLO-08",
                "Very strong(5)": this.Exit_Summary.ExitQuestion8Count5,
                "Strong(4)": this.Exit_Summary.ExitQuestion8Count4,
                "Moderate(3)": this.Exit_Summary.ExitQuestion8Count3,
                "Weak(2)": this.Exit_Summary.ExitQuestion8Count2,
                "very Weak(1)": this.Exit_Summary.ExitQuestion8Count1
            }, {
                "SrNumber": 9,
                "Statements": "Gained the ability to work independently as well as in a team.",
                "Mapped PLOs": "PLO-09",
                "Very strong(5)": this.Exit_Summary.ExitQuestion9Count5,
                "Strong(4)": this.Exit_Summary.ExitQuestion9Count4,
                "Moderate(3)": this.Exit_Summary.ExitQuestion9Count3,
                "Weak(2)": this.Exit_Summary.ExitQuestion9Count2,
                "very Weak(1)": this.Exit_Summary.ExitQuestion9Count1
            }, {
                "SrNumber": 10,
                "Statements": "Gained the ability to communicate effectively (both orally and through writing) on complex engineering activities.",
                "Mapped PLOs": "PLO-10",
                "Very strong(5)": this.Exit_Summary.ExitQuestion10Count5,
                "Strong(4)": this.Exit_Summary.ExitQuestion10Count4,
                "Moderate(3)": this.Exit_Summary.ExitQuestion10Count3,
                "Weak(2)": this.Exit_Summary.ExitQuestion10Count2,
                "very Weak(1)": this.Exit_Summary.ExitQuestion10Count1
            }, {
                "SrNumber": 11,
                "Statements": "Gained the ability to demonstrate management skills during degree.",
                "Mapped PLOs": "PLO-11",
                "Very strong(5)": this.Exit_Summary.ExitQuestion11Count5,
                "Strong(4)": this.Exit_Summary.ExitQuestion11Count4,
                "Moderate(3)": this.Exit_Summary.ExitQuestion11Count3,
                "Weak(2)": this.Exit_Summary.ExitQuestion11Count2,
                "very Weak(1)": this.Exit_Summary.ExitQuestion11Count1
            }, {
                "SrNumber": 12,
                "Statements": "Gained the ability to realize the importance of continuous professional development throughout the life.",
                "Mapped PLOs": "PLO-12",
                "Very strong(5)": this.Exit_Summary.ExitQuestion12Count5,
                "Strong(4)": this.Exit_Summary.ExitQuestion12Count4,
                "Moderate(3)": this.Exit_Summary.ExitQuestion12Count3,
                "Weak(2)": this.Exit_Summary.ExitQuestion12Count2,
                "very Weak(1)": this.Exit_Summary.ExitQuestion12Count1
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
            XLSX.utils.book_append_sheet(wb, ws, "Exit_Survey_Summary");
            var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
            FileSaver.saveAs(new Blob([wbout], { type: "application/octet-stream" }), 'Exit_Survey_Summary' + ".xlsx");
        }
    }
};
ExitSurveySummaryComponent = __decorate([
    Component({
        selector: 'app-exit-survey-summary',
        templateUrl: './exit-survey-summary.component.html',
        styleUrls: ['./exit-survey-summary.component.css'],
        providers: [PagerService, HighlightPipe, FilterPipe]
    })
], ExitSurveySummaryComponent);
export { ExitSurveySummaryComponent };
//# sourceMappingURL=exit-survey-summary.component.js.map