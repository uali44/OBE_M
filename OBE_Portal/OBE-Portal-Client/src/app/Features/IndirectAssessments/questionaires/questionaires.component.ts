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
  surveyForm: FormGroup = this.fb.group({});
  surveySubDetails: any[] = [{
    Question: null,
    QType: null,
    Mapping: null,
    Section: null,
    Marks: 0,
    Options: []
  }];
 
  SurveyData: any = [];
  newQuestion: any = {
    Question: '',
    QType: 'Multiple Choice',
    Mapping: '',
    Section: 'Header',
    Marks: 0,
    Options: ['']
  };
  plos: any = [];
  Intake: number=0;
  createSurveyForm: FormGroup;
  surveyTypes = ['CSP', 'Other Type']; // Example survey types
  questionTypes = ['Text', 'Radio Buttons(Options)', 'Likert'];
  sections = ['Header', 'Body', 'Footer'];
  CSPSurveyData: any = [];
  InternshipSurveyData: any = [];
  ExitSurveyData: any = [];
  AlumniSurveyData: any = [];
  EmployerSurveyData: any = [];
  cSPSurveyForm: FormGroup = this.fb.group({});
  alumniSurveyForm: FormGroup = this.fb.group({});
  internshipSurveyForm: FormGroup = this.fb.group({});
  exitSurveyForm: FormGroup = this.fb.group({});
  employerSurveyForm: FormGroup = this.fb.group({});

  AddedIntakePLOs: any = [];
    Added_Intake_PLOs: any[];

  enableSave: boolean;
  programId: any;
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
      section: ['', Validators.required],
      mapping: [''],
      marks:['', ],
      options: this.fb.array([]) 
    });


  }

  ngOnInit(): void {
   // this.Added_Intake_PLOs = [{ PLO_ID: 1, PLO_Title: "PLO-1" }, { PLO_ID: 2, PLO_Title: "PLO-2" }, { PLO_ID: 1, PLO_Title: "PLO-3" }]

    this.Intake = 0;
    this.getSurvey(this.surveyMainDetail.SurveyType);
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
      this.newQuestion.Mapping = this.createSurveyForm.controls["mapping"].value;
      this.newQuestion.Section = this.createSurveyForm.controls["section"].value;
      this.newQuestion.Options = this.createSurveyForm.controls["options"].value;
      this.newQuestion.Marks = this.createSurveyForm.controls["marks"].value;

      this.surveySubDetails.push({ ...this.newQuestion });
      

      this.createSurveyForm.reset();
      this.options.clear();

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


  get createSurveyQuestions() {
    return this.createSurveyForm.get('questions') as FormArray;
  }
  get surveyQuestions(): FormArray {
    return this.createSurveyForm.get('questions') as FormArray;
  }

 

  CloseModal() {

    this.createSurveyForm.reset();
    this.surveySubDetails = [];
    $("#addEducationModal").modal("hide");
  }
 


  receiveData(data: any) {
    let searchData = JSON.parse(data);
    this.Intake = searchData?.admissionOpenProgramId;
  

    this.getAllSurvey();
  }
  receiveMData(data: any) {
    let searchData = JSON.parse(data);
    this.programId = searchData?.admissionOpenProgramId;
   /* this.programId = data;*/
    console.log(this.programId);


    this.GetIntakePLOsInformation(this.programId);

    if (this.surveySubDetails?.length > 0) {
      this.enableSave = true;
    }

   /* this.surveyMainDetail.SurveyIntakeID = data;*/ // Update the parent component's variable with the data
  }
  getSurvey(surveyType: string) {
    const request = {
      Surveytype: surveyType,
      Deptid: GlobalService.Deaprtment_ID,
      SurveyIntakeID: this.Intake
    }
    this.ngxService.start();
    this.IndirectAssessmen.GetSurvey(request).
      subscribe(
        data => {
          this.ngxService.stop();
          this.SurveyData = data;
         
         // this.createForm();
        


        },
        error => {
          this.ngxService.stop();
          this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
        });


  }

  getAllSurvey() {
    const request = {
      Surveytype: "",
      Deptid: GlobalService.Deaprtment_ID,
      SurveyIntakeID: this.Intake
    }
  
    this.ngxService.start();
    this.IndirectAssessmen.GetAllSurvey(request).
      subscribe(
        data => {
          this.ngxService.stop();
          this.CSPSurveyData = data.CSP;
          
          this.createForm(this.cSPSurveyForm, this.CSPSurveyData);
          this.ExitSurveyData = data.Exit;
         
          this.createForm(this.exitSurveyForm, this.ExitSurveyData);
          this.EmployerSurveyData = data.Employer;
        
          this.createForm(this.employerSurveyForm, this.EmployerSurveyData);
          this.InternshipSurveyData = data.Internship;
         
          this.createForm(this.internshipSurveyForm, this.InternshipSurveyData);
          this.AlumniSurveyData = data.Alumni;
        
          this.createForm(this.alumniSurveyForm, this.AlumniSurveyData);



        },
        error => {
          this.ngxService.stop();
          this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
        });


  }

  createForm(form: FormGroup, SurveyData: any) {
    if (!SurveyData || !SurveyData.Questions) return;

    SurveyData.Questions.forEach((question: any) => {
      if (question.QType === 'Text') {
        form.addControl(question.QID, new FormControl('', Validators.required));
      } else if (question.QType === 'Multiple Choice') {
        form.addControl(question.QID, new FormControl('', Validators.required));
      }
      else if (question.QType === 'Likert') {
        form.addControl(question.QID, new FormControl('', Validators.required));
      }
      else if (question.QType === 'Remarks') {
        form.addControl(question.QID, new FormControl('', Validators.required));
      }
    });
  }

  submitSurvey() {
    console.log('Survey Responses:', this.surveyForm.value);
  }




  addQuestion(): void {
    // Add the new question to the list
    this.surveySubDetails.push({ ...this.newQuestion });

    // Reset the new question form
    this.newQuestion = {
      Question: '',
      QType: 'Multiple Choice',
      Mapping: '',
      Options: ['']
    };
  }

  removeQuestion(index: number): void {
    this.surveySubDetails.splice(index, 1);
    if (this.surveySubDetails.length == 0) {
      this.enableSave = false;

    }
  }

  addOption(): void {
    this.newQuestion.Options.push('');
  }

  removeOption(index: number): void {
    if (this.newQuestion.Options.length > 1) {
      this.newQuestion.Options.splice(index, 1);
    } else {
      alert('At least one option is required!');
    }
  }
  trackByFn(index: number, item: any): number {
    return index;
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




      if (result.value) {
        this.IndirectAssessmen.DeleteQuestion(QID).subscribe(
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











}


