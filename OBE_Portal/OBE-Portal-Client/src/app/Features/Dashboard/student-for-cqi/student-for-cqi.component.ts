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
import { filter } from 'underscore';
declare const $: any;

@Component({
  selector: 'app-student-for-cqi',
  templateUrl: './student-for-cqi.component.html',
  styleUrls: ['./student-for-cqi.component.css'],
  providers: [PagerService, HighlightPipe, FilterPipe]
})
export class StudentForCqiComponent implements OnInit {
  CloAttainmentDetails: any;
  query: string = "";
  pager: any = {};
  page: any;
  pagesize: number = 50;
  dataset: any[] = [];
  serialNumber: number;
  ActionTitle: string;
  Offered_Course_ID: number;
  CLOsSummary: any;


  constructor(
    private toastr: ToastrService,
    private ngxService: NgxUiLoaderService,
    private _ReportsService: ReportsService,
    private pagerService: PagerService,
  ) {
    this.Offered_Course_ID = GlobalService.Offered_Course_ID;  
  }
  ngOnInit(): void {
    this.CLOsSummary = [];
    this.ActionTitle = "";
    this.GetAllStudentOfCourseInWhichStudentPassedButCLOsFailed();
  }
  GetAllStudentOfCourseInWhichStudentPassedButCLOsFailed(): void {
    this.pagesize = 50;
    this.CloAttainmentDetails = [];
    this.CLOsSummary = [];
    this.ngxService.start();
    this._ReportsService.GetAllStudentOfCourseInWhichStudentPassedButCLOsFailed(this.Offered_Course_ID).
      subscribe(
        response => {
          if (response != null) {
            this.dataset = response;
            var flags = [];
            for (var i = 0; i < this.dataset?.length; i++) {
              if (flags[this.dataset[i].CourseCLOID]) continue;
              flags[this.dataset[i].CourseCLOID] = true;

              var CourseCLOID = this.dataset[i].CourseCLOID
              var CLOsCount = this.dataset.filter(x => x.CourseCLOID === CourseCLOID).length;

              this.CLOsSummary.push({ "CourseCLOID": this.dataset[i].CourseCLOID, "CLOTitle": this.dataset[i].CLOTitle, "CLOCount": CLOsCount});
            }
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
    this.CloAttainmentDetails = this.dataset.slice(this.pager.startIndex, this.pager.endIndex + 1);
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
  DownloadExcelWithCourseDetails() {
    if (this.CloAttainmentDetails.length > 0) {
      var wb = XLSX.utils.book_new();
      var header = [];
      var Data = [];
      var Heading = [];
      header.push("Sr.#", "Intake", "Enrollment", "Name", "Total Marks", "Grade", "CLO Title", "CLO Attainment","CQI Action");
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
  Show_Add_CQI_Cycle() {
    $("#Add-CQI_Cycle-Modal").modal('show');
  }
  AddActions() {
    var ActionTitle = this.ActionTitle;
    if (ActionTitle === "" || ActionTitle === null || ActionTitle === undefined) {
      this.toastr.error("Please select any action for CQI", "Error!");
    }
        
    var Data = [];
    for (var i = 0; i < this.dataset.length; i++) {
      Data.push({ "RegisteredCourseID": this.dataset[i].RegisteredCourseID, "CourseCLOID": this.dataset[i].CourseCLOID,  "Action": ActionTitle})
    }
    this.ngxService.start();
    this._ReportsService.AddCQIActionForStudent(Data).
      subscribe(
        response => {
          if (response != null) {
            $("#Add-CQI_Cycle-Modal").modal('hide');
            this.toastr.success("Information saved successfully", "Success!");
            this.GetAllStudentOfCourseInWhichStudentPassedButCLOsFailed();
          }
          this.ngxService.stop();
        },
        error => {
          this.ngxService.stop();
          this.toastr.error("Internal server error occured while processing your request", "Error!")
        });
  }
  CQISubmitted(CLOResultID) {
    this.ngxService.start();
    this._ReportsService.CQISubmitted(CLOResultID).
      subscribe(
        response => {
          if (response != null) {
            $("#Add-CQI_Cycle-Modal").modal('hide');
            this.toastr.success("Information saved successfully", "Success!");
            this.GetAllStudentOfCourseInWhichStudentPassedButCLOsFailed();
          }
          this.ngxService.stop();
        },
        error => {
          this.ngxService.stop();
          this.toastr.error("Internal server error occured while processing your request", "Error!")
        });
  }
}
