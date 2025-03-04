import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { PagerService } from '../../../Shared/Services/Global/Pager';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import * as FileSaver from 'file-saver';
import { HighlightPipe } from '../../../Shared/Pipe/highlight.pipe';
import { FilterPipe } from '../../../Shared/Pipe/filter';
import { CompiledResultservice } from '../../../Services/CompiledResult/CompiledResult.service';
import Swal from 'sweetalert2';
declare const $: any;
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Component({
  selector: 'app-compiled-result',
  templateUrl: './compiled-result.component.html',
  styleUrls: ['./compiled-result.component.css'],
  providers: [PagerService, HighlightPipe, FilterPipe]
})
export class CompiledResultComponent implements OnInit {
  query: string = "";
  pager: any = {};
  page: any;
  pagesize: number = 50;
  dataset: any[] = [];
  serialNumber: number;
  All_student_Result: any[] = [];
  Is_Course: boolean;
  Assessment_Marks_Details: any[] = [];
  Assessment_CLO_Details: any[] = [];
  Enrollment: number;
  Name: number;
  Assessment_Type: string;
  Assessment_Total_Marks: number;
  Assessment_Obtained_Marks: number;
  Assessment_Percentage: number;
  Assessment_Marks_Details_For_Graph: any[] = [];
  Is_Mark_Submitted: boolean = false;
  CourseCategory: number;
  constructor(
    private CompiledResultservice: CompiledResultservice,
    private toastr: ToastrService,
    private pagerService: PagerService,
    private ngxService: NgxUiLoaderService
  ) {
    this.CourseCategory = 0;
    this.CourseCategory = GlobalService.CourseCategory;
  }

  ngOnInit(): void {
    this.Is_Mark_Submitted = GlobalService.Is_Completed;
    this.Is_Course = GlobalService.Is_Course;
    if (this.CourseCategory == 1 || this.CourseCategory == 4) {
      this.Get_All_Student_And_Grades();
    } else {
      this.Get_All_Student_And_Grades_FYP();
    }
  }
  Get_All_Student_And_Grades() {
    this.All_student_Result = [];
    this.Assessment_Marks_Details_For_Graph = [];
    this.ngxService.start();
    this.pagesize = 50;
    this.CompiledResultservice.GetAllStudentAndGradesForCourse({ "Offered_Course_ID": GlobalService.Offered_Course_ID, "CourseCategory": this.CourseCategory}).
      subscribe(
        data => {
          if (data != null) {
            this.dataset = data;
            for (var i = 0; i < this.dataset.length; i++) {
              var temp = [this.dataset[i].Name, Number(this.dataset[i].Total)];
              this.Assessment_Marks_Details_For_Graph.push(temp);
              this.CourseAttainment();
            }
          }
          this.setPage(1, this.pagesize);
          this.ngxService.stop();
        },
        error => {
          this.ngxService.stop();
          this.toastr.error("Error occured while processing your request", "Error!");
        });
  }
  Get_All_Student_And_Grades_FYP() {
    this.All_student_Result = [];
    this.Assessment_Marks_Details_For_Graph = [];
    this.ngxService.start();
    this.pagesize = 50;
    this.CompiledResultservice.GetAllStudentAndGradesForFYP({ "Offered_Course_ID": GlobalService.Offered_Course_ID, "CourseCategory": this.CourseCategory }).
      subscribe(
        data => {
          if (data != null) {
            this.dataset = data;
            for (var i = 0; i < this.dataset.length; i++) {
              var temp = [this.dataset[i].Name, Number(this.dataset[i].Total)];
              this.Assessment_Marks_Details_For_Graph.push(temp);
              this.CourseAttainment();
            }
          }
          this.setPage(1, this.pagesize);
          this.ngxService.stop();
        },
        error => {
          this.ngxService.stop();
          this.toastr.error("Error occured while processing your request", "Error!");
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
    this.All_student_Result = this.dataset.slice(this.pager.startIndex, this.pager.endIndex + 1);
    
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
  ShowAssessmentDetails(val, obj) {
    this.Assessment_Type = val; 
    this.Enrollment = obj.Enrollment;
    this.Name = obj.Name;
    this.ngxService.start();
    this.Assessment_Marks_Details = [];
    this.Assessment_CLO_Details = [];
    this.Assessment_Total_Marks = 0;
    this.Assessment_Obtained_Marks = 0;
    this.Assessment_Percentage = 0;
    if (this.Assessment_Type != "CLO") {
      this.CompiledResultservice.GetAssessmentMarksDetails({ "Offered_Course_ID": GlobalService.Offered_Course_ID, "Type": val, "Student_ID": Number(obj.StudentID) }).
        subscribe(
          data => {
            if (data != null) {
              for (var i = 0; i < data.length; i++) {
                if (data[i].Assessment_Sub_Detail_ID.includes(',')) {
                  this.Assessment_Marks_Details.push({
                    "Assessment_Title": data[i].Assessment_Title,
                    "Assessment_Marks": data[i].Assessment_Marks,
                    "Question_Marks": data[i].Question_Marks.split(','),
                    "Enrollment": data[i].Enrollment,
                    "Student_ID": data[i].StudentID,
                    "Is_Locked": data[i].IS_LOCKED,
                    "Name": data[i].Name,
                    "Assessment_Sub_Detail_ID": data[i].Assessment_Sub_Detail_ID.split(','),
                    "Obtained_Marks": data[i].Question_Obtained_Marks.split(','),
                    "Question_Number": data[i].Question_Number.split(','),
                    "Weightage": data[i].Weightage.split(','),
                    "CLO_Title": data[i].CLO_Title.split(','),
                    "Assessment_Marks_ID": data[i].AssessmentMarksID.split(','),
                    "Is_Multiple": true,
                    "Is_Course": this.Is_Course
                  });
                }
                else {
                  this.Assessment_Marks_Details.push({
                    "Assessment_Title": data[i].Assessment_Title,
                    "Assessment_Marks": data[i].Assessment_Marks,
                    "Question_Marks": data[i].Question_Marks,
                    "Enrollment": data[i].Enrollment,
                    "Student_ID": data[i].StudentID,
                    "Is_Locked": data[i].IS_LOCKED,
                    "Name": data[i].Name,
                    "Assessment_Sub_Detail_ID": data[i].Assessment_Sub_Detail_ID,
                    "Obtained_Marks": data[i].Question_Obtained_Marks,
                    "Question_Number": data[i].Question_Number,
                    "Weightage": data[i].Weightage,
                    "CLO_Title": data[i].CLO_Title,
                    "Assessment_Marks_ID": data[i].AssessmentMarksID,
                    "Is_Multiple": false,
                    "Is_Course": this.Is_Course
                  });
                }
              }
              for (var i = 0; i < this.Assessment_Marks_Details.length; i++) {
                if (this.Assessment_Marks_Details[i].Is_Multiple) {
                  for (var j = 0; j < this.Assessment_Marks_Details[i].Obtained_Marks.length; j++) {
                    this.Assessment_Obtained_Marks += Number(this.Assessment_Marks_Details[i].Obtained_Marks[j]);
                  }
                } else {
                  this.Assessment_Obtained_Marks += Number(this.Assessment_Marks_Details[i].Obtained_Marks);
                }
                this.Assessment_Total_Marks += Number(this.Assessment_Marks_Details[i].Assessment_Marks);
              }
              this.Assessment_Percentage = Number(((this.Assessment_Obtained_Marks / this.Assessment_Total_Marks) * 100).toFixed(2));
              $("#Assessment_Marks_Obtained_Details").modal('show');
            }
            this.ngxService.stop();
          },
          error => {
            this.ngxService.stop();
            this.toastr.error("Error occured while processing your request", "Error!");
          });
    } else {
      this.CompiledResultservice.GetCLOSMarksDetails({ "Offered_Course_ID": GlobalService.Offered_Course_ID, "Type": val, "Student_ID": Number(obj.StudentID) }).
        subscribe(
          data => {
            if (data != null) {
              for (var i = 0; i < obj.Clo_Name.split(',').length-1; i++) {
                var temp = data.filter(x => x.CLOTitle == obj.Clo_Name.split(',')[i]);
                var CLO_Details = [];
                var CLO_Total_Marks = 0;
                var CLO_Obtained_Marks = 0;
                var CLO_Total_Weightaged_Marks = 0;
                var CLO_Weightaged_Obtained_Marks = 0;
                
                for (var j = 0; j < temp.length; j++) {
                  CLO_Details.push({
                    "CLOTitle": temp[j].CLOTitle,
                    "AssessmentTitle": temp[j].AssessmentTitle,
                    "QuestionNumberOrPerformanceIndicator": temp[j].QuestionNumberOrPerformanceIndicator,
                    "QuestionMarks": temp[j].QuestionMarks,
                    "ObtainedMarks": temp[j].ObtainedMarks,
                    "Weightage": temp[j].Weightage,
                  });
                  CLO_Total_Marks += Number(temp[j].QuestionMarks);
                  CLO_Obtained_Marks += Number(temp[j].ObtainedMarks);
                  CLO_Total_Weightaged_Marks += Number(temp[j].Weightaged_Total_Marks);
                  CLO_Weightaged_Obtained_Marks += Number(temp[j].Weightaged_Obtained_Marks);
                }
                this.Assessment_CLO_Details.push({
                  "CLO_Title": obj.Clo_Name.split(',')[i],
                  "CLO_Attainment": obj.Clo_Result.split(',')[i],
                  "CLO_Total_Marks": CLO_Total_Marks,
                  "CLO_Obtained_Marks": CLO_Obtained_Marks,
                  "CLO_Details": CLO_Details,
                  "CLO_Total_Weightaged_Marks": CLO_Total_Weightaged_Marks.toFixed(2),
                  "CLO_Weightaged_Obtained_Marks": CLO_Weightaged_Obtained_Marks.toFixed(2),

                })
              }
              $("#Assessment_Marks_Obtained_Details").modal('show');
            }
            this.ngxService.stop();
          },
          error => {
            this.ngxService.stop();
            this.toastr.error("Error occured while processing your request", "Error!");
          });

    }
  }
  CourseAttainment() {
    $('#CourseAttainment').highcharts({
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
        min: 0,
        type: 'category',
      },
      yAxis: {
        min: 0,
        max:100,
        title: {
          text: ''
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        column: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y}<b>%</b>'
          },
        }
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Total Marks',
        data: this.Assessment_Marks_Details_For_Graph,
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
  SubmitResult() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'After submission you will no longer be able to change the results!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Submit !',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        this.ngxService.start();
        this.CompiledResultservice.SubmitResult({ "Offered_Course_ID": GlobalService.Offered_Course_ID, "CourseCategory": this.CourseCategory }).
          subscribe(
            data => {

              this.ngxService.stop();
              if (data) {
                GlobalService.Is_Completed = true;
                this.Is_Mark_Submitted = true;
                Swal.fire(
                  'Marks Submit Status!',
                  'Marks submitted successfully.',
                  'success'
                )
              }
              else {
                Swal.fire(
                  'Cancelled',
                  'Your data is safe',
                  'error'
                )
              }
            },
            error => {
              this.ngxService.stop();
              Swal.fire(
                'Cancelled',
                'Error occured while processing your request. Please contact to admin',
                'error'
              )
            });

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.close()
      }
    })
  }
  DownloadExcel() {
    if (this.dataset.length > 0) {
      var wb = XLSX.utils.book_new();
      var header = [];
      var Data = [];
      var Heading = [];
      if (GlobalService.CourseCategory == 1) {
        header.push("Sr.#", "Erollment", "Name", "Assignments", "Quizzes", "Mids", "Finals", "Total", "Grade", "Course CLOs", "CLOs %");
      } else if (GlobalService.CourseCategory == 4) {
        header.push("Sr.#", "Erollment", "Name", "Assessment", "Journals", "Mids", "Finals", "Total", "Grade", "Course CLOs", "CLOs %");
      } else if (GlobalService.CourseCategory == 8) {
        header.push("Sr.#", "Erollment", "Name", "FYP Coordinator", "FYP Supervisor", "Initial Presentation", "Mid-Term Presentation", "Final Presentation", "Total", "Grade", "Course CLOs", "CLOs %");
      }
      Heading.push(header);
      var SrNumber = 1;
      if (GlobalService.CourseCategory == 1 || GlobalService.CourseCategory == 4) {
        for (var k = 0; k < this.dataset.length; k++) {
          Data.push({
            "SrNumber": SrNumber,
            "Enrollment": this.dataset[k].Enrollment,
            "Name": this.dataset[k].Name,
            "A_Marks": this.dataset[k].Assignmnet_Marks,
            "QJ_Marks": this.dataset[k].Quiz_Marks,
            "Mid_Marks": this.dataset[k].Mid_Marks,
            "Final_Marks": this.dataset[k].Final_Marks,
            "Total": this.dataset[k].Total,
            "Grade": this.dataset[k].Grade,
            "CLO_Name": this.dataset[k].Clo_Name,
            "CLO_Result": this.dataset[k].Clo_Result,
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
        XLSX.utils.book_append_sheet(wb, ws, "Compiled Result");
        var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        FileSaver.saveAs(new Blob([wbout], { type: "application/octet-stream" }), 'Compiled Result' + ".xlsx");
      } else {

        for (var k = 0; k < this.dataset.length; k++) {
          Data.push({
            "SrNumber": SrNumber,
            "Enrollment": this.dataset[k].Enrollment,
            "Name": this.dataset[k].Name,
            "fypCoordinator": this.dataset[k].FYPCoordinatorObtainedMarks,
            "fypSupervisor": this.dataset[k].FYPSupervisorObtainedMarks,
            "initialPresentation": this.dataset[k].InitialPresentationObtainedMarks,
            "Mid_Marks": this.dataset[k].MidTermPresentationObtainedMarks,
            "Final_Marks": this.dataset[k].FinalPresentationObtainedMarks,
            "Total": this.dataset[k].Total,
            "Grade": this.dataset[k].Grade,
            "CLO_Name": this.dataset[k].Clo_Name,
            "CLO_Result": this.dataset[k].Clo_Result,
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
          { wpx: 60 },
          { wpx: 60 }
        ];
        XLSX.utils.sheet_add_json(ws, Data, {
          skipHeader: true,
          origin: -1,
        });
        XLSX.utils.book_append_sheet(wb, ws, "Compiled Result");
        var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        FileSaver.saveAs(new Blob([wbout], { type: "application/octet-stream" }), 'Compiled Result' + ".xlsx");
      }
    }
  }
}
