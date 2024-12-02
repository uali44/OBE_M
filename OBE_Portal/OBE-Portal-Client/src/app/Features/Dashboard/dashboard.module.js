import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular-highcharts';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AssignedCoursesComponent } from './assigned-courses/assigned-courses.component';
import { DashboardMainComponent } from './Dashboard-Main/DashboardMain.component';
import { DashboardComponent } from './dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { CoursesClosComponent } from './courses-clos/courses-clos.component';
import { AssessmentDetailsComponent } from './assessment-details/assessment-details.component';
import { AssessmentMarksComponent } from './assessment-marks/assessment-marks.component';
import { CompiledResultComponent } from './compiled-result/compiled-result.component';
import { AssessmentAchievementComponent } from './assessment-achievement/assessment-achievement.component';
import { CourseSearchComponent } from './course-search/course-search.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from '../../Shared/Services/Global/auth.guard';
import { InterceptorService } from '../../Shared/Services/Global/interceptor.service';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { PipessharedModule } from '../../Shared/Pipe/pipesshared.module';
import { StudentForCqiComponent } from './student-for-cqi/student-for-cqi.component';
let DashboardModule = class DashboardModule {
};
DashboardModule = __decorate([
    NgModule({
        declarations: [AssignedCoursesComponent, DashboardMainComponent, DashboardComponent, CoursesClosComponent, AssessmentDetailsComponent, AssessmentMarksComponent, CompiledResultComponent, AssessmentAchievementComponent, CourseSearchComponent, StudentForCqiComponent],
        imports: [
            CommonModule,
            DashboardRoutingModule,
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
], DashboardModule);
export { DashboardModule };
//# sourceMappingURL=dashboard.module.js.map