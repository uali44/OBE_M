import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlosRoutingModule } from './plos-routing.module';
import { PlosComponent } from './plos/plos.component';
import { ChartModule } from 'angular-highcharts';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { PipessharedModule } from '../../Shared/Pipe/pipesshared.module';
let PLOSModule = class PLOSModule {
};
PLOSModule = __decorate([
    NgModule({
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
], PLOSModule);
export { PLOSModule };
//# sourceMappingURL=plos.module.js.map