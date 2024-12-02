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

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportMainComponent} from './report-main/report-main.component'
import { ReportsComponent} from './reports.component';
import { PloAnalysisComponent } from './plo-analysis/plo-analysis.component';
import { CourseMarksStatusComponent } from './course-marks-status/course-marks-status.component'
import { PipessharedModule } from '../../Shared/Pipe/pipesshared.module';
import { PloSkillsMappingComponent } from './plo-skills-mapping/plo-skills-mapping.component';
import { PloCoverageSemesterwiseComponent } from './plo-coverage-semesterwise/plo-coverage-semesterwise.component';
import { CourseAssessmentReportComponent } from './course-assessment-report/course-assessment-report.component';
import { CompiledResultComponent } from './compiled-result/compiled-result.component';
import { PloCoverageCoursewiseComponent } from './plo-coverage-coursewise/plo-coverage-coursewise.component';
import { CloPloMappingComponent } from './clo-plo-mapping/clo-plo-mapping.component';
import { CloPloSkillMappingComponent } from './clo-plo-skill-mapping/clo-plo-skill-mapping.component';
import { CloAttainmentComponent } from './clo-attainment/clo-attainment.component';
import { CloFailedComponent } from './clo-failed/clo-failed.component';
import { CQIExecutiveSummaryComponent } from './cqi-executive-summary/cqi-executive-summary.component';
import { CQIPloQuhartLevelFailureComponent } from './cqi-plo-quhart-level-failure/cqi-plo-quhart-level-failure.component';
import { CSPSummaryComponent } from './csp-summary/csp-summary.component';
import { ExitSurveySummaryComponent } from './exit-survey-summary/exit-survey-summary.component';
import { InternshipSurveySummaryComponent } from './internship-survey-summary/internship-survey-summary.component';
import { PloAnalysisNewComponent } from './plo-analysis-new/plo-analysis-new.component';

@NgModule({
  declarations: [ReportsComponent, ReportMainComponent, PloAnalysisComponent, CourseMarksStatusComponent, PloSkillsMappingComponent, PloCoverageSemesterwiseComponent, CourseAssessmentReportComponent, CompiledResultComponent, PloCoverageCoursewiseComponent, CloPloMappingComponent, CloPloSkillMappingComponent, CloAttainmentComponent, CloFailedComponent, CQIExecutiveSummaryComponent, CQIPloQuhartLevelFailureComponent, CSPSummaryComponent, ExitSurveySummaryComponent, InternshipSurveySummaryComponent, PloAnalysisNewComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    ChartModule,
    ToastrModule,
    HttpClientModule,
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
export class ReportsModule { }
