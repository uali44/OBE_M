import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { PagerService } from '../../../Shared/Services/Global/Pager';
import { HighlightPipe } from '../../../Shared/Pipe/highlight.pipe';
import { FilterPipe } from '../../../Shared/Pipe/filter';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
let CQIExecutiveSummaryComponent = class CQIExecutiveSummaryComponent {
    constructor(_CoursesSearchService, toastr, ngxService, _ReportsService, pagerService) {
        this._CoursesSearchService = _CoursesSearchService;
        this.toastr = toastr;
        this.ngxService = ngxService;
        this._ReportsService = _ReportsService;
        this.pagerService = pagerService;
        this.Institutes = [];
        this.Department = [];
        this.All_Semester = [];
        this.All_Offered_Courses = [];
        this.CQICourses = [];
        this.query = "";
        this.pager = {};
        this.pagesize = 10;
        this.dataset = [];
        this.Is_Permission_Institute = false;
        this.Is_Permission_Deaprtment = false;
        this.Is_Permission_Faculty = false;
        this.Is_Deparment_Selected = false;
        $("#FacultyID").val('0');
        this.Temp_Institute_ID = 0;
        this.Temp_Deaprtment_ID = 0;
        this.Temp_FacultyMember_ID = 0;
        this.Is_Permission_Institute = GlobalService.Permissions.indexOf("Institute_Dropdown") >= 0 ? true : false;
        this.Is_Permission_Deaprtment = GlobalService.Permissions.indexOf("Department_Dropdown") >= 0 ? true : false;
        this.Is_Permission_Faculty = GlobalService.Permissions.indexOf("Faculty_Dropdown") >= 0 ? true : false;
        if (!this.Is_Permission_Institute) {
            this.Temp_Institute_ID = GlobalService.Institute_ID;
        }
        if (!this.Is_Permission_Deaprtment) {
            this.Temp_Deaprtment_ID = GlobalService.Deaprtment_ID;
        }
        if (!this.Is_Permission_Faculty) {
            this.Temp_FacultyMember_ID = GlobalService.FacultyMember_ID;
        }
    }
    ngOnInit() {
        this.Is_Deparment_Selected = false;
        this.Get_Institutes();
        this.Get_Semester();
    }
    Get_Institutes() {
        this.ngxService.start();
        this.Institutes = [];
        this._CoursesSearchService.Get_Institute().
            subscribe(response => {
            try {
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
            }
            catch (e) {
                this.ngxService.stop();
                this.toastr.error("Internal server error occured while processing your request", "Error!");
            }
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
    Get_Semester() {
        this.ngxService.start();
        this.All_Semester = [];
        this._CoursesSearchService.Get_All_Semester().
            subscribe(response => {
            try {
                if (response != null) {
                    this.All_Semester = response;
                }
                this.ngxService.stop();
            }
            catch (e) {
                this.ngxService.stop();
                this.toastr.error("Internal server error occured while processing your request", "Error!");
            }
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
            try {
                if (response != null) {
                    if (this.Temp_Deaprtment_ID != 0) {
                        this.Department = response.filter(x => x.DepartmentID == this.Temp_Deaprtment_ID);
                        this.Is_Deparment_Selected = true;
                    }
                    else {
                        this.Department = response;
                    }
                }
                this.ngxService.stop();
            }
            catch (e) {
                this.ngxService.stop();
                this.toastr.error("Internal server error occured while processing your request", "Error!");
            }
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
    GetCQICourses(val) {
        if (val == undefined || val == null || val == "")
            return;
        this.ngxService.start();
        this.CQICourses = [];
        this._CoursesSearchService.GetCQILevelCourses({
            "Department_ID": Number($("#DepartmentID").val()), "Semester_ID": Number(val)
        }).
            subscribe(response => {
            if (response != null) {
                this.CQICourses = response;
            }
            this.ngxService.stop();
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
    GetAllStudentOfCourseInWhichStudentPassedButCLOsFailed() {
        this.pagesize = 50;
        this.CloAttainmentDetails = [];
        this.ngxService.start();
        this._ReportsService.GetAllStudentOfCourseInWhichStudentPassedButCLOsFailed(Number($("#OfferedCourseID").val())).
            subscribe(response => {
            if (response != null) {
                this.dataset = response;
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
        this.CloAttainmentDetails = this.dataset.slice(this.pager.startIndex, this.pager.endIndex + 1);
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
    DownloadExcelWithCourseDetails() {
        if (this.CloAttainmentDetails.length > 0) {
            var wb = XLSX.utils.book_new();
            var header = [];
            var Data = [];
            var Heading = [];
            header.push("Sr.#", "Intake", "Enrollment", "Name", "Total Marks", "Grade", "CLO Title", "CLO Attainment", "CQI Action");
            Heading.push(header);
            var SrNumber = 1;
            for (var k = 0; k < this.CloAttainmentDetails.length; k++) {
                Data.push({
                    "SrNumber": SrNumber,
                    "Intake": this.CloAttainmentDetails[k].Intake,
                    "Enrollment": this.CloAttainmentDetails[k].Enrollment,
                    "Name": this.CloAttainmentDetails[k].Name,
                    "TotalMarks": this.CloAttainmentDetails[k].Total_Marks,
                    "Grade": this.CloAttainmentDetails[k].Grade,
                    "CLOTitle": this.CloAttainmentDetails[k].CLOTitle,
                    "CLOResult": this.CloAttainmentDetails[k].CLOResult,
                    "CQIAction": this.CloAttainmentDetails[k].CQIAction
                });
                SrNumber += 1;
            }
            var ws = XLSX.utils.aoa_to_sheet(Heading);
            ws["!cols"] = [
                { wpx: 25 },
                { wpx: 100 },
                { wpx: 100 },
                { wpx: 100 },
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
            XLSX.utils.book_append_sheet(wb, ws, "CLOs Failure Details");
            var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
            FileSaver.saveAs(new Blob([wbout], { type: "application/octet-stream" }), 'CLOs Failure Details' + ".xlsx");
        }
    }
};
CQIExecutiveSummaryComponent = __decorate([
    Component({
        selector: 'app-cqi-executive-summary',
        templateUrl: './cqi-executive-summary.component.html',
        styleUrls: ['./cqi-executive-summary.component.css'],
        providers: [PagerService, HighlightPipe, FilterPipe]
    })
], CQIExecutiveSummaryComponent);
export { CQIExecutiveSummaryComponent };
//# sourceMappingURL=cqi-executive-summary.component.js.map