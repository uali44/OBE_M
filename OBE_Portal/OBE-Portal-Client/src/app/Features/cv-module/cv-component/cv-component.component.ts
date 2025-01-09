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


  onActivityChange(val): void {

    this.selectedActivityId = val;
    Object.keys(this.activityForm.controls).forEach(key => {
      if (key !== 'activity') { 
        this.activityForm.removeControl(key);
      }
    });

    this.fetchFields(val);
    this.activityForm.controls['activity'].setValue(this.selectedActivityId);
  }

  fetchFields(val): void {
    const requestdata = { ActivityID: val }
    this.ProfileService.GetActivitySubDetails(requestdata).subscribe(
      (data) => {

        this.fields = data;
        console.log(this.fields);
        // Dynamically add controls to the form
        this.fields.forEach((field) => {
          this.activityForm.addControl(field.subDetail, this.formBuilder.control('', Validators.required));
        });
      },
      (error) => {
        console.error('Error fetching fields:', error);
      }
    );
  }




  onSubmit(): void {

    if (this.activityForm.invalid) {
      return;
    }

    const activityData = {
      FacultyID: GlobalService.FacultyMember_ID, // This should come from your context
      ActivityID: this.selectedActivityId,
      Details: this.fields.map((field) => ({
        DetailName: field.subDetail,
        DetailValue: this.activityForm.value[field.subDetail],
      })),
    };

    this.ProfileService.SaveActivity(activityData).subscribe((response) => {
      if (response) {
        this.toastr.success('Activity saved successfully.');
        this.activityForm.reset();
      } else {
        this.toastr.error('Failed to save activity.');
      }
    });
  }


}
