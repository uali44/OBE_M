
import { Component, OnInit } from '@angular/core';
import { CoursesSearchService } from '../../Services/CourseSearch/CourseSearch.service';
import { ToastrService } from 'ngx-toastr';

import { NgxUiLoaderService } from 'ngx-ui-loader';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Institutes: any[] = [];
 
  loginForm: FormGroup;
  constructor(
    private _CoursesSearchService: CoursesSearchService,
    private toastr: ToastrService,
    private ngxService: NgxUiLoaderService,
    private fb: FormBuilder
  )
  {
    this.loginForm = this.fb.group({
      Username: ['', [Validators.required,]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      Institute_ID: ['', [Validators.required]],
    });
  }
  Get_Institutes() {
    this.ngxService.start();
    this.Institutes = [];
    this._CoursesSearchService.Get_Institute().
      subscribe(
        response => {
          try {
            if (response != null) {
             {
                this.Institutes = response;
              }

            }
            this.ngxService.stop();
          } catch (e) {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
          }

        },
        error => {
          this.ngxService.stop();
          this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
  }
  ngOnInit(): void {
    this.Get_Institutes();

  }
  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted!', this.loginForm.value);
    } else {
      console.log('Form is not valid');
    }
  }
}
