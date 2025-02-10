import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular-highcharts';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from '../../Shared/Services/Global/auth.guard';
import { InterceptorService } from '../../Shared/Services/Global/interceptor.service';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { PipessharedModule } from '../../Shared/Pipe/pipesshared.module';

import { SearchFormComponent } from '../../Shared/Components/searchForm/searchForm.component';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingMainComponent } from './setting-main/setting-main.component';
import { SettingComponent } from './setting.component';
import { FypSettingsComponent } from './fyp-settings/fyp-settings.component';
import { SendFormComponent } from './send-form/send-form.component';
import { ExitSurveyFormEnableComponent } from './exit-survey-form-enable/exit-survey-form-enable.component';
import { UpdateRoleAndPasswordComponent } from './update-role-and-password/update-role-and-password.component';
import { ManagePlosComponent } from './manage-plos/manage-plos.component';
import { PlosComponent } from './plos/plos.component';
import { AssessmentSchemesComponent } from './assessment-schemes/assessment-schemes.component';
import { PeosComponent } from './peos/peos.component';
import { AddSkillComponent } from './skills/add-skill.component'
import { SharedModuleModule } from '../../Shared/shared-module/shared-module.module'

@NgModule({
  declarations: [SettingMainComponent, SettingComponent, FypSettingsComponent, SendFormComponent, ExitSurveyFormEnableComponent, UpdateRoleAndPasswordComponent, ManagePlosComponent, PlosComponent, AssessmentSchemesComponent, PeosComponent, AddSkillComponent],
  imports: [
    CommonModule,
    SettingRoutingModule,
    ChartModule,
    ToastrModule,
    HttpClientModule,
    NgxUiLoaderModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    PipessharedModule,
    SharedModuleModule,
  ], exports: [
   

  ],
  providers: [AuthGuard, { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
})
export class SettingModule {

  
}
