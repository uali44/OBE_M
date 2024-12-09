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


@Component({
  selector: 'app-assessment-schemes',
  templateUrl: './assessment-schemes.component.html',
  styleUrls: ['./assessment-schemes.component.css'],
  providers: [PagerService, HighlightPipe, FilterPipe]
})
export class AssessmentSchemesComponent implements OnInit {
  All_PLOS: any[] = [];
  Institutes: [] = [];
  Department: [] = [];
  Intake: [] = [];
  Temp_Institute_ID: number;
  Temp_Deaprtment_ID: number;


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
    this.Get_Institutes();
  

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
            this.toastr.error("Internal server error occured while processing your request", "Error!");
          }

        },
        error => {
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
      subscribe(
        response => {
          try {
            if (response != null) {
              if (this.Temp_Deaprtment_ID != 0) {
                this.Department = response.filter(x => x.DepartmentID == this.Temp_Deaprtment_ID);
                this.Get_Intakes(this.Temp_Deaprtment_ID);
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
  GetAScheme() { }

}
