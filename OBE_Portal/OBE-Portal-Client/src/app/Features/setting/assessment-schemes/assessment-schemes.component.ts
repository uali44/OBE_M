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

  dataForm: FormGroup;
  dataEntries: any[] = [];
  dataTable: any[] = [];
  formFields = [
    { name: 'passingCr', label: 'Passing Critria', type: 'number' },
    { name: 'CLOpassingCr', label: 'CLO Passing Critria', type: 'number' },
    { name: 'PLOpassingCr', label: 'PLO Passing Critria', type: 'number' },
    { name: 'assessment', label: 'Assessment Type', type: 'text' },
    { name: 'percentage', label: 'Percentage', type: 'number' },
   
  ];

  constructor(
    private _CoursesSearchService: CoursesSearchService,
    private toastr: ToastrService,
    private ngxService: NgxUiLoaderService,
    private _ReportsService: ReportsService,
    private formBuilder: FormBuilder,
    private CoursesCLOSService: CoursesCLOSService,
    private pagerService: PagerService,
  ) {
    const formGroupConfig = {};
    this.formFields.forEach(field => {
      formGroupConfig[field.name] = ['', Validators.required];
    });
    this.dataForm = this.formBuilder.group(formGroupConfig);


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
   
  

  }

 
  GetAScheme() { }

  addData() {
    if (this.dataForm.valid) {
      this.dataTable.push([ this.dataForm.get('assessment')?.value, this.dataForm.get('percentage')?.value ]);
      // this.dataEntries.push(this.dataForm.value);
      this.dataForm.get('assessment').reset('');
      this.dataForm.get('percentage').reset('');
      const element = document.getElementById('assessment'); // Get the input element to focus
      if (element) {
        element.focus(); // Shift focus to the new field
      }
    //  this.dataForm.reset();
     
    }
  }


  deleteEntry(index: number) {
    this.dataTable.splice(index, 1);
  }

  saveData() {
    // Save dataEntries to the database via service
    console.log('Saving data to database:', this.dataEntries);
  }


}
