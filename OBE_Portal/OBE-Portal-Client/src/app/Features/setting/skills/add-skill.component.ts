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
import { CoursesCLOSService } from './../../../Services/CourseCLOS/coursesCLO.service';
declare const $: any;
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { get } from 'http';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css'],
  providers: [PagerService, HighlightPipe, FilterPipe]
})
export class AddSkillComponent implements OnInit {

  newEntry = { title: '' };
  temporaryEntries: Array<{ title: string }> = [];

  selectedskill: string = '';
  level: string = '';
  temporaryLevelData: { skill: string; level: string }[] = [];


  All_PLOS: any[] = [];
  Institutes: [] = [];
  Department: [] = [];
  Intake: [] = [];
  PLO_skills: any[] = [];

  Is_Permission_Institute: boolean = false;
  Is_Permission_Deaprtment: boolean = false;
  Is_Permission_Faculty: boolean = false;
  Is_Have_Special_Permission: boolean = false;
  Add_Permission: boolean = false;

  PLOSForm; PLOSEditForm: FormGroup;
  query: string = "";
  pager: any = {};
  page: any;
  pagesize: number = 50;
  dataset: any[] = [];
  serialNumber: number;

  Temp_Institute_ID: number;
  Temp_Deaprtment_ID: number;

  Selected_Semester = "";
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
    this.Add_Permission = false;
    this.Is_Have_Special_Permission = false;
   
    this.ngxService.start();
    this.CoursesCLOSService.GetCourseCLOS(11111).
      subscribe(
        response => {
          if (response != null) {
            this.dataset = response.All_PLOS_Skills;
            this.All_PLOS = response.All_PLOS;
            this.PLO_skills = response.All_PLOS_Skills;
           
          }
          else {
           
            this.All_PLOS = [];
            this.PLO_skills = [];
           
          }
          this.ngxService.stop();
          this.setPage(1, this.pagesize);
        },
        error => {
         
          this.All_PLOS = [];
          this.PLO_skills = [];
        
          this.ngxService.stop();
          this.toastr.error("Internal server error occured while processing your request", "Error!")
        });

  }
  addEntry() {
    if (this.newEntry.title ) {
      this.temporaryEntries.push({ ...this.newEntry });
      this.newEntry = { title: '' }; // Clear the form fields
    } else {
      alert("Please fill out both Title and Description.");
    }
  }
  saveEntries() {
  }
  cancel() {
    this.temporaryEntries = [];
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

  GetPLOS() {
    var itake = $("#IntakeID").val();
    this.ngxService.start();
    this.CoursesCLOSService.GetCourseCLOS(itake).
      subscribe(
        response => {
          if (response != null) {
            this.dataset = response.Course_CLOS;
            this.All_PLOS = response.All_PLOS;

          }
          else {

            this.All_PLOS = [];

          }
          this.ngxService.stop();
          this.setPage(1, this.pagesize);


        },
        error => {

          this.All_PLOS = [];

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
    this.All_PLOS = this.dataset.slice(this.pager.startIndex, this.pager.endIndex + 1);
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
   //--------------add skill level secttion-------------------
  addToTemporaryLevelArray() {
    if (this.selectedskill && this.level) {
      this.temporaryLevelData.push({ skill: this.selectedskill, level: this.level });
      // Clear fields after adding
      this.selectedskill = '';
      this.level = '';
    } else {
      alert('Both fields are required!');
    }
  }
  editLevelItem(index: number) {
    const item = this.temporaryLevelData[index];
    this.selectedskill = item.skill;
    this.level = item.level;
    this.temporaryLevelData.splice(index, 1); // Remove the item to re-add after editing
  }

  // Remove level item
  removeLevelItem(index: number) {
    this.temporaryLevelData.splice(index, 1);
  }

  // Save levels to database
  saveLevelToDatabase() {
    console.log('Saving level data to database:', this.temporaryLevelData);
    // Call your service here 
    alert('Level data saved successfully!');
    this.temporaryLevelData = []; 
  }
 
   DownloadExcel() {
    if (this.dataset.length > 0) {
      var wb = XLSX.utils.book_new();
      var header = [];
      var Data = [];
      var Heading = [];
      header.push("Sr.#", "Course Title", "Semester", "PLO1", "PLO2", "PLO3", "PLO4", "PLO5", "PLO6", "PLO7", "PLO8", "PLO9", "PLO10", "PLO11", "PLO12");
      Heading.push(header);
      var SrNumber = 1;
      for (var k = 0; k < this.dataset.length; k++) {
        Data.push({
          "SrNumber": SrNumber,
          "title": this.dataset[k].Title,
          "semesterAlia": this.dataset[k].semesterAlia,
          "PLO1": this.dataset[k].PLO_One_Skill_Mapped_Count != 0 ? 'X' : '-',
          "PLO2": this.dataset[k].PLO_Two_Skill_Mapped_Count != 0 ? 'X' : '-',
          "PLO3": this.dataset[k].PLO_Three_Skill_Mapped_Count != 0 ? 'X' : '-',
          "PLO4": this.dataset[k].PLO_Four_Skill_Mapped_Count != 0 ? 'X' : '-',
          "PLO5": this.dataset[k].PLO_Five_Skill_Mapped_Count != 0 ? 'X' : '-',
          "PLO6": this.dataset[k].PLO_Six_Skill_Mapped_Count != 0 ? 'X' : '-',
          "PLO7": this.dataset[k].PLO_Seven_Skill_Mapped_Count != 0 ? 'X' : '-',
          "PLO8": this.dataset[k].PLO_Eight_Skill_Mapped_Count != 0 ? 'X' : '-',
          "PLO9": this.dataset[k].PLO_Nine_Skill_Mapped_Count != 0 ? 'X' : '-',
          "PLO10": this.dataset[k].PLO_Ten_Skill_Mapped_Count != 0 ? 'X' : '-',
          "PLO11": this.dataset[k].PLO_Eleven_Skill_Mapped_Count != 0 ? 'X' : '-',
          "PLO12": this.dataset[k].PLO_Twelth_Skill_Mapped_Count != 0 ? 'X' : '-'
        });

        SrNumber += 1;
      }
      var ws = XLSX.utils.aoa_to_sheet(Heading);
      ws["!cols"] = [
        { wpx: 25 },
        { wpx: 200 },
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
      XLSX.utils.book_append_sheet(wb, ws, "PLOs Course Mapping");
      var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
      FileSaver.saveAs(new Blob([wbout], { type: "application/octet-stream" }), 'PLOs Course Mapping' + ".xlsx");
    }
  }
}
