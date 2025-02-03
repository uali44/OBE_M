import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { InterconnectedService } from '../../../Shared/Services/Global/interconnected.service';
import { IndirectAssessmentsComponent } from '../IndirectAssessments.component';
import { CoursesSearchService } from '../../../Services/CourseSearch/CourseSearch.service';
import { ToastrService } from 'ngx-toastr';
import { IndirectAssessment } from '../../../Services/IndirectAssessment/IndirectAssessment.service';
import { CoursesCLOSService } from './../../../Services/CourseCLOS/coursesCLO.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  };
  surveyForm: FormGroup = this.fb.group({});
  surveySubDetails: any[] = [{
    Question: null,
    QType: null,
    Mapping: null,
    Options: []
  }];
 
  SurveyData: any = [];
  newQuestion: any = {
    Question: '',
    QType: 'Multiple Choice',
    Mapping: '',
    Options: ['']
  };
  plos: any = [];
  constructor(private _CoursesSearchService: CoursesSearchService,
    private toastr: ToastrService,
    private ngxService: NgxUiLoaderService,
    private _InterconnectedService: InterconnectedService,
    private IndirectAssessmentsComponent: IndirectAssessmentsComponent,
    private IndirectAssessmen: IndirectAssessment,
    private CoursesCLOSService: CoursesCLOSService,
    private GlobalService: GlobalService,
    private fb: FormBuilder,  ) { }

  ngOnInit(): void {

    this.getSurvey(this.surveyMainDetail.SurveyType);
    this.removeQuestion(0);
  }
  getSurvey(surveyType: string) {
    const request = {
      Surveytype: surveyType,
      Deptid: GlobalService.Deaprtment_ID

    }
    this.ngxService.start();
    this.IndirectAssessmen.GetSurvey(request).
      subscribe(
        data => {
          this.ngxService.stop();
          this.SurveyData = data;
          console.log("getdata", this.SurveyData);
          this.createForm();
        


        },
        error => {
          this.ngxService.stop();
          this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
        });


  }

  createForm() {
    if (!this.SurveyData || !this.SurveyData.Questions) return;

    this.SurveyData.Questions.forEach((question: any) => {
      if (question.QType === 'Text') {
        this.surveyForm.addControl(question.QID, new FormControl('', Validators.required));
      } else if (question.QType === 'Multiple Choice') {
        this.surveyForm.addControl(question.QID, new FormControl('', Validators.required));
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

  onSubmit(): void {
    this.surveyMainDetail.SurveyDeptID = GlobalService.Deaprtment_ID;
    this.surveyMainDetail.CreatedBy = GlobalService.FacultyMember_ID;
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
}


