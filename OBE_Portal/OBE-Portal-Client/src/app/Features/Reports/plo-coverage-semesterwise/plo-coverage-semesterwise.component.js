import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { PagerService } from '../../../Shared/Services/Global/Pager';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { HighlightPipe } from '../../../Shared/Pipe/highlight.pipe';
import { FilterPipe } from '../../../Shared/Pipe/filter';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
let PloCoverageSemesterwiseComponent = class PloCoverageSemesterwiseComponent {
    constructor(_CoursesSearchService, toastr, ngxService, _ReportsService, pagerService) {
        this._CoursesSearchService = _CoursesSearchService;
        this.toastr = toastr;
        this.ngxService = ngxService;
        this._ReportsService = _ReportsService;
        this.pagerService = pagerService;
        this.Institutes = [];
        this.Department = [];
        this.Intake = [];
        this.PLO_Coverage = [];
        this.PLOs_Coverage_Details = [];
        this.Is_Permission_Institute = false;
        this.Is_Permission_Deaprtment = false;
        this.Is_Permission_Faculty = false;
        this.query = "";
        this.pager = {};
        this.pagesize = 50;
        this.dataset = [];
        this.Selected_Semester = "";
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
        this.PLO_Coverage = [];
        this.Get_Institutes();
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
                        this.Get_Intakes(this.Temp_Deaprtment_ID);
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
    Get_Intakes(val) {
        if (val == undefined || val == null || val == "")
            return;
        this.ngxService.start();
        this.Intake = [];
        this._CoursesSearchService.Get_Intakes(Number(val)).
            subscribe(response => {
            try {
                if (response != null) {
                    this.Intake = response;
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
    GetPLOsCoverageResultsForSelctedIntake() {
        this.PLO_Coverage = [];
        this.PLOs_Coverage_Graph = [];
        this.PLO1 = 0;
        this.PLO2 = 0;
        this.PLO3 = 0;
        this.PLO4 = 0;
        this.PLO5 = 0;
        this.PLO6 = 0;
        this.PLO7 = 0;
        this.PLO8 = 0;
        this.PLO9 = 0;
        this.PLO10 = 0;
        this.PLO11 = 0;
        this.PLO12 = 0;
        var IntakeID = $("#IntakeID").val();
        this.ngxService.start();
        this.pagesize = 50;
        this._ReportsService.Get_All_PLOs_Coverage_Count_Intake_wise(Number(IntakeID)).
            subscribe(response => {
            try {
                if (response != null) {
                    this.dataset = response;
                    for (var i = 0; i < this.dataset.length; i++) {
                        this.PLO1 += this.dataset[i].PLO_One_Skill_Mapped_Count;
                        this.PLO2 += this.dataset[i].PLO_Two_Skill_Mapped_Count;
                        this.PLO3 += this.dataset[i].PLO_Three_Skill_Mapped_Count;
                        this.PLO4 += this.dataset[i].PLO_Four_Skill_Mapped_Count;
                        this.PLO5 += this.dataset[i].PLO_Five_Skill_Mapped_Count;
                        this.PLO6 += this.dataset[i].PLO_Six_Skill_Mapped_Count;
                        this.PLO7 += this.dataset[i].PLO_Seven_Skill_Mapped_Count;
                        this.PLO8 += this.dataset[i].PLO_Eight_Skill_Mapped_Count;
                        this.PLO9 += this.dataset[i].PLO_Nine_Skill_Mapped_Count;
                        this.PLO10 += this.dataset[i].PLO_Ten_Skill_Mapped_Count;
                        this.PLO11 += this.dataset[i].PLO_Eleven_Skill_Mapped_Count;
                        this.PLO12 += this.dataset[i].PLO_Twelth_Skill_Mapped_Count;
                    }
                    this.PLOs_Coverage_Graph.push(["PLO1", Number(this.PLO1)], ["PLO2", Number(this.PLO2)], ["PLO3", Number(this.PLO3)], ["PLO4", Number(this.PLO4)], ["PLO5", Number(this.PLO5)], ["PLO6", Number(this.PLO6)], ["PLO7", Number(this.PLO7)], ["PLO8", Number(this.PLO8)], ["PLO9", Number(this.PLO9)], ["PLO10", Number(this.PLO10)], ["PLO11", Number(this.PLO11)], ["PLO12", Number(this.PLO12)]);
                    this.PLOsCoverage();
                    this.setPage(1, this.pagesize);
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
    PLOsCoverage() {
        $('#PLOsCoverage').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            colors: ['#6dafe1'],
            xAxis: {
                type: 'category',
                labels: {
                    rotation: -75,
                    style: {
                        fontSize: '10px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    name: 'PLOs Coverage',
                    data: this.PLOs_Coverage_Graph,
                    dataLabels: {
                        enabled: true,
                        rotation: -90,
                        color: '#FFFFFF',
                        align: 'right',
                        format: '{point.y:.1f}',
                        y: 10,
                        style: {
                            fontSize: '10px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                }]
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
        this.PLO_Coverage = this.dataset.slice(this.pager.startIndex, this.pager.endIndex + 1);
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
    Get_PLO_Sub_Details(Semester, SemesterAlias, Seleced_PLO) {
        this.Selected_Semester = SemesterAlias;
        this.PLOs_Coverage_Details = [];
        this.ngxService.start();
        this._ReportsService.Get_All_CLOs_Details_Intake_wise({ "Intake": Number($("#IntakeID").val()), "Semester": Number(Semester), "Seleced_PLO": Number(Seleced_PLO) }).
            subscribe(response => {
            if (response != null) {
                $("#CLOs_Mapping_Details").modal('show');
                this.PLOs_Coverage_Details = response;
            }
            this.ngxService.stop();
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
    DownloadExcel() {
        if (this.dataset.length > 0) {
            var wb = XLSX.utils.book_new();
            var header = [];
            var Data = [];
            var Heading = [];
            header.push("Sr.#", "Semester", "PLO1", "PLO2", "PLO3", "PLO4", "PLO5", "PLO6", "PLO7", "PLO8", "PLO9", "PLO10", "PLO11", "PLO12");
            Heading.push(header);
            var SrNumber = 1;
            for (var k = 0; k < this.dataset.length; k++) {
                Data.push({
                    "SrNumber": SrNumber,
                    "semesterAlia": this.dataset[k].semesterAlia,
                    "PLO1": this.dataset[k].PLO_One_Skill_Mapped_Count,
                    "PLO2": this.dataset[k].PLO_Two_Skill_Mapped_Count,
                    "PLO3": this.dataset[k].PLO_Three_Skill_Mapped_Count,
                    "PLO4": this.dataset[k].PLO_Four_Skill_Mapped_Count,
                    "PLO5": this.dataset[k].PLO_Five_Skill_Mapped_Count,
                    "PLO6": this.dataset[k].PLO_Six_Skill_Mapped_Count,
                    "PLO7": this.dataset[k].PLO_Seven_Skill_Mapped_Count,
                    "PLO8": this.dataset[k].PLO_Eight_Skill_Mapped_Count,
                    "PLO9": this.dataset[k].PLO_Nine_Skill_Mapped_Count,
                    "PLO10": this.dataset[k].PLO_Ten_Skill_Mapped_Count,
                    "PLO11": this.dataset[k].PLO_Eleven_Skill_Mapped_Count,
                    "PLO12": this.dataset[k].PLO_Twelth_Skill_Mapped_Count
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
            XLSX.utils.book_append_sheet(wb, ws, "PLOs Coverage Semester wise");
            var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
            FileSaver.saveAs(new Blob([wbout], { type: "application/octet-stream" }), 'PLOs Coverage Semester wise' + ".xlsx");
        }
    }
};
PloCoverageSemesterwiseComponent = __decorate([
    Component({
        selector: 'app-plo-coverage-semesterwise',
        templateUrl: './plo-coverage-semesterwise.component.html',
        styleUrls: ['./plo-coverage-semesterwise.component.css'],
        providers: [PagerService, HighlightPipe, FilterPipe]
    })
], PloCoverageSemesterwiseComponent);
export { PloCoverageSemesterwiseComponent };
//# sourceMappingURL=plo-coverage-semesterwise.component.js.map