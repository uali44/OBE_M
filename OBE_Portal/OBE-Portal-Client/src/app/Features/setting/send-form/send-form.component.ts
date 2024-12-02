import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SettingService } from '../../../Services/Settings/setting.service';

@Component({
  selector: 'app-send-form',
  templateUrl: './send-form.component.html',
  styleUrls: ['./send-form.component.css']
})
export class SendFormComponent implements OnInit {
  CSPForm: string;
  InternshipForm: string;
  ExitSurveyForm: string;
  constructor(private settingService: SettingService,
    private toastr: ToastrService,
    private ngxService: NgxUiLoaderService) {
    this.CSPForm = "";
    this.InternshipForm = "";
    this.ExitSurveyForm = "";
  }

  ngOnInit(): void {
  }
  SendEmail(Status: number) {
    this.ngxService.start();
    let request = {};
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (Status === 1) {
      request = { "Status": Status, "Email": this.CSPForm, "RootPath": "" }
      if (!filter.test(this.CSPForm)) {
        this.toastr.error("Invalid email", "Error!");
        return;
      }
    }
    if (Status === 2) {
      request = { "Status": Status, "Email": this.InternshipForm, "RootPath": "" }
      if (!filter.test(this.InternshipForm)) {
        this.toastr.error("Invalid email", "Error!");
        return;
      }
    }
    if (Status === 3) {
      request = { "Status": Status, "Email": this.ExitSurveyForm, "RootPath": "" }
      if (!filter.test(this.ExitSurveyForm)) {
        this.toastr.error("Invalid email", "Error!");
        return;
      }
    }
    this.settingService.SendSurveyForm(request).
      subscribe(
        response => {
          if (response != null) {
            this.toastr.success("Email sent successfully", "Success");
            this.CSPForm = "";
            this.InternshipForm = "";
            this.ExitSurveyForm = "";
          }
          this.ngxService.stop();
        },
        error => {
          this.ngxService.stop();
          this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
  }
}
