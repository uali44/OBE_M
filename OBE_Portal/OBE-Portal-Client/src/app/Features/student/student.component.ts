import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
declare const $: any;
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  ShowExitSurveyForm: any;
  constructor(private router: Router,
    private ngxService: NgxUiLoaderService) {
    this.ShowExitSurveyForm = Number(localStorage.getItem('ShowExitForm'))
  }

  ngOnInit() {
    this.activeClass('d');
    $("#HeaderSemesterDropdown").removeClass('hidden');
  }
  activeClass(value: any) {
    if (value == 'd') {
      $('#Dashboard-Active').addClass('active');

      $('#Registered-Courses-Active').removeClass('active');
      $('#Exit-Survey-Active').removeClass('active');
    }
    else if (value == 'r') {
      $('#Registered-Courses-Active').addClass('active');

      $('#Dashboard-Active').removeClass('active');
      $('#Exit-Survey-Active').removeClass('active');

    } else if (value == 'E') {
      $('#Exit-Survey-Active').addClass('active');

      $('#Dashboard-Active').removeClass('active');
      $('#Registered-Courses-Active').removeClass('active');
    }
    else {
      $('#Registered-Courses-Active').removeClass('active');
      $('#Dashboard-Active').addClass('active');
      this.router.navigate(["/student/main"]);
    }

  }

}
