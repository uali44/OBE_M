import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CoursesSearchService } from 'src/app/Services/CourseSearch/CourseSearch.service';
import { ReportsService } from 'src/app/Services/Reports/reports.service';
import { SettingService } from 'src/app/Services/Settings/setting.service';
import { FilterPipe } from 'src/app/Shared/Pipe/filter';
import { HighlightPipe } from 'src/app/Shared/Pipe/highlight.pipe';
import { GlobalService } from 'src/app/Shared/Services/Global/global.service';
import { PagerService } from 'src/app/Shared/Services/Global/Pager';

@Component({
  selector: 'app-manage-plos',
  templateUrl: './manage-plos.component.html',
  styleUrls: ['./manage-plos.component.css'],
  providers: [PagerService, HighlightPipe, FilterPipe]
})
export class ManagePlosComponent implements OnInit {
  Institutes: [] = [];
  Department: [] = [];
  Intake: [] = [];
  Temp_Institute_ID: number;
  Temp_Deaprtment_ID: number;
  Is_Permission_Institute: boolean = false;
  Is_Permission_Deaprtment: boolean = false;
  Is_Permission_Faculty: boolean = false;
  query: string = "";
  pager: any = {};
  page: any;
  pagesize: number = 50;
  dataset: any[] = [];
  serialNumber: number;
  departmentPLOs: any[] = [];
  constructor( 
    private _CoursesSearchService: CoursesSearchService,
    private toastr: ToastrService,
    private ngxService: NgxUiLoaderService,
    private _SettingService: SettingService,
    private pagerService: PagerService) { 
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
            this.toastr.error("Internal server error occured while processing your request", "Error!")
          }
          

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

  setPage(page: any, pagesize?: any) {
    this.query = "";
    if ((page < 1 || page > this.pager.totalPages) && page != "") {
      this.page = 1;
      page = 1;
    }
    this.page = page;
    this.pager = this.pagerService.getPager(this.dataset.length, page, pagesize);
    this.serialNumber = ((this.pager.currentPage * this.pagesize) - this.pagesize) + (this.serialNumber);
    this.departmentPLOs = this.dataset.slice(this.pager.startIndex, this.pager.endIndex + 1);
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

}
