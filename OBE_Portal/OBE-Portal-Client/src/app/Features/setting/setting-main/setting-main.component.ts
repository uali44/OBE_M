import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { InterconnectedService } from '../../../Shared/Services/Global/interconnected.service';
import { SettingComponent } from '../setting.component';
declare const $: any;
@Component({
  selector: 'app-setting-main',
  templateUrl: './setting-main.component.html',
  styleUrls: ['./setting-main.component.css']
})
export class SettingMainComponent implements OnInit {

  FYP_Settings: boolean = false;
  SendForm: boolean = false;
  Settings_Exit_Survey_Form: boolean = false;
  Setting_Update_Password_And_Role: boolean = false;
  Setting_Manage_PLOs: boolean = false;
  setting_manage_Assessment: boolean = false;
  setting_manage_peos: boolean = false;
  setting_add_skill: boolean = false;


  Is_Permission_Setting_Main: boolean = false;
  Is_Permission_FYP_Settings: boolean = false;
  Is_Permission_FYP_Settings_Widget: boolean = false;
  Is_Permission_Settings_Exit_Survey_Form: boolean = false;
  Is_Permission_Setting_Update_Password_And_Role: boolean = false;
  Is_Permission_Setting_Manage_PLOs: boolean = false;


  constructor(
    private SettingComponent: SettingComponent,
    private InterconnectedService: InterconnectedService,
    private ngxService: NgxUiLoaderService,

  ) {
    this.Is_Permission_Setting_Main = GlobalService.Permissions.indexOf("Setting_Main") >= 0 ? true : false;
    this.Is_Permission_FYP_Settings = GlobalService.Permissions.indexOf("FYP_Settings") >= 0 ? true : false;
    this.Is_Permission_FYP_Settings_Widget = GlobalService.Permissions.indexOf("FYP_Settings_Widget") >= 0 ? true : false;
    this.Is_Permission_Settings_Exit_Survey_Form = GlobalService.Permissions.indexOf("Settings_Exit_Survey_Form") >= 0 ? true : false;
    this.Is_Permission_Setting_Update_Password_And_Role = GlobalService.Permissions.indexOf("Setting_Update_Password_And_Role") >= 0 ? true : false;
    this.Is_Permission_Setting_Manage_PLOs = GlobalService.Permissions.indexOf("Setting_Manage_PLOs") >= 0 ? true : false;
  }

  ngOnInit() {
    this.InterconnectedService.CloseTab.subscribe(search => {
      this.CloseTabContent();
    });
  }
  loadTab(Title) {
    $("#Content").removeClass('dashboard-bg');
    this.SettingComponent.ShowTab(Title);
    GlobalService.Report_Sub_Tab = true;


    if (Title == 'Add skills') {
      this.setting_add_skill = true;
      this.setting_manage_peos = false;
      this.setting_manage_Assessment = false;
      this.Setting_Manage_PLOs = false;
     
      this.Settings_Exit_Survey_Form = false;
      this.FYP_Settings = false;
      this.SendForm = false;
      this.Setting_Update_Password_And_Role = false

    }

    if (Title == 'Manage PEOs') {
      this.setting_manage_peos = true;
      this.setting_manage_Assessment = false;
      this.Setting_Manage_PLOs = false;
      this.setting_add_skill = false;
      this.Settings_Exit_Survey_Form = false;
      this.FYP_Settings = false;
      this.SendForm = false;
      this.Setting_Update_Password_And_Role = false

    }

    if (Title == 'Assessment Schemes') {
      this.setting_manage_Assessment = true;
      this.Setting_Manage_PLOs = false;

      this.Settings_Exit_Survey_Form = false;
      this.FYP_Settings = false;
      this.SendForm = false;
      this.Setting_Update_Password_And_Role = false
      this.setting_manage_peos = false;
      this.setting_add_skill = false;

    }

   
    if (Title == 'FYP Module Settings') {
      this.FYP_Settings = true;

      this.SendForm = false;
      this.Settings_Exit_Survey_Form = false;
      this.Setting_Update_Password_And_Role = false; 
      this.Setting_Manage_PLOs = false;
      this.setting_manage_peos = false;
      this.setting_manage_Assessment = false;
      this.setting_add_skill = false;
    }

    if (Title == 'Send Forms') {
      this.SendForm = true;
      this.setting_manage_Assessment = false;
      this.FYP_Settings = false;
      this.Settings_Exit_Survey_Form = false;
      this.Setting_Update_Password_And_Role = false;
      this.Setting_Manage_PLOs = false;
      this.setting_manage_peos = false;
      this.setting_add_skill = false;

    } else if (Title == 'Exit Survey Form') {
      this.Settings_Exit_Survey_Form = true;

      this.FYP_Settings = false;
      this.SendForm = false;
      this.Setting_Update_Password_And_Role = false;
      this.Setting_Manage_PLOs = false;
      this.setting_manage_Assessment = false;
      this.setting_manage_peos = false;
      this.setting_add_skill = false;

    } else if (Title == 'Security') {
      this.Setting_Update_Password_And_Role = true;

      this.Settings_Exit_Survey_Form = false;
      this.FYP_Settings = false;
      this.SendForm = false;
      this.Setting_Manage_PLOs = false;
      this.setting_manage_Assessment = false;
      this.setting_manage_peos = false;
      this.setting_add_skill = false;

    } else if (Title == 'Manage PLOs') {
      this.Setting_Manage_PLOs = true;

      this.Settings_Exit_Survey_Form = false;
      this.FYP_Settings = false;
      this.SendForm = false;
      this.Setting_Update_Password_And_Role = false;
      this.setting_manage_Assessment = false;
      this.setting_manage_peos = false;
      this.setting_add_skill = false;
    }

   
    $("#settings-tab").removeClass('active');
    $("#Any-tab").addClass('active');
  }
  CloseTabContent() {
    $("#Content").addClass('dashboard-bg');
    $("#Any-tab").removeClass('active');
    $("#settings-tab").addClass('active');
    $("#SettingsMainTab").addClass('active');
  }

}
