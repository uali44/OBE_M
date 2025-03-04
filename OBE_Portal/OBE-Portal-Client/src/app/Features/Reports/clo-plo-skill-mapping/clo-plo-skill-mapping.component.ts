import { Component, OnInit } from '@angular/core';
import { CoursesSearchService } from '../../../Services/CourseSearch/CourseSearch.service';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ReportsService } from '../../../Services/Reports/reports.service';
import { PagerService } from '../../../Shared/Services/Global/Pager';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { HighlightPipe } from '../../../Shared/Pipe/highlight.pipe';
import { FilterPipe } from '../../../Shared/Pipe/filter';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
declare const $: any;

@Component({
  selector: 'app-clo-plo-skill-mapping',
  templateUrl: './clo-plo-skill-mapping.component.html',
  styleUrls: ['./clo-plo-skill-mapping.component.css'],
  providers: [PagerService, HighlightPipe, FilterPipe]
})
export class CloPloSkillMappingComponent implements OnInit {

  Institutes: [] = [];
  Department: [] = [];
  Intake: [] = [];
  Clo_Mapping: any[] = [];
  Skill_Coverage_Details: any[] = [];

  Is_Permission_Institute: boolean = false;
  Is_Permission_Deaprtment: boolean = false;
  Is_Permission_Faculty: boolean = false;


  query: string = "";
  pager: any = {};
  page: any;
  pagesize: number = 50;
  dataset: any[] = [];
  serialNumber: number;

  Temp_Institute_ID: number;
  Temp_Deaprtment_ID: number;


  Selected_Skill = "";
  constructor(
    private _CoursesSearchService: CoursesSearchService,
    private toastr: ToastrService,
    private ngxService: NgxUiLoaderService,
    private _ReportsService: ReportsService,
    private pagerService: PagerService,
  ) {
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

  ngOnInit(): void {
    this.Clo_Mapping = []
    this.dataset = [];
    this.Get_Institutes();
  }
  Get_Institutes() {
    this.ngxService.start();
    this.Institutes = [];
    this._CoursesSearchService.Get_Institute().
      subscribe(
        response => {
          if (response != null) {
            if (this.Temp_Institute_ID != 0) {
              this.Institutes = response.filter(x => x.InstituteID == this.Temp_Institute_ID);
              this.Get_Department(this.Temp_Institute_ID);
            } else {
              this.Institutes = response;
            }

          }
          this.ngxService.stop();
        },
        error => {
          this.ngxService.stop();
          this.toastr.error("Internal server error occured while processing your request", "Error!")
        });
  }
  Get_Department(val) {
    if (val == undefined || val == null || val == "")
      return;
    this.ngxService.start();
    this.Department = [];
    this._CoursesSearchService.Get_Department(Number(val)).
      subscribe(
        response => {
          if (response != null) {
            if (this.Temp_Deaprtment_ID != 0) {
              this.Department = response.filter(x => x.DepartmentID == this.Temp_Deaprtment_ID);
              this.Get_Intakes(this.Temp_Deaprtment_ID);
            } else {
              this.Department = response;
            }
          }
          this.ngxService.stop();

        },
        error => {
          this.ngxService.stop();
          this.toastr.error("Internal server error occured while processing your request", "Error!")
        });
  }
  Get_Intakes(val) {
    if (val == undefined || val == null || val == "")
      return;
    this.ngxService.start();
    this.Intake = [];
    this._CoursesSearchService.Get_Intakes(Number(val)).
      subscribe(
        response => {
          if (response != null) {
            this.Intake = response;
          }
          this.ngxService.stop();
        },
        error => {
          this.ngxService.stop();
          this.toastr.error("Internal server error occured while processing your request", "Error!")
        });
  }
  GetResultsForSelctedIntake() {
    this.Clo_Mapping = [];
    var IntakeID = $("#IntakeID").val();
    this.ngxService.start();
    this.pagesize = 50;
    this._ReportsService.CLO_PLO_Skills_Mapping_Intakewise(Number(IntakeID)).
      subscribe(
        response => {
          if (response != null) {
            this.dataset = response;
            this.setPage(1, this.pagesize);
          }
          this.ngxService.stop();
        },
        error => {
          this.ngxService.stop();
          this.toastr.error("Internal server error occured while processing your request", "Error!")
        });

  }
  setPage(page: any, pagesize?: any) {
    this.query = "";
    if ((page < 1 || page > this.pager.totalPages) && page != "") {
      this.page = 1;
      page = 1;
    }
    this.page = page;
    this.pager = this.pagerService.getPager(this.dataset.length, page, pagesize);
    this.serialNumber = ((this.pager.currentPage * this.pagesize) - this.pagesize) + (this.serialNumber);
    this.Clo_Mapping = this.dataset.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
  keyRestrict(e?, validchars?, casesensitives?, onceevery?, onceoneof?) {
    onceevery = onceevery ? onceevery : "";
    onceoneof = onceoneof ? onceoneof : "";
    if (!validchars) return true;
    var keychar = '', i = 0;
    var key = e.which ? e.which : e.keyCode;
    var obj = e.target ? e.target : e.srcElement;
    if (key == null) return true;
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
        if (obj.value.indexOf(onceoneof.charAt(i - onceevery.length)) != -1 && onceoneof.indexOf(keychar) != -1) return false;
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
      header.push("Sr.#", "Semester", "Course Title", "Teacher", "PLO1", "PLO2", "PLO3", "PLO4", "PLO5", "PLO6", "PLO7", "PLO8", "PLO9", "PLO10", "PLO11", "PLO12");
      Heading.push(header);
      var SrNumber = 1;
      for (var k = 0; k < this.dataset.length; k++) {
        Data.push({
          "SrNumber": SrNumber,
          "semesterAlia": this.dataset[k].semesterAlia,
          "title": this.dataset[k].Title,
          "name": this.dataset[k].Name,
          "PLO1Mapping": this.dataset[k].PLO1Mapping,
          "PLO2Mapping": this.dataset[k].PLO2Mapping,
          "PLO3Mapping": this.dataset[k].PLO3Mapping,
          "PLO4Mapping": this.dataset[k].PLO4Mapping,
          "PLO5Mapping": this.dataset[k].PLO5Mapping,
          "PLO6Mapping": this.dataset[k].PLO6Mapping,
          "PLO7Mapping": this.dataset[k].PLO7Mapping,
          "PLO8Mapping": this.dataset[k].PLO8Mapping,
          "PLO9Mapping": this.dataset[k].PLO9Mapping,
          "PLO10Mapping": this.dataset[k].PLO10Mapping,
          "PLO11Mapping": this.dataset[k].PLO11Mapping,
          "PLO12Mapping": this.dataset[k].PLO12Mapping
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
      XLSX.utils.book_append_sheet(wb, ws, "PLOs skills Mapping");
      var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
      FileSaver.saveAs(new Blob([wbout], { type: "application/octet-stream" }), 'PLOs skills Mapping' + ".xlsx");
    }
  }

}
