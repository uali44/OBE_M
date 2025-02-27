import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { InterconnectedService } from '../../../Shared/Services/Global/interconnected.service';
import { CoursesSearchService } from '../../../Services/CourseSearch/CourseSearch.service';
import { ToastrService } from 'ngx-toastr';
import { IndirectAssessment } from '../../../Services/IndirectAssessment/IndirectAssessment.service';
import { Router } from '@angular/router';
declare const $: any;
@Component({
  selector: 'app-exit-survey-form',
  templateUrl: './exit-survey-form.component.html',
  styleUrls: ['./exit-survey-form.component.css']
})
export class ExitSurveyFormComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
    private ngxService: NgxUiLoaderService,
    private IndirectAssessment: IndirectAssessment,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
  }
  SaveExitForm() {
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
      "StudentID": GlobalService.StudentID
    }
    this.ngxService.start();
    //this.IndirectAssessment.SaveExitForm(data).
    //  subscribe(
    //    response => {
    //      try {
    //        if (response) {
    //          this.toastr.success("Information saved successfully", "Success!");
    //          $("#ExitSurveyFormRemarks").val('')
    //          localStorage.removeItem('ShowExitForm');;
    //          localStorage.setItem("ShowExitForm", '0');
    //          this.router.navigate(["/student/main"]);
    //          $("#Exit-Survey-Active").addClass('hidden');
    //          $('#Dashboard-Active').addClass('active');
    //        }
    //        this.ngxService.stop();
    //      } catch (e) {
    //        this.ngxService.stop();
    //        this.toastr.error("Internal server error occured while processing your request", "Error!");
    //      }

    //    },
    //    error => {
    //      this.ngxService.stop();
    //      this.toastr.error("Internal server error occured while processing your request", "Error!");
    //    });


  }
}
