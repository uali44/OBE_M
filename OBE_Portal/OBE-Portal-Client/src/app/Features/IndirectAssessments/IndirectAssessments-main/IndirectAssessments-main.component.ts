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
  StudentID: number;
  Is_Permission_Institute: boolean = false;
  Is_Permission_Deaprtment: boolean = false;
  Is_Permission_Faculty: boolean = false;
  Temp_Institute_ID: number;
  Temp_Deaprtment_ID: number;

  constructor(
    private _CoursesSearchService: CoursesSearchService,
    private toastr: ToastrService,
    private ngxService: NgxUiLoaderService,
    private _InterconnectedService: InterconnectedService,
    private IndirectAssessmentsComponent: IndirectAssessmentsComponent,
    private IndirectAssessment: IndirectAssessment,
    
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
              this.Get_Intakes(this.Temp_Deaprtment_ID);
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
  }

}
