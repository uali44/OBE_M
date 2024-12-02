import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SettingService } from 'src/app/Services/Settings/setting.service';

@Component({
  selector: 'app-update-role-and-password',
  templateUrl: './update-role-and-password.component.html',
  styleUrls: ['./update-role-and-password.component.css']
})
export class UpdateRoleAndPasswordComponent implements OnInit {
  users: any[] = [];
  role: any[] = [];
  
  userName: string = '';
  query: string = "";
  pager: any = {};
  page: any;
  pagesize: number = 50;
  dataset: any[] = [];
  serialNumber: number;
  constructor(private toastr: ToastrService,
    private ngxService: NgxUiLoaderService,
    private settingService: SettingService) { }

  ngOnInit(): void {
  }

  searchUser() {
    if(this.userName === '') {
      return;
    }

    this.ngxService.start();
    let request = {
      userName: this.userName
    };
    this.settingService.getUserForUpdates(request).
      subscribe(
        response => {
          if (response != null) {
            this.users = response.users;
            this.role = response.roles;
          }
          this.ngxService.stop();
        },
        error => {
          this.ngxService.stop();
          this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
  }

  resetPassword(FacultyMemberID) {
    this.settingService.updatePassword({ "FacultyMemberID": FacultyMemberID, "Password":"11223344" }).
    subscribe(
      data => {
        if (data) {
          this.toastr.success("Password updated successfully",'Password Updation!');
        }
      },
      error => {
        this.toastr.error("Internal server error occured while processing your request", "Error!")
      });
  }

  changeRole(role, facultyId){
    this.settingService.updateRole({ "role": Number(role), "facultyId": facultyId }).
    subscribe(
      data => {
        if (data) {
          this.toastr.success("Role updated successfully",'Password Updation!');
        }
      },
      error => {
        this.toastr.error("Internal server error occured while processing your request", "Error!")
      });
  }

}
