import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { InterconnectedService } from '../../../Shared/Services/Global/interconnected.service';
import { IndirectAssessmentsComponent } from '../IndirectAssessments.component';
import { CoursesSearchService } from '../../../Services/CourseSearch/CourseSearch.service';
import { ToastrService } from 'ngx-toastr';
import { IndirectAssessment } from '../../../Services/IndirectAssessment/IndirectAssessment.service';
declare const $: any;

@Component({
  selector: 'app-questionaires',
  templateUrl: './questionaires.component.html',
  styleUrls: ['./questionaires.component.css']
})
export class QuestionairesComponent implements OnInit {
  surveyMainDetail: any = {
    SurveyType: '',
    SurveyDeptID:0,
  };

  surveySubDetails: any[] = [{
    Question: '',
    QType: 'Multiple Choice',
    Mapping: '',
    Options: ['']
  }];
 

  newQuestion: any = {
    Question: '',
    QType: 'Multiple Choice',
    Mapping: '',
    Options: ['']
  };
  constructor(private _CoursesSearchService: CoursesSearchService,
    private toastr: ToastrService,
    private ngxService: NgxUiLoaderService,
    private _InterconnectedService: InterconnectedService,
    private IndirectAssessmentsComponent: IndirectAssessmentsComponent,
    private IndirectAssessment: IndirectAssessment,
    private GlobalService: GlobalService,) { }

  ngOnInit(): void { }

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
    const payload = {
      SurveyMainDetail: this.surveyMainDetail,
      SurveySubDetails: this.surveySubDetails
    };

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
