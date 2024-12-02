import { Component, OnInit } from '@angular/core';
import { CoursesSearchService } from '../../../Services/CourseSearch/CourseSearch.service';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { ReportsService } from '../../../Services/Reports/reports.service';
import { PagerService } from '../../../Shared/Services/Global/Pager';
import { HighlightPipe } from '../../../Shared/Pipe/highlight.pipe';
import { FilterPipe } from '../../../Shared/Pipe/filter';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import Swal from 'sweetalert2';
import { CompiledResultservice } from '../../../Services/CompiledResult/CompiledResult.service';
declare const $: any;

@Component({
  selector: 'app-course-marks-status',
  templateUrl: './course-marks-status.component.html',
  styleUrls: ['./course-marks-status.component.css'],
  providers: [PagerService, HighlightPipe, FilterPipe]
})
export class CourseMarksStatusComponent implements OnInit {

  Institutes: [] = [];
  Department: [] = [];
  All_Semester: [] = [];
  All_Offered_Courses: any[] = [];
    
  FacultyMemberID: number;
  Total_Number_Of_Offered_Courses: number;
  Marks_Submitted_Number_Of_Offered_Courses: number;
  Not_Marks_Submitted_Number_Of_Offered_Courses: number;
  query: string = "";
  pager: any = {};
  page: any;
  pagesize: number = 50;
  dataset: any[] = [];
  serialNumber: number;

  Is_Permission_Institute: boolean = false;
  Is_Permission_Deaprtment: boolean = false;
  Is_Permission_Faculty: boolean = false;
  Is_Deparment_Selected: boolean = false;

  Temp_Institute_ID: number;
  Temp_Deaprtment_ID: number;
  CourseCategory: number;
  All_student_Result: any[] = [];
  Searched_Facult_Members: any[] = [];
  selectedIndex = 0;
  constructor(
    private _CoursesSearchService: CoursesSearchService,
    private toastr: ToastrService,
    private ngxService: NgxUiLoaderService,
    private _ReportsService: ReportsService,
    private pagerService: PagerService,
    private CompiledResultservice: CompiledResultservice
  ) {
    this.selectedIndex =  -1;
    this.Searched_Facult_Members = [];
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
  ngOnInit(): void {
    this.Is_Deparment_Selected = false;
    this.FacultyMemberID = 0;
    this.Get_Institutes();
    this.Get_Semester(); 
  }

  Get_Institutes() {
    this.ngxService.start();
    this.Institutes = [];
    this._CoursesSearchService.Get_Institute().
      subscribe(
        response => {
          try {
            if (response != null) {
              if (this.Temp_Institute_ID != 0) {
                this.Institutes = response.filter(x => x.InstituteID == this.Temp_Institute_ID);
                this.Get_Department(this.Temp_Institute_ID);
              } else {
                this.Institutes = response;
              }

            }
            this.ngxService.stop();
          } catch (e) {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!")
          }
   
        },
        error => {
          this.ngxService.stop();
          this.toastr.error("Internal server error occured while processing your request", "Error!")
        });
  }

  Get_Semester() {
    this.ngxService.start();
    this.All_Semester = [];
    this._CoursesSearchService.Get_All_Semester().
      subscribe(
        response => {
          try {
            if (response != null) {
              this.All_Semester = response;
            }
            this.ngxService.stop();
          } catch (e) {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!")
          }

        
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
          try {
            if (response != null) {
              if (this.Temp_Deaprtment_ID != 0) {
                this.Department = response.filter(x => x.DepartmentID == this.Temp_Deaprtment_ID);
                this.Is_Deparment_Selected = true;
              } else {
                this.Department = response;
              }
            }
            this.ngxService.stop();
          } catch (e) {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
          }
   

        },
        error => {
          this.ngxService.stop();
          this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
  }

  getFacultyMember(val, index) {
    this.selectedIndex =  index;
    if (val == undefined || val == null || val == "")
    return;
    this.ngxService.start();
    this._CoursesSearchService.getFacultyMember(val).
      subscribe(
        response => {
          try {
            this.Searched_Facult_Members = [];
            if (response != null) {
              this.Searched_Facult_Members = response;
            }
            this.ngxService.stop();
          } catch (e) {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
          }
   

        },
        error => {
          this.ngxService.stop();
          this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
  }

  Enable_Semester(val) {
    if (Number(val) != 0) {
      this.Is_Deparment_Selected = true;
    } else {
      this.Is_Deparment_Selected = false;
    }
  }

  Get_Marks_Status() {
    this.pagesize = 50;
    this.dataset = [];
    this.All_Offered_Courses = [];

    if (Number($("#DepartmentID").val()) == 0 || Number($("#SemesterID").val()) == 0) {
      this.toastr.error("Please select department and Semester", "Invalid Criteria Selection!");
      return;
    }
    this.ngxService.start();
    this._ReportsService.Get_All_OfferedCourses_SemesterWise({ "DepartmentID": Number($("#DepartmentID").val()), "SemesterID": Number($("#SemesterID").val()), "Status": Number($("#Status").val()) }).
      subscribe(
        response => {
          try {
            if (response != null) {
              this.Total_Number_Of_Offered_Courses = response.length;
              this.Marks_Submitted_Number_Of_Offered_Courses = response.filter(x => x.Is_Completed == true).length;
              this.Not_Marks_Submitted_Number_Of_Offered_Courses = response.filter(x => x.Is_Completed == false).length;
              this.dataset = response;
              this.setPage(1, this.pagesize );
            }
            this.ngxService.stop();
          } catch (e) {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
          }
        },
        error => {
          this.ngxService.stop();
          this.toastr.error("Internal server error occured while processing your request", "Error!");
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
    this.All_Offered_Courses = this.dataset.slice(this.pager.startIndex, this.pager.endIndex + 1);
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
      header.push("Sr.#","Name", "Course Title", "Marks Status");
      Heading.push(header);
      var SrNumber = 1;
      for (var k = 0; k < this.dataset.length; k++) {
        Data.push({
          "SrNumber": SrNumber,
          "Name": this.dataset[k].Name,
          "Title": this.dataset[k].Title,
          "Status": this.dataset[k].Is_Completed == true ? 'Submitted' :'Not Submitted',
        });
        SrNumber += 1;
      }
      var ws = XLSX.utils.aoa_to_sheet(Heading);
      ws["!cols"] = [
        { wpx: 25 },
        { wpx: 200 },
        { wpx: 200 },
        { wpx: 100 },
      ];
      XLSX.utils.sheet_add_json(ws, Data, {
        skipHeader: true,
        origin: -1,
      });
      XLSX.utils.book_append_sheet(wb, ws, "Offered Courses Marks Status");
      var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
      FileSaver.saveAs(new Blob([wbout], { type: "application/octet-stream" }), 'Offered Courses Marks Status' + ".xlsx");
    }
  }

  onStatusChange(val: number, CourseCategory: number, Status: number) {
    this.CourseCategory = CourseCategory
    Swal.fire({
      title: 'Are you sure you want to change marks submission status?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, changes it!',
      cancelButtonText: 'No, keep it',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        this.ngxService.start();
        this._ReportsService.UpdateCourseStatus({ "Offered_Course_ID": Number(val), "CourseCategory": this.CourseCategory, "Status": Number(Status) }).
          subscribe(
            data => {
              this.ngxService.stop();
              if (data) {
                this.toastr.success("Course status is updated","Marks Submitted Status!")
                this.Get_Marks_Status();
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

  onCourseCategoryChange(val: number, Status: number) {
    Swal.fire({
      title: 'Are you sure you want to change Course Status?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, changes it!',
      cancelButtonText: 'No, keep it',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        this.ngxService.start();
        this._ReportsService.UpdateCourseCategory({ "Offered_Course_ID": Number(val), "Status": Number(Status) }).
          subscribe(
            data => {
              this.ngxService.stop();
              if (data) {
                this.toastr.success("Course status is updated", "Course Status!")
                this.Get_Marks_Status();
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

  updateFacultyAssigned(FacultyMemberID: any, OfferedCourseID: any) {
    Swal.fire({
      title: 'Are you sure you want to change Course Faculty?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, changes it!',
      cancelButtonText: 'No, keep it',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        this.ngxService.start();
        this._ReportsService.updateFacultyAssignedCourses({ "FacultyMemberID": Number(FacultyMemberID), "OfferedCourseID": Number(OfferedCourseID) }).
          subscribe(
            data => {
              this.ngxService.stop();
              if (data) {
                this.selectedIndex =  -1;
                this.Searched_Facult_Members = [];
                this.toastr.success("Course status is updated", "Course Status!")
                this.Get_Marks_Status();
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

  Get_All_Student_And_Grades(offeredCourseID, CourseCategory) {
    this.All_student_Result = [];
    this.ngxService.start();
    this.pagesize = 50;
    this.CourseCategory = CourseCategory
    if (CourseCategory != 8) {
      this.CompiledResultservice.GetAllStudentAndGradesForCourse({ "Offered_Course_ID": Number(offeredCourseID), "CourseCategory": this.CourseCategory }).
        subscribe(
          data => {
            if (data != null) {
              $("#Complied-Result").modal('show');
              this.All_student_Result = data;
            }
            this.ngxService.stop();
          },
          error => {
            this.ngxService.stop();
            this.toastr.error("Error occured while processing your request", "Error!");
          });
    } else {
      this.All_student_Result = [];
      this.ngxService.start();
      this.pagesize = 50;
      this.CompiledResultservice.GetAllStudentAndGradesForFYP({ "Offered_Course_ID": Number(offeredCourseID), "CourseCategory": this.CourseCategory }).
        subscribe(
          data => {
            if (data != null) {
              $("#Complied-Result").modal('show');
              this.All_student_Result = data;
            }
            this.ngxService.stop();
          },
          error => {
            this.ngxService.stop();
            this.toastr.error("Error occured while processing your request", "Error!");
          });
    }

  }
}
