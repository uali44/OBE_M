import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { InterconnectedService } from '../../../Shared/Services/Global/interconnected.service';
import { IndirectAssessmentsComponent } from '../IndirectAssessments.component';
import { CoursesSearchService } from '../../../Services/CourseSearch/CourseSearch.service';
import { ToastrService } from 'ngx-toastr';
import { IndirectAssessment } from '../../../Services/IndirectAssessment/IndirectAssessment.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal, { SweetAlertResult } from 'sweetalert2';
declare const $: any;
@Component({
  selector: 'app-IndirectAssessments-main',
  templateUrl: './IndirectAssessments-main.component.html',
  styleUrls: ['./IndirectAssessments-main.component.css']
})
export class IndirectAssessmentsMainComponent implements OnInit {
  Institutes: [] = [];
  Department: [] = [];
  Faculty: [] = [];
  Intake: [] = [];
  IntakeStudent: [] = [];
  IntakeID: number;
  Programs: [] = [];
  StudentID: number;
  Is_Permission_Institute: boolean = false;
  Is_Permission_Deaprtment: boolean = false;
  Is_Permission_Faculty: boolean = false;
  Temp_Institute_ID: number;
  Temp_Deaprtment_ID: number;
  dept: number;

  intakeId: number;


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

  surveyData: any = {
    studentID: 0,
    surveyID: 0,
    responses: []
  };


  SurveyResponse: any = [];





  constructor(
    private _CoursesSearchService: CoursesSearchService,
    private toastr: ToastrService,
    private ngxService: NgxUiLoaderService,
    private _InterconnectedService: InterconnectedService,
    private IndirectAssessmentsComponent: IndirectAssessmentsComponent,
    private IndirectAssessment: IndirectAssessment,
    private fb: FormBuilder,
    
  ) {
    this.Temp_Institute_ID = 0;
    this.Temp_Deaprtment_ID = 0;
    this.Is_Permission_Institute = GlobalService.Permissions.indexOf("Institute_Dropdown") >= 0 ? true : false;
    this.Is_Permission_Deaprtment = GlobalService.Permissions.indexOf("Department_Dropdown") >= 0 ? true : false;
    this.Is_Permission_Faculty = GlobalService.Permissions.indexOf("Faculty_Dropdown") >= 0 ? true : false;
    if (!this.Is_Permission_Institute) {
      this.Temp_Institute_ID = GlobalService.Institute_ID;
    }
    if (!this.Is_Permission_Deaprtment) {
      this.Temp_Deaprtment_ID = GlobalService.Deaprtment_ID;
    }
  }

  ngOnInit() {
    this._InterconnectedService.CloseTab.subscribe(search => {
      this.CloseTabContent();
      this.Get_Institutes();
      // this.getSurvey("CSP")
     
    });
    this.getAllSurvey();
    this.dept = GlobalService.Deaprtment_ID;
  }
  Get_Institutes() {
    this.IntakeID = 0;
    this.StudentID = 0;
    this.ngxService.start();
    this.Institutes = [];
    this._CoursesSearchService.Get_Institute().
      subscribe(
        response => {
          if (response != null) {
            if (this.Temp_Institute_ID != 0) {
              this.Institutes = response.filter(x => x.InstituteID == this.Temp_Institute_ID);
              this.Get_Department(this.Temp_Institute_ID);
            } else {
              this.Institutes = response;
            }

          }
          this.ngxService.stop();
        },
        error => {
          this.ngxService.stop();
          this.toastr.error("Internal server error occured while processing your request", "Error!")
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
          if (response != null) {

            if (this.Temp_Deaprtment_ID != 0) {
              this.Department = response.filter(x => x.DepartmentID == this.Temp_Deaprtment_ID);
              this.Get_Programs(this.Temp_Deaprtment_ID);
            } else {
              this.Department = response;
            }
          }
          this.ngxService.stop();

        },
        error => {
          this.ngxService.stop();
          this.toastr.error("Internal server error occured while processing your request", "Error!")
        });
  }
  Get_Programs(val) {
    if (val == undefined || val == null || val == "") {
      console.log("Invalid val");
      return;
    }
     
    this.ngxService.start();
    this.Programs = [];
    this._CoursesSearchService.Get_Programs(Number(val)).
      subscribe(
        response => {
          try {
            if (response != null) {
              this.Programs = response;
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
  GetIntakeStudents(val) {
    this.IntakeStudent = [];
    if (val == undefined || val == null || val == "")
      return;
    this.ngxService.start();

    this._CoursesSearchService.GetIntakeStudents(Number(val)).
      subscribe(
        response => {
          try {
            if (response != null) {
              this.IntakeStudent = response;
              this.intakeId = val;


              this.getAllSurvey();
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
  loadTab(Title) {
    $("#Content").removeClass('dashboard-bg');
    this.IndirectAssessmentsComponent.ShowTab(Title);
    GlobalService.Report_Sub_Tab = true;
    $("#IndirectAssessment-tab").removeClass('active');
    $("#Any-tab").addClass('active');
  }
  CloseTabContent() {
    $("#Content").addClass('dashboard-bg');
    $("#Any-tab").removeClass('active');
    $("#IndirectAssessment-tab").addClass('active');
    $("#IndirectAssessmentMainTab").addClass('active');
  }
  
  resetCSPForm() {
    $("input[name=CSPQuestion1][value=5]").prop('checked', true);
    $("input[name=CSPQuestion2][value=5]").prop('checked', true);
    $("input[name=CSPQuestion3][value=5]").prop('checked', true);
    $("input[name=CSPQuestion4][value=5]").prop('checked', true);
    $("input[name=CSPQuestion5][value=5]").prop('checked', true);
    $("input[name=CSPQuestion6][value=5]").prop('checked', true);
    $("input[name=CSPQuestion7][value=5]").prop('checked', true);
    $("#CSPSurveyFormRemarks").val('')
  }
  resetExitForm() {
    $("input[name=ExitQuestion1][value=5]").prop('checked', true);
    $("input[name=ExitQuestion2][value=5]").prop('checked', true);
    $("input[name=ExitQuestion3][value=5]").prop('checked', true);
    $("input[name=ExitQuestion4][value=5]").prop('checked', true);
    $("input[name=ExitQuestion5][value=5]").prop('checked', true);
    $("input[name=ExitQuestion6][value=5]").prop('checked', true);
    $("input[name=ExitQuestion7][value=5]").prop('checked', true);
    $("input[name=ExitQuestion8][value=5]").prop('checked', true);
    $("input[name=ExitQuestion9][value=5]").prop('checked', true);
    $("input[name=ExitQuestion10][value=5]").prop('checked', true);
    $("input[name=ExitQuestion11][value=5]").prop('checked', true);
    $("input[name=ExitQuestion12][value=5]").prop('checked', true);
    $("#ExitSurveyFormRemarks").val('')
  }
  resetInternshipForm() {
    $("input[name=InternshipQuestion1][value=5]").prop('checked', true);
    $("input[name=InternshipQuestion2][value=5]").prop('checked', true);
    $("input[name=InternshipQuestion3][value=5]").prop('checked', true);
    $("input[name=InternshipQuestion4][value=5]").prop('checked', true);
    $("input[name=InternshipQuestion5][value=5]").prop('checked', true);
    $("input[name=InternshipQuestion6][value=5]").prop('checked', true);
    $("input[name=InternshipQuestion7][value=5]").prop('checked', true);
    $("input[name=InternshipQuestion8][value=5]").prop('checked', true);
    $("input[name=InternshipQuestion9][value=5]").prop('checked', true);
    $("input[name=InternshipQuestion10][value=5]").prop('checked', true);
    $("input[name=InternshipQuestion11][value=5]").prop('checked', true);
    $("input[name=InternshipQuestion12][value=5]").prop('checked', true);
    $("#InternshipSurveyFormRemarks").val('')
  }

  SaveCSPForm() {
    if (this.StudentID === 0) {
      this.toastr.error("Please select student", "Error!");
      return;
    }
    var data = {};
    data = {
      "CSPQuestion1": $("input[name='CSPQuestion1']:checked").val(),
      "CSPQuestion2": $("input[name='CSPQuestion2']:checked").val(),
      "CSPQuestion3": $("input[name='CSPQuestion3']:checked").val(),
      "CSPQuestion4": $("input[name='CSPQuestion4']:checked").val(),
      "CSPQuestion5": $("input[name='CSPQuestion5']:checked").val(),
      "CSPQuestion6": $("input[name='CSPQuestion6']:checked").val(),
      "CSPQuestion7": $("input[name='CSPQuestion7']:checked").val(),
      "CSPSurveyFormRemarks": $("#CSPSurveyFormRemarks").val(),
      "StudentID": this.StudentID
    }
    this.ngxService.start();
    this.IndirectAssessment.SaveCSPForm(data).
      subscribe(
        response => {
          try {
            if (response) {
              this.resetCSPForm();
              this.toastr.success("Information saved successfully", "Success!");
              $("#CSPSurveyFormRemarks").val('')
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
  SaveExitForm() {
    if (this.StudentID === 0) {
      this.toastr.error("Please select student", "Error!");
      return;
    }
    var data = {};
    data = {
      "ExitQuestion1": $("input[name='ExitQuestion1']:checked").val(),
      "ExitQuestion2": $("input[name='ExitQuestion2']:checked").val(),
      "ExitQuestion3": $("input[name='ExitQuestion3']:checked").val(),
      "ExitQuestion4": $("input[name='ExitQuestion4']:checked").val(),
      "ExitQuestion5": $("input[name='ExitQuestion5']:checked").val(),
      "ExitQuestion6": $("input[name='ExitQuestion6']:checked").val(),
      "ExitQuestion7": $("input[name='ExitQuestion7']:checked").val(),
      "ExitQuestion8": $("input[name='ExitQuestion8']:checked").val(),
      "ExitQuestion9": $("input[name='ExitQuestion9']:checked").val(),
      "ExitQuestion10": $("input[name='ExitQuestion10']:checked").val(),
      "ExitQuestion11": $("input[name='ExitQuestion11']:checked").val(),
      "ExitQuestion12": $("input[name='ExitQuestion12']:checked").val(),
      "ExitSurveyFormRemarks": $("#ExitSurveyFormRemarks").val(),
      "StudentID": this.StudentID
    }
    this.ngxService.start();
    this.IndirectAssessment.SaveExitForm(data).
      subscribe(
        response => {
          try {
            if (response) {
              this.resetExitForm();
              this.toastr.success("Information saved successfully", "Success!");
              $("#ExitSurveyFormRemarks").val('')
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
  SaveInternshipForm() {
    if (this.StudentID === 0) {
      this.toastr.error("Please select student", "Error!");
      return;
    }
    var data = {};
    data = {
      "InternshipQuestion1": $("input[name='InternshipQuestion1']:checked").val(),
      "InternshipQuestion2": $("input[name='InternshipQuestion2']:checked").val(),
      "InternshipQuestion3": $("input[name='InternshipQuestion3']:checked").val(),
      "InternshipQuestion4": $("input[name='InternshipQuestion4']:checked").val(),
      "InternshipQuestion5": $("input[name='InternshipQuestion5']:checked").val(),
      "InternshipQuestion6": $("input[name='InternshipQuestion6']:checked").val(),
      "InternshipQuestion7": $("input[name='InternshipQuestion7']:checked").val(),
      "InternshipQuestion8": $("input[name='InternshipQuestion8']:checked").val(),
      "InternshipQuestion9": $("input[name='InternshipQuestion9']:checked").val(),
      "InternshipQuestion10": $("input[name='InternshipQuestion10']:checked").val(),
      "InternshipQuestion11": $("input[name='InternshipQuestion11']:checked").val(),
      "InternshipQuestion12": $("input[name='InternshipQuestion12']:checked").val(),
      "InternshipSurveyFormRemarks": $("#InternshipSurveyFormRemarks").val(),
      "StudentID": this.StudentID
    }
    this.ngxService.start();
    this.IndirectAssessment.SaveInternshipForm(data).
      subscribe(
        response => {
          try {
            if (response) {
              this.resetInternshipForm();
              this.toastr.success("Information saved successfully", "Success!");
              $("#ExitSurveyFormRemarks").val('')
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
  AlumniSurveyForm() {
    if (this.StudentID === 0) {
      this.toastr.error("Please select student", "Error!");
      return;
    }
    this.toastr.success("Information saved successfully", "Success!");
  }
  SaveEmployerForm() {
    if (this.StudentID === 0) {
      this.toastr.error("Please select student", "Error!");
      return;
    }
    this.toastr.success("Information saved successfully", "Success!");
  }
  ResetAllForms() {
    this.resetCSPForm();
    this.resetExitForm();
    
    this.resetInternshipForm();
    this.cSPSurveyForm.reset();
    this.exitSurveyForm.reset();
    this.internshipSurveyForm.reset();
    this.employerSurveyForm.reset();
    this.alumniSurveyForm.reset();
    this.getSurveyResponse(this.CSPSurveyData.SurveyID)
    this.getSurveyResponse(this.ExitSurveyData.SurveyID)
    this.getSurveyResponse(this.InternshipSurveyData.SurveyID)
    this.getSurveyResponse(this.EmployerSurveyData.SurveyID)
    this.getSurveyResponse(this.AlumniSurveyData.SurveyID)

  }

  ResetControls(form: FormGroup) {
    Object.keys(form.controls).forEach(key => {
      
        form.removeControl(key);
      
    });

  }

  getSurvey(surveyType: string) {
    const request = {
      Surveytype: surveyType,
      Deptid: GlobalService.Deaprtment_ID

    }
    this.ngxService.start();
    this.IndirectAssessment.GetSurvey(request).
      subscribe(
        data => {
          this.ngxService.stop();
          this.CSPSurveyData = data;
         
          this.createForm(this.cSPSurveyForm, this.CSPSurveyData);



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
      SurveyIntakeID: this.intakeId
    }

    this.ResetControls(this.cSPSurveyForm);
    this.ResetControls(this.internshipSurveyForm);
    this.ResetControls(this.exitSurveyForm);
    this.ResetControls(this.employerSurveyForm);
    this.ResetControls(this.alumniSurveyForm);

    console.log(GlobalService.Deaprtment_ID);
    this.ngxService.start();
    this.IndirectAssessment.GetAllSurvey(request).
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
  createForm(form: FormGroup, SurveyData:any) {
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
  getQuestions(data: any, form: FormGroup) {
  
    return data.Questions.map(qid => {
    
      const answer =(form.get(qid.QID.toString()).value);

     
      return {
        QID: qid.QID,
        Answer: answer.toString()
      };
    });

  }
  submitCSPSurvey() {
   // console.log(this.cSPSurveyForm.value);
    if (this.StudentID == 0) {
      this.toastr.error("No student is selected", "Error!");
      return;

    }
    const payload = {

      StudentID: Number(this.StudentID),
      SurveyID: this.CSPSurveyData.SurveyID,
      Questions: this.getQuestions(this.CSPSurveyData, this.cSPSurveyForm)
    }
   // console.log(payload);
    this.ngxService.start();
    this.IndirectAssessment.SaveSurvey(payload).
      subscribe(
        response => {
          try {
            if (response) {
              this.cSPSurveyForm.reset();
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
  submitExitSurvey() {
   // console.log(this.exitSurveyForm.value);
    if (this.StudentID == 0) {
      this.toastr.error("No student is selected", "Error!");
      return;

    }
    const payload = {

      StudentID: Number(this.StudentID),
      SurveyID: this.ExitSurveyData.SurveyID,
      Questions: this.getQuestions(this.ExitSurveyData, this.exitSurveyForm)
    }
   
    this.ngxService.start();
    this.IndirectAssessment.SaveSurvey(payload).
      subscribe(
        response => {
          try {
            if (response) {
              this.exitSurveyForm.reset();
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
  submitInternshipSurvey() {
   // console.log(this.internshipSurveyForm.value);
    if (this.StudentID == 0) {
      this.toastr.error("No student is selected", "Error!");
      return;

    }
    const payload = {

      StudentID: Number(this.StudentID),
      SurveyID: this.InternshipSurveyData.SurveyID,
      Questions: this.getQuestions(this.InternshipSurveyData, this.internshipSurveyForm)
    }
   
    this.ngxService.start();
    this.IndirectAssessment.SaveSurvey(payload).
      subscribe(
        response => {
          try {
            if (response) {
              this.internshipSurveyForm.reset();
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
  submitEmployerSurvey() {
    //console.log(this.internshipSurveyForm.value);
    if (this.StudentID == 0) {
      this.toastr.error("No student is selected", "Error!");
      return;

    }
    const payload = {

      StudentID: Number(this.StudentID),
      SurveyID: this.EmployerSurveyData.SurveyID,
      Questions: this.getQuestions(this.EmployerSurveyData, this.employerSurveyForm)
    }
  
    this.ngxService.start();
    this.IndirectAssessment.SaveSurvey(payload).
      subscribe(
        response => {
          try {
            if (response) {
              this.employerSurveyForm.reset();
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
  submitAlumniSurvey() {
  //  console.log(this.alumniSurveyForm.value);
    if (this.StudentID == 0) {
      this.toastr.error("No student is selected", "Error!");
      return;

    }
    const payload = {

      StudentID: Number(this.StudentID),
      SurveyID: this.AlumniSurveyData.SurveyID,
      Questions: this.getQuestions(this.AlumniSurveyData, this.alumniSurveyForm)
    }
    
    this.ngxService.start();
    this.IndirectAssessment.SaveSurvey(payload).
      subscribe(
        response => {
          try {
            if (response) {
              this.alumniSurveyForm.reset();
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
  getSurveyResponse(surveyID: number) {
    const request = {
      SurveyID: surveyID,
      StudentID: this.StudentID

    }
    this.ngxService.start();
    this.IndirectAssessment.GetStudentSurvey(request).
      subscribe(
        data => {
          this.ngxService.stop();
          this.SurveyResponse = data;
       
          this.populateForm(this.SurveyResponse.StudentSurveySubDetail);



        },
        error => {
          this.ngxService.stop();
          this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
        });


  }

  populateForm(questions: any[]) {
    questions.forEach(question => {
      if (this.cSPSurveyForm.controls[question.QID]) {
      
        this.cSPSurveyForm.controls[question.QID].setValue(question.Answer);
      }
      if (this.exitSurveyForm.controls[question.QID]) {
        this.exitSurveyForm.controls[question.QID].setValue(question.Answer);
      }
      if (this.internshipSurveyForm.controls[question.QID]) {
        this.internshipSurveyForm.controls[question.QID].setValue(question.Answer);
      }
      if (this.employerSurveyForm.controls[question.QID]) {
        this.employerSurveyForm.controls[question.QID].setValue(question.Answer);
      }
      if (this.alumniSurveyForm.controls[question.QID]) {
        this.alumniSurveyForm.controls[question.QID].setValue(question.Answer);
      }
    });
  }

}
