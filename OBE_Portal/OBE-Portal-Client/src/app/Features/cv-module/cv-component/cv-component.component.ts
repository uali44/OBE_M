// cv-component.component.ts
import { Component, OnInit } from '@angular/core';
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
declare const $: any;

@Component({
  selector: 'app-cv-component',
  templateUrl: './cv-component.component.html',
  styleUrls: ['./cv-component.component.css']
})
export class CvComponentComponent implements OnInit {
  cvForm: FormGroup;
  name: string;
  activities: any[] = [];
  selectedActivityId: number = null;
  constructor(
    private _CoursesSearchService: CoursesSearchService,
    private toastr: ToastrService,
    private ngxService: NgxUiLoaderService,
    private _ReportsService: ReportsService,
    private formBuilder: FormBuilder,
    private ProfileService: ProfileService,
    private pagerService: PagerService,
    private msgForDashboard: InterconnectedService

  ) {
    this.initForm();
  }

  ngOnInit(): void {

    this.name = GlobalService.Name;
  }

  private initForm(): void {
   
  }


  fetchActivities(): void {
    this.ProfileService.GetActivities().subscribe(
      (data) => {
        this.activities = data;
      },
      (error) => {
        console.error('Error fetching activities:', error);
      }
    );
  }


  // Form field error checking methods
  isFieldInvalid(fieldName: string): boolean {
    const field = this.cvForm.get(fieldName);
    return field ? (field.invalid && field.touched) : false;
  }

  
  



  onSubmit(): void {
    if (this.cvForm.valid) {
      console.log(this.cvForm.value);
      alert('Data saved successfully!');
    } else {
      alert('Please fill in all required fields');
    }
  }

  resetForm(): void {
   
  }
}
