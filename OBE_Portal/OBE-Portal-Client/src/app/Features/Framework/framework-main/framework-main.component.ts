import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { InterconnectedService } from '../../../Shared/Services/Global/interconnected.service';
import { FrameworkComponent } from '../framework.component';
import { CoursesSearchService } from '../../../Services/CourseSearch/CourseSearch.service';
import { CoursesCLOSService } from './../../../Services/CourseCLOS/coursesCLO.service';
import { SettingService } from 'src/app/Services/Settings/setting.service';
import { ToastrService } from 'ngx-toastr';



declare const $: any;
@Component({
  selector: 'app-framework-main',
  templateUrl: './framework-main.component.html',
  styleUrls: ['./framework-main.component.css']
})
export class FrameworkMainComponent implements OnInit {
 
    Added_Intake_PLOs: any[];
    programId: any;
    Added_Intake_PEOs: any[];
  constructor(
    private FrameworkComponent: FrameworkComponent,
    private InterconnectedService: InterconnectedService,
    private ngxService: NgxUiLoaderService,
    private _SettingService: SettingService,
    private _CoursesSearchService: CoursesSearchService,
    private CoursesCLOSService: CoursesCLOSService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.InterconnectedService.CloseTab.subscribe(search => {
      this.CloseTabContent();
    });
  }

  receiveData(data: any) {
    let searchData = JSON.parse(data);
    this.programId = searchData?.admissionOpenProgramId;
    this.GetIntakePLOsInformation(this.programId);
    this.GetIntakePeosInformation(this.programId);

  
  }

  loadTab(Title) {
    $("#Content").removeClass('dashboard-bg');
    this.FrameworkComponent.ShowTab(Title);
    GlobalService.Report_Sub_Tab = true;
    $("#settings-tab").removeClass('active');
    $("#Any-tab").addClass('active');
  }
  CloseTabContent() {
    $("#Content").addClass('dashboard-bg');
    $("#Any-tab").removeClass('active');
    $("#settings-tab").addClass('active');
    $("#SettingsMainTab").addClass('active');
  }


  GetIntakePLOsInformation(admissionOpenProgramId: any) {
    this.Added_Intake_PLOs = [];
    this.ngxService.start();
    this._SettingService.GetPlosInformation({ programId: this.programId, admissionOpenProgramId: Number(admissionOpenProgramId) }).
      subscribe(
        response => {
          if (response != null) {
            this.Added_Intake_PLOs = response;

          }
          this.ngxService.stop();
        },
        error => {
          this.ngxService.stop();
          this.toastr.error("Internal server error occured while processing your request", "Error!")
        });
  }

  GetIntakePeosInformation(admissionOpenProgramId: any) {
    this.Added_Intake_PEOs = [];
    this.ngxService.start();
    this._SettingService.GetPeosInformation({ programId: this.programId, admissionOpenProgramId: Number(admissionOpenProgramId) }).
      subscribe(
        response => {
          if (response != null) {
            this.Added_Intake_PEOs = response;

          }
          this.ngxService.stop();
        },
        error => {
          this.ngxService.stop();
          this.toastr.error("Internal server error occured while processing your request", "Error!")
        });
  }














}
