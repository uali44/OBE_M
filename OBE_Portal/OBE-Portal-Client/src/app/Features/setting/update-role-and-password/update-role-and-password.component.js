import { __decorate } from "tslib";
import { Component } from '@angular/core';
let UpdateRoleAndPasswordComponent = class UpdateRoleAndPasswordComponent {
    constructor(toastr, ngxService, settingService) {
        this.toastr = toastr;
        this.ngxService = ngxService;
        this.settingService = settingService;
        this.users = [];
        this.role = [];
        this.userName = '';
        this.query = "";
        this.pager = {};
        this.pagesize = 50;
        this.dataset = [];
    }
    ngOnInit() {
    }
    searchUser() {
        if (this.userName === '') {
            return;
        }
        this.ngxService.start();
        let request = {
            userName: this.userName
        };
        this.settingService.getUserForUpdates(request).
            subscribe(response => {
            if (response != null) {
                this.users = response.users;
                this.role = response.roles;
            }
            this.ngxService.stop();
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
    resetPassword(FacultyMemberID) {
        this.settingService.updatePassword({ "FacultyMemberID": FacultyMemberID, "Password": "11223344" }).
            subscribe(data => {
            if (data) {
                this.toastr.success("Password updated successfully", 'Password Updation!');
            }
        }, error => {
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
    changeRole(role, facultyId) {
        this.settingService.updateRole({ "role": Number(role), "facultyId": facultyId }).
            subscribe(data => {
            if (data) {
                this.toastr.success("Role updated successfully", 'Password Updation!');
            }
        }, error => {
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
};
UpdateRoleAndPasswordComponent = __decorate([
    Component({
        selector: 'app-update-role-and-password',
        templateUrl: './update-role-and-password.component.html',
        styleUrls: ['./update-role-and-password.component.css']
    })
], UpdateRoleAndPasswordComponent);
export { UpdateRoleAndPasswordComponent };
//# sourceMappingURL=update-role-and-password.component.js.map