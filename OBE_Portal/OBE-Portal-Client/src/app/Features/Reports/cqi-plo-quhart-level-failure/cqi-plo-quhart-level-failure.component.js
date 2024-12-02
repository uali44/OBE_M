import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { PagerService } from '../../../Shared/Services/Global/Pager';
import { HighlightPipe } from '../../../Shared/Pipe/highlight.pipe';
import { FilterPipe } from '../../../Shared/Pipe/filter';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import Swal from 'sweetalert2';
let CQIPloQuhartLevelFailureComponent = class CQIPloQuhartLevelFailureComponent {
    constructor(_CoursesSearchService, toastr, ngxService, _ReportsService, pagerService) {
        this._CoursesSearchService = _CoursesSearchService;
        this.toastr = toastr;
        this.ngxService = ngxService;
        this._ReportsService = _ReportsService;
        this.pagerService = pagerService;
        this.Institutes = [];
        this.Department = [];
        this.Intake = [];
        this.PLOs_Analysis = [];
        this.PLOs_Analysis_Graph = [];
        this.Is_Permission_Institute = false;
        this.Is_Permission_Deaprtment = false;
        this.Is_Permission_Faculty = false;
        this.Mapped_CLO_And_Attainment = [];
        this.query = "";
        this.pager = {};
        this.pagesize = 50;
        this.dataset = [];
        this.Selected_PLO_And_Student_Details = [];
        this.IsGradeFExcluded = true;
        this.IsGradeFExcludedConditional = true;
        this.Temp_Institute_ID = 0;
        this.Temp_Deaprtment_ID = 0;
        this.Is_Permission_Institute = GlobalService.Permissions.indexOf("Institute_Dropdown") >= 0 ? true : false;
        this.Is_Permission_Deaprtment = GlobalService.Permissions.indexOf("Department_Dropdown") >= 0 ? true : false;
        this.Is_Permission_Faculty = GlobalService.Permissions.indexOf("Faculty_Dropdown") >= 0 ? true : false;
        if (!this.Is_Permission_Institute) {
            this.Temp_Institute_ID = GlobalService.Institute_ID;
        }
        if (!this.Is_Permission_Deaprtment) {
            this.Temp_Deaprtment_ID = GlobalService.Deaprtment_ID;
        }
    }
    ngOnInit() {
        this.PLOs_Analysis = [];
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
    GetPLOsResultsForSelctedIntake() {
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
        this.PLOs_Analysis = [];
        this.PLOs_Analysis_Graph = [];
        var IntakeID = $("#IntakeID").val();
        this.ngxService.start();
        this.pagesize = 50;
        this.IsGradeFExcludedConditional = true;
        this._ReportsService.Get_PLOs_Analysis_For_Selected_Intake_CQI(Number(IntakeID)).
            subscribe(response => {
            try {
                if (response != null) {
                    this.dataset = response;
                    for (var i = 0; i < this.dataset.length; i++) {
                        this.PLO1 += this.dataset[i].PLO_One_Attainment;
                        this.PLO2 += this.dataset[i].PLO_Two_Attainment;
                        this.PLO3 += this.dataset[i].PLO_Three_Attainment;
                        this.PLO4 += this.dataset[i].PLO_Four_Attainment;
                        this.PLO5 += this.dataset[i].PLO_Five_Attainment;
                        this.PLO6 += this.dataset[i].PLO_Six_Attainment;
                        this.PLO7 += this.dataset[i].PLO_Seven_Attainment;
                        this.PLO8 += this.dataset[i].PLO_Eight_Attainment;
                        this.PLO9 += this.dataset[i].PLO_Nine_Attainment;
                        this.PLO10 += this.dataset[i].PLO_Ten_Attainment;
                        this.PLO11 += this.dataset[i].PLO_Eleven_Attainment;
                        this.PLO12 += this.dataset[i].PLO_Twelth_Attainment;
                    }
                    this.PLOs_Analysis_Graph.push(["PLO1", Number(Math.round((this.PLO1 / this.dataset.length)))], ["PLO2", Number(Math.round((this.PLO2 / this.dataset.length)))], ["PLO3", Number(Math.round((this.PLO3 / this.dataset.length)))], ["PLO4", Number(Math.round((this.PLO4 / this.dataset.length)))], ["PLO5", Number(Math.round((this.PLO5 / this.dataset.length)))], ["PLO6", Number(Math.round((this.PLO6 / this.dataset.length)))], ["PLO7", Number(Math.round((this.PLO7 / this.dataset.length)))], ["PLO8", Number(Math.round((this.PLO8 / this.dataset.length)))], ["PLO9", Number(Math.round((this.PLO9 / this.dataset.length)))], ["PLO10", Number(Math.round((this.PLO10 / this.dataset.length)))], ["PLO11", Number(Math.round((this.PLO11 / this.dataset.length)))], ["PLO12", Number(Math.round((this.PLO12 / this.dataset.length)))]);
                    this.PLOSAttainment();
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
    setPage(page, pagesize) {
        this.query = "";
        if ((page < 1 || page > this.pager.totalPages) && page != "") {
            this.page = 1;
            page = 1;
        }
        this.page = page;
        this.pager = this.pagerService.getPager(this.dataset.length, page, pagesize);
        this.serialNumber = ((this.pager.currentPage * this.pagesize) - this.pagesize) + (this.serialNumber);
        this.PLOs_Analysis = this.dataset.slice(this.pager.startIndex, this.pager.endIndex + 1);
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
    PLOSAttainment() {
        $('#PLOsAttainment').highcharts({
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
                    style: {
                        fontSize: '10px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            },
            yAxis: {
                min: 0,
                max: 100,
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
                    name: 'PLOs Attainment',
                    data: this.PLOs_Analysis_Graph,
                    dataLabels: {
                        enabled: true,
                        color: '#000000',
                        align: 'top',
                        format: '{point.y:.1f}',
                        style: {
                            fontSize: '10px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                }]
        });
    }
    Get_PLO_Sub_Details(StudentID, name, enrollement, PLO_Attainment, Total_CLO_Count, Passed_CLO_Count, Failed_CLO_Count, PLOID) {
        this.ngxService.start();
        this.Selected_PLO = "PLO" + PLOID;
        this.Selected_StudentID = StudentID;
        this.Selected_Student_Name = name;
        this.Selected_Student_Enrollment = enrollement;
        this.Selected_PLO_Attainment = PLO_Attainment;
        this.Selected_PLO_And_Student_Details = [];
        this._ReportsService.Get_Selected_PLO_Student_Details({ "StudentID": Number(StudentID), "PLOID": Number(PLOID) }).
            subscribe(response => {
            try {
                if (response != null) {
                    this.Selected_PLO_And_Student_Details = response;
                    this.Selected_PLO_Mapped_CLOs_Count = this.Selected_PLO_And_Student_Details.length;
                    this.Selected_PLO_Mapped_CLO_Failed = this.Selected_PLO_And_Student_Details.filter(x => x.Status == 1).length;
                    this.Selected_PLO_Mapped_CLO_Passed = this.Selected_PLO_And_Student_Details.filter(x => x.Status == 2).length;
                    this.Selected_PLO_Mapped_Not_Considered_CLO = this.Selected_PLO_And_Student_Details.filter(x => x.Status == 3).length;
                }
                $("#PLO_Details").modal('show');
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
    Get_PLO_Indirect_Sub_Details(StudentID, name, enrollement, PLOID) {
        //this.ngxService.start();
        //this.Selected_PLO = "PLO" + PLOID;
        //this.Selected_StudentID = StudentID;
        //this.Selected_Student_Name = name;
        //this.Selected_Student_Enrollment = enrollement;
        //this.Selected_PLO_Attainment = PLO_Attainment;
        //this.Selected_PLO_And_Student_Details = [];
        //this._ReportsService.Get_Selected_PLO_Student_Details({ "StudentID": Number(StudentID), "PLOID": Number(PLOID) }).
        //  subscribe(
        //    response => {
        //      try {
        //        if (response != null) {
        //          this.Selected_PLO_And_Student_Details = response;
        //          this.Selected_PLO_Mapped_CLOs_Count = this.Selected_PLO_And_Student_Details.length;
        //          this.Selected_PLO_Mapped_CLO_Failed = this.Selected_PLO_And_Student_Details.filter(x => x.Status == 1).length;
        //          this.Selected_PLO_Mapped_CLO_Passed = this.Selected_PLO_And_Student_Details.filter(x => x.Status == 2).length;
        //          this.Selected_PLO_Mapped_Not_Considered_CLO = this.Selected_PLO_And_Student_Details.filter(x => x.Status == 3).length;
        //        }
        //        $("#PLO_Details").modal('show');
        //        this.ngxService.stop();
        //      } catch (e) {
        //        this.ngxService.stop();
        //        this.toastr.error("Internal server error occured while processing your request", "Error!");
        //      }
        //    },
        //    error => {
        //      this.ngxService.stop();
        //      this.toastr.error("Internal server error occured while processing your request", "Error!");
        //    });
    }
    DownloadExcel() {
        if (this.dataset.length > 0) {
            var wb = XLSX.utils.book_new();
            var header = [];
            var Data = [];
            var Heading = [];
            header.push("Sr.#", "Erollment", "Name", "PLO1", "PLO2", "PLO3", "PLO4", "PLO5", "PLO6", "PLO7", "PLO8", "PLO9", "PLO10", "PLO11", "PLO12");
            Heading.push(header);
            var SrNumber = 1;
            for (var k = 0; k < this.dataset.length; k++) {
                Data.push({
                    "SrNumber": SrNumber,
                    "Enrollment": this.dataset[k].Enrollment,
                    "Name": this.dataset[k].Name,
                    "PLO1": this.dataset[k].PLO_One_Attainment + '%',
                    "PLO2": this.dataset[k].PLO_Two_Attainment + '%',
                    "PLO3": this.dataset[k].PLO_Three_Attainment + '%',
                    "PLO4": this.dataset[k].PLO_Four_Attainment + '%',
                    "PLO5": this.dataset[k].PLO_Five_Attainment + '%',
                    "PLO6": this.dataset[k].PLO_Six_Attainment + '%',
                    "PLO7": this.dataset[k].PLO_Seven_Attainment + '%',
                    "PLO8": this.dataset[k].PLO_Eight_Attainment + '%',
                    "PLO9": this.dataset[k].PLO_Nine_Attainment + '%',
                    "PLO10": this.dataset[k].PLO_Ten_Attainment + '%',
                    "PLO11": this.dataset[k].PLO_Eleven_Attainment + '%',
                    "PLO12": this.dataset[k].PLO_Twelth_Attainment + '%'
                });
                SrNumber += 1;
            }
            var ws = XLSX.utils.aoa_to_sheet(Heading);
            ws["!cols"] = [
                { wpx: 25 },
                { wpx: 100 },
                { wpx: 200 },
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
            XLSX.utils.book_append_sheet(wb, ws, "PLOs Analysis");
            var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
            FileSaver.saveAs(new Blob([wbout], { type: "application/octet-stream" }), 'PLOs Analysis' + ".xlsx");
        }
        else {
            this.toastr.error("Please select intake", "Error");
        }
    }
    DownloadSubExcel() {
        if (this.Selected_PLO_And_Student_Details.length > 0) {
            var wb = XLSX.utils.book_new();
            var header = [];
            var Data = [];
            var Heading = [];
            header.push("Sr.#", "PLO", "Enrollment", "Student Name", "Semester", "Course", "Grade", "CLO Title", "CLO Attainment");
            Heading.push(header);
            var SrNumber = 1;
            for (var k = 0; k < this.Selected_PLO_And_Student_Details.length; k++) {
                Data.push({
                    "SrNumber": SrNumber,
                    "Selected_PLO": this.Selected_PLO,
                    "Selected_Student_Enrollment": this.Selected_Student_Enrollment,
                    "Selected_Student_Name": this.Selected_Student_Name,
                    "Semester": this.Selected_PLO_And_Student_Details[k].semesterAlia,
                    "Course": this.Selected_PLO_And_Student_Details[k].Title,
                    "Grade": this.Selected_PLO_And_Student_Details[k].Grade,
                    "CLOTitle": this.Selected_PLO_And_Student_Details[k].CLOTitle,
                    "CLOResult": this.Selected_PLO_And_Student_Details[k].CLOResult + "%"
                });
                SrNumber += 1;
            }
            var ws = XLSX.utils.aoa_to_sheet(Heading);
            ws["!cols"] = [
                { wpx: 25 },
                { wpx: 100 },
                { wpx: 200 },
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
            var temp = this.Selected_PLO + "_" + this.Selected_Student_Enrollment;
            XLSX.utils.book_append_sheet(wb, ws, temp);
            var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
            FileSaver.saveAs(new Blob([wbout], { type: "application/octet-stream" }), temp + ".xlsx");
        }
        else {
            this.toastr.error("Please select intake", "Error");
        }
    }
    ExcludeStudentFromAnalysis(val) {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this again!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            reverseButtons: true,
        }).then((result) => {
            if (result.value) {
                this.ngxService.start();
                this._ReportsService.DeleteStudentFromAnalysis(val).
                    subscribe(data => {
                    this.ngxService.stop();
                    if (data) {
                        this.toastr.success("Selected student is removed from PLOs analysis.", "Success!");
                        this.GetPLOsResultsForSelctedIntake();
                    }
                    else {
                        this.toastr.error("Error occured while processing your request. Please contact to admin.", "Error!");
                    }
                }, error => {
                    this.ngxService.stop();
                    this.toastr.error("Error occured while processing your request. Please contact to admin.", "Error!");
                });
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.close();
            }
        });
    }
    ExcludeCLOFromAnalysis(val) {
        Swal.fire({
            title: 'Are you sure you want to perform this action?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, do it!',
            cancelButtonText: 'No, keep it',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            reverseButtons: true,
        }).then((result) => {
            if (result.value) {
                this.ngxService.start();
                this._ReportsService.ExcludeCLOFromAnalysis(val).
                    subscribe(data => {
                    this.ngxService.stop();
                    if (data) {
                        this.toastr.success("Selected CLO for the student is updated successfully.", "Success!");
                        $("#PLO_Details").modal('hide');
                    }
                    else {
                        this.toastr.error("Error occured while processing your request. Please contact to admin.", "Error!");
                    }
                }, error => {
                    this.ngxService.stop();
                    this.toastr.error("Error occured while processing your request. Please contact to admin.", "Error!");
                });
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.close();
            }
        });
    }
    GradeFCheck(val) {
        this.IsGradeFExcluded = val;
    }
};
CQIPloQuhartLevelFailureComponent = __decorate([
    Component({
        selector: 'app-cqi-plo-quhart-level-failure',
        templateUrl: './cqi-plo-quhart-level-failure.component.html',
        styleUrls: ['./cqi-plo-quhart-level-failure.component.css'],
        providers: [PagerService, HighlightPipe, FilterPipe]
    })
], CQIPloQuhartLevelFailureComponent);
export { CQIPloQuhartLevelFailureComponent };
//# sourceMappingURL=cqi-plo-quhart-level-failure.component.js.map