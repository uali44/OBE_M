import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { InterconnectedService } from '../../../Shared/Services/Global/interconnected.service';
import { IndirectAssessmentsComponent } from '../IndirectAssessments.component';
import { CoursesSearchService } from '../../../Services/CourseSearch/CourseSearch.service';
import { ToastrService } from 'ngx-toastr';
import { IndirectAssessment } from '../../../Services/IndirectAssessment/IndirectAssessment.service';
import { CoursesCLOSService } from './../../../Services/CourseCLOS/coursesCLO.service';
import { SettingService } from 'src/app/Services/Settings/setting.service';
import { FormBuilder, FormControl, FormGroup, Validators,FormArray } from '@angular/forms';
import Swal, { SweetAlertResult } from 'sweetalert2';
import { disableDebugTools } from '@angular/platform-browser';

declare const $: any;

@Component({
  selector: 'app-questionaires',
  templateUrl: './questionaires.component.html',
  styleUrls: ['./questionaires.component.css']
})
export class QuestionairesComponent implements OnInit {
  surveyMainDetail: any = {
    SurveyType: 'CSP',
    SurveyDeptID: 0,
    CreatedBy :0,
    SurveyIntakeID:0,
  };

  surveySubDetails: any[] = [{
    Question: null,
    QType: null,
    PLOID: 0,
    PEOID: 0,

    Marks: 0,
    Options: []
  }];
 
  SurveyData: any = [];
  newQuestion: any = {
    Question: '',
    QType: 'Multiple Choice',
    PLOID: 0,
    PEOID: 0,

    Marks: 0,
    Options: ['']
  };
  plos: any = [];
  Intake: number=0;
  createSurveyForm: FormGroup;
 
  CSPSurveyData: any = [];
  InternshipSurveyData: any = [];
  ExitSurveyData: any = [];
  AlumniSurveyData: any = [];
  EmployerSurveyData: any = [];
 
  

  
    Added_Intake_PLOs: any[];
  Added_Intake_PEOs: any[] = [];

  Survey_Intake_PLO: any[];
  Survey_Intake_PEO: any[];


  enableSave: boolean;
  programId: any;


  SelectedType: any;



  constructor(private _CoursesSearchService: CoursesSearchService,
    private toastr: ToastrService,
    private ngxService: NgxUiLoaderService,
    private _InterconnectedService: InterconnectedService,
    private IndirectAssessmentsComponent: IndirectAssessmentsComponent,
    private _SettingService: SettingService,
    private IndirectAssessmen: IndirectAssessment,
    private CoursesCLOSService: CoursesCLOSService,
    private GlobalService: GlobalService,
    private fb: FormBuilder,
  ) {
  
    this.createSurveyForm = this.fb.group({
      surveyType: ['', Validators.required],
      question: ['', Validators.required],
      questionType: ['', Validators.required],
 

      plo: [{ value: '', disabled: true }],
      peo:[{value: '', disabled: true }],
      marks:['', ],
      options: this.fb.array([]) 
    });


  }

  ngOnInit(): void {
  

    this.Intake = 0;
  
    this.removeQuestion(0);
    this.enableSave = false;
    this.programId = 0;
  }
  get options(): FormArray {
    return this.createSurveyForm.get('options') as FormArray;
  }

  addnOption() {
    this.options.push(this.fb.control('', Validators.required));
  }

  removenOption(index: number) {
    this.options.removeAt(index);
  }

  submitNewSurvey(): void {
   
    if (this.createSurveyForm.valid) {
      this.surveyMainDetail.SurveyType = this.createSurveyForm.controls["surveyType"].value;
      this.newQuestion.Question = this.createSurveyForm.controls["question"].value;
      this.newQuestion.QType = this.createSurveyForm.controls["questionType"].value;
      this.newQuestion.PLOID = Number(this.createSurveyForm.controls["plo"].value);
      this.newQuestion.PEOID = Number(this.createSurveyForm.controls["peo"].value);
      
      this.newQuestion.Options = this.createSurveyForm.controls["options"].value;
      this.newQuestion.Marks = Number(this.createSurveyForm.controls["marks"].value);

      this.surveySubDetails.push({ ...this.newQuestion });

      this.SelectedType = this.createSurveyForm.controls["surveyType"].value;
      this.createSurveyForm.reset();
      this.options.clear();
      this.createSurveyForm.controls["surveyType"].patchValue(this.SelectedType);
      if (this.programId != 0) {
        this.enableSave = true;
      }
      else {
        this.enableSave = false;
      }
    } else {
      this.toastr.error('Please fill all required fields before submitting.', 'Validation Error');
    }
  }

  FilterPLO(id: number) {
    const filtered = this.Added_Intake_PLOs.find((data: any) => data.PLO_ID == id);
    return filtered?.PLO_Title || null;
  }
  FilterPEO(id: number) {
    const filtered = this.Added_Intake_PEOs.find((data: any) => data.peoId == id);
    return filtered?.peoTitle ||  null;
  }
  getSurveyOptions(questionIndex: number): FormArray {
    return this.surveyQuestions.at(questionIndex).get('Options') as FormArray;
  }

  addSurveyOption(questionIndex: number): void {
    const question = this.surveyQuestions.at(questionIndex);
    if (question.get('QType')?.value === 'Multiple Choice') {
      this.getSurveyOptions(questionIndex).push(this.fb.control('', Validators.required));
    }
  }

  // Remove an option from a specific question
  removeSurveyOption(questionIndex: number, optionIndex: number): void {
    const options = this.getSurveyOptions(questionIndex);
    if (options.length > 1) {
      options.removeAt(optionIndex);
    } else {
      this.toastr.warning('At least one option is required!');
    }
  }


 
  get surveyQuestions(): FormArray {
    return this.createSurveyForm.get('questions') as FormArray;
  }

  OpenModal(val) {
    this.createSurveyForm.controls['surveyType'].patchValue(val);
    this.Added_Intake_PLOs = [];
    this.Added_Intake_PEOs = [];
    this.createSurveyForm.controls['plo'].disable()
    this.createSurveyForm.controls['peo'].disable()
    $("#addSurveyModal").modal("Show");
  }

  CloseModal() {

    this.createSurveyForm.reset();
    this.surveySubDetails = [];
    $("#addSurveyModal").modal("hide");
  }
 


  receiveData(data: any) {
    let searchData = JSON.parse(data);
    this.Intake = searchData?.admissionOpenProgramId;
    this.GetIntakePLOsInformation(this.Intake);
    this.GetIntakePeosInformation(this.Intake);


    this.getAllSurvey();
  }
  receiveMData(data: any) {
    let searchData = JSON.parse(data);
    this.programId = searchData?.admissionOpenProgramId;
   


    this.GetIntakePLOsInformation(this.programId);
    this.GetIntakePeosInformation(this.programId);
    this.createSurveyForm.controls['plo'].enable()
    this.createSurveyForm.controls['peo'].enable()

    if (this.surveySubDetails?.length > 0) {
      this.enableSave = true;
    }

 
  }
  getSurvey(surveyType: string) {
    const request = {
      Surveytype: surveyType,
    
      SurveyIntakeID: this.Intake
    }
    this.ngxService.start();
    this.IndirectAssessmen.GetSurvey(request).
      subscribe(
        data => {
          this.ngxService.stop();
          this.SurveyData = data;
         
        
        


        },
        error => {
          this.ngxService.stop();
          this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
        });


  }

  getAllSurvey() {
    const request = {
      Surveytype: "",
    
      SurveyIntakeID: this.Intake
    }
  
    this.ngxService.start();
    this.IndirectAssessmen.GetAllSurvey(request).
      subscribe(
        data => {
          this.ngxService.stop();
          this.CSPSurveyData = data.CSP;
          this.ExitSurveyData = data.Exit;
          this.EmployerSurveyData = data.Employer;
          this.InternshipSurveyData = data.Internship;
          this.AlumniSurveyData = data.Alumni;


         



        },
        error => {
          this.ngxService.stop();
          this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
        });


  }

 

  removeQuestion(index: number): void {
    this.surveySubDetails.splice(index, 1);
    if (this.surveySubDetails.length == 0) {
      this.enableSave = false;

    }
  }

  

 
 
  TypeChange(val) {
    if (val === "Multiple Choice") {
      this.addnOption();
    }
    else {
      this.options.clear();
    }


  }
  onSubmit(): void {
    if (this.programId == 0) {
      this.toastr.error("Please Select a valid intake", "Error!");
      return;
    }
    this.surveyMainDetail.SurveyDeptID = GlobalService.Deaprtment_ID;
    this.surveyMainDetail.CreatedBy = GlobalService.FacultyMember_ID;
    this.surveyMainDetail.SurveyIntakeID = this.programId;
    const payload = {
      SurveyMainDetail: this.surveyMainDetail,
      SurveySubDetails: this.surveySubDetails
    };
   
    this.ngxService.start();

    this.IndirectAssessmen.AddSurvey(payload).
      subscribe(
        response => {
          try {
            if (response) {
              this.getSurvey(this.surveyMainDetail.SurveyType);
              this.resetForm();
              this.CloseModal();
              this.toastr.success("Information saved successfully", "Success!");
            
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
  deleteQuestion(QID: number) {

    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Question!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {

      const payload={

        QID: QID,
        ModifiedBy: GlobalService.FacultyMember_ID

      }
     

      if (result.value) {
        this.IndirectAssessmen.DeleteQuestion(payload).subscribe(
          () => {
            Swal.fire('Deleted!', 'Question has been deleted.', 'success');
            this.getSurvey(this.surveyMainDetail.SurveyType);
          },
          error => {
            Swal.fire('Error!', 'Failed to delete Question.', 'error');
          }
        );
      }
    });
  }
  resetForm(): void {
    this.surveyMainDetail = {
      SurveyType: this.surveyMainDetail.SurveyType,
      SurveyDeptID: null
    };
    this.newQuestion = {
      Question: '',
      QType: 'Multiple Choice',
      Mapping: '',
      Options: ['']
    };
    this.surveySubDetails = [];
  }



  GetIntakePLOsInformation(admissionOpenProgramId: any) {
    this.Added_Intake_PLOs = [];
    this.ngxService.start();
    this._SettingService.GetPlosInformation({ programId: this.programId, admissionOpenProgramId: Number(admissionOpenProgramId) }).
      subscribe(
        response => {
          if (response != null) {
            this.Added_Intake_PLOs = response;
    
          }
          this.ngxService.stop();
        },
        error => {
          this.ngxService.stop();
          this.toastr.error("Internal server error occured while processing your request", "Error!")
        });
  }

  GetIntakePeosInformation(admissionOpenProgramId: any) {
    this.Added_Intake_PEOs = [];
    this.ngxService.start();
    this._SettingService.GetPeosInformation({ programId: this.programId, admissionOpenProgramId: Number(admissionOpenProgramId) }).
      subscribe(
        response => {
          if (response != null) {
            this.Added_Intake_PEOs = response;
           
          }
          this.ngxService.stop();
        },
        error => {
          this.ngxService.stop();
          this.toastr.error("Internal server error occured while processing your request", "Error!")
        });
  }









}


