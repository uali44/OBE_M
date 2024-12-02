import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from '../../Services/Global/global.service';
import { Validators } from '@angular/forms';
let HeaderComponent = class HeaderComponent {
    constructor(router, header, toastr, formBuilder, interConnectedService) {
        this.router = router;
        this.header = header;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.interConnectedService = interConnectedService;
        this.submitted = false;
        this.IsStudent = false;
        this.IsStudent = false;
        if (Number(GlobalService.IsStudent) == 1) {
            this.router.navigate(['/student']);
            this.IsStudent = true;
        }
        this.User_Name = GlobalService.Name;
    }
    ngOnInit() {
        this.UpdatePasswordForm = this.formBuilder.group({
            Current_Password: ['', [Validators.required]],
            New_Password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
            Confirm_Password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
        }, { validator: this.MustMatch('New_Password', 'Confirm_Password') });
        this.interConnectedService.CurrentSemesterID.subscribe(message => message = GlobalService.Semester_ID.toString()); // for get data
        this.GetSemesterList();
    }
    MustMatch(controlName, matchingControlName) {
        return (formGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                return;
            }
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    }
    get Update_Password_Form() { return this.UpdatePasswordForm.controls; }
    GetSemesterList() {
        this.header.GetSemesterListBasedOnFaculty(GlobalService.FacultyMember_ID).
            subscribe(data => {
            if (data != null) {
                this.Semester_Details_lst = data;
            }
            else {
                this.Semester_Details_lst = [];
            }
        }, error => {
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
    UpdateSemesterID(e) {
        this.interConnectedService.ChangeSemesterID(e.target.value);
    }
    Logout() {
        localStorage.clear();
        document.location.href = GlobalService.AppBaseURL;
    }
    ShowChangePassword() {
        this.UpdatePasswordForm.reset();
        this.submitted = false;
        $("#Update-Password-Modal").modal('show');
    }
    UpdatePassword() {
        this.submitted = true;
        if (this.UpdatePasswordForm.invalid) {
            return;
        }
        this.Update_Password_Form.Current_Password.value;
        var IsStudent = false;
        var UserID = 0;
        if (GlobalService.IsStudent == 1) {
            IsStudent = true;
            UserID = GlobalService.StudentID;
        }
        else {
            IsStudent = false;
            UserID = GlobalService.FacultyMember_ID;
        }
        this.header.UpdatePassword({ "Current_Password": this.Update_Password_Form.Current_Password.value, "New_Password": this.Update_Password_Form.New_Password.value, "UserID": UserID, "IsStudent": IsStudent }).
            subscribe(data => {
            if (data) {
                $("#Update-Password-Modal").modal('hide');
                this.toastr.success("Password updated successfully", 'Password Updation!');
            }
            else {
                this.toastr.error("Current password is not matched", 'Password Updation!');
            }
        }, error => {
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
};
HeaderComponent = __decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.css']
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map