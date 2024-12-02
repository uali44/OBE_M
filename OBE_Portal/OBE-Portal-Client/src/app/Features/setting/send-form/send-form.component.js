import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SendFormComponent = class SendFormComponent {
    constructor(settingService, toastr, ngxService) {
        this.settingService = settingService;
        this.toastr = toastr;
        this.ngxService = ngxService;
        this.CSPForm = "";
        this.InternshipForm = "";
        this.ExitSurveyForm = "";
    }
    ngOnInit() {
    }
    SendEmail(Status) {
        this.ngxService.start();
        let request = {};
        var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (Status === 1) {
            request = { "Status": Status, "Email": this.CSPForm, "RootPath": "" };
            if (!filter.test(this.CSPForm)) {
                this.toastr.error("Invalid email", "Error!");
                return;
            }
        }
        if (Status === 2) {
            request = { "Status": Status, "Email": this.InternshipForm, "RootPath": "" };
            if (!filter.test(this.InternshipForm)) {
                this.toastr.error("Invalid email", "Error!");
                return;
            }
        }
        if (Status === 3) {
            request = { "Status": Status, "Email": this.ExitSurveyForm, "RootPath": "" };
            if (!filter.test(this.ExitSurveyForm)) {
                this.toastr.error("Invalid email", "Error!");
                return;
            }
        }
        this.settingService.SendSurveyForm(request).
            subscribe(response => {
            if (response != null) {
                this.toastr.success("Email sent successfully", "Success");
                this.CSPForm = "";
                this.InternshipForm = "";
                this.ExitSurveyForm = "";
            }
            this.ngxService.stop();
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
};
SendFormComponent = __decorate([
    Component({
        selector: 'app-send-form',
        templateUrl: './send-form.component.html',
        styleUrls: ['./send-form.component.css']
    })
], SendFormComponent);
export { SendFormComponent };
//# sourceMappingURL=send-form.component.js.map