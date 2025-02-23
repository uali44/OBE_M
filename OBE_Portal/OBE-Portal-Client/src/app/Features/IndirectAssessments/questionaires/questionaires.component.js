import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
let QuestionairesComponent = class QuestionairesComponent {
    constructor(_CoursesSearchService, toastr, ngxService, _InterconnectedService, IndirectAssessmentsComponent, _SettingService, IndirectAssessmen, CoursesCLOSService, GlobalService, fb) {
        this._CoursesSearchService = _CoursesSearchService;
        this.toastr = toastr;
        this.ngxService = ngxService;
        this._InterconnectedService = _InterconnectedService;
        this.IndirectAssessmentsComponent = IndirectAssessmentsComponent;
        this._SettingService = _SettingService;
        this.IndirectAssessmen = IndirectAssessmen;
        this.CoursesCLOSService = CoursesCLOSService;
        this.GlobalService = GlobalService;
        this.fb = fb;
        this.surveyMainDetail = {
            SurveyType: 'CSP',
            SurveyDeptID: 0,
            CreatedBy: 0,
            SurveyIntakeID: 0,
        };
        this.surveyForm = this.fb.group({});
        this.surveySubDetails = [{
                Question: null,
                QType: null,
                Mapping: null,
                Section: null,
                Marks: 0,
                Options: []
            }];
        this.SurveyData = [];
        this.newQuestion = {
            Question: '',
            QType: 'Multiple Choice',
            Mapping: '',
            Section: 'Header',
            Marks: 0,
            Options: ['']
        };
        this.plos = [];
        this.Intake = 0;
        this.surveyTypes = ['CSP', 'Other Type']; // Example survey types
        this.questionTypes = ['Text', 'Radio Buttons(Options)', 'Likert'];
        this.sections = ['Header', 'Body', 'Footer'];
        this.CSPSurveyData = [];
        this.InternshipSurveyData = [];
        this.ExitSurveyData = [];
        this.AlumniSurveyData = [];
        this.EmployerSurveyData = [];
        this.cSPSurveyForm = this.fb.group({});
        this.alumniSurveyForm = this.fb.group({});
        this.internshipSurveyForm = this.fb.group({});
        this.exitSurveyForm = this.fb.group({});
        this.employerSurveyForm = this.fb.group({});
        this.AddedIntakePLOs = [];
        this.createSurveyForm = this.fb.group({
            surveyType: ['', Validators.required],
            question: ['', Validators.required],
            questionType: ['', Validators.required],
            section: ['', Validators.required],
            mapping: [''],
            marks: ['',],
            options: this.fb.array([])
        });
    }
    ngOnInit() {
        // this.Added_Intake_PLOs = [{ PLO_ID: 1, PLO_Title: "PLO-1" }, { PLO_ID: 2, PLO_Title: "PLO-2" }, { PLO_ID: 1, PLO_Title: "PLO-3" }]
        this.Intake = 0;
        this.getSurvey(this.surveyMainDetail.SurveyType);
        this.removeQuestion(0);
        this.enableSave = false;
        this.programId = 0;
    }
    get options() {
        return this.createSurveyForm.get('options');
    }
    addnOption() {
        this.options.push(this.fb.control('', Validators.required));
    }
    removenOption(index) {
        this.options.removeAt(index);
    }
    submitNewSurvey() {
        if (this.createSurveyForm.valid) {
            this.surveyMainDetail.SurveyType = this.createSurveyForm.controls["surveyType"].value;
            this.newQuestion.Question = this.createSurveyForm.controls["question"].value;
            this.newQuestion.QType = this.createSurveyForm.controls["questionType"].value;
            this.newQuestion.Mapping = this.createSurveyForm.controls["mapping"].value;
            this.newQuestion.Section = this.createSurveyForm.controls["section"].value;
            this.newQuestion.Options = this.createSurveyForm.controls["options"].value;
            this.newQuestion.Marks = this.createSurveyForm.controls["marks"].value;
            this.surveySubDetails.push(Object.assign({}, this.newQuestion));
            this.createSurveyForm.reset();
            this.options.clear();
            if (this.programId != 0) {
                this.enableSave = true;
            }
            else {
                this.enableSave = false;
            }
        }
        else {
            this.toastr.error('Please fill all required fields before submitting.', 'Validation Error');
        }
    }
    getSurveyOptions(questionIndex) {
        return this.surveyQuestions.at(questionIndex).get('Options');
    }
    addSurveyOption(questionIndex) {
        var _a;
        const question = this.surveyQuestions.at(questionIndex);
        if (((_a = question.get('QType')) === null || _a === void 0 ? void 0 : _a.value) === 'Multiple Choice') {
            this.getSurveyOptions(questionIndex).push(this.fb.control('', Validators.required));
        }
    }
    // Remove an option from a specific question
    removeSurveyOption(questionIndex, optionIndex) {
        const options = this.getSurveyOptions(questionIndex);
        if (options.length > 1) {
            options.removeAt(optionIndex);
        }
        else {
            this.toastr.warning('At least one option is required!');
        }
    }
    get createSurveyQuestions() {
        return this.createSurveyForm.get('questions');
    }
    get surveyQuestions() {
        return this.createSurveyForm.get('questions');
    }
    CloseModal() {
        this.createSurveyForm.reset();
        this.surveySubDetails = [];
        $("#addEducationModal").modal("hide");
    }
    receiveData(data) {
        let searchData = JSON.parse(data);
        this.Intake = searchData === null || searchData === void 0 ? void 0 : searchData.admissionOpenProgramId;
        this.getAllSurvey();
    }
    receiveMData(data) {
        var _a;
        let searchData = JSON.parse(data);
        this.programId = searchData === null || searchData === void 0 ? void 0 : searchData.admissionOpenProgramId;
        /* this.programId = data;*/
        console.log(this.programId);
        this.GetIntakePLOsInformation(this.programId);
        if (((_a = this.surveySubDetails) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            this.enableSave = true;
        }
        /* this.surveyMainDetail.SurveyIntakeID = data;*/ // Update the parent component's variable with the data
    }
    getSurvey(surveyType) {
        const request = {
            Surveytype: surveyType,
            Deptid: GlobalService.Deaprtment_ID,
            SurveyIntakeID: this.Intake
        };
        this.ngxService.start();
        this.IndirectAssessmen.GetSurvey(request).
            subscribe(data => {
            this.ngxService.stop();
            this.SurveyData = data;
            // this.createForm();
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
        });
    }
    getAllSurvey() {
        const request = {
            Surveytype: "",
            Deptid: GlobalService.Deaprtment_ID,
            SurveyIntakeID: this.Intake
        };
        this.ngxService.start();
        this.IndirectAssessmen.GetAllSurvey(request).
            subscribe(data => {
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
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
        });
    }
    createForm(form, SurveyData) {
        if (!SurveyData || !SurveyData.Questions)
            return;
        SurveyData.Questions.forEach((question) => {
            if (question.QType === 'Text') {
                form.addControl(question.QID, new FormControl('', Validators.required));
            }
            else if (question.QType === 'Multiple Choice') {
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
        if (this.surveySubDetails.length == 0) {
            this.enableSave = false;
        }
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
    trackByFn(index, item) {
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
    onSubmit() {
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
            subscribe(response => {
            try {
                if (response) {
                    this.getSurvey(this.surveyMainDetail.SurveyType);
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
    }
    deleteQuestion(QID) {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this Question!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                this.IndirectAssessmen.DeleteQuestion(QID).subscribe(() => {
                    Swal.fire('Deleted!', 'Question has been deleted.', 'success');
                    this.getSurvey(this.surveyMainDetail.SurveyType);
                }, error => {
                    Swal.fire('Error!', 'Failed to delete Question.', 'error');
                });
            }
        });
    }
    resetForm() {
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
    GetIntakePLOsInformation(admissionOpenProgramId) {
        this.Added_Intake_PLOs = [];
        this.ngxService.start();
        this._SettingService.GetPlosInformation({ programId: this.programId, admissionOpenProgramId: Number(admissionOpenProgramId) }).
            subscribe(response => {
            if (response != null) {
                this.Added_Intake_PLOs = response;
            }
            this.ngxService.stop();
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
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