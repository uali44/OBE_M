import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { InterconnectedService } from '../../../Shared/Services/Global/interconnected.service';
import { IndirectAssessmentsComponent } from '../IndirectAssessments.component';
import { CoursesSearchService } from '../../../Services/CourseSearch/CourseSearch.service';
import { ToastrService } from 'ngx-toastr';
import { IndirectAssessment } from '../../../Services/IndirectAssessment/IndirectAssessment.service';
import { CoursesCLOSService } from './../../../Services/CourseCLOS/coursesCLO.service';
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

  surveySubDetails: any[] = [{
    Question: null,
    QType: null,
    Mapping: null,
    Options: []
  }];
 

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
    private GlobalService: GlobalService,) { }

  ngOnInit(): void {

    this.getSurvey(this.surveyMainDetail.SurveyType);
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

          console.log("getdata", data);
        



        },
        error => {
          this.ngxService.stop();
          this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
        });


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

    //this.http.post('https://your-api-url/api/survey', payload).subscribe(
    //  response => {
    //    alert('Survey created successfully!');
    //    this.resetForm();
    //  },
    //  error => {
    //    console.error('Error creating survey:', error);
    //  }
    //);
  }

  resetForm(): void {
    this.surveyMainDetail = {
      SurveyType: '',
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
