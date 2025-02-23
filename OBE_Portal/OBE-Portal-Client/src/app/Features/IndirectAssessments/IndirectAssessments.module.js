import { __decorate } from "tslib";
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
import { IndirectAssessmentsRoutingModule } from './IndirectAssessments-routing.module';
import { IndirectAssessmentsComponent } from './IndirectAssessments.component';
import { IndirectAssessmentsMainComponent } from './IndirectAssessments-main/IndirectAssessments-main.component';
import { QuestionairesComponent } from './questionaires/questionaires.component';
let IndirectAssessmentsModule = class IndirectAssessmentsModule {
};
IndirectAssessmentsModule = __decorate([
    NgModule({
        declarations: [IndirectAssessmentsMainComponent, IndirectAssessmentsComponent, QuestionairesComponent],
        imports: [
            CommonModule,
            IndirectAssessmentsRoutingModule,
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
        ],
        providers: [AuthGuard, { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
    })
], IndirectAssessmentsModule);
export { IndirectAssessmentsModule };
//# sourceMappingURL=IndirectAssessments.module.js.map