import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { PagerService } from '../../../Shared/Services/Global/Pager';
import { Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { HighlightPipe } from '../../../Shared/Pipe/highlight.pipe';
import { FilterPipe } from '../../../Shared/Pipe/filter';
let AssessmentDetailsComponent = class AssessmentDetailsComponent {
    constructor(toastr, formBuilder, pagerService, AssessmentDetailsService, ngxService, InterconnectedService) {
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.pagerService = pagerService;
        this.AssessmentDetailsService = AssessmentDetailsService;
        this.ngxService = ngxService;
        this.InterconnectedService = InterconnectedService;
        this.query = "";
        this.pager = {};
        this.Min_Date = new Date();
        this.Assignment_Initial_Array = [];
        this.Quizzes_Initial_Array = [];
        this.Assessment_Initial_Array = [];
        this.Journals_Initial_Array = [];
        this.All_Added_Assessment_For_Final_Submission = [];
        this.All_Added_Assessment_Details = [];
        this.All_Added_Assessment_Details_Lab = [];
        this.All_Added_Assessment_Details_FYP = [];
        this.All_Added_Assessment_Temp = [];
        this.Selected_Assessment_Sub_Details = [];
        this.Lab_Performance_Indicator = [];
        this.FYPAssessmentToolsStatus = [];
        this.dataset = [];
        this.submitted = false;
        this.submitted_Edit = false;
        this.Is_Mid_Marks_Added = false;
        this.Is_Finals_Marks_Added = false;
        this.Is_Course = false;
        this.Is_Weightage_Mendatory = false;
        this.Is_Temp_Mids_And_Finals = false;
        this.Is_Show_Action_TD = true;
        this.Is_Have_Special_Permission = false;
        this.Add_Permission = false;
        this.Assessment_Type = 1;
        this.Assessment_Type_Lab = 1;
        this.Question_Number = 1;
        this.Assiggment_Added_Count = 0;
        this.Quiz_Added_Count = 0;
        this.Assessment_Added_Count = 0;
        this.Journal_Added_Count = 0;
        this.Assessment_Total_Marks = 0;
        this.Assessment_Sub_Details_ID_For_Edit = 0;
        this.Assessment_Sub_Details_Index_For_Edit = 0;
        this.pagesize = 50;
        this.TotalMarks = 0;
        this.AssessmentToolFYPTotalMarks = 0;
        this.Min_Date.setDate(this.Min_Date.getDate() - 1);
        this.Get_Assessment_Details_Course = [];
        this.Get_Assessment_Details_Course_Lst = [];
        this.Get_Assessment_Sub_Details_Course_Lst = [];
        this.Is_Course = false;
        this.CourseCategory = 0;
    }
    ngOnInit() {
        this.CourseAssessmentForm = this.formBuilder.group({
            Question_Remarks: [''],
            Selected_CLOS: [''],
            CLO_Weightage: [''],
            Question_Marks: ['', [Validators.required, Validators.min(0)]],
            Assessment_Total: ['']
        });
        this.CourseAssessmentFormLab = this.formBuilder.group({
            Performance_Indicator: ['', [Validators.required]],
            Performance_Indicator_Marks: ['', [Validators.required, Validators.min(0)]],
            Assessment_Total: [''],
            Selected_CLO: [''],
            CLO_Weightage: ['']
        });
        this.CourseAssessmentFormFYP = this.formBuilder.group({
            Performance_Indicator: ['', [Validators.required]],
            Performance_Indicator_Marks: ['', [Validators.required, Validators.min(0)]],
            Assessment_Total: ['', [Validators.required]],
            Selected_CLO: ['', [Validators.required]],
            CLO_Weightage: ['', [Validators.required, Validators.min(0)]]
        });
        this.CourseAssessmentFormEditLab = this.formBuilder.group({
            Performance_Indicator_Edit: ['', [Validators.required]],
            Performance_Indicator_Marks_Edit: ['', [Validators.required, Validators.min(0)]],
            Assessment_Total_Edit: [''],
            Selected_CLO_Edit: [''],
            CLO_Weightage_Edit: ['']
        });
        this.CourseAssessmentFormEdit = this.formBuilder.group({
            Question_Remarks_Edit: [''],
            Selected_CLOS_Edit: [''],
            CLO_Weightage_Edit: [''],
            Question_Marks_Edit: ['', [Validators.required, Validators.min(0)]],
            Assessment_Total_Edit: ['']
        });
        this.CourseAssessmentFormEditFYP = this.formBuilder.group({
            Performance_Indicator_Edit: ['', [Validators.required]],
            Performance_Indicator_Marks_Edit: ['', [Validators.required, Validators.min(0)]],
            Assessment_Total_Edit: ['', [Validators.required, Validators.min(0)]],
            Selected_CLO_Edit: ['', [Validators.required, Validators.min(0)]],
            CLO_Weightage_Edit: ['', [Validators.required, Validators.min(0)]]
        });
        this.CourseAssessmentForm.get('CLO_Weightage').setValue("");
        this.CourseAssessmentForm.get('Selected_CLOS').setValue("0");
        this.CourseAssessmentForm.get('Assessment_Total').setValue("0");
        this.CourseAssessmentFormLab.get('Performance_Indicator').setValue("0");
        $("#Performance_Indicator").val('0');
        this.Is_Temp_Mids_And_Finals = false;
        this.TotalMarks = 0;
        this.AssessmentToolFYPTotalMarks = 0;
        this.Get_Selected_Course_Assessment_Details();
    }
    Get_Selected_Course_Assessment_Details() {
        this.CourseCategory = GlobalService.CourseCategory;
        this.Add_Permission = false;
        this.Is_Show_Action_TD = false;
        this.Is_Have_Special_Permission = false;
        this.Is_Show_Action_TD = false;
        this.Is_Completed = false;
        this.Is_Course = false;
        this.Is_Completed = GlobalService.Is_Completed;
        this.Is_Course = GlobalService.Is_Course;
        this.Is_Permission_Add_Course_Details = GlobalService.Permissions.indexOf("Course_Assessment_Details_Add") >= 0 ? true : false;
        this.Is_Permission_Edit_Course_Details = GlobalService.Permissions.indexOf("Course_Assessment_Details_Edit") >= 0 ? true : false;
        this.Is_Permission_Delete_Course_Details = GlobalService.Permissions.indexOf("Course_Assessment_Details_Delete") >= 0 ? true : false;
        if (GlobalService.FacultyMember_ID == GlobalService.TempFacultyMember_ID) {
            if (this.Is_Completed) {
                this.Add_Permission = false;
                this.Is_Show_Action_TD = false;
            }
            else {
                this.Add_Permission = true;
                this.Is_Show_Action_TD = true;
                this.Is_Permission_Edit_Course_Details = false;
                this.Is_Permission_Delete_Course_Details = false;
            }
        }
        else {
            if (this.Is_Permission_Add_Course_Details) {
                this.Add_Permission = true;
            }
            if (this.Is_Permission_Edit_Course_Details || this.Is_Permission_Delete_Course_Details) {
                this.Is_Show_Action_TD = true;
                this.Is_Have_Special_Permission = true;
            }
        }
        this.ngxService.start();
        $("#rdo-Assessment").prop('checked', true);
        $("#rdo-Assignments").prop('checked', true);
        this.pagesize = 50;
        this.Assessment_Type = 1;
        this.Assessment_Type_Lab = 1;
        this.Quiz_Added_Count = 1;
        this.Assiggment_Added_Count = 1;
        this.Assessment_Added_Count = 1;
        this.Journal_Added_Count = 1;
        this.Is_Mid_Marks_Added = false;
        this.Is_Finals_Marks_Added = false;
        this.Question_Number = 1;
        this.Get_Assessment_Details_Course = [];
        this.Assignment_Initial_Array = [];
        this.Quizzes_Initial_Array = [];
        this.Assessment_Initial_Array = [];
        this.Journals_Initial_Array = [];
        this.Get_Added_CLOS = [];
        this.All_Added_Assessment_Temp = [];
        this.Get_Assessment_Details_Course_Lst = [];
        this.Get_Assessment_Sub_Details_Course_Lst = [];
        this.Lab_Performance_Indicator = [];
        this.FYPAssessmentToolsStatus = [];
        this.AssessmentDetailsService.GetAssessmentDetailsCourse({ "OfferedCourseID": GlobalService.Offered_Course_ID, "CourseCategory": this.CourseCategory }).
            subscribe(data => {
            var _a, _b;
            this.Lab_Performance_Indicator = data.labPerformanceIndicator;
            if (data != null) {
                this.Get_Assessment_Details_Course = data.getAssessmentDetailsForCourses;
                this.Get_Added_CLOS = data.getCourseAddedCLOS;
                if (((_a = this.Get_Assessment_Details_Course) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                    // course course implementation
                    if (this.CourseCategory == 1) {
                        this.Is_Course = true;
                        for (var i = 0; i < this.Get_Assessment_Details_Course.length; i++) {
                            if (this.Get_Assessment_Details_Course[i].ASSESSMENTTITLE.includes('Assignment')) {
                                this.Assiggment_Added_Count = Number(this.Get_Assessment_Details_Course[i].ASSESSMENTTITLE.split(':')[1]);
                                this.Assignment_Initial_Array.push({ "Assignment_Title": "Assignment " + Number(this.Assiggment_Added_Count), "Already_Added": true, "Can_Add": false, "Is_Temp_Added": false });
                            }
                            else if (this.Get_Assessment_Details_Course[i].ASSESSMENTTITLE.includes('Quiz')) {
                                this.Quiz_Added_Count = Number(this.Get_Assessment_Details_Course[i].ASSESSMENTTITLE.split(':')[1]);
                                this.Quizzes_Initial_Array.push({ "Quiz_Title": "Quiz " + Number(this.Quiz_Added_Count), "Already_Added": true, "Can_Add": false, "Is_Temp_Added": false });
                            }
                            else if (this.Get_Assessment_Details_Course[i].ASSESSMENTTITLE.includes('Mids')) {
                                this.Is_Mid_Marks_Added = true;
                            }
                            else if (this.Get_Assessment_Details_Course[i].ASSESSMENTTITLE.includes('Finals')) {
                                this.Is_Finals_Marks_Added = true;
                            }
                            if (this.Get_Assessment_Details_Course[i].QUESTIONNUMBER != null) {
                                if (this.Get_Assessment_Details_Course[i].QUESTIONNUMBER.includes(',')) {
                                    this.Get_Assessment_Sub_Details_Course_Lst = [];
                                    var temp = this.Get_Assessment_Details_Course[i].QUESTIONNUMBER.split(',');
                                    for (var j = 0; j < temp.length; j++) {
                                        this.Get_Assessment_Sub_Details_Course_Lst.push({
                                            "questionnumber": this.Get_Assessment_Details_Course[i].QUESTIONNUMBER.split(',')[j],
                                            "questionmarks": this.Get_Assessment_Details_Course[i].QUESTIONMARKS.split(',')[j],
                                            "assessmentsubdetails": this.Get_Assessment_Details_Course[i].ASSESSMENTSUBDETAILS.split(',')[j],
                                            "mappedclotitle": this.Get_Assessment_Details_Course[i].MAPPEDCLOTITLE.split(',')[j],
                                            "weightage": this.Get_Assessment_Details_Course[i].WEIGHTAGE.split(',')[j],
                                            "AssessmentSubRemarks": this.Get_Assessment_Details_Course[i].AssessmentSubDetailsRemarks.split(',')[j],
                                            "Mapped_CLO_ID": Number(this.Get_Assessment_Details_Course[i].MAPPEDCLOID.split(',')[j])
                                        });
                                    }
                                    this.Get_Assessment_Details_Course_Lst.push({
                                        "Sr_Number": i + 1,
                                        "assessmentmaindetailsid": this.Get_Assessment_Details_Course[i].ASSESSMENTMAINDETAILSID,
                                        "assessmenttitle": this.Get_Assessment_Details_Course[i].ASSESSMENTTITLE,
                                        "assessmentmarks": this.Get_Assessment_Details_Course[i].ASSESSMENTMARKS,
                                        "iS_MARKS_SUBMITTED": this.Get_Assessment_Details_Course[i].IS_MARKS_SUBMITTED,
                                        "iS_LOCKED": this.Get_Assessment_Details_Course[i].IS_LOCKED,
                                        "Get_Assessment_Sub_Details_Course_Lst": this.Get_Assessment_Sub_Details_Course_Lst,
                                        "besT_PERFORMAR_NAME": this.Get_Assessment_Details_Course[i].BEST_PERFORMAR_NAME,
                                        "besT_PERFORMAR_ENROLLMENT": this.Get_Assessment_Details_Course[i].BEST_PERFORMAR_ENROLLMENT,
                                        "lowesT_PERFORMAR_NAME": this.Get_Assessment_Details_Course[i].LOWEST_PERFORMAR_NAME,
                                        "lowesT_PERFORMAR_NAME_ENROLLMENT": this.Get_Assessment_Details_Course[i].LOWEST_PERFORMAR_NAME_ENROLLMENT,
                                        "assessmenT_ATTAINMENT": this.Get_Assessment_Details_Course[i].ASSESSMENT_ATTAINMENT,
                                        "cloS_ATTAINMENT": this.Get_Assessment_Details_Course[i].CLOS_ATTAINMENT,
                                        "Is_Loop": true,
                                        "Scheduled_Date": this.Get_Assessment_Details_Course[i].Scheduled_Date,
                                        "AssessmentRemarks": this.Get_Assessment_Details_Course[i].AssessmentRemarks,
                                        "Mapped_CLO_ID": Number(this.Get_Assessment_Details_Course[i].MAPPEDCLOID.split(',')[j]),
                                        "Course_Category": Number(this.Get_Assessment_Details_Course[i].Course_Category)
                                    });
                                }
                                else {
                                    this.Get_Assessment_Details_Course_Lst.push({
                                        "Sr_Number": i + 1,
                                        "assessmentmaindetailsid": this.Get_Assessment_Details_Course[i].ASSESSMENTMAINDETAILSID,
                                        "assessmenttitle": this.Get_Assessment_Details_Course[i].ASSESSMENTTITLE,
                                        "assessmentmarks": this.Get_Assessment_Details_Course[i].ASSESSMENTMARKS,
                                        "iS_MARKS_SUBMITTED": this.Get_Assessment_Details_Course[i].IS_MARKS_SUBMITTED,
                                        "iS_LOCKED": this.Get_Assessment_Details_Course[i].IS_LOCKED,
                                        "weightage": this.Get_Assessment_Details_Course[i].WEIGHTAGE,
                                        "questionnumber": this.Get_Assessment_Details_Course[i].QUESTIONNUMBER,
                                        "questionmarks": this.Get_Assessment_Details_Course[i].QUESTIONMARKS,
                                        "assessmentsubdetails": this.Get_Assessment_Details_Course[i].ASSESSMENTSUBDETAILS,
                                        "mappedclotitle": this.Get_Assessment_Details_Course[i].MAPPEDCLOTITLE,
                                        "besT_PERFORMAR_NAME": this.Get_Assessment_Details_Course[i].BEST_PERFORMAR_NAME,
                                        "besT_PERFORMAR_ENROLLMENT": this.Get_Assessment_Details_Course[i].BEST_PERFORMAR_ENROLLMENT,
                                        "lowesT_PERFORMAR_NAME": this.Get_Assessment_Details_Course[i].LOWEST_PERFORMAR_NAME,
                                        "lowesT_PERFORMAR_NAME_ENROLLMENT": this.Get_Assessment_Details_Course[i].LOWEST_PERFORMAR_NAME_ENROLLMENT,
                                        "assessmenT_ATTAINMENT": this.Get_Assessment_Details_Course[i].ASSESSMENT_ATTAINMENT,
                                        "cloS_ATTAINMENT": this.Get_Assessment_Details_Course[i].CLOS_ATTAINMENT,
                                        "Is_Loop": false,
                                        "Scheduled_Date": this.Get_Assessment_Details_Course[i].Scheduled_Date,
                                        "AssessmentRemarks": this.Get_Assessment_Details_Course[i].AssessmentRemarks,
                                        "Mapped_CLO_ID": Number(this.Get_Assessment_Details_Course[i].MAPPEDCLOID),
                                        "Assessment_Sub_Remarks": this.Get_Assessment_Details_Course[i].AssessmentSubDetailsRemarks,
                                        "Course_Category": Number(this.Get_Assessment_Details_Course[i].Course_Category)
                                    });
                                }
                            }
                        }
                    }
                    // lab implementation
                    else if (this.CourseCategory == 4) {
                        this.Is_Course = false;
                        for (var i = 0; i < this.Get_Assessment_Details_Course.length; i++) {
                            if (this.Get_Assessment_Details_Course[i].ASSESSMENTTITLE.includes('Assessment')) {
                                this.Assessment_Added_Count = Number(this.Get_Assessment_Details_Course[i].ASSESSMENTTITLE.split(':')[1]);
                                this.Assessment_Initial_Array.push({ "Assessment_Title": "Assessment " + Number(this.Assessment_Added_Count), "Already_Added": true, "Can_Add": false, "Is_Temp_Added": false });
                            }
                            else if (this.Get_Assessment_Details_Course[i].ASSESSMENTTITLE.includes('Journals')) {
                                this.Journal_Added_Count = Number(this.Get_Assessment_Details_Course[i].ASSESSMENTTITLE.split(':')[1]);
                                this.Journals_Initial_Array.push({ "Journals_Title": "Journals " + Number(this.Journal_Added_Count), "Already_Added": true, "Can_Add": false, "Is_Temp_Added": false });
                            }
                            else if (this.Get_Assessment_Details_Course[i].ASSESSMENTTITLE.includes('Mids')) {
                                this.Is_Mid_Marks_Added = true;
                            }
                            else if (this.Get_Assessment_Details_Course[i].ASSESSMENTTITLE.includes('Finals')) {
                                this.Is_Finals_Marks_Added = true;
                            }
                            if (this.Get_Assessment_Details_Course[i].QUESTIONNUMBER != null) {
                                if (this.Get_Assessment_Details_Course[i].QUESTIONNUMBER.includes(',')) {
                                    this.Get_Assessment_Sub_Details_Course_Lst = [];
                                    var temp = this.Get_Assessment_Details_Course[i].QUESTIONNUMBER.split(',');
                                    for (var j = 0; j < temp.length; j++) {
                                        this.Get_Assessment_Sub_Details_Course_Lst.push({
                                            "questionnumber": this.Get_Assessment_Details_Course[i].QUESTIONNUMBER.split(',')[j],
                                            "questionmarks": this.Get_Assessment_Details_Course[i].QUESTIONMARKS.split(',')[j],
                                            "assessmentsubdetails": this.Get_Assessment_Details_Course[i].ASSESSMENTSUBDETAILS.split(',')[j],
                                            "mappedclotitle": this.Get_Assessment_Details_Course[i].MAPPEDCLOTITLE.split(',')[j],
                                            "weightage": this.Get_Assessment_Details_Course[i].WEIGHTAGE.split(',')[j],
                                            "AssessmentSubRemarks": this.Get_Assessment_Details_Course[i].AssessmentSubDetailsRemarks.split(',')[j],
                                            "Mapped_CLO_ID": Number(this.Get_Assessment_Details_Course[i].MAPPEDCLOID.split(',')[j])
                                        });
                                    }
                                    this.Get_Assessment_Details_Course_Lst.push({
                                        "Sr_Number": i + 1,
                                        "assessmentmaindetailsid": this.Get_Assessment_Details_Course[i].ASSESSMENTMAINDETAILSID,
                                        "assessmenttitle": this.Get_Assessment_Details_Course[i].ASSESSMENTTITLE,
                                        "assessmentmarks": this.Get_Assessment_Details_Course[i].ASSESSMENTMARKS,
                                        "iS_MARKS_SUBMITTED": this.Get_Assessment_Details_Course[i].IS_MARKS_SUBMITTED,
                                        "iS_LOCKED": this.Get_Assessment_Details_Course[i].IS_LOCKED,
                                        "Get_Assessment_Sub_Details_Course_Lst": this.Get_Assessment_Sub_Details_Course_Lst,
                                        "besT_PERFORMAR_NAME": this.Get_Assessment_Details_Course[i].BEST_PERFORMAR_NAME,
                                        "besT_PERFORMAR_ENROLLMENT": this.Get_Assessment_Details_Course[i].BEST_PERFORMAR_ENROLLMENT,
                                        "lowesT_PERFORMAR_NAME": this.Get_Assessment_Details_Course[i].LOWEST_PERFORMAR_NAME,
                                        "lowesT_PERFORMAR_NAME_ENROLLMENT": this.Get_Assessment_Details_Course[i].LOWEST_PERFORMAR_NAME_ENROLLMENT,
                                        "assessmenT_ATTAINMENT": this.Get_Assessment_Details_Course[i].ASSESSMENT_ATTAINMENT,
                                        "cloS_ATTAINMENT": this.Get_Assessment_Details_Course[i].CLOS_ATTAINMENT,
                                        "Is_Loop": true,
                                        "Scheduled_Date": this.Get_Assessment_Details_Course[i].Scheduled_Date,
                                        "AssessmentRemarks": this.Get_Assessment_Details_Course[i].AssessmentRemarks,
                                        "Mapped_CLO_ID": Number(this.Get_Assessment_Details_Course[i].MAPPEDCLOID.split(',')[j]),
                                        "Course_Category": Number(this.Get_Assessment_Details_Course[i].Course_Category)
                                    });
                                }
                                else {
                                    this.Get_Assessment_Details_Course_Lst.push({
                                        "Sr_Number": i + 1,
                                        "assessmentmaindetailsid": this.Get_Assessment_Details_Course[i].ASSESSMENTMAINDETAILSID,
                                        "assessmenttitle": this.Get_Assessment_Details_Course[i].ASSESSMENTTITLE,
                                        "assessmentmarks": this.Get_Assessment_Details_Course[i].ASSESSMENTMARKS,
                                        "iS_MARKS_SUBMITTED": this.Get_Assessment_Details_Course[i].IS_MARKS_SUBMITTED,
                                        "iS_LOCKED": this.Get_Assessment_Details_Course[i].IS_LOCKED,
                                        "weightage": this.Get_Assessment_Details_Course[i].WEIGHTAGE,
                                        "questionnumber": this.Get_Assessment_Details_Course[i].QUESTIONNUMBER,
                                        "questionmarks": this.Get_Assessment_Details_Course[i].QUESTIONMARKS,
                                        "assessmentsubdetails": this.Get_Assessment_Details_Course[i].ASSESSMENTSUBDETAILS,
                                        "mappedclotitle": this.Get_Assessment_Details_Course[i].MAPPEDCLOTITLE,
                                        "besT_PERFORMAR_NAME": this.Get_Assessment_Details_Course[i].BEST_PERFORMAR_NAME,
                                        "besT_PERFORMAR_ENROLLMENT": this.Get_Assessment_Details_Course[i].BEST_PERFORMAR_ENROLLMENT,
                                        "lowesT_PERFORMAR_NAME": this.Get_Assessment_Details_Course[i].LOWEST_PERFORMAR_NAME,
                                        "lowesT_PERFORMAR_NAME_ENROLLMENT": this.Get_Assessment_Details_Course[i].LOWEST_PERFORMAR_NAME_ENROLLMENT,
                                        "assessmenT_ATTAINMENT": this.Get_Assessment_Details_Course[i].ASSESSMENT_ATTAINMENT,
                                        "cloS_ATTAINMENT": this.Get_Assessment_Details_Course[i].CLOS_ATTAINMENT,
                                        "Is_Loop": false,
                                        "Scheduled_Date": this.Get_Assessment_Details_Course[i].Scheduled_Date,
                                        "AssessmentRemarks": this.Get_Assessment_Details_Course[i].AssessmentRemarks,
                                        "Mapped_CLO_ID": Number(this.Get_Assessment_Details_Course[i].MAPPEDCLOID),
                                        "Assessment_Sub_Remarks": this.Get_Assessment_Details_Course[i].AssessmentSubDetailsRemarks,
                                        "Course_Category": Number(this.Get_Assessment_Details_Course[i].Course_Category)
                                    });
                                }
                            }
                        }
                        this.CourseAssessmentFormLab.get('Performance_Indicator').setValue('0');
                        $("#Performance_Indicator").val('0');
                    }
                    else if (this.CourseCategory == 8) {
                        this.Is_Course = false;
                        this.FYPAssessmentToolsStatus = data.FYPAssessmentToolsStatus;
                        for (var i = 0; i < ((_b = this.Get_Assessment_Details_Course) === null || _b === void 0 ? void 0 : _b.length); i++) {
                            if (this.Get_Assessment_Details_Course[i].QUESTIONNUMBER != null) {
                                if (this.Get_Assessment_Details_Course[i].QUESTIONNUMBER.includes(',')) {
                                    this.Get_Assessment_Sub_Details_Course_Lst = [];
                                    var temp = this.Get_Assessment_Details_Course[i].QUESTIONNUMBER.split(',');
                                    for (var j = 0; j < temp.length; j++) {
                                        this.Get_Assessment_Sub_Details_Course_Lst.push({
                                            "questionnumber": this.Get_Assessment_Details_Course[i].QUESTIONNUMBER.split(',')[j],
                                            "questionmarks": this.Get_Assessment_Details_Course[i].QUESTIONMARKS.split(',')[j],
                                            "assessmentsubdetails": this.Get_Assessment_Details_Course[i].ASSESSMENTSUBDETAILS.split(',')[j],
                                            "mappedclotitle": this.Get_Assessment_Details_Course[i].MAPPEDCLOTITLE.split(',')[j],
                                            "weightage": this.Get_Assessment_Details_Course[i].WEIGHTAGE.split(',')[j],
                                            "AssessmentSubRemarks": this.Get_Assessment_Details_Course[i].AssessmentSubDetailsRemarks.split(',')[j],
                                            "Mapped_CLO_ID": Number(this.Get_Assessment_Details_Course[i].MAPPEDCLOID.split(',')[j])
                                        });
                                    }
                                    this.Get_Assessment_Details_Course_Lst.push({
                                        "Sr_Number": i + 1,
                                        "assessmentmaindetailsid": this.Get_Assessment_Details_Course[i].ASSESSMENTMAINDETAILSID,
                                        "assessmenttitle": this.Get_Assessment_Details_Course[i].ASSESSMENTTITLE,
                                        "assessmentmarks": this.Get_Assessment_Details_Course[i].ASSESSMENTMARKS,
                                        "iS_MARKS_SUBMITTED": this.Get_Assessment_Details_Course[i].IS_MARKS_SUBMITTED,
                                        "iS_LOCKED": this.Get_Assessment_Details_Course[i].IS_LOCKED,
                                        "Get_Assessment_Sub_Details_Course_Lst": this.Get_Assessment_Sub_Details_Course_Lst,
                                        "besT_PERFORMAR_NAME": this.Get_Assessment_Details_Course[i].BEST_PERFORMAR_NAME,
                                        "besT_PERFORMAR_ENROLLMENT": this.Get_Assessment_Details_Course[i].BEST_PERFORMAR_ENROLLMENT,
                                        "lowesT_PERFORMAR_NAME": this.Get_Assessment_Details_Course[i].LOWEST_PERFORMAR_NAME,
                                        "lowesT_PERFORMAR_NAME_ENROLLMENT": this.Get_Assessment_Details_Course[i].LOWEST_PERFORMAR_NAME_ENROLLMENT,
                                        "assessmenT_ATTAINMENT": this.Get_Assessment_Details_Course[i].ASSESSMENT_ATTAINMENT,
                                        "cloS_ATTAINMENT": this.Get_Assessment_Details_Course[i].CLOS_ATTAINMENT,
                                        "Is_Loop": true,
                                        "Scheduled_Date": this.Get_Assessment_Details_Course[i].Scheduled_Date,
                                        "AssessmentRemarks": this.Get_Assessment_Details_Course[i].AssessmentRemarks,
                                        "Mapped_CLO_ID": Number(this.Get_Assessment_Details_Course[i].MAPPEDCLOID.split(',')[j]),
                                        "Course_Category": Number(this.Get_Assessment_Details_Course[i].Course_Category)
                                    });
                                }
                                else {
                                    this.Get_Assessment_Details_Course_Lst.push({
                                        "Sr_Number": i + 1,
                                        "assessmentmaindetailsid": this.Get_Assessment_Details_Course[i].ASSESSMENTMAINDETAILSID,
                                        "assessmenttitle": this.Get_Assessment_Details_Course[i].ASSESSMENTTITLE,
                                        "assessmentmarks": this.Get_Assessment_Details_Course[i].ASSESSMENTMARKS,
                                        "iS_MARKS_SUBMITTED": this.Get_Assessment_Details_Course[i].IS_MARKS_SUBMITTED,
                                        "iS_LOCKED": this.Get_Assessment_Details_Course[i].IS_LOCKED,
                                        "weightage": this.Get_Assessment_Details_Course[i].WEIGHTAGE,
                                        "questionnumber": this.Get_Assessment_Details_Course[i].QUESTIONNUMBER,
                                        "questionmarks": this.Get_Assessment_Details_Course[i].QUESTIONMARKS,
                                        "assessmentsubdetails": this.Get_Assessment_Details_Course[i].ASSESSMENTSUBDETAILS,
                                        "mappedclotitle": this.Get_Assessment_Details_Course[i].MAPPEDCLOTITLE,
                                        "besT_PERFORMAR_NAME": this.Get_Assessment_Details_Course[i].BEST_PERFORMAR_NAME,
                                        "besT_PERFORMAR_ENROLLMENT": this.Get_Assessment_Details_Course[i].BEST_PERFORMAR_ENROLLMENT,
                                        "lowesT_PERFORMAR_NAME": this.Get_Assessment_Details_Course[i].LOWEST_PERFORMAR_NAME,
                                        "lowesT_PERFORMAR_NAME_ENROLLMENT": this.Get_Assessment_Details_Course[i].LOWEST_PERFORMAR_NAME_ENROLLMENT,
                                        "assessmenT_ATTAINMENT": this.Get_Assessment_Details_Course[i].ASSESSMENT_ATTAINMENT,
                                        "cloS_ATTAINMENT": this.Get_Assessment_Details_Course[i].CLOS_ATTAINMENT,
                                        "Is_Loop": false,
                                        "Scheduled_Date": this.Get_Assessment_Details_Course[i].Scheduled_Date,
                                        "AssessmentRemarks": this.Get_Assessment_Details_Course[i].AssessmentRemarks,
                                        "Mapped_CLO_ID": Number(this.Get_Assessment_Details_Course[i].MAPPEDCLOID),
                                        "Assessment_Sub_Remarks": this.Get_Assessment_Details_Course[i].AssessmentSubDetailsRemarks,
                                        "Course_Category": Number(this.Get_Assessment_Details_Course[i].Course_Category)
                                    });
                                }
                            }
                        }
                    }
                    this.dataset = this.Get_Assessment_Details_Course_Lst;
                    this.setPage(1, this.pagesize);
                    this.Assessment_Added_Array(Number(this.CourseCategory));
                }
                else {
                    this.Is_Course = GlobalService.Is_Course;
                    // Course
                    if (this.CourseCategory == 1) {
                        this.Is_Course = GlobalService.Is_Course;
                        this.Assessment_Added_Array(Number(1));
                    }
                    // Lab
                    else if (this.CourseCategory == 4) {
                        this.Assessment_Added_Array(Number(4));
                    }
                    // FYP
                    else if (this.CourseCategory == 8) {
                        this.FYPAssessmentToolsStatus = data.FYPAssessmentToolsStatus;
                        for (var i = 0; i < this.FYPAssessmentToolsStatus.length; i++) {
                            this.FYPAssessmentToolsStatus[i]["isAdded"] = false;
                        }
                    }
                }
                this.ngxService.stop();
            }
            else {
                this.ngxService.stop();
                this.Get_Assessment_Details_Course = [];
                this.Is_Course = GlobalService.Is_Course;
                if (GlobalService.Is_Course) {
                    this.Is_Course = GlobalService.Is_Course;
                    this.Assessment_Added_Array(Number(1));
                }
                else {
                    this.Assessment_Added_Array(Number(4));
                }
            }
        }, error => {
            this.ngxService.stop();
            this.toastr.error(error.message, "Error!");
        });
    }
    get Course_Assessment_Form() { return this.CourseAssessmentForm.controls; }
    get Course_Assessment_Form_Edit() { return this.CourseAssessmentFormEdit.controls; }
    get Course_Assessment_Form_Lab() { return this.CourseAssessmentFormLab.controls; }
    get Course_Assessment_Form_Lab_Edit() { return this.CourseAssessmentFormEditLab.controls; }
    get Course_Assessment_Form_FYP() { return this.CourseAssessmentFormFYP.controls; }
    get Course_Assessment_Form_FYP_Edit() { return this.CourseAssessmentFormEditFYP.controls; }
    onSubmit() {
        this.submitted = true;
        if (this.CourseAssessmentForm.invalid) {
            return;
        }
        var CLO = this.Get_Added_CLOS.filter(x => x.CoursesCLOSID == Number(this.Course_Assessment_Form.Selected_CLOS.value))[0];
        this.All_Added_Assessment_Details.push({
            "Question_Number": Number(this.Question_Number),
            "Question_Remarks": this.Course_Assessment_Form.Question_Remarks.value == null ? "" : this.Course_Assessment_Form.Question_Remarks.value,
            "Selected_CLOS_ID": CLO == undefined ? 0 : Number(CLO.CoursesCLOSID),
            "Selected_CLOS_Title": CLO == undefined ? "" : CLO.CLOTitle,
            "CLO_Weightage": Number(this.Course_Assessment_Form.CLO_Weightage.value),
            "Question_Marks": Number(this.Course_Assessment_Form.Question_Marks.value),
            "Created_By": Number(GlobalService.FacultyMember_ID),
            "OfferedCourseID": Number(GlobalService.Offered_Course_ID),
        });
        this.Question_Number += 1;
        this.Assessment_Total_Marks += Number(this.Course_Assessment_Form.Question_Marks.value);
        this.CourseAssessmentForm.reset();
        this.submitted = false;
        $("#Question_Remarks").focus();
        this.CourseAssessmentForm.get('CLO_Weightage').setValue("");
        this.CourseAssessmentForm.get('Assessment_Total').setValue(this.Assessment_Total_Marks);
        this.CourseAssessmentForm.get('Selected_CLOS').setValue("0");
        this.Is_Weightage_Mendatory = false;
        this.Set_Weightage();
    }
    onSubmitLab() {
        this.submitted = true;
        if (this.CourseAssessmentFormLab.invalid) {
            return;
        }
        if (this.All_Added_Assessment_Details_Lab.length > 0) {
            var CLO = this.Get_Added_CLOS.filter(x => x.CoursesCLOSID == Number(this.Course_Assessment_Form_Lab.Selected_CLO.value))[0];
            var temp = this.All_Added_Assessment_Details_Lab.filter(x => x.Performance_Indicator_ID == Number(this.Course_Assessment_Form_Lab.Performance_Indicator.value))[0];
            if (temp == null || temp == undefined) {
                temp = this.Lab_Performance_Indicator.filter(x => x.Performance_Indicators_ID == Number(this.Course_Assessment_Form_Lab.Performance_Indicator.value))[0];
                this.All_Added_Assessment_Details_Lab.push({
                    "Performance_Indicator_ID": Number(this.Course_Assessment_Form_Lab.Performance_Indicator.value),
                    "Performance_Indicator_Title": temp.Performance_Indicators_Title,
                    "Performance_Indicator_Marks": Number(this.Course_Assessment_Form_Lab.Performance_Indicator_Marks.value),
                    "Selected_CLOS_ID": CLO == undefined ? 0 : Number(CLO.CoursesCLOSID),
                    "Selected_CLOS_Title": CLO == undefined ? "" : CLO.CLOTitle,
                    "CLO_Weightage": Number(this.Course_Assessment_Form_Lab.CLO_Weightage.value),
                    "Created_By": Number(GlobalService.FacultyMember_ID),
                    "OfferedCourseID": Number(GlobalService.Offered_Course_ID),
                });
            }
            else {
                this.toastr.error("Performance Indicator is already selected", "Error");
                return;
            }
        }
        else {
            var CLO = this.Get_Added_CLOS.filter(x => x.CoursesCLOSID == Number(this.Course_Assessment_Form_Lab.Selected_CLO.value))[0];
            var temp = this.Lab_Performance_Indicator.filter(x => x.Performance_Indicators_ID == Number(this.Course_Assessment_Form_Lab.Performance_Indicator.value))[0];
            this.All_Added_Assessment_Details_Lab.push({
                "Performance_Indicator_ID": Number(this.Course_Assessment_Form_Lab.Performance_Indicator.value),
                "Performance_Indicator_Title": temp.Performance_Indicators_Title,
                "Performance_Indicator_Marks": Number(this.Course_Assessment_Form_Lab.Performance_Indicator_Marks.value),
                "Selected_CLOS_ID": CLO == undefined ? 0 : Number(CLO.CoursesCLOSID),
                "Selected_CLOS_Title": CLO == undefined ? "" : CLO.CLOTitle,
                "CLO_Weightage": Number(this.Course_Assessment_Form_Lab.CLO_Weightage.value),
                "Created_By": Number(GlobalService.FacultyMember_ID),
                "OfferedCourseID": Number(GlobalService.Offered_Course_ID),
            });
        }
        this.Assessment_Total_Marks += Number(this.Course_Assessment_Form_Lab.Performance_Indicator_Marks.value);
        this.CourseAssessmentFormLab.reset();
        this.submitted = false;
        $("#Performance_Indicator").focus();
        this.CourseAssessmentFormLab.get('Performance_Indicator').setValue("0");
        this.CourseAssessmentFormLab.get('Performance_Indicator_Marks').setValue("");
        this.CourseAssessmentFormLab.get('Assessment_Total').setValue(this.Assessment_Total_Marks);
        this.CourseAssessmentFormLab.get('Selected_CLO').setValue("0");
        this.Is_Weightage_Mendatory = false;
        this.Set_Weightage_lab();
    }
    onSubmitFYP() {
        this.submitted = true;
        if (this.CourseAssessmentFormFYP.invalid) {
            return;
        }
        this.TotalMarks += Number(this.Course_Assessment_Form_FYP.Performance_Indicator_Marks.value);
        if (this.TotalMarks > Number(this.Course_Assessment_Form_FYP.Assessment_Total.value)) {
            this.TotalMarks -= Number(this.Course_Assessment_Form_FYP.Performance_Indicator_Marks.value);
            this.toastr.error("Sum of all performance indicators marks cannot be greater then total assessment marks", "Error!");
            return;
        }
        if (this.All_Added_Assessment_Details_FYP.length > 0) {
            var CLO = this.Get_Added_CLOS.filter(x => x.CoursesCLOSID == Number(this.Course_Assessment_Form_FYP.Selected_CLO.value))[0];
            var temp = this.All_Added_Assessment_Details_FYP.filter(x => x.Performance_Indicator_ID == Number(this.Course_Assessment_Form_FYP.Performance_Indicator.value))[0];
            if (temp == null || temp == undefined) {
                temp = this.Lab_Performance_Indicator.filter(x => x.Performance_Indicators_ID == Number(this.Course_Assessment_Form_FYP.Performance_Indicator.value))[0];
                this.All_Added_Assessment_Details_FYP.push({
                    "Performance_Indicator_ID": Number(this.Course_Assessment_Form_FYP.Performance_Indicator.value),
                    "Performance_Indicator_Title": temp.Performance_Indicators_Title,
                    "Performance_Indicator_Marks": Number(this.Course_Assessment_Form_FYP.Performance_Indicator_Marks.value),
                    "Selected_CLOS_ID": CLO == undefined ? 0 : Number(CLO.CoursesCLOSID),
                    "Selected_CLOS_Title": CLO == undefined ? "" : CLO.CLOTitle,
                    "CLO_Weightage": Number(this.Course_Assessment_Form_FYP.CLO_Weightage.value),
                    "Created_By": Number(GlobalService.FacultyMember_ID),
                    "OfferedCourseID": Number(GlobalService.Offered_Course_ID),
                });
            }
            else {
                this.TotalMarks -= Number(this.Course_Assessment_Form_FYP.Performance_Indicator_Marks.value);
                this.toastr.error("Performance Indicator is already selected", "Error!");
                return;
            }
        }
        else {
            var CLO = this.Get_Added_CLOS.filter(x => x.CoursesCLOSID == Number(this.Course_Assessment_Form_FYP.Selected_CLO.value))[0];
            var temp = this.Lab_Performance_Indicator.filter(x => x.Performance_Indicators_ID == Number(this.Course_Assessment_Form_FYP.Performance_Indicator.value))[0];
            this.All_Added_Assessment_Details_FYP.push({
                "Performance_Indicator_ID": Number(this.Course_Assessment_Form_FYP.Performance_Indicator.value),
                "Performance_Indicator_Title": temp.Performance_Indicators_Title,
                "Performance_Indicator_Marks": Number(this.Course_Assessment_Form_FYP.Performance_Indicator_Marks.value),
                "Selected_CLOS_ID": CLO == undefined ? 0 : Number(CLO.CoursesCLOSID),
                "Selected_CLOS_Title": CLO == undefined ? "" : CLO.CLOTitle,
                "CLO_Weightage": Number(this.Course_Assessment_Form_FYP.CLO_Weightage.value),
                "Created_By": Number(GlobalService.FacultyMember_ID),
                "OfferedCourseID": Number(GlobalService.Offered_Course_ID),
            });
        }
        this.CourseAssessmentFormFYP.reset();
        this.submitted = false;
        $("#Performance_Indicator").focus();
        this.CourseAssessmentFormFYP.get('Performance_Indicator').setValue("0");
        this.CourseAssessmentFormFYP.get('Performance_Indicator_Marks').setValue("");
        this.CourseAssessmentFormFYP.get('Assessment_Total').setValue(this.AssessmentToolFYPTotalMarks);
        this.CourseAssessmentFormFYP.get('Selected_CLO').setValue("0");
        this.CourseAssessmentFormFYP.get('CLO_Weightage').setValue("");
    }
    SetSelectedAssessment(val) {
        this.CourseAssessmentFormFYP.get('Assessment_Total').setValue(val.TotalMarks);
        this.AssessmentToolFYPTotalMarks = Number(val.TotalMarks);
    }
    Deleted_Temp_Added_Assessment(value) {
        this.All_Added_Assessment_Details.splice(value, 1);
        this.Question_Number = 1;
        this.Assessment_Total_Marks = 0;
        if (this.All_Added_Assessment_Details.length > 0) {
            for (var i = 0; i < this.All_Added_Assessment_Details.length; i++) {
                this.All_Added_Assessment_Details[i].Question_Number = this.Question_Number;
                this.Question_Number += 1;
                this.Assessment_Total_Marks += this.All_Added_Assessment_Details[i].Question_Marks;
            }
        }
        this.CourseAssessmentForm.get('Assessment_Total').setValue(this.Assessment_Total_Marks);
        this.CourseAssessmentForm.get('Selected_CLOS').setValue("0");
        this.CourseAssessmentForm.get('CLO_Weightage').setValue("");
        this.Is_Weightage_Mendatory = false;
    }
    Deleted_Temp_Added_Assessment_Lab(value) {
        this.All_Added_Assessment_Details_Lab.splice(value, 1);
        this.Assessment_Total_Marks = 0;
        if (this.All_Added_Assessment_Details_Lab.length > 0) {
            for (var i = 0; i < this.All_Added_Assessment_Details_Lab.length; i++) {
                this.Assessment_Total_Marks += this.All_Added_Assessment_Details_Lab[i].Performance_Indicator_Marks;
            }
        }
        this.CourseAssessmentFormLab.get('Performance_Indicator').setValue("0");
        this.CourseAssessmentFormLab.get('Performance_Indicator_Marks').setValue("");
        this.CourseAssessmentFormLab.get('Assessment_Total').setValue(this.Assessment_Total_Marks);
        this.Is_Weightage_Mendatory = false;
    }
    Deleted_Temp_Added_Assessment_FYP(value) {
        this.TotalMarks -= Number(this.All_Added_Assessment_Details_FYP[value].Performance_Indicator_Marks);
        this.All_Added_Assessment_Details_FYP.splice(value, 1);
        $("#Performance_Indicator").focus();
        this.CourseAssessmentFormFYP.get('Performance_Indicator').setValue("0");
        this.CourseAssessmentFormFYP.get('Performance_Indicator_Marks').setValue("");
        this.CourseAssessmentFormFYP.get('Selected_CLO').setValue("0");
        this.CourseAssessmentFormFYP.get('CLO_Weightage').setValue("");
    }
    Set_Weightage() {
        const CLO_Weightage = this.CourseAssessmentForm.get('CLO_Weightage');
        if (Number(this.Course_Assessment_Form.Selected_CLOS.value) == 0) {
            this.Is_Weightage_Mendatory = false;
            CLO_Weightage.setValidators(null);
            this.CourseAssessmentForm.get('CLO_Weightage').setValue("");
        }
        else {
            this.Is_Weightage_Mendatory = true;
            CLO_Weightage.setValidators([Validators.required, Validators.min(0)]);
            this.CourseAssessmentForm.get('CLO_Weightage').setValue("100");
        }
        CLO_Weightage.updateValueAndValidity();
    }
    Set_Weightage_Edit() {
        const CLO_Weightage = this.CourseAssessmentFormEdit.get('CLO_Weightage_Edit');
        if (Number(this.Course_Assessment_Form_Edit.Selected_CLOS_Edit.value) == 0) {
            this.Is_Weightage_Mendatory = false;
            CLO_Weightage.setValidators(null);
            this.CourseAssessmentFormEdit.get('CLO_Weightage_Edit').setValue("");
        }
        else {
            this.Is_Weightage_Mendatory = true;
            CLO_Weightage.setValidators([Validators.required, Validators.min(0)]);
            this.CourseAssessmentFormEdit.get('CLO_Weightage_Edit').setValue("100");
        }
        CLO_Weightage.updateValueAndValidity();
    }
    Set_Weightage_FYP() {
        this.CourseAssessmentFormFYP.get('CLO_Weightage').setValue("100");
    }
    Set_Weightage_lab(Index, ID) {
        if (this.Assessment_Type_Lab == 3 || this.Assessment_Type_Lab == 4) {
            const CLO_Weightage = this.CourseAssessmentFormLab.get('CLO_Weightage');
            if (Number(this.Course_Assessment_Form_Lab.Selected_CLO.value) == 0) {
                this.Is_Weightage_Mendatory = false;
                CLO_Weightage.setValidators(null);
                this.CourseAssessmentFormLab.get('CLO_Weightage').setValue("");
            }
            else {
                this.Is_Weightage_Mendatory = true;
                CLO_Weightage.setValidators([Validators.required, Validators.min(0)]);
                this.CourseAssessmentFormLab.get('CLO_Weightage').setValue("100");
            }
            CLO_Weightage.updateValueAndValidity();
        }
        else {
            $("#" + ID + Index).val('100');
        }
    }
    Set_Weightage_lab_Edit(Index, ID) {
        if (this.Assessment_Type_Lab == 3 || this.Assessment_Type_Lab == 4) {
            const CLO_Weightage = this.CourseAssessmentFormEditLab.get('CLO_Weightage_Edit');
            if (Number(this.Course_Assessment_Form_Lab_Edit.Selected_CLO.value) == 0) {
                this.Is_Weightage_Mendatory = false;
                CLO_Weightage.setValidators(null);
                this.CourseAssessmentFormEditLab.get('CLO_Weightage_Edit').setValue("");
            }
            else {
                this.Is_Weightage_Mendatory = true;
                CLO_Weightage.setValidators([Validators.required, Validators.min(0)]);
                this.CourseAssessmentFormEditLab.get('CLO_Weightage_Edit').setValue("100");
            }
            CLO_Weightage.updateValueAndValidity();
        }
        else {
            $("#" + ID + Index).val('100');
        }
    }
    Show_Add_Assessment_Modal() {
        this.submitted = false;
        this.TotalMarks = 0;
        this.Assessment_Total_Marks = 0;
        this.CourseAssessmentForm.reset();
        this.CourseAssessmentFormLab.reset();
        this.CourseAssessmentFormFYP.reset();
        this.All_Added_Assessment_Details = [];
        this.All_Added_Assessment_Details_Lab = [];
        this.All_Added_Assessment_Temp = [];
        this.All_Added_Assessment_Details_FYP = [];
        this.CourseAssessmentForm.get('Selected_CLOS').setValue("0");
        this.CourseAssessmentForm.get('CLO_Weightage').setValue("");
        this.CourseAssessmentFormFYP.get('Selected_CLO').setValue("0");
        this.CourseAssessmentFormFYP.get('CLO_Weightage').setValue("");
        this.CourseAssessmentFormFYP.get('Performance_Indicator').setValue("0");
        if (this.CourseCategory == 1) {
            $("#Question_Remarks").focus();
            $("#Add-Assessment-Details-Course-Modal").modal('show');
        }
        else if (this.CourseCategory == 4) {
            this.CourseAssessmentFormLab.get('Performance_Indicator').setValue("0");
            $("#Add-Assessment-Details-lab-Modal").modal('show');
        }
        else if (this.CourseCategory == 8) {
            $("#Add-Assessment-Details-FYP-Modal").modal('show');
        }
    }
    Set_Weightage_FYP_Edit() {
        this.CourseAssessmentFormEditFYP.get('CLO_Weightage_Edit').setValue("100");
    }
    setPage(page, pagesize) {
        this.query = "";
        if ((page < 1 || page > this.pager.totalPages) && page != "") {
            this.page = 1;
            page = 1;
        }
        this.page = page;
        this.pager = this.pagerService.getPager(this.dataset.length, page, pagesize);
        this.serialNumber = ((this.pager.currentPage * this.pagesize) - this.pagesize) + (this.serialNumber);
        this.Get_Assessment_Details_Course_Lst = this.dataset.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
    Assessment_Added_Array(value) {
        if (value == 1) {
            for (var i = 0; i < 10; i++) {
                if (this.Assignment_Initial_Array.filter(x => x.Assignment_Title == 'Assignment ' + Number(i + 1)).length == 0) {
                    this.Assignment_Initial_Array.push({ "Assignment_Title": "Assignment " + Number(i + 1), "Already_Added": false, "Can_Add": true, "Is_Temp_Added": false });
                    let sortedBuilds = this.Assignment_Initial_Array.sort((n1, n2) => {
                        return this.naturalCompare(n1.Assignment_Title, n2.Assignment_Title);
                    });
                    this.Assignment_Initial_Array = [];
                    this.Assignment_Initial_Array = sortedBuilds;
                }
                if (this.Quizzes_Initial_Array.filter(x => x.Quiz_Title == 'Quiz ' + Number(i + 1)).length == 0) {
                    this.Quizzes_Initial_Array.push({ "Quiz_Title": "Quiz " + Number(i + 1), "Already_Added": false, "Can_Add": true, "Is_Temp_Added": false });
                    let sortedBuilds = this.Quizzes_Initial_Array.sort((n1, n2) => {
                        return this.naturalCompare(n1.Quiz_Title, n2.Quiz_Title);
                    });
                    this.Quizzes_Initial_Array = [];
                    this.Quizzes_Initial_Array = sortedBuilds;
                }
            }
        }
        else if (value == 4) {
            for (var i = 0; i < 14; i++) {
                if (this.Assessment_Initial_Array.filter(x => x.Assessment_Title == 'Assessment ' + Number(i + 1)).length == 0) {
                    this.Assessment_Initial_Array.push({ "Assessment_Title": "Assessment " + Number(i + 1), "Already_Added": false, "Can_Add": true, "Is_Temp_Added": false });
                    let sortedBuilds = this.Assessment_Initial_Array.sort((n1, n2) => {
                        return this.naturalCompare(n1.Assessment_Title, n2.Assessment_Title);
                    });
                    this.Assessment_Initial_Array = [];
                    this.Assessment_Initial_Array = sortedBuilds;
                }
                if (this.Journals_Initial_Array.filter(x => x.Journals_Title == 'Journals ' + Number(i + 1)).length == 0) {
                    this.Journals_Initial_Array.push({ "Journals_Title": "Journals " + Number(i + 1), "Already_Added": false, "Can_Add": true, "Is_Temp_Added": false });
                    let sortedBuilds = this.Journals_Initial_Array.sort((n1, n2) => {
                        return this.naturalCompare(n1.Journals_Title, n2.Journals_Title);
                    });
                    this.Journals_Initial_Array = [];
                    this.Journals_Initial_Array = sortedBuilds;
                }
            }
        }
    }
    naturalCompare(a, b) {
        var ax = [], bx = [];
        a.replace(/(\d+)|(\D+)/g, function (_, $1, $2) { ax.push([$1 || Infinity, $2 || ""]); });
        b.replace(/(\d+)|(\D+)/g, function (_, $1, $2) { bx.push([$1 || Infinity, $2 || ""]); });
        while (ax.length && bx.length) {
            var an = ax.shift();
            var bn = bx.shift();
            var nn = (an[0] - bn[0]) || an[1].localeCompare(bn[1]);
            if (nn)
                return nn;
        }
        return ax.length - bx.length;
    }
    Select_Assessment(value) {
        this.Assessment_Type = value;
    }
    Select_Assessment_Lab(value) {
        if (value == 3 || value == 4) {
            this.CourseAssessmentFormLab.get('Selected_CLO').setValue('0');
        }
        this.Assessment_Type_Lab = value;
    }
    Add_Remove_Assignments(Title, ind, Unique_Identifier, Assessment_Date, Assessment_Remarks, is_Checked) {
        if (Title.includes('Assignment')) {
            if (is_Checked) {
                this.Assignment_Initial_Array[ind].Is_Temp_Added = true;
            }
            else {
                this.Assignment_Initial_Array[ind].Is_Temp_Added = false;
            }
        }
        else if (Title.includes('Quiz')) {
            if (is_Checked) {
                this.Quizzes_Initial_Array[ind].Is_Temp_Added = true;
            }
            else {
                this.Quizzes_Initial_Array[ind].Is_Temp_Added = false;
            }
        }
        else if (Title.includes('Assessment')) {
            if (is_Checked) {
                if (is_Checked) {
                    this.Assessment_Initial_Array[ind].Is_Temp_Added = true;
                }
                else {
                    this.Assessment_Initial_Array[ind].Is_Temp_Added = false;
                }
            }
        }
        else if (Title.includes('Journals')) {
            if (is_Checked) {
                this.Journals_Initial_Array[ind].Is_Temp_Added = true;
            }
            else {
                this.Journals_Initial_Array[ind].Is_Temp_Added = false;
            }
        }
        this.Is_Temp_Mids_And_Finals = is_Checked;
        if (this.All_Added_Assessment_Temp.length > 0) {
            var check = this.All_Added_Assessment_Temp.filter(x => x.Unique_Identifier == Unique_Identifier).length;
            if (check > 0) {
                var index = this.All_Added_Assessment_Temp.findIndex(x => x.Unique_Identifier == Unique_Identifier);
                this.All_Added_Assessment_Temp.splice(index, 1);
            }
            else {
                this.All_Added_Assessment_Temp.push({
                    "Unique_Identifier": Unique_Identifier,
                    "Assessment_Title": Title,
                    "Created_By": Number(GlobalService.FacultyMember_ID),
                    "OfferedCourseID": Number(GlobalService.Offered_Course_ID),
                    "Added_Assessment_Scheduled_Date_ID": Assessment_Date + ind,
                    "Added_Assessment_Assessment_Remarks_ID": Assessment_Remarks + ind,
                    "Index": ind
                });
            }
        }
        else {
            this.All_Added_Assessment_Temp.push({
                "Unique_Identifier": Unique_Identifier,
                "Assessment_Title": Title,
                "Created_By": Number(GlobalService.FacultyMember_ID),
                "OfferedCourseID": Number(GlobalService.Offered_Course_ID),
                "Added_Assessment_Scheduled_Date_ID": Assessment_Date + ind,
                "Added_Assessment_Assessment_Remarks_ID": Assessment_Remarks + ind,
                "Index": ind
            });
        }
    }
    Add_Remove_Assessment_For_Lab(Title, ind, Unique_Identifier, Assessment_Remarks, Assessment_Selected_CLO, Assessment_Selected_Weightage, is_Checked) {
        if (Title.includes('Assessment')) {
            if (is_Checked) {
                this.Assessment_Initial_Array[ind].Is_Temp_Added = true;
            }
            else {
                this.Assessment_Initial_Array[ind].Is_Temp_Added = false;
            }
        }
        else if (Title.includes('Journals')) {
            if (is_Checked) {
                this.Journals_Initial_Array[ind].Is_Temp_Added = true;
            }
            else {
                this.Journals_Initial_Array[ind].Is_Temp_Added = false;
            }
        }
        this.Is_Temp_Mids_And_Finals = is_Checked;
        if (this.All_Added_Assessment_Temp.length > 0) {
            var check = this.All_Added_Assessment_Temp.filter(x => x.Unique_Identifier == Unique_Identifier).length;
            if (check > 0) {
                var index = this.All_Added_Assessment_Temp.findIndex(x => x.Unique_Identifier == Unique_Identifier);
                this.All_Added_Assessment_Temp.splice(index, 1);
            }
            else {
                this.All_Added_Assessment_Temp.push({
                    "Unique_Identifier": Unique_Identifier,
                    "Assessment_Title": Title,
                    "Created_By": Number(GlobalService.FacultyMember_ID),
                    "OfferedCourseID": Number(GlobalService.Offered_Course_ID),
                    "Assessment_Remarks": Assessment_Remarks + ind,
                    "Assessment_Selected_CLO": Assessment_Selected_CLO + ind,
                    "Assessment_Selected_Weightage": Assessment_Selected_Weightage + ind
                });
            }
        }
        else {
            this.All_Added_Assessment_Temp.push({
                "Unique_Identifier": Unique_Identifier,
                "Assessment_Title": Title,
                "Created_By": Number(GlobalService.FacultyMember_ID),
                "OfferedCourseID": Number(GlobalService.Offered_Course_ID),
                "Assessment_Remarks": Assessment_Remarks + ind,
                "Assessment_Selected_CLO": Assessment_Selected_CLO + ind,
                "Assessment_Selected_Weightage": Assessment_Selected_Weightage + ind
            });
        }
    }
    SaveAssessment() {
        this.All_Added_Assessment_For_Final_Submission = [];
        if (this.All_Added_Assessment_Details.length > 0) {
            var All_Selected_Assessment_And_Details = [];
            if (this.All_Added_Assessment_Temp.length > 0 && this.All_Added_Assessment_Temp != null) {
                this.ngxService.start();
                for (var i = 0; i < this.All_Added_Assessment_Temp.length; i++) {
                    if (this.All_Added_Assessment_Temp[i].Assessment_Title.includes(' ')) {
                        var temp = this.All_Added_Assessment_Temp[i].Assessment_Title.replace(" ", "#");
                        this.All_Added_Assessment_Temp[i].Assessment_Title = temp;
                    }
                    var temp = $("#" + this.All_Added_Assessment_Temp[i].Added_Assessment_Scheduled_Date_ID).val();
                    this.All_Added_Assessment_For_Final_Submission.push({
                        "Assessment_Title": this.All_Added_Assessment_Temp[i].Assessment_Title,
                        "OfferedCourseID": this.All_Added_Assessment_Temp[i].OfferedCourseID,
                        "Assessment_Marks": Number(this.Course_Assessment_Form.Assessment_Total.value),
                        "Created_By": this.All_Added_Assessment_Temp[i].Created_By,
                        "Scheduled_date": $("#" + this.All_Added_Assessment_Temp[i].Added_Assessment_Scheduled_Date_ID).val() == undefined ? "" : $("#" + this.All_Added_Assessment_Temp[i].Added_Assessment_Scheduled_Date_ID).val(),
                        "Assessment_Remarks": $("#" + this.All_Added_Assessment_Temp[i].Added_Assessment_Assessment_Remarks_ID).val() == undefined ? "" : $("#" + this.All_Added_Assessment_Temp[i].Added_Assessment_Assessment_Remarks_ID).val(),
                    });
                }
                All_Selected_Assessment_And_Details.push({
                    "SelectedAssessments": this.All_Added_Assessment_For_Final_Submission,
                    "SelectedAssessmentsDetails": this.All_Added_Assessment_Details,
                });
                this.AssessmentDetailsService.SaveAssessmentDetailsCourse(All_Selected_Assessment_And_Details[0]).
                    subscribe(data => {
                    this.ngxService.stop();
                    if (data) {
                        $("#Add-Assessment-Details-Course-Modal").modal('hide');
                        this.toastr.success("Assessment and details saved successfully", "Assessment Information!");
                        this.Get_Selected_Course_Assessment_Details();
                        if (GlobalService.TempFacultyMember_ID != undefined)
                            this.InterconnectedService.UpdateCourseDetailsCounts(GlobalService.TempFacultyMember_ID.toString());
                        else
                            this.InterconnectedService.UpdateCourseDetailsCounts(GlobalService.FacultyMember_ID.toString());
                    }
                    else {
                        this.toastr.error("Error occured while processing your request", "Error!");
                    }
                }, error => {
                    this.ngxService.stop();
                    this.toastr.error("Error occured while processing your request", "Error!");
                });
            }
            else {
                this.toastr.error("No assessment is selected", "Missing Assessment!");
            }
        }
        else {
            this.toastr.error("Selected assessment details is not added. Please add assessment details to proceed furthur", "Missing Assessment Details!");
        }
    }
    SaveAssessmentLab() {
        this.All_Added_Assessment_For_Final_Submission = [];
        if (this.All_Added_Assessment_Details_Lab.length > 0) {
            var All_Selected_Assessment_And_Details = [];
            if (this.All_Added_Assessment_Temp.length > 0 && this.All_Added_Assessment_Temp != null) {
                this.ngxService.start();
                for (var i = 0; i < this.All_Added_Assessment_Temp.length; i++) {
                    if (this.All_Added_Assessment_Temp[i].Assessment_Title.includes(' ')) {
                        var temp = this.All_Added_Assessment_Temp[i].Assessment_Title.replace(" ", "#");
                        this.All_Added_Assessment_Temp[i].Assessment_Title = temp;
                    }
                    if ($("#" + this.All_Added_Assessment_Temp[i].Assessment_Selected_CLO).val() == "" || $("#" + this.All_Added_Assessment_Temp[i].Assessment_Selected_Weightage).val() == 0) {
                        this.toastr.error("No CLO is selected in " + this.All_Added_Assessment_Temp[i].Assessment_Title, "Error");
                        this.ngxService.stop();
                        return;
                    }
                    if (this.Assessment_Type_Lab == 3 || this.Assessment_Type_Lab == 4) {
                        this.All_Added_Assessment_For_Final_Submission.push({
                            "Assessment_Title": this.All_Added_Assessment_Temp[i].Assessment_Title,
                            "OfferedCourseID": this.All_Added_Assessment_Temp[i].OfferedCourseID,
                            "Assessment_Marks": Number(this.Course_Assessment_Form_Lab.Assessment_Total.value),
                            "Created_By": this.All_Added_Assessment_Temp[i].Created_By,
                            "Lab_Remarks": $("#" + this.All_Added_Assessment_Temp[i].Assessment_Remarks).val(),
                            "Select_CLO": Number(0),
                            "Weightage": Number(0)
                        });
                    }
                    else {
                        this.All_Added_Assessment_For_Final_Submission.push({
                            "Assessment_Title": this.All_Added_Assessment_Temp[i].Assessment_Title,
                            "OfferedCourseID": this.All_Added_Assessment_Temp[i].OfferedCourseID,
                            "Assessment_Marks": Number(this.Course_Assessment_Form_Lab.Assessment_Total.value),
                            "Created_By": this.All_Added_Assessment_Temp[i].Created_By,
                            "Lab_Remarks": $("#" + this.All_Added_Assessment_Temp[i].Assessment_Remarks).val(),
                            "Select_CLO": Number($("#" + this.All_Added_Assessment_Temp[i].Assessment_Selected_CLO).val()),
                            "Weightage": Number($("#" + this.All_Added_Assessment_Temp[i].Assessment_Selected_Weightage).val())
                        });
                    }
                }
                All_Selected_Assessment_And_Details.push({
                    "SelectedAssessmentsLab": this.All_Added_Assessment_For_Final_Submission,
                    "SelectedAssessmentsDetailsLab": this.All_Added_Assessment_Details_Lab,
                });
                this.AssessmentDetailsService.SaveAssessmentDetailsLab(All_Selected_Assessment_And_Details[0]).
                    subscribe(data => {
                    this.ngxService.stop();
                    if (data) {
                        $("#Add-Assessment-Details-lab-Modal").modal('hide');
                        this.toastr.success("Assessment and details saved successfully", "Assessment Information!");
                        this.Get_Selected_Course_Assessment_Details();
                        if (GlobalService.TempFacultyMember_ID != undefined)
                            this.InterconnectedService.UpdateCourseDetailsCounts(GlobalService.TempFacultyMember_ID.toString());
                        else
                            this.InterconnectedService.UpdateCourseDetailsCounts(GlobalService.FacultyMember_ID.toString());
                    }
                    else {
                        this.toastr.error("Error occured while processing your request", "Error!");
                    }
                }, error => {
                    this.ngxService.stop();
                    this.toastr.error("Error occured while processing your request", "Error!");
                });
            }
            else {
                this.toastr.error("No assessment is selected", "Missing Assessment!");
            }
        }
        else {
            this.toastr.error("Selected assessment details is not added. Please add assessment details to proceed furthur", "Missing Assessment Details!");
        }
    }
    SaveAssessmentFYP() {
        this.All_Added_Assessment_For_Final_Submission = [];
        if (this.TotalMarks != Number(this.Course_Assessment_Form_FYP.Assessment_Total.value)) {
            this.toastr.error("Sum of all performance indicators marks should be equal to total assessment marks", "Error!");
            return;
        }
        if (this.All_Added_Assessment_Details_FYP.length > 0) {
            this.All_Added_Assessment_For_Final_Submission.push({
                "AssessmentToolFYPID": Number($('input[name="AssessmentToolFYP"]:checked').val()),
                "AssessmentRemarks": $("#FYPAssessmentTool_textarea" + $('input[name="AssessmentToolFYP"]:checked').val()).val(),
                "TotalAssessmentMarks": Number(this.Course_Assessment_Form_FYP.Assessment_Total.value),
                "OfferedCourseID": GlobalService.Offered_Course_ID,
                "CreatedBy": GlobalService.FacultyMember_ID,
                "AssessmentDetailsFYP": this.All_Added_Assessment_Details_FYP,
            });
            console.log(this.All_Added_Assessment_For_Final_Submission);
            this.ngxService.start();
            this.AssessmentDetailsService.SaveAssessmentDetailsFYP(this.All_Added_Assessment_For_Final_Submission[0]).
                subscribe(data => {
                this.ngxService.stop();
                if (data) {
                    $("#Add-Assessment-Details-FYP-Modal").modal('hide');
                    this.toastr.success("Assessment and details saved successfully", "Assessment Information!");
                    this.Get_Selected_Course_Assessment_Details();
                    if (GlobalService.TempFacultyMember_ID != undefined)
                        this.InterconnectedService.UpdateCourseDetailsCounts(GlobalService.TempFacultyMember_ID.toString());
                    else
                        this.InterconnectedService.UpdateCourseDetailsCounts(GlobalService.FacultyMember_ID.toString());
                }
                else {
                    this.toastr.error("Error occured while processing your request", "Error!");
                }
            }, error => {
                this.ngxService.stop();
                this.toastr.error("Error occured while processing your request", "Error!");
            });
        }
        else {
            this.toastr.error("Selected assessment details is not added. Please add assessment details to proceed furthur", "Missing Assessment Details!");
        }
    }
    Delete_Assessment_Details(value) {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this again!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            reverseButtons: true,
        }).then((result) => {
            if (result.value) {
                this.ngxService.start();
                this.AssessmentDetailsService.DeleteSelectedAssessmentDetails({ "AssessmentMainDetailsID": value.assessmentmaindetailsid, "Modified_By": GlobalService.FacultyMember_ID }).
                    subscribe(data => {
                    this.ngxService.stop();
                    if (data) {
                        Swal.fire('Deleted!', 'Selected assessment deleted successfully.', 'success');
                        this.Get_Selected_Course_Assessment_Details();
                        if (GlobalService.TempFacultyMember_ID != undefined)
                            this.InterconnectedService.UpdateCourseDetailsCounts(GlobalService.TempFacultyMember_ID.toString());
                        else
                            this.InterconnectedService.UpdateCourseDetailsCounts(GlobalService.FacultyMember_ID.toString());
                    }
                    else {
                        Swal.fire('Cancelled', 'Your data is safe', 'error');
                    }
                }, error => {
                    this.ngxService.stop();
                    Swal.fire('Cancelled', 'Error occured while processing your request. Please contact to admin', 'error');
                });
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.close();
            }
        });
    }
    Edit_Assessment_Details(value) {
        this.Assessment_Type_Lab = 1;
        this.Selected_Assessment_Sub_Details = [];
        this.Selected_Assessment_ID = value.assessmentmaindetailsid;
        this.Selected_Assessment_Title = value.assessmenttitle;
        this.Selected_Assessment_Scheduled_Date = new Date(value.Scheduled_Date);
        this.Selected_Assessment_Remarks = value.AssessmentRemarks;
        if (this.CourseCategory == 1) {
            if (value.Is_Loop) {
                for (var i = 0; i < value.Get_Assessment_Sub_Details_Course_Lst.length; i++) {
                    this.Selected_Assessment_Sub_Details.push({
                        "Question_Number": Number(value.Get_Assessment_Sub_Details_Course_Lst[i].questionnumber),
                        "Question_Marks": Number(value.Get_Assessment_Sub_Details_Course_Lst[i].questionmarks),
                        "Assessment_Sub_Details_ID": Number(value.Get_Assessment_Sub_Details_Course_Lst[i].assessmentsubdetails),
                        "Mapped_CLO_Title": value.Get_Assessment_Sub_Details_Course_Lst[i].mappedclotitle,
                        "Weightage": Number(value.Get_Assessment_Sub_Details_Course_Lst[i].weightage),
                        "Assessment_Sub_Remarks": value.Get_Assessment_Sub_Details_Course_Lst[i].AssessmentSubRemarks,
                        "Mapped_CLO_ID": Number(value.Get_Assessment_Sub_Details_Course_Lst[i].Mapped_CLO_ID),
                        "Is_Edited": false,
                        "Is_Deleted": false,
                        "Modified_By": 0,
                    });
                }
            }
            else {
                this.Selected_Assessment_Sub_Details.push({
                    "Question_Number": Number(value.questionnumber),
                    "Question_Marks": Number(value.questionmarks),
                    "Assessment_Sub_Details_ID": Number(value.assessmentsubdetails),
                    "Mapped_CLO_Title": value.mappedclotitle,
                    "Weightage": Number(value.weightage),
                    "Assessment_Sub_Remarks": value.Assessment_Sub_Remarks,
                    "Mapped_CLO_ID": Number(value.Mapped_CLO_ID),
                    "Is_Edited": false,
                    "Is_Deleted": false,
                    "Modified_By": 0,
                });
            }
            this.CourseAssessmentFormEdit.get('Assessment_Total_Edit').setValue(value.assessmentmarks);
            $("#Edit-Assessment-Details-Course-Modal").modal('show');
        }
        else if (this.CourseCategory == 4) {
            if (value.assessmenttitle.includes('Mids') || value.assessmenttitle.includes('Finals')) {
                this.Assessment_Type_Lab = 3;
            }
            $("#Lab_Remarks_Assessment_Edit").val(this.Selected_Assessment_Remarks);
            if (value.Is_Loop) {
                $("#Select_CLO_Assessment_Lab_Edit").val(value.Get_Assessment_Sub_Details_Course_Lst[0].Mapped_CLO_ID);
                $("#Select_CLO_Assessment_Lab_Edit0").val(value.Get_Assessment_Sub_Details_Course_Lst[0].weightage);
            }
            else {
                $("#Select_CLO_Assessment_Lab_Edit").val(value.Mapped_CLO_ID);
                $("#Select_CLO_Assessment_Lab_Edit0").val(value.weightage);
            }
            if (value.Is_Loop) {
                for (var i = 0; i < value.Get_Assessment_Sub_Details_Course_Lst.length; i++) {
                    this.Selected_Assessment_Sub_Details.push({
                        "Performance_Indicator_ID": 0,
                        "Performance_Indicator": value.Get_Assessment_Sub_Details_Course_Lst[i].questionnumber,
                        "Performance_Indicator_Marks": Number(value.Get_Assessment_Sub_Details_Course_Lst[i].questionmarks),
                        "Assessment_Sub_Details_ID": Number(value.Get_Assessment_Sub_Details_Course_Lst[i].assessmentsubdetails),
                        "Mapped_CLO_Title": value.Get_Assessment_Sub_Details_Course_Lst[i].mappedclotitle,
                        "Weightage": Number(value.Get_Assessment_Sub_Details_Course_Lst[i].weightage),
                        "Assessment_Sub_Remarks": value.Get_Assessment_Sub_Details_Course_Lst[i].AssessmentSubRemarks,
                        "Mapped_CLO_ID": Number(value.Get_Assessment_Sub_Details_Course_Lst[i].Mapped_CLO_ID),
                        "Is_Edited": false,
                        "Is_Deleted": false,
                        "Modified_By": 0,
                    });
                }
            }
            else {
                this.Selected_Assessment_Sub_Details.push({
                    "Performance_Indicator_ID": 0,
                    "Performance_Indicator": value.questionnumber,
                    "Performance_Indicator_Marks": Number(value.questionmarks),
                    "Assessment_Sub_Details_ID": Number(value.assessmentsubdetails),
                    "Mapped_CLO_Title": this.Assessment_Type_Lab == 3 ? value.Get_Assessment_Sub_Details_Course_Lst[i].mappedclotitle : value.mappedclotitle,
                    "Weightage": Number(this.Assessment_Type_Lab == 3 ? value.Get_Assessment_Sub_Details_Course_Lst[i].weightage : value.weightage),
                    "Assessment_Sub_Remarks": value.Assessment_Sub_Remarks,
                    "Mapped_CLO_ID": Number(this.Assessment_Type_Lab == 3 ? value.Get_Assessment_Sub_Details_Course_Lst[i].Mapped_CLO_ID : value.Mapped_CLO_ID),
                    "Is_Edited": false,
                    "Is_Deleted": false,
                    "Modified_By": 0,
                });
            }
            this.CourseAssessmentFormEditLab.get('Assessment_Total_Edit').setValue(value.assessmentmarks);
            this.CourseAssessmentFormEditLab.get('Performance_Indicator_Edit').setValue("0");
            this.CourseAssessmentFormEditLab.get('Selected_CLO_Edit').setValue("0");
            $("#Edit-Assessment-Details-Lab-Modal").modal('show');
        }
        else if (this.CourseCategory == 8) {
            $("#Lab_Remarks_Assessment_Edit").val(this.Selected_Assessment_Remarks);
            if (value.Is_Loop) {
                $("#Select_CLO_Assessment_Lab_Edit").val(value.Get_Assessment_Sub_Details_Course_Lst[0].Mapped_CLO_ID);
                $("#Select_CLO_Assessment_Lab_Edit0").val(value.Get_Assessment_Sub_Details_Course_Lst[0].weightage);
            }
            else {
                $("#Select_CLO_Assessment_Lab_Edit").val(value.Mapped_CLO_ID);
                $("#Select_CLO_Assessment_Lab_Edit0").val(value.weightage);
            }
            if (value.Is_Loop) {
                for (var i = 0; i < value.Get_Assessment_Sub_Details_Course_Lst.length; i++) {
                    this.Selected_Assessment_Sub_Details.push({
                        "Performance_Indicator_ID": 0,
                        "Performance_Indicator": value.Get_Assessment_Sub_Details_Course_Lst[i].questionnumber,
                        "Performance_Indicator_Marks": Number(value.Get_Assessment_Sub_Details_Course_Lst[i].questionmarks),
                        "Assessment_Sub_Details_ID": Number(value.Get_Assessment_Sub_Details_Course_Lst[i].assessmentsubdetails),
                        "Mapped_CLO_Title": value.Get_Assessment_Sub_Details_Course_Lst[i].mappedclotitle,
                        "Weightage": Number(value.Get_Assessment_Sub_Details_Course_Lst[i].weightage),
                        "Assessment_Sub_Remarks": value.Get_Assessment_Sub_Details_Course_Lst[i].AssessmentSubRemarks,
                        "Mapped_CLO_ID": Number(value.Get_Assessment_Sub_Details_Course_Lst[i].Mapped_CLO_ID),
                        "Is_Edited": false,
                        "Is_Deleted": false,
                        "Modified_By": 0,
                    });
                }
            }
            else {
                this.Selected_Assessment_Sub_Details.push({
                    "Performance_Indicator_ID": 0,
                    "Performance_Indicator": value.questionnumber,
                    "Performance_Indicator_Marks": Number(value.questionmarks),
                    "Assessment_Sub_Details_ID": Number(value.assessmentsubdetails),
                    "Mapped_CLO_Title": this.Assessment_Type_Lab == 3 ? value.Get_Assessment_Sub_Details_Course_Lst[i].mappedclotitle : value.mappedclotitle,
                    "Weightage": Number(this.Assessment_Type_Lab == 3 ? value.Get_Assessment_Sub_Details_Course_Lst[i].weightage : value.weightage),
                    "Assessment_Sub_Remarks": value.Assessment_Sub_Remarks,
                    "Mapped_CLO_ID": Number(this.Assessment_Type_Lab == 3 ? value.Get_Assessment_Sub_Details_Course_Lst[i].Mapped_CLO_ID : value.Mapped_CLO_ID),
                    "Is_Edited": false,
                    "Is_Deleted": false,
                    "Modified_By": 0,
                });
            }
            this.TotalMarks = Number(value.assessmentmarks);
            this.CourseAssessmentFormEditFYP.get('Assessment_Total_Edit').setValue(value.assessmentmarks);
            this.CourseAssessmentFormEditFYP.get('Performance_Indicator_Edit').setValue("0");
            this.CourseAssessmentFormEditFYP.get('Selected_CLO_Edit').setValue("0");
            $("#Edit-Assessment-Details-FYP-Modal").modal('show');
        }
    }
    Deleted_Edited_Temp_Added_Assessment(value) {
        this.Selected_Assessment_Sub_Details[value].Is_Deleted = true;
        this.Selected_Assessment_Sub_Details[value].Is_Edited = true;
        if (this.CourseCategory == 1) {
            this.Question_Number = 1;
            this.Assessment_Total_Marks = 0;
            if (this.Selected_Assessment_Sub_Details.length > 0) {
                for (var i = 0; i < this.Selected_Assessment_Sub_Details.length; i++) {
                    if (!this.Selected_Assessment_Sub_Details[i].Is_Deleted) {
                        this.Selected_Assessment_Sub_Details[i].Question_Number = Number(this.Question_Number);
                        this.Question_Number += 1;
                        this.Assessment_Total_Marks += Number(this.Selected_Assessment_Sub_Details[i].Question_Marks);
                    }
                }
            }
            this.CourseAssessmentFormEdit.get('Assessment_Total_Edit').setValue(this.Assessment_Total_Marks);
        }
        else if (this.CourseCategory == 4) {
            this.Assessment_Total_Marks = 0;
            if (this.Selected_Assessment_Sub_Details.length > 0) {
                for (var i = 0; i < this.Selected_Assessment_Sub_Details.length; i++) {
                    if (!this.Selected_Assessment_Sub_Details[i].Is_Deleted) {
                        this.Assessment_Total_Marks += Number(this.Selected_Assessment_Sub_Details[i].Performance_Indicator_Marks);
                    }
                }
            }
            this.CourseAssessmentFormEditLab.get('Assessment_Total_Edit').setValue(this.Assessment_Total_Marks);
        }
    }
    Edit_Temp_Added_Assessment(value, index) {
        if (this.CourseCategory == 1) {
            $('#Course_Update_Button').prop("disabled", false);
            this.CourseAssessmentFormEdit.get('Question_Remarks_Edit').setValue(value.Assessment_Sub_Remarks);
            this.CourseAssessmentFormEdit.get('Selected_CLOS_Edit').setValue(value.Mapped_CLO_ID);
            this.CourseAssessmentFormEdit.get('CLO_Weightage_Edit').setValue(value.Weightage);
            this.CourseAssessmentFormEdit.get('Question_Marks_Edit').setValue(value.Question_Marks);
            this.Assessment_Sub_Details_ID_For_Edit = Number(value.Assessment_Sub_Details_ID);
            this.Assessment_Sub_Details_Index_For_Edit = index;
        }
        else if (this.CourseCategory == 4) {
            if (this.Assessment_Type_Lab == 3) {
                this.CourseAssessmentFormEditLab.get('Selected_CLO_Edit').setValue(value.Mapped_CLO_ID);
                this.CourseAssessmentFormEditLab.get('CLO_Weightage_Edit').setValue(value.Weightage);
            }
            $('#Lab_Update_Button').prop("disabled", false);
            var temp = this.Lab_Performance_Indicator.filter(x => x.Performance_Indicators_Title == value.Performance_Indicator)[0];
            this.CourseAssessmentFormEditLab.get('Performance_Indicator_Edit').setValue(temp.Performance_Indicators_ID);
            this.CourseAssessmentFormEditLab.get('Performance_Indicator_Marks_Edit').setValue(value.Performance_Indicator_Marks);
            this.Assessment_Sub_Details_ID_For_Edit = Number(value.Assessment_Sub_Details_ID);
            this.Assessment_Sub_Details_Index_For_Edit = index;
        }
        else if (this.CourseCategory == 8) {
            this.CourseAssessmentFormEditFYP.get('Selected_CLO_Edit').setValue(value.Mapped_CLO_ID);
            this.CourseAssessmentFormEditFYP.get('CLO_Weightage_Edit').setValue(value.Weightage);
            $('#Lab_Update_Button').prop("disabled", false);
            var temp = this.Lab_Performance_Indicator.filter(x => x.Performance_Indicators_Title == value.Performance_Indicator)[0];
            this.CourseAssessmentFormEditFYP.get('Performance_Indicator_Edit').setValue(temp.Performance_Indicators_ID);
            this.CourseAssessmentFormEditFYP.get('Performance_Indicator_Marks_Edit').setValue(value.Performance_Indicator_Marks);
            this.Assessment_Sub_Details_ID_For_Edit = Number(value.Assessment_Sub_Details_ID);
            this.Assessment_Sub_Details_Index_For_Edit = index;
        }
    }
    onSubmitEdit() {
        this.submitted_Edit = true;
        if (this.CourseAssessmentFormEdit.invalid) {
            return;
        }
        var CLO = this.Get_Added_CLOS.filter(x => x.CoursesCLOSID == Number(this.Course_Assessment_Form_Edit.Selected_CLOS_Edit.value));
        this.Selected_Assessment_Sub_Details[this.Assessment_Sub_Details_Index_For_Edit].Assessment_Sub_Remarks = this.Course_Assessment_Form_Edit.Question_Remarks_Edit.value == null ? "" : this.Course_Assessment_Form_Edit.Question_Remarks_Edit.value;
        this.Selected_Assessment_Sub_Details[this.Assessment_Sub_Details_Index_For_Edit].Mapped_CLO_ID = Number(this.Course_Assessment_Form_Edit.Selected_CLOS_Edit.value);
        this.Selected_Assessment_Sub_Details[this.Assessment_Sub_Details_Index_For_Edit].Weightage = Number(this.Course_Assessment_Form_Edit.CLO_Weightage_Edit.value);
        this.Selected_Assessment_Sub_Details[this.Assessment_Sub_Details_Index_For_Edit].Question_Marks = Number(this.Course_Assessment_Form_Edit.Question_Marks_Edit.value);
        this.Selected_Assessment_Sub_Details[this.Assessment_Sub_Details_Index_For_Edit].Mapped_CLO_Title = CLO[0].cloTitle;
        this.Selected_Assessment_Sub_Details[this.Assessment_Sub_Details_Index_For_Edit].Is_Edited = true;
        this.Selected_Assessment_Sub_Details[this.Assessment_Sub_Details_Index_For_Edit].Modified_By = Number(GlobalService.FacultyMember_ID);
        this.CourseAssessmentFormEdit.reset();
        this.submitted_Edit = false;
        this.Assessment_Total_Marks = 0;
        for (var i = 0; i < this.Selected_Assessment_Sub_Details.length; i++) {
            if (!this.Selected_Assessment_Sub_Details[i].Is_Deleted) {
                this.Assessment_Total_Marks += Number(this.Selected_Assessment_Sub_Details[i].Question_Marks);
            }
        }
        this.CourseAssessmentFormEdit.get('CLO_Weightage_Edit').setValue("100");
        this.CourseAssessmentFormEdit.get('Selected_CLOS_Edit').setValue("");
        this.CourseAssessmentFormEdit.get('Assessment_Total_Edit').setValue(this.Assessment_Total_Marks);
        $('#Course_Update_Button').prop("disabled", true);
    }
    onSubmitUpdateLab() {
        this.submitted_Edit = true;
        if (this.CourseAssessmentFormEditLab.invalid) {
            return;
        }
        var CLO = this.Get_Added_CLOS.filter(x => x.CoursesCLOSID == Number($("#Select_CLO_Assessment_Lab_Edit").val()));
        var temp = this.Lab_Performance_Indicator.filter(x => x.Performance_Indicators_ID == Number(this.Course_Assessment_Form_Lab_Edit.Performance_Indicator_Edit.value))[0];
        this.Selected_Assessment_Sub_Details[this.Assessment_Sub_Details_Index_For_Edit].Performance_Indicator_ID = Number(this.Course_Assessment_Form_Lab_Edit.Performance_Indicator_Edit.value);
        this.Selected_Assessment_Sub_Details[this.Assessment_Sub_Details_Index_For_Edit].Performance_Indicator = temp.Performance_Indicators_Title;
        this.Selected_Assessment_Sub_Details[this.Assessment_Sub_Details_Index_For_Edit].Performance_Indicator_Marks = Number(this.Course_Assessment_Form_Lab_Edit.Performance_Indicator_Marks_Edit.value);
        this.Selected_Assessment_Sub_Details[this.Assessment_Sub_Details_Index_For_Edit].Mapped_CLO_ID = Number(this.Course_Assessment_Form_Lab_Edit.Selected_CLO_Edit.value);
        this.Selected_Assessment_Sub_Details[this.Assessment_Sub_Details_Index_For_Edit].Weightage = Number(this.Course_Assessment_Form_Lab_Edit.CLO_Weightage_Edit.value);
        this.Selected_Assessment_Sub_Details[this.Assessment_Sub_Details_Index_For_Edit].Mapped_CLO_Title = CLO[0].CLOTitle;
        this.Selected_Assessment_Sub_Details[this.Assessment_Sub_Details_Index_For_Edit].Is_Edited = true;
        this.Selected_Assessment_Sub_Details[this.Assessment_Sub_Details_Index_For_Edit].Modified_By = Number(GlobalService.FacultyMember_ID);
        this.CourseAssessmentFormEditLab.reset();
        this.submitted_Edit = false;
        this.Assessment_Total_Marks = 0;
        for (var i = 0; i < this.Selected_Assessment_Sub_Details.length; i++) {
            if (!this.Selected_Assessment_Sub_Details[i].Is_Deleted) {
                this.Assessment_Total_Marks += Number(this.Selected_Assessment_Sub_Details[i].Performance_Indicator_Marks);
            }
        }
        this.CourseAssessmentFormEditLab.get('Performance_Indicator_Edit').setValue("0");
        this.CourseAssessmentFormEditLab.get('Performance_Indicator_Marks_Edit').setValue("");
        this.CourseAssessmentFormEditLab.get('CLO_Weightage_Edit').setValue("100");
        this.CourseAssessmentFormEditLab.get('Selected_CLO_Edit').setValue("0");
        this.CourseAssessmentFormEditLab.get('Assessment_Total_Edit').setValue(this.Assessment_Total_Marks);
        $('#Lab_Update_Button').prop("disabled", true);
    }
    onSubmitUpdateFYP() {
        this.submitted_Edit = true;
        if (this.CourseAssessmentFormEditFYP.invalid) {
            return;
        }
        var tempMarks = Number(this.Selected_Assessment_Sub_Details[this.Assessment_Sub_Details_Index_For_Edit].Performance_Indicator_Marks);
        var CLO = this.Get_Added_CLOS.filter(x => x.CoursesCLOSID == Number(this.Course_Assessment_Form_FYP_Edit.Selected_CLO_Edit.value));
        var temp = this.Lab_Performance_Indicator.filter(x => x.Performance_Indicators_ID == Number(this.Course_Assessment_Form_FYP_Edit.Performance_Indicator_Edit.value))[0];
        this.Selected_Assessment_Sub_Details[this.Assessment_Sub_Details_Index_For_Edit].Performance_Indicator_ID = Number(this.Course_Assessment_Form_FYP_Edit.Performance_Indicator_Edit.value);
        this.Selected_Assessment_Sub_Details[this.Assessment_Sub_Details_Index_For_Edit].Performance_Indicator = temp.Performance_Indicators_Title;
        this.Selected_Assessment_Sub_Details[this.Assessment_Sub_Details_Index_For_Edit].Performance_Indicator_Marks = Number(this.Course_Assessment_Form_FYP_Edit.Performance_Indicator_Marks_Edit.value);
        this.Selected_Assessment_Sub_Details[this.Assessment_Sub_Details_Index_For_Edit].Mapped_CLO_ID = Number(this.Course_Assessment_Form_FYP_Edit.Selected_CLO_Edit.value);
        this.Selected_Assessment_Sub_Details[this.Assessment_Sub_Details_Index_For_Edit].Weightage = Number(this.Course_Assessment_Form_FYP_Edit.CLO_Weightage_Edit.value);
        this.Selected_Assessment_Sub_Details[this.Assessment_Sub_Details_Index_For_Edit].Mapped_CLO_Title = CLO[0].CLOTitle;
        this.Selected_Assessment_Sub_Details[this.Assessment_Sub_Details_Index_For_Edit].Is_Edited = true;
        this.Selected_Assessment_Sub_Details[this.Assessment_Sub_Details_Index_For_Edit].Modified_By = Number(GlobalService.FacultyMember_ID);
        this.CourseAssessmentFormEditFYP.reset();
        this.submitted_Edit = false;
        this.Assessment_Total_Marks = 0;
        for (var i = 0; i < this.Selected_Assessment_Sub_Details.length; i++) {
            if (!this.Selected_Assessment_Sub_Details[i].Is_Deleted) {
                this.Assessment_Total_Marks += Number(this.Selected_Assessment_Sub_Details[i].Performance_Indicator_Marks);
            }
        }
        this.CourseAssessmentFormEditFYP.get('Performance_Indicator_Edit').setValue("0");
        this.CourseAssessmentFormEditFYP.get('Performance_Indicator_Marks_Edit').setValue("");
        this.CourseAssessmentFormEditFYP.get('CLO_Weightage_Edit').setValue("100");
        this.CourseAssessmentFormEditFYP.get('Selected_CLO_Edit').setValue("0");
        this.CourseAssessmentFormEditFYP.get('Assessment_Total_Edit').setValue(this.TotalMarks);
        if (this.Assessment_Total_Marks > this.TotalMarks) {
            this.toastr.error("Sum of all performance indicators marks cannot be greater then total assessment marks", "Error!");
            this.Selected_Assessment_Sub_Details[this.Assessment_Sub_Details_Index_For_Edit].Performance_Indicator_Marks = tempMarks;
        }
        $('#Lab_Update_Button').prop("disabled", true);
    }
    SaveEditedAssessment() {
        var Edited_Assessment_And_Details = [];
        var temp = this.Selected_Assessment_Sub_Details.filter(x => x.Is_Edited == true);
        Edited_Assessment_And_Details.push({
            "Assessment_Edit_Date": $("#Assessment_Edit_Date").val() == undefined ? "" : $("#Assessment_Edit_Date").val(),
            "Assessment_Edit_Remarks": $("#Assessment_Edit_Textarea").val(),
            "Selected_Assessment_ID": this.Selected_Assessment_ID,
            "Assessment_Marks": Number(this.Course_Assessment_Form_Edit.Assessment_Total_Edit.value),
            "Modified_By": Number(GlobalService.FacultyMember_ID),
            "AssessmentSubDetails": temp
        });
        this.AssessmentDetailsService.UpdateAssessmentDetailsCourse(Edited_Assessment_And_Details[0]).
            subscribe(data => {
            this.ngxService.stop();
            if (data) {
                $("#Edit-Assessment-Details-Course-Modal").modal('hide');
                this.toastr.success("Assessment and details updated successfully", "Assessment Information!");
                this.Get_Selected_Course_Assessment_Details();
            }
            else {
                this.toastr.error("Error occured while processing your request", "Error!");
            }
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Error occured while processing your request", "Error!");
        });
    }
    SaveEditedAssessmentLab() {
        var Edited_Assessment_And_Details = [];
        Edited_Assessment_And_Details.push({
            "Lab_Remarks_Assessment_Edit": $("#Lab_Remarks_Assessment_Edit").val(),
            "Select_CLO_Assessment_Lab_Edit": this.Assessment_Type_Lab != 3 ? Number($("#Select_CLO_Assessment_Lab_Edit").val()) : Number(123),
            "Selected_CLO_Assessment_Weightage_Edit": this.Assessment_Type_Lab != 3 ? Number($("#Select_CLO_Assessment_Lab_Edit0").val()) : Number(123),
            "Selected_Assessment_ID": this.Selected_Assessment_ID,
            "Assessment_Marks": Number(this.Course_Assessment_Form_Lab_Edit.Assessment_Total_Edit.value),
            "Modified_By": Number(GlobalService.FacultyMember_ID),
            "AssessmentSubDetailsLab": this.Selected_Assessment_Sub_Details
        });
        this.AssessmentDetailsService.UpdateAssessmentDetailsLab(Edited_Assessment_And_Details[0]).
            subscribe(data => {
            this.ngxService.stop();
            if (data) {
                $("#Lab_Remarks_Assessment_Edit").val("");
                $("#Select_CLO_Assessment_Lab_Edit").val("");
                $("#Select_CLO_Assessment_Lab_Edit0").val("");
                $("#Edit-Assessment-Details-Lab-Modal").modal('hide');
                this.toastr.success("Assessment and details updated successfully", "Assessment Information!");
                this.Get_Selected_Course_Assessment_Details();
            }
            else {
                this.toastr.error("Error occured while processing your request", "Error!");
            }
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Error occured while processing your request", "Error!");
        });
    }
    SaveEditedAssessmentFYP() {
        var Edited_Assessment_And_Details = [];
        Edited_Assessment_And_Details.push({
            "FYP_Remarks_Assessment_Edit": $("#Lab_Remarks_Assessment_Edit").val(),
            "Selected_Assessment_ID": this.Selected_Assessment_ID,
            "Modified_By": Number(GlobalService.FacultyMember_ID),
            "AssessmentSubDetailsFYP": this.Selected_Assessment_Sub_Details
        });
        var TotalMarks = 0;
        for (var i = 0; i < this.Selected_Assessment_Sub_Details.length; i++) {
            if (!this.Selected_Assessment_Sub_Details[i].Is_Deleted) {
                TotalMarks += Number(this.Selected_Assessment_Sub_Details[i].Performance_Indicator_Marks);
            }
        }
        if (TotalMarks != this.TotalMarks) {
            this.toastr.error("Sum of all performance indicators marks should be equal to total assessment marks", "Error!");
            return;
        }
        this.AssessmentDetailsService.UpdateAssessmentDetailsFYP(Edited_Assessment_And_Details[0]).
            subscribe(data => {
            this.ngxService.stop();
            if (data) {
                $("#Lab_Remarks_Assessment_Edit").val("");
                $("#Edit-Assessment-Details-FYP-Modal").modal('hide');
                this.toastr.success("Assessment and details updated successfully", "Assessment Information!");
                this.Get_Selected_Course_Assessment_Details();
            }
            else {
                this.toastr.error("Error occured while processing your request", "Error!");
            }
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Error occured while processing your request", "Error!");
        });
    }
    keyRestrict(e, validchars, casesensitives, onceevery, onceoneof) {
        onceevery = onceevery ? onceevery : "";
        onceoneof = onceoneof ? onceoneof : "";
        if (!validchars)
            return true;
        var keychar = '', i = 0;
        var key = e.which ? e.which : e.keyCode;
        var obj = e.target ? e.target : e.srcElement;
        if (key == null)
            return true;
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
                if (obj.value.indexOf(onceoneof.charAt(i - onceevery.length)) != -1 && onceoneof.indexOf(keychar) != -1)
                    return false;
            }
        }
        if (validchars.indexOf(keychar) != -1)
            return true;
        if (key == null || key == 0 || key == 8 || key == 9 || key == 13 || key == 27 || key == 39 || key == 32)
            return true;
        return false;
    }
};
AssessmentDetailsComponent = __decorate([
    Component({
        selector: 'app-assessment-details',
        templateUrl: './assessment-details.component.html',
        styleUrls: ['./assessment-details.component.css'],
        providers: [PagerService, HighlightPipe, FilterPipe]
    })
], AssessmentDetailsComponent);
export { AssessmentDetailsComponent };
//# sourceMappingURL=assessment-details.component.js.map