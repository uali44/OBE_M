import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { PagerService } from '../../../Shared/Services/Global/Pager';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { HighlightPipe } from '../../../Shared/Pipe/highlight.pipe';
import { FilterPipe } from '../../../Shared/Pipe/filter';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
let PloSkillsMappingComponent = class PloSkillsMappingComponent {
    constructor(_CoursesSearchService, toastr, ngxService, _ReportsService, pagerService) {
        this._CoursesSearchService = _CoursesSearchService;
        this.toastr = toastr;
        this.ngxService = ngxService;
        this._ReportsService = _ReportsService;
        this.pagerService = pagerService;
        this.Institutes = [];
        this.Department = [];
        this.Intake = [];
        this.Skill_Coverage = [];
        this.Skill_Coverage_Details = [];
        this.Is_Permission_Institute = false;
        this.Is_Permission_Deaprtment = false;
        this.Is_Permission_Faculty = false;
        this.query = "";
        this.pager = {};
        this.pagesize = 50;
        this.dataset = [];
        this.Selected_Skill = "";
        this.Total_Number_Of_Affective_Count = 0;
        this.Total_Number_Of_Cognitive_Count = 0;
        this.Total_Number_Of_Psychomotor_Count = 0;
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
        this.Skill_Coverage = [];
        this.Get_Institutes();
    }
    Get_Institutes() {
        this.ngxService.start();
        this.Institutes = [];
        this._CoursesSearchService.Get_Institute().
            subscribe(response => {
            if (response != null) {
                if (this.Temp_Institute_ID != 0) {
                    this.Institutes = response.filter(x => x.instituteID == this.Temp_Institute_ID);
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
                    this.Department = response.filter(x => x.departmentID == this.Temp_Deaprtment_ID);
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
    GetSkillResultsForSelctedIntake() {
        this.Skill_Coverage = [];
        var IntakeID = $("#IntakeID").val();
        this.ngxService.start();
        this.pagesize = 50;
        this._ReportsService.Get_All_Skills_Count_Intake_wise(Number(IntakeID)).
            subscribe(response => {
            if (response != null) {
                this.PLO1Total = 0;
                this.PLO2Total = 0;
                this.PLO3Total = 0;
                this.PLO4Total = 0;
                this.PLO5Total = 0;
                this.PLO6Total = 0;
                this.PLO7Total = 0;
                this.PLO8Total = 0;
                this.PLO9Total = 0;
                this.PLO10Total = 0;
                this.PLO11Total = 0;
                this.PLO12Total = 0;
                this.dataset = response;
                this.Total_Number_Of_Affective_Count =
                    Number(response[0].PLO_One_Skill_Mapped_Count) + Number(response[0].PLO_Two_Skill_Mapped_Count) + Number(response[0].PLO_Three_Skill_Mapped_Count) +
                        Number(response[0].PLO_Four_Skill_Mapped_Count) + Number(response[0].PLO_Five_Skill_Mapped_Count) + Number(response[0].PLO_Six_Skill_Mapped_Count) +
                        Number(response[0].PLO_Seven_Skill_Mapped_Count) + Number(response[0].PLO_Eight_Skill_Mapped_Count) + Number(response[0].PLO_Nine_Skill_Mapped_Count) +
                        Number(response[0].PLO_Ten_Skill_Mapped_Count) + Number(response[0].PLO_Eleven_Skill_Mapped_Count) + Number(response[0].PLO_Twelth_Skill_Mapped_Count);
                this.Total_Number_Of_Cognitive_Count =
                    Number(response[1].PLO_One_Skill_Mapped_Count) + Number(response[1].PLO_Two_Skill_Mapped_Count) + Number(response[1].PLO_Three_Skill_Mapped_Count) +
                        Number(response[1].PLO_Four_Skill_Mapped_Count) + Number(response[1].PLO_Five_Skill_Mapped_Count) + Number(response[1].PLO_Six_Skill_Mapped_Count) +
                        Number(response[1].PLO_Seven_Skill_Mapped_Count) + Number(response[1].PLO_Eight_Skill_Mapped_Count) + Number(response[1].PLO_Nine_Skill_Mapped_Count) +
                        Number(response[1].PLO_Ten_Skill_Mapped_Count) + Number(response[1].PLO_Eleven_Skill_Mapped_Count) + Number(response[1].PLO_Twelth_Skill_Mapped_Count);
                this.Total_Number_Of_Psychomotor_Count =
                    Number(response[2].PLO_One_Skill_Mapped_Count) + Number(response[2].PLO_Two_Skill_Mapped_Count) + Number(response[2].PLO_Three_Skill_Mapped_Count) +
                        Number(response[2].PLO_Four_Skill_Mapped_Count) + Number(response[2].PLO_Five_Skill_Mapped_Count) + Number(response[2].PLO_Six_Skill_Mapped_Count) +
                        Number(response[2].PLO_Seven_Skill_Mapped_Count) + Number(response[2].PLO_Eight_Skill_Mapped_Count) + Number(response[2].PLO_Nine_Skill_Mapped_Count) +
                        Number(response[2].PLO_Ten_Skill_Mapped_Count) + Number(response[2].PLO_Eleven_Skill_Mapped_Count) + Number(response[2].PLO_Twelth_Skill_Mapped_Count);
                for (var i = 0; i < this.dataset.length; i++) {
                    this.PLO1Total += this.dataset[i].PLO_One_Skill_Mapped_Count;
                    this.PLO2Total += this.dataset[i].PLO_Two_Skill_Mapped_Count;
                    this.PLO3Total += this.dataset[i].PLO_Three_Skill_Mapped_Count;
                    this.PLO4Total += this.dataset[i].PLO_Four_Skill_Mapped_Count;
                    this.PLO5Total += this.dataset[i].PLO_Five_Skill_Mapped_Count;
                    this.PLO6Total += this.dataset[i].PLO_Six_Skill_Mapped_Count;
                    this.PLO7Total += this.dataset[i].PLO_Seven_Skill_Mapped_Count;
                    this.PLO8Total += this.dataset[i].PLO_Eight_Skill_Mapped_Count;
                    this.PLO9Total += this.dataset[i].PLO_Nine_Skill_Mapped_Count;
                    this.PLO10Total += this.dataset[i].PLO_Ten_Skill_Mapped_Count;
                    this.PLO11Total += this.dataset[i].PLO_Eleven_Skill_Mapped_Count;
                    this.PLO12Total += this.dataset[i].PLO_Twelth_Skill_Mapped_Count;
                }
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
        this.Skill_Coverage = this.dataset.slice(this.pager.startIndex, this.pager.endIndex + 1);
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
    Get_PLO_Sub_Details(Skill, Seleced_PLO) {
        if (Number(Skill) == 1) {
            this.Selected_Skill = 'Affective';
        }
        else if (Number(Skill) == 2) {
            this.Selected_Skill = 'Cognitive';
        }
        else if (Number(Skill) == 3) {
            this.Selected_Skill = 'Psychomotor';
        }
        this.Skill_Coverage_Details = [];
        this.ngxService.start();
        this._ReportsService.Get_All_Skills_Details_Intake_wise({ "Intake": Number($("#IntakeID").val()), "Skill": Number(Skill), "Seleced_PLO": Number(Seleced_PLO) }).
            subscribe(response => {
            if (response != null) {
                $("#Skill_Mapping_Details").modal('show');
                this.Skill_Coverage_Details = response;
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
            header.push("Sr.#", "Skill", "PLO1", "PLO2", "PLO3", "PLO4", "PLO5", "PLO6", "PLO7", "PLO8", "PLO9", "PLO10", "PLO11", "PLO12");
            Heading.push(header);
            var SrNumber = 1;
            for (var k = 0; k < this.dataset.length; k++) {
                Data.push({
                    "SrNumber": SrNumber,
                    "clO_Skill_Title": this.dataset[k].clO_Skill_Title,
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
            XLSX.utils.book_append_sheet(wb, ws, "PLOs Skill Mapping Count");
            var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
            FileSaver.saveAs(new Blob([wbout], { type: "application/octet-stream" }), 'PLOs Skill Mapping Count' + ".xlsx");
        }
    }
};
PloSkillsMappingComponent = __decorate([
    Component({
        selector: 'app-plo-skills-mapping',
        templateUrl: './plo-skills-mapping.component.html',
        styleUrls: ['./plo-skills-mapping.component.css'],
        providers: [PagerService, HighlightPipe, FilterPipe]
    })
], PloSkillsMappingComponent);
export { PloSkillsMappingComponent };
//# sourceMappingURL=plo-skills-mapping.component.js.map