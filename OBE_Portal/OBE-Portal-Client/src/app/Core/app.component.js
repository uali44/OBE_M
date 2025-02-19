import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from '../Shared/Services/Global/global.service';
let AppComponent = class AppComponent {
    constructor(router, ngxService) {
        this.router = router;
        this.ngxService = ngxService;
        this.title = 'OBE-Portal-Web';
        if (GlobalService.FacultyMember_ID == undefined) {
            GlobalService.ApiUrl = document.getElementsByTagName('base')[0].href + 'api/';
            GlobalService.AppBaseURL = document.getElementsByTagName('base')[0].href;
            GlobalService.FacultyMember_ID = Number(localStorage.getItem('FacultyMember_ID'));
            GlobalService.Semester_ID = Number(localStorage.getItem('Semester_ID'));
            GlobalService.Permissions = JSON.parse(localStorage.getItem('Permissions'));
            GlobalService.Deaprtment_ID = JSON.parse(localStorage.getItem('D_ID'));
            GlobalService.Institute_ID = JSON.parse(localStorage.getItem('I_ID'));
            GlobalService.Token = localStorage.getItem('Token');
            GlobalService.IsStudent = Number(localStorage.getItem('IsStudent'));
            GlobalService.Name = localStorage.getItem('User_Name');
            GlobalService.StudentID = Number(localStorage.getItem('StudentID'));
            //localStorage.removeItem('FacultyMember_ID');
            //localStorage.removeItem('Semester_ID');
            //localStorage.removeItem('Permissions');
            //localStorage.removeItem('D_ID');
            //localStorage.removeItem('I_ID');
            //localStorage.removeItem('Token');
            //localStorage.removeItem('IsStudent');
            //localStorage.removeItem('User_Name');
        }
        if (Number(GlobalService.IsStudent) == 1) {
            this.router.navigate(['/student']);
        }
        else {
            this.router.navigate(['/']);
        }
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map