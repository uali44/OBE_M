import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlosRoutingModule } from './plos-routing.module';
import { PlosComponent } from './plos/plos.component';

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


@NgModule({
  declarations: [PlosComponent],
  imports: [
    CommonModule,
    ChartModule,
    ToastrModule,
    HttpClientModule,
    NgxUiLoaderModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    PlosRoutingModule,
    PipessharedModule
  ]
})
export class PLOSModule { }
