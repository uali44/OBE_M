import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular-highcharts';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from '../../Shared/Services/Global/auth.guard';
import { InterceptorService } from '../../Shared/Services/Global/interceptor.service';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { PipessharedModule } from '../../Shared/Pipe/pipesshared.module';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { StudentMainComponent } from './student-main/student-main.component';
import { RegisteredCoursesComponent } from './registered-courses/registered-courses.component';
import { ExitSurveyFormComponent } from './exit-survey-form/exit-survey-form.component';
let StudentModule = class StudentModule {
};
StudentModule = __decorate([
    NgModule({
        declarations: [StudentComponent, StudentMainComponent, RegisteredCoursesComponent, ExitSurveyFormComponent],
        imports: [
            CommonModule,
            StudentRoutingModule,
            ChartModule,
            ToastrModule,
            NgxUiLoaderModule,
            FormsModule,
            ReactiveFormsModule,
            SweetAlert2Module,
            OwlDateTimeModule,
            OwlNativeDateTimeModule,
            PipessharedModule
        ],
        providers: [AuthGuard, { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
    })
], StudentModule);
export { StudentModule };
//# sourceMappingURL=student.module.js.map