import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { PagerService } from '../../../Shared/Services/Global/Pager';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { HighlightPipe } from '../../../Shared/Pipe/highlight.pipe';
import { FilterPipe } from '../../../Shared/Pipe/filter';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
let CloAttainmentComponent = class CloAttainmentComponent {
    constructor(_CoursesSearchService, toastr, ngxService, _ReportsService, pagerService) {
        this._CoursesSearchService = _CoursesSearchService;
        this.toastr = toastr;
        this.ngxService = ngxService;
        this._ReportsService = _ReportsService;
        this.pagerService = pagerService;
        this.Institutes = [];
        this.Department = [];
        this.All_Semester = [];
        this.Clo_Attainment = [];
        this.CloAttainmentDetails = [];
        this.Skill_Coverage_Details = [];
        this.Is_Permission_Institute = false;
        this.Is_Permission_Deaprtment = false;
        this.Is_Permission_Faculty = false;
        this.query = "";
        this.pager = {};
        this.pagesize = 50;
        this.dataset = [];
        this.Selected_Skill = "";
        this.CourseTitle = "";
        this.CLOTitle = "";
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
        this.Clo_Attainment = [];
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
                }
                else {
                    this.Department = response;
                }
            }
            this.ngxService.stop();
            this.Get_Semester();
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
    Get_Semester() {
        $("#SemesterID").val('0');
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
    GetCLOsAttainment() {
        this.Clo_Attainment = [];
        this.ngxService.start();
        this.pagesize = 50;
        this._ReportsService.GetCLOsAttainment({ "Institute": Number($("#Institute").val()), "Deaprtment": Number($("#Deparment").val()), "Semester": Number($("#SemesterID").val()) }).
            subscribe(response => {
            if (response != null) {
                this.dataset = response;
                if (Number($("#Status").val()) === 2) {
                    this.dataset = this.dataset.filter(x => x.CLOStatus === 2);
                }
                else if (Number($("#Status").val()) === 3) {
                    this.dataset = this.dataset.filter(x => x.CLOStatus === 1);
                }
                else if (Number($("#Status").val()) === 4) {
                    this.dataset = this.dataset.filter(x => x.CLOStatus === 0);
                }
                this.setPage(1, this.pagesize);
            }
            this.ngxService.stop();
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
    GetCLOResult(obj) {
        this.CourseTitle = obj.Title;
        this.CLOTitle = obj.CLOTitle;
        this.CloAttainmentDetails = [];
        this.ngxService.start();
        this._ReportsService.GetCLOsAttainmentDetails(Number(obj.CoursesCLOSID)).
            subscribe(response => {
            if (response != null) {
                $("#ModelCloAttainmentDetails").modal('show');
                this.CloAttainmentDetails = response;
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
        this.Clo_Attainment = this.dataset.slice(this.pager.startIndex, this.pager.endIndex + 1);
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
            header.push("Sr.#", "Intake", "Semester", "Course Title", "Teacher", "CLO Title", "Description", "Mapped PLO", "Skill", "Level", "CLO Attainment");
            Heading.push(header);
            var SrNumber = 1;
            for (var k = 0; k < this.dataset.length; k++) {
                Data.push({
                    "SrNumber": SrNumber,
                    "Intake": this.dataset[k].Intake,
                    "semesterAlia": this.dataset[k].semesterAlia,
                    "title": this.dataset[k].Title,
                    "name": this.dataset[k].Name,
                    "cloTitle": this.dataset[k].CLOTitle,
                    "cloDescription": this.dataset[k].CLODescription,
                    "plO_Title": this.dataset[k].PLO_Title,
                    "clO_Skill_Title": this.dataset[k].CLO_Skill_Title,
                    "clO_Skill_Level_Title": this.dataset[k].CLO_Skill_Level_Title,
                    "clO_Attainment": this.dataset[k].CLO_Attainment
                });
                SrNumber += 1;
            }
            var ws = XLSX.utils.aoa_to_sheet(Heading);
            ws["!cols"] = [
                { wpx: 25 },
                { wpx: 100 },
                { wpx: 60 },
                { wpx: 60 },
                { wpx: 60 },
                { wpx: 60 },
                { wpx: 60 },
                { wpx: 60 },
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
            XLSX.utils.book_append_sheet(wb, ws, "CLOs Attainment Details");
            var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
            FileSaver.saveAs(new Blob([wbout], { type: "application/octet-stream" }), 'CLOs Attainment Details' + ".xlsx");
        }
    }
};
CloAttainmentComponent = __decorate([
    Component({
        selector: 'app-clo-attainment',
        templateUrl: './clo-attainment.component.html',
        styleUrls: ['./clo-attainment.component.css'],
        providers: [PagerService, HighlightPipe, FilterPipe]
    })
], CloAttainmentComponent);
export { CloAttainmentComponent };
//# sourceMappingURL=clo-attainment.component.js.map