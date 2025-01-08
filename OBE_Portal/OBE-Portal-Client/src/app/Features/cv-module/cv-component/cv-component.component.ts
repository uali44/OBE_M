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
  activityForm: FormGroup;
  name: string;
  activities: any[] = [];
  fields: any[] = [];
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
    this.activityForm = this.formBuilder.group({
      activity: ['', Validators.required]
    });
    this.initForm();
  }

  ngOnInit(): void {

    this.name = GlobalService.Name;
    this.fetchActivities();
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


  onActivityChange(activityId: number): void {
    this.selectedActivityId = activityId;
    this.fetchFields(activityId);
  }
  
  fetchFields(activityId: number): void {
    this.ProfileService.GetActivitySubDetails(activityId).subscribe(
      (data) => {
        this.fields = data;

        // Dynamically add controls to the form
        this.fields.forEach((field) => {
          this.activityForm.addControl(field.FieldName, this.formBuilder.control('', Validators.required));
        });
      },
      (error) => {
        console.error('Error fetching fields:', error);
      }
    );
  }




  onSubmit(): void {

    if (this.activityForm.valid) {
      console.log(this.activityForm.value);
    }
  }

  resetForm(): void {
   
  }
}
