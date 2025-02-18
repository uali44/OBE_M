import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CoursesSearchService } from 'src/app/Services/CourseSearch/CourseSearch.service';
import { GlobalService } from '../../Services/Global/global.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() searchEmit = new EventEmitter<any>();
  Institutes: any[] = [];
  Department: any[] = [];
  Intake: any[] = [];
  Programs: any[] = [];
  Temp_Institute_ID: number;
  Temp_Deaprtment_ID: number;
  Is_Permission_Institute: boolean = false;
  Is_Permission_Deaprtment: boolean = false;
  Is_Permission_Faculty: boolean = false;
  searchCriteria: any = {};
  constructor( 
    private _CoursesSearchService: CoursesSearchService,
    private toastr: ToastrService,
    private ngxService: NgxUiLoaderService) { 
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
    this.Get_Institutes();
  }

  Get_Institutes() {
    this.searchCriteria = {};
    this.searchCriteria.instituteId = "";
    this.searchCriteria.departmentId = "";
    this.searchCriteria.programId = "";
    this.searchCriteria.admissionOpenProgramId = "";
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
    this.searchCriteria.instituteId = Number(val);
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
              } else {
                this.Department = response;
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

  Get_Programs(val) {
    this.searchCriteria.departmentId = Number(val);
    if (val == undefined || val == null || val == "")
      return;
    this.ngxService.start();
    this.Programs = [];
    this._CoursesSearchService.GetDepartmentPrograms(Number(val)).
      subscribe(
        response => {
          try {
            if (response != null) {
              this.Programs = response
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

  Get_Program_Intakes(programId): void {
    this.ngxService.start();
    this.Intake = [];
    this.searchCriteria.programId = Number(programId);
    this._CoursesSearchService.GetProgramIntakes(Number(programId)).
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

  Set_Intakes(val) {
    this.searchCriteria.admissionOpenProgramId = Number(val);
  }

  Emit_Data(){
    this.searchEmit.emit(JSON.stringify(this.searchCriteria));
  }
  
  

}
