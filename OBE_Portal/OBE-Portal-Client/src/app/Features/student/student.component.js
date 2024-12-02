import { __decorate } from "tslib";
import { Component } from '@angular/core';
let StudentComponent = class StudentComponent {
    constructor(router, ngxService) {
        this.router = router;
        this.ngxService = ngxService;
        this.ShowExitSurveyForm = Number(localStorage.getItem('ShowExitForm'));
    }
    ngOnInit() {
        this.activeClass('d');
        $("#HeaderSemesterDropdown").removeClass('hidden');
    }
    activeClass(value) {
        if (value == 'd') {
            $('#Dashboard-Active').addClass('active');
            $('#Registered-Courses-Active').removeClass('active');
            $('#Exit-Survey-Active').removeClass('active');
        }
        else if (value == 'r') {
            $('#Registered-Courses-Active').addClass('active');
            $('#Dashboard-Active').removeClass('active');
            $('#Exit-Survey-Active').removeClass('active');
        }
        else if (value == 'E') {
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
};
StudentComponent = __decorate([
    Component({
        selector: 'app-student',
        templateUrl: './student.component.html',
        styleUrls: ['./student.component.css']
    })
], StudentComponent);
export { StudentComponent };
//# sourceMappingURL=student.component.js.map