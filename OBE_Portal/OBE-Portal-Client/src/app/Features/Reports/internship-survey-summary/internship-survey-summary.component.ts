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
  selector: 'app-internship-survey-summary',
  templateUrl: './internship-survey-summary.component.html',
  styleUrls: ['./internship-survey-summary.component.css'],
  providers: [PagerService, HighlightPipe, FilterPipe]
})
export class InternshipSurveySummaryComponent  implements OnInit {

  Institutes: [] = [];
  Department: [] = [];
  Intake: [] = [];

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
  Internship_Summary: any;

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
    this.Internship_Summary = {};
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
    this.Internship_Summary = {};
    var IntakeID = $("#IntakeID").val();
    this.ngxService.start();
    this.pagesize = 50;
    this._ReportsService.GetInternshipData(Number(IntakeID)).
      subscribe(
        response => {
          if (response != null) {
            this.dataset.push({ "Sr": 1 }, { "Sr": 1 }, { "Sr": 1 }, { "Sr": 1 }, { "Sr": 1 }, { "Sr": 1 }, { "Sr": 1 }, { "Sr": 1 }, { "Sr": 1 }, { "Sr": 1 }, { "Sr": 1 }, { "Sr": 1 })
            this.Internship_Summary = response;
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
      header.push("Sr.#", "Statements", "Mapped PLOs", "Very strong(5)", "Strong(4)", "Moderate(3)", "Weak(2)", "very Weak(1)");
      Heading.push(header);
      var SrNumber = 1;
      Data.push({
        "SrNumber": 1,
        "Statements": "Demonstrate and show the ability to acquire the fundamental engineering knowledge.",
        "Mapped PLOs": "PLO-01",
        "Very strong(5)": this.Internship_Summary.InternshipQuestion1Count5,
        "Strong(4)": this.Internship_Summary.InternshipQuestion1Count4,
        "Moderate(3)": this.Internship_Summary.InternshipQuestion1Count3,
        "Weak(2)": this.Internship_Summary.InternshipQuestion1Count2,
        "very Weak(1)": this.Internship_Summary.InternshipQuestion1Count1
      }, {
        "SrNumber": 2,
        "Statements": "	Demonstrate the ability to analyze engineering problem(s).",
        "Mapped PLOs": "PLO-02",
        "Very strong(5)": this.Internship_Summary.InternshipQuestion2Count5,
        "Strong(4)": this.Internship_Summary.InternshipQuestion2Count4,
        "Moderate(3)": this.Internship_Summary.InternshipQuestion2Count3,
        "Weak(2)": this.Internship_Summary.InternshipQuestion2Count2,
        "very Weak(1)": this.Internship_Summary.InternshipQuestion2Count1
      }, {
        "SrNumber": 3,
        "Statements": "Demonstrate the ability to design a system component or process.",
        "Mapped PLOs": "PLO-03",
        "Very strong(5)": this.Internship_Summary.InternshipQuestion3Count5,
        "Strong(4)": this.Internship_Summary.InternshipQuestion3Count4,
        "Moderate(3)": this.Internship_Summary.InternshipQuestion3Count3,
        "Weak(2)": this.Internship_Summary.InternshipQuestion3Count2,
        "very Weak(1)": this.Internship_Summary.InternshipQuestion3Count1
      }, {
        "SrNumber": 4,
        "Statements": "Demonstrate the ability to investigate appropriate source of data to the assigned task.",
        "Mapped PLOs": "PLO-04",
        "Very strong(5)": this.Internship_Summary.InternshipQuestion4Count5,
        "Strong(4)": this.Internship_Summary.InternshipQuestion4Count4,
        "Moderate(3)": this.Internship_Summary.InternshipQuestion4Count3,
        "Weak(2)": this.Internship_Summary.InternshipQuestion4Count2,
        "very Weak(1)": this.Internship_Summary.InternshipQuestion4Count1
      }, {
        "SrNumber": 5,
        "Statements": "Demonstrate the ability to use modern software/hardware tools during internship.",
        "Mapped PLOs": "PLO-05",
        "Very strong(5)": this.Internship_Summary.InternshipQuestion5Count5,
        "Strong(4)": this.Internship_Summary.InternshipQuestion5Count4,
        "Moderate(3)": this.Internship_Summary.InternshipQuestion5Count3,
        "Weak(2)": this.Internship_Summary.InternshipQuestion5Count2,
        "very Weak(1)": this.Internship_Summary.InternshipQuestion5Count1
      }, {
        "SrNumber": 6,
        "Statements": "Demonstrate the sensitivity towards societal issues and provision of relevant solutions through engineering knowledge.",
        "Mapped PLOs": "PLO-06",
        "Very strong(5)": this.Internship_Summary.InternshipQuestion6Count5,
        "Strong(4)": this.Internship_Summary.InternshipQuestion6Count4,
        "Moderate(3)": this.Internship_Summary.InternshipQuestion6Count3,
        "Weak(2)": this.Internship_Summary.InternshipQuestion6Count2,
        "very Weak(1)": this.Internship_Summary.InternshipQuestion6Count1
      }, {
        "SrNumber": 7,
        "Statements": "Awareness of applying engineering knowledge for sustainable development.",
        "Mapped PLOs": "PLO-07",
        "Very strong(5)": this.Internship_Summary.InternshipQuestion7Count5,
        "Strong(4)": this.Internship_Summary.InternshipQuestion7Count4,
        "Moderate(3)": this.Internship_Summary.InternshipQuestion7Count3,
        "Weak(2)": this.Internship_Summary.InternshipQuestion7Count2,
        "very Weak(1)": this.Internship_Summary.InternshipQuestion7Count1
      }, {
        "SrNumber": 8,
        "Statements": "Punctuality and attitude towards assigned task(s) at internship.",
        "Mapped PLOs": "PLO-08",
        "Very strong(5)": this.Internship_Summary.InternshipQuestion8Count5,
        "Strong(4)": this.Internship_Summary.InternshipQuestion8Count4,
        "Moderate(3)": this.Internship_Summary.InternshipQuestion8Count3,
        "Weak(2)": this.Internship_Summary.InternshipQuestion8Count2,
        "very Weak(1)": this.Internship_Summary.InternshipQuestion8Count1
      }, {
        "SrNumber": 9,
        "Statements": "	Self-confidence to accomplish task(s) independently and to coordinate and collaborate with the team to perform the task(s).	",
        "Mapped PLOs": "PLO-09",
        "Very strong(5)": this.Internship_Summary.InternshipQuestion9Count5,
        "Strong(4)": this.Internship_Summary.InternshipQuestion9Count4,
        "Moderate(3)": this.Internship_Summary.InternshipQuestion9Count3,
        "Weak(2)": this.Internship_Summary.InternshipQuestion9Count2,
        "very Weak(1)": this.Internship_Summary.InternshipQuestion9Count1
      }, {
        "SrNumber": 10,
        "Statements": "Demonstrate the ability to communicate effectively (both verbal and non-verbal).",
        "Mapped PLOs": "PLO-10",
        "Very strong(5)": this.Internship_Summary.InternshipQuestion10Count5,
        "Strong(4)": this.Internship_Summary.InternshipQuestion10Count4,
        "Moderate(3)": this.Internship_Summary.InternshipQuestion10Count3,
        "Weak(2)": this.Internship_Summary.InternshipQuestion10Count2,
        "very Weak(1)": this.Internship_Summary.InternshipQuestion10Count1
      }, {
        "SrNumber": 11,
        "Statements": "	Demonstrate the ability to manage assigned task(s) within given constraints.",
        "Mapped PLOs": "PLO-11",
        "Very strong(5)": this.Internship_Summary.InternshipQuestion11Count5,
        "Strong(4)": this.Internship_Summary.InternshipQuestion11Count4,
        "Moderate(3)": this.Internship_Summary.InternshipQuestion11Count3,
        "Weak(2)": this.Internship_Summary.InternshipQuestion11Count2,
        "very Weak(1)": this.Internship_Summary.InternshipQuestion11Count1
      }, {
        "SrNumber": 12,
        "Statements": "Demonstrate the initiative and drive for learning new things.",
        "Mapped PLOs": "PLO-12",
        "Very strong(5)": this.Internship_Summary.InternshipQuestion12Count5,
        "Strong(4)": this.Internship_Summary.InternshipQuestion12Count4,
        "Moderate(3)": this.Internship_Summary.InternshipQuestion12Count3,
        "Weak(2)": this.Internship_Summary.InternshipQuestion12Count2,
        "very Weak(1)": this.Internship_Summary.InternshipQuestion12Count1
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
      XLSX.utils.book_append_sheet(wb, ws, "Internship_Survey_Summary");
      var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
      FileSaver.saveAs(new Blob([wbout], { type: "application/octet-stream" }), 'Internship_Survey_Summary' + ".xlsx");
    }
  }

}
