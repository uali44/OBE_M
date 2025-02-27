import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { InterconnectedService } from '../../../Shared/Services/Global/interconnected.service';
import { IndirectAssessmentsComponent } from '../IndirectAssessments.component';
import { CoursesSearchService } from '../../../Services/CourseSearch/CourseSearch.service';
import { SettingService } from 'src/app/Services/Settings/setting.service';
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

  Added_Intake_PLOs: any[];
  Added_Intake_PEOs: any[] = [];


  intakeId: number;


  CSPSurveyData: any = [];
  InternshipSurveyData: any = [];
  ExitSurveyData: any = [];
  AlumniSurveyData: any = [];
  EmployerSurveyData: any = [];
  CSPSurveyForm: FormGroup = this.fb.group({});
  AlumniSurveyForm: FormGroup = this.fb.group({});
  InternshipSurveyForm: FormGroup = this.fb.group({});
  ExitSurveyForm: FormGroup = this.fb.group({});
  EmployerSurveyForm: FormGroup = this.fb.group({});

  surveyData: any = {
    studentID: 0,
    surveyID: 0,
    responses: []
  };


  SurveyResponse: any = [];





  constructor(
    private _CoursesSearchService: CoursesSearchService,
    private _SettingService: SettingService,
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
    this._CoursesSearchService.GetDepartmentPrograms(Number(val)).
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
    this._CoursesSearchService.GetProgramIntakes(Number(val)).
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
              this.GetIntakePLOsInformation(this.intakeId);
              this.GetIntakePeosInformation(this.intakeId);
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
  


  ResetAllForms() {
  
    this.CSPSurveyForm.reset();
    this.ExitSurveyForm.reset();
    this.InternshipSurveyForm.reset();
    this.EmployerSurveyForm.reset();
    this.AlumniSurveyForm.reset();
    this.getSurveyResponse();
   

  }

  ResetControls(form: FormGroup) {
    Object.keys(form.controls).forEach(key => {
      
        form.removeControl(key);
      
    });

  }

  //getSurvey(surveyType: string) {
  //  const request = {
  //    Surveytype: surveyType,
  //    Deptid: GlobalService.Deaprtment_ID

  //  }
  //  this.ngxService.start();
  //  this.IndirectAssessment.GetSurvey(request).
  //    subscribe(
  //      data => {
  //        this.ngxService.stop();
  //        this.CSPSurveyData = data;
         
  //        this.createForm(this.CSPSurveyForm, this.CSPSurveyData);



  //      },
  //      error => {
  //        this.ngxService.stop();
  //        this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
  //      });


  //}
  getAllSurvey() {
    const request = {
      Surveytype: "",
      Deptid: GlobalService.Deaprtment_ID,
      SurveyIntakeID: this.intakeId
    }

    this.ResetControls(this.CSPSurveyForm);
    this.ResetControls(this.InternshipSurveyForm);
    this.ResetControls(this.ExitSurveyForm);
    this.ResetControls(this.EmployerSurveyForm);
    this.ResetControls(this.AlumniSurveyForm);

    this.ngxService.start();
    this.IndirectAssessment.GetAllSurvey(request).
      subscribe(
        data => {
          this.ngxService.stop();
          this.CSPSurveyData = data.CSP;
       
          this.createForm(this.CSPSurveyForm, this.CSPSurveyData);
          this.ExitSurveyData = data.Exit;
        
          this.createForm(this.ExitSurveyForm, this.ExitSurveyData);
          this.EmployerSurveyData = data.Employer;
         
          this.createForm(this.EmployerSurveyForm, this.EmployerSurveyData);
          this.InternshipSurveyData = data.Internship;
        
          this.createForm(this.InternshipSurveyForm, this.InternshipSurveyData);
          this.AlumniSurveyData = data.Alumni;
         
          this.createForm(this.AlumniSurveyForm, this.AlumniSurveyData);



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
      var OptionID = null;
      var answer = null;
      if (qid.QType == "Multiple Choice") {
      
        OptionID = form.get(qid.QID.toString()).value;
      }
      else {
        answer = form.get(qid.QID.toString()).value;

      }
     
      return {
        StudentID: Number(this.StudentID),
        QID: qid.QID,
        OptionID: OptionID,
        Answer: answer?.toString() || null,
        CreatedBy: GlobalService.FacultyMember_ID,
      };
    });

  }
  submitCSPSurvey() {
  
    if (this.StudentID == 0) {
      this.toastr.error("No student is selected", "Error!");
      return;

    }
    const payload = this.getQuestions(this.CSPSurveyData, this.CSPSurveyForm)
    
  
    this.ngxService.start();
    this.IndirectAssessment.SaveSurvey(payload).
      subscribe(
        response => {
          try {
            if (response) {
              this.CSPSurveyForm.reset();
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
  
    if (this.StudentID == 0) {
      this.toastr.error("No student is selected", "Error!");
      return;

    }
    const payload = this.getQuestions(this.ExitSurveyData, this.ExitSurveyForm);
   
    this.ngxService.start();
    this.IndirectAssessment.SaveSurvey(payload).
      subscribe(
        response => {
          try {
            if (response) {
              this.ExitSurveyForm.reset();
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
  
    if (this.StudentID == 0) {
      this.toastr.error("No student is selected", "Error!");
      return;

    }
    const payload = this.getQuestions(this.InternshipSurveyData, this.InternshipSurveyForm);
   
    this.ngxService.start();
    this.IndirectAssessment.SaveSurvey(payload).
      subscribe(
        response => {
          try {
            if (response) {
              this.InternshipSurveyForm.reset();
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
  
    if (this.StudentID == 0) {
      this.toastr.error("No student is selected", "Error!");
      return;

    }
    const payload = this.getQuestions(this.EmployerSurveyData, this.EmployerSurveyForm)
  
    this.ngxService.start();
    this.IndirectAssessment.SaveSurvey(payload).
      subscribe(
        response => {
          try {
            if (response) {
              this.EmployerSurveyForm.reset();
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
  
    if (this.StudentID == 0) {
      this.toastr.error("No student is selected", "Error!");
      return;

    }
    const payload = this.getQuestions(this.AlumniSurveyData, this.AlumniSurveyForm);
    
    this.ngxService.start();
    this.IndirectAssessment.SaveSurvey(payload).
      subscribe(
        response => {
          try {
            if (response) {
              this.AlumniSurveyForm.reset();
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
  getSurveyResponse() {
   
    this.ngxService.start();
    this.IndirectAssessment.GetStudentSurvey(Number(this.StudentID)).
      subscribe(
        data => {
          this.ngxService.stop();
          this.SurveyResponse = data;
       
          this.populateForm(this.SurveyResponse);



        },
        error => {
          this.ngxService.stop();
          this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
        });


  }


  populateForm(questions: any[]) {
    questions.forEach(question => {

      const value = question.OptionID !== null ? question.OptionID : question.Answer;

      if (this.CSPSurveyForm.controls[question.QID]) {
      
        this.CSPSurveyForm.controls[question.QID].setValue(value);
      }
      if (this.ExitSurveyForm.controls[question.QID]) {
        this.ExitSurveyForm.controls[question.QID].setValue(value);
      }
      if (this.InternshipSurveyForm.controls[question.QID]) {
     
        this.InternshipSurveyForm.controls[question.QID].setValue(value);
      }
      if (this.EmployerSurveyForm.controls[question.QID]) {
        this.EmployerSurveyForm.controls[question.QID].setValue(value);
      }
      if (this.AlumniSurveyForm.controls[question.QID]) {
        this.AlumniSurveyForm.controls[question.QID].setValue(value);
      }
    });
  }




  FilterPLO(id: number) {
    const filtered = this.Added_Intake_PLOs.find((data: any) => data.PLO_ID == id);
    return filtered?.PLO_Title || null;
  }
  FilterPEO(id: number) {
    const filtered = this.Added_Intake_PEOs.find((data: any) => data.peoId == id);
    return filtered?.peoTitle || null;
  }


  GetIntakePLOsInformation(admissionOpenProgramId: any) {
    this.Added_Intake_PLOs = [];
    this.ngxService.start();
    this._SettingService.GetPlosInformation({ programId: admissionOpenProgramId, admissionOpenProgramId: Number(admissionOpenProgramId) }).
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
    this._SettingService.GetPeosInformation({ programId: admissionOpenProgramId, admissionOpenProgramId: Number(admissionOpenProgramId) }).
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
