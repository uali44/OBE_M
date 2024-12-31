import { Component, OnInit } from '@angular/core';
import { CoursesSearchService } from '../../../Services/CourseSearch/CourseSearch.service';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ReportsService } from '../../../Services/Reports/reports.service';
import { PagerService } from '../../../Shared/Services/Global/Pager';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { HighlightPipe } from '../../../Shared/Pipe/highlight.pipe';
import { FilterPipe } from '../../../Shared/Pipe/filter';
import { CoursesCLOSService } from './../../../Services/CourseCLOS/coursesCLO.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forEach } from 'underscore';


@Component({
  selector: 'app-searchForm',
  templateUrl: './searchForm.component.html',
  styleUrls: ['./searchForm.component.css'],
  providers: [PagerService, HighlightPipe, FilterPipe]
})
export class SearchFormComponent implements OnInit {
  All_PLOS: any[] = [];
  Institutes: [] = [];
  Department: [] = [];
  Intake: [] = [];
  Programs: [] = [];
  Temp_Institute_ID: number;
  Temp_Deaprtment_ID: number;

  user_status: any[] = [];
  ustatus: number;
  Is_Permission_Institute: boolean = false;
  Is_Permission_Deaprtment: boolean = false;
  Is_Permission_Faculty: boolean = false;
  Is_Have_Special_Permission: boolean = false;
  Add_Permission: boolean = false;

  

  constructor(
    private _CoursesSearchService: CoursesSearchService,
    private toastr: ToastrService,
    private ngxService: NgxUiLoaderService,
    private _ReportsService: ReportsService,
    private formBuilder: FormBuilder,
    private CoursesCLOSService: CoursesCLOSService,
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
    this.All_PLOS = [];
    this.getStatus(GlobalService.FacultyMember_ID);

    this.Get_Institutes();

  


   
   

    if (this.ustatus == 1) {

      console.log("entered");

    }

  }
  getStatus(val) {
    this.ngxService.start();
    this._CoursesSearchService.Get_Status(val).
      subscribe(
        response => {
          try {
            if (response != null) {
              {
                this.user_status = response;
                this.user_status.forEach(status => {
                  this.ustatus = status.userStatus;
                  console.log("User Status:", this.ustatus);
                });
                this.Get_Institutes();
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
  Get_Institutes() {


    this.ngxService.start();
    this.Institutes = [];
    //  this.Temp_Institute_ID = GlobalService.Institute_ID;
    if (this.ustatus == 2) {
      console.log(this.ustatus+"abc");
      this._CoursesSearchService.Get_Institute_dean(GlobalService.FacultyMember_ID).
        subscribe(
          response => {
            try {
              if (response != null) {
                this.Temp_Institute_ID = 0;
                //if (this.Temp_Institute_ID != 0) {
                //  this.Institutes = response.filter(x => x.InstituteID == this.Temp_Institute_ID);
                //  this.Get_Department(this.Temp_Institute_ID);
                //} else {
                  this.Institutes = response;
               // }

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


      console.log("entered");

    }
    else {

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
              this.toastr.error("Internal server error occured while processing your request", "Error!");
            }

          },
          error => {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
          });
    }
  }
  Get_Department(val) {
    if (val == undefined || val == null || val == "")
      return;
    this.ngxService.start();
    this.Department = [];
    //  this.Temp_Deaprtment_ID = GlobalService.Deaprtment_ID;

    if (this.ustatus == 2) {
      this.Temp_Deaprtment_ID = 0;
      const payload = {
        InstituteID: Number(val),
        FacultyMemberID: GlobalService.FacultyMember_ID
      };

      this._CoursesSearchService.Get_DepartmentDean(payload).
        subscribe(
          response => {
            try {
              if (response != null) {
                //if (this.Temp_Deaprtment_ID != 0) {
                //  this.Department = response.filter(x => x.DepartmentID == this.Temp_Deaprtment_ID);
                //  this.Get_Programs(this.Temp_Deaprtment_ID);
                //} else {
                  this.Department = response;
              //  }
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
    else {


      this._CoursesSearchService.Get_Department(Number(val)).
        subscribe(
          response => {
            try {
              if (response != null) {
                if (this.Temp_Deaprtment_ID != 0) {
                  this.Department = response.filter(x => x.DepartmentID == this.Temp_Deaprtment_ID);
                  this.Get_Programs(this.Temp_Deaprtment_ID);
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
  }
  Get_Intakes(val) {
    if (val == undefined || val == null || val == "")
      return;
    this.ngxService.start();
    this.Intake = [];
    this._CoursesSearchService.Get_Intakes(Number(val)).
      subscribe(
        response => {
          try {
            if (response != null) {
              this.Intake = response;
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

  Get_Programs(val) {
    if (val == undefined || val == null || val == "")
      return;
    this.ngxService.start();
    this.Programs = [];
    this._CoursesSearchService.Get_Programs(Number(val)).
      subscribe(
        response => {
          try {
            if (response != null) {
              this.Programs = response;
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

  GetAScheme() { }

  

 


}
