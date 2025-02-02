import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { FormControl, Validators } from '@angular/forms';
let QuestionairesComponent = class QuestionairesComponent {
    constructor(_CoursesSearchService, toastr, ngxService, _InterconnectedService, IndirectAssessmentsComponent, IndirectAssessmen, CoursesCLOSService, GlobalService, fb) {
        this._CoursesSearchService = _CoursesSearchService;
        this.toastr = toastr;
        this.ngxService = ngxService;
        this._InterconnectedService = _InterconnectedService;
        this.IndirectAssessmentsComponent = IndirectAssessmentsComponent;
        this.IndirectAssessmen = IndirectAssessmen;
        this.CoursesCLOSService = CoursesCLOSService;
        this.GlobalService = GlobalService;
        this.fb = fb;
        this.surveyMainDetail = {
            SurveyType: 'CSP',
            SurveyDeptID: 0,
            CreatedBy: 0,
        };
        this.surveyForm = this.fb.group({});
        this.surveySubDetails = [{
                Question: null,
                QType: null,
                Mapping: null,
                Options: []
            }];
        this.SurveyData = [];
        this.newQuestion = {
            Question: '',
            QType: 'Multiple Choice',
            Mapping: '',
            Options: ['']
        };
        this.plos = [];
    }
    ngOnInit() {
        this.getSurvey(this.surveyMainDetail.SurveyType);
    }
    getSurvey(surveyType) {
        const request = {
            Surveytype: surveyType,
            Deptid: GlobalService.Deaprtment_ID
        };
        this.ngxService.start();
        this.IndirectAssessmen.GetSurvey(request).
            subscribe(data => {
            this.ngxService.stop();
            this.SurveyData = data;
            console.log("getdata", this.SurveyData);
            this.createForm();
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
        });
    }
    createForm() {
        if (!this.SurveyData || !this.SurveyData.Questions)
            return;
        this.SurveyData.Questions.forEach((question) => {
            if (question.QType === 'Text') {
                this.surveyForm.addControl(question.QID, new FormControl('', Validators.required));
            }
            else if (question.QType === 'Multiple Choice') {
                this.surveyForm.addControl(question.QID, new FormControl('', Validators.required));
            }
        });
    }
    submitSurvey() {
        console.log('Survey Responses:', this.surveyForm.value);
    }
    addQuestion() {
        // Add the new question to the list
        this.surveySubDetails.push(Object.assign({}, this.newQuestion));
        // Reset the new question form
        this.newQuestion = {
            Question: '',
            QType: 'Multiple Choice',
            Mapping: '',
            Options: ['']
        };
    }
    removeQuestion(index) {
        this.surveySubDetails.splice(index, 1);
    }
    addOption() {
        this.newQuestion.Options.push('');
    }
    removeOption(index) {
        if (this.newQuestion.Options.length > 1) {
            this.newQuestion.Options.splice(index, 1);
        }
        else {
            alert('At least one option is required!');
        }
    }
    onSubmit() {
        this.surveyMainDetail.SurveyDeptID = GlobalService.Deaprtment_ID;
        this.surveyMainDetail.CreatedBy = GlobalService.FacultyMember_ID;
        const payload = {
            SurveyMainDetail: this.surveyMainDetail,
            SurveySubDetails: this.surveySubDetails
        };
        this.ngxService.start();
        this.IndirectAssessmen.AddSurvey(payload).
            subscribe(response => {
            try {
                if (response) {
                    this.resetForm();
                    this.toastr.success("Information saved successfully", "Success!");
                }
                this.ngxService.stop();
            }
            catch (e) {
                this.ngxService.stop();
                this.toastr.error("Internal server error occured while processing your request", "Error!");
            }
        }, error => {
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
    resetForm() {
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
};
QuestionairesComponent = __decorate([
    Component({
        selector: 'app-questionaires',
        templateUrl: './questionaires.component.html',
        styleUrls: ['./questionaires.component.css']
    })
], QuestionairesComponent);
export { QuestionairesComponent };
//# sourceMappingURL=questionaires.component.js.map