import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { CoursesSearchService } from '../../../Services/CourseSearch/CourseSearch.service';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ReportsService } from '../../../Services/Reports/reports.service';
import { PagerService } from '../../../Shared/Services/Global/Pager';
import { HighlightPipe } from '../../../Shared/Pipe/highlight.pipe';
import { FilterPipe } from '../../../Shared/Pipe/filter';
import { ProfileService } from './../../../Services/Profile/profile.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { InterconnectedService } from '../../../Shared/Services/Global/interconnected.service';
import { Observable } from 'rxjs';

declare const $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: string;
  email: string;
  faculty: any = {
    FacultyMemberID: 0,
    phone: '',
    FacultyType: '',
    FacultyRole: '',
  };
  //facultydata: any = {
 
  //  FacultyMemberID :0,
  //  Name :"",
  //  Email :"" ,
  //  Phone:"",
  //  FacultyType :"",
  //  FacultyRole :"",
  //};
  facultydata: any=null;
  data: any;
  FacultyType: string[] = ['Permanent/Participating', 'Visiting/Supporting'];
  FacultyRole: string[] = ['SA', 'PA', 'SP', 'IP', 'Additional'];
  facultyId: number;
  constructor(
    private _CoursesSearchService: CoursesSearchService,
    private toastr: ToastrService,
    private ngxService: NgxUiLoaderService,
    private _ReportsService: ReportsService,
    private formBuilder: FormBuilder,
    private ProfileService: ProfileService,
    private pagerService: PagerService,
    private msgForDashboard: InterconnectedService,
    private cdr: ChangeDetectorRef
   
  ) { }

  ngOnInit(): void {

    this.getFaculty();
   
    this.username = GlobalService.Name;
    this.faculty.FacultyMemberID = GlobalService.FacultyMember_ID;
    this.faculty.phone = this.facultydata.phone;

  }
  openFacultyModal() {
    // Set values for the modal
    this.faculty = {
      phone: this.facultydata[0]?.Phone || '',
      FacultyType: this.facultydata[0]?.FacultyType ||'' ,
      FacultyRole: this.facultydata[0]?.FacultyRole || '', 
    };

    // Open the modal (using jQuery for simplicity, you can replace with Angular modal handling)
    $('#addFacultyModal').modal('show');
  }
  addFaculty()
  {
    console.log(this.faculty);
    this.faculty.FacultyMemberID = GlobalService.FacultyMember_ID;

    this.ngxService.start();
    this.ProfileService.AddFacultyData([this.faculty]).
      subscribe(
        data => {
          this.ngxService.stop();
        
            this.toastr.success("Profile Updated successfully", "Success");
          $("#addFacultyModal").modal("hide");
          this.getFaculty();
         
        },
        error => {
          this.ngxService.stop();
          this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
        });
  }

  getFaculty() {
    if (GlobalService.TempFacultyMember_ID == null) {
      this.facultyId = GlobalService.FacultyMember_ID
    }
    else {

      this.facultyId = GlobalService.TempFacultyMember_ID
    }
   
    this.ngxService.start();
    this.ProfileService.GetFacultyDetails(this.facultyId).
      subscribe(
        data => {
          this.ngxService.stop();
         
          this.facultydata = data;
          this.email = data?.Email || '';
          console.log(this.facultydata);
          console.log(this.facultydata[0].Email)
        

         
        },
        error => {
          this.ngxService.stop();
          this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
        });
  }


}

