import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
let ReportMainComponent = class ReportMainComponent {
    constructor(ReportsComponent, InterconnectedService) {
        this.ReportsComponent = ReportsComponent;
        this.InterconnectedService = InterconnectedService;
        this.PLOAnalysis = false;
        this.PLOAnalysisNew = false;
        this.CourseMarkStatus = false;
        this.SkillCoverage = false;
        this.PLOsCoverage = false;
        this.PLOsCoverageCourseWise = false;
        this.CourseAssessmentReport = false;
        this.CompiledResultReport = false;
        this.CLOPLOMapping = false;
        this.CLOPLOSkillMapping = false;
        this.CLOAttainmentSemesterwise = false;
        this.CLOFailedSemesterwise = false;
        this.CQICourseExecutiveSummary = false;
        this.CQIPLOQuhartLevelFailureSummary = false;
        this.CSPSummary = false;
        this.ExitSummary = false;
        this.InternshipSummary = false;
        this.Is_Permission_Course_Marks_Status = false;
        this.Is_Permission_PLOs_Analysis = false;
        this.Is_Permission_Reports_Main = false;
        this.Is_Permission_Skills_Coverage = false;
        this.Is_Permission_PLOs_Coverage = false;
        this.Is_Permission_Course_Assessment_Resport = false;
        this.Is_Permission_PLOs_Main_Reporting_Widget = false;
        this.Is_Permission_CLOs_And_Assessment_Main_Reporting_Widget = false;
        this.Is_Permission_Compiled_Result_Report = false;
        this.Is_Permission_PLOs_Coverage_Course_Wise = false;
        this.Is_Permission_CLO_PLO_Mapping = false;
        this.Is_Permission_CLO_PLO_Skill_Mapping = false;
        this.Is_Permission_CLO_Attainment_SemesterWise = false;
        this.Is_Permission_CLO_Failed_SemesterWise = false;
        this.Is_Permission_CQI_Main_Widget = false;
        this.Is_Permission_CQI_Course_Executive_Summary = false;
        this.Is_Permission_CQI_PLO_Quhart_Level_Failure_Summary = false;
        this.Is_Permission_Indirect_Main_Widget = false;
        this.Is_Permission_CSP_Summary = false;
        this.Is_Permission_Exit_Summary = false;
        this.Is_Permission_Internship_Summary = false;
        this.Is_Permission_Course_Marks_Status = GlobalService.Permissions.indexOf("Course_Marks_Status") >= 0 ? true : false;
        this.Is_Permission_PLOs_Analysis = GlobalService.Permissions.indexOf("PLOs_Analysis") >= 0 ? true : false;
        this.Is_Permission_Reports_Main = GlobalService.Permissions.indexOf("Reports_Main") >= 0 ? true : false;
        this.Is_Permission_Skills_Coverage = GlobalService.Permissions.indexOf("Skills_Coverage") >= 0 ? true : false;
        this.Is_Permission_PLOs_Coverage = GlobalService.Permissions.indexOf("PLOs_Coverage") >= 0 ? true : false;
        this.Is_Permission_PLOs_Coverage_Course_Wise = GlobalService.Permissions.indexOf("PLOs_Coverage_Course_Wise") >= 0 ? true : false;
        this.Is_Permission_Course_Assessment_Resport = GlobalService.Permissions.indexOf("Course_Assessment_Resport") >= 0 ? true : false;
        this.Is_Permission_PLOs_Main_Reporting_Widget = GlobalService.Permissions.indexOf("PLOs_Main_Reporting_Widget") >= 0 ? true : false;
        this.Is_Permission_CLOs_And_Assessment_Main_Reporting_Widget = GlobalService.Permissions.indexOf("CLOs_And_Assessment_Main_Reporting_Widget") >= 0 ? true : false;
        this.Is_Permission_Compiled_Result_Report = GlobalService.Permissions.indexOf("Compiled_Result_Report") >= 0 ? true : false;
        this.Is_Permission_CLO_PLO_Mapping = GlobalService.Permissions.indexOf("CLO_PLO_Mapping") >= 0 ? true : false;
        this.Is_Permission_CLO_PLO_Skill_Mapping = GlobalService.Permissions.indexOf("CLO_PLO_Skill_Mapping") >= 0 ? true : false;
        this.Is_Permission_CLO_Attainment_SemesterWise = GlobalService.Permissions.indexOf("CLO_Attainment_SemesterWise") >= 0 ? true : false;
        this.Is_Permission_CLO_Failed_SemesterWise = GlobalService.Permissions.indexOf("CLO_Failed_SemesterWise") >= 0 ? true : false;
        this.Is_Permission_CQI_Main_Widget = GlobalService.Permissions.indexOf("CQI_Main_Widget") >= 0 ? true : false;
        this.Is_Permission_CQI_Course_Executive_Summary = GlobalService.Permissions.indexOf("CQI_Course_Executive_Summary") >= 0 ? true : false;
        this.Is_Permission_CQI_PLO_Quhart_Level_Failure_Summary = GlobalService.Permissions.indexOf("CQI_PLO_Quhart_Level_Failure_Summary") >= 0 ? true : false;
        this.Is_Permission_Indirect_Main_Widget = GlobalService.Permissions.indexOf("Indirect_Main_Widget") >= 0 ? true : false;
        this.Is_Permission_CSP_Summary = GlobalService.Permissions.indexOf("CSP_Summary") >= 0 ? true : false;
        this.Is_Permission_Exit_Summary = GlobalService.Permissions.indexOf("Exit_Summary") >= 0 ? true : false;
        this.Is_Permission_Internship_Summary = GlobalService.Permissions.indexOf("Internship_Summary") >= 0 ? true : false;
    }
    ngOnInit() {
        this.InterconnectedService.CloseTab.subscribe(search => {
            this.CloseTabContent();
        });
    }
    loadTab(Title) {
        $("#Content").removeClass('dashboard-bg');
        this.ReportsComponent.ShowTab(Title);
        GlobalService.Report_Sub_Tab = true;
        if (Title == 'PLOs Analysis') {
            this.PLOAnalysis = true;
            this.CourseMarkStatus = false;
            this.SkillCoverage = false;
            this.PLOsCoverage = false;
            this.CourseAssessmentReport = false;
            this.CompiledResultReport = false;
            this.PLOsCoverageCourseWise = false;
            this.CLOPLOMapping = false;
            this.CLOPLOSkillMapping = false;
            this.CLOAttainmentSemesterwise = false;
            this.CLOFailedSemesterwise = false;
            this.CQIPLOQuhartLevelFailureSummary = false;
            this.CSPSummary = false;
            this.ExitSummary = false;
            this.InternshipSummary = false;
            this.PLOAnalysisNew = false;
        }
        else if (Title == 'PLOs Analysis Average Attainment') {
            this.PLOAnalysisNew = true;
            this.CourseMarkStatus = false;
            this.SkillCoverage = false;
            this.PLOsCoverage = false;
            this.CourseAssessmentReport = false;
            this.CompiledResultReport = false;
            this.PLOsCoverageCourseWise = false;
            this.CLOPLOMapping = false;
            this.CLOPLOSkillMapping = false;
            this.CLOAttainmentSemesterwise = false;
            this.CLOFailedSemesterwise = false;
            this.CQIPLOQuhartLevelFailureSummary = false;
            this.CSPSummary = false;
            this.ExitSummary = false;
            this.InternshipSummary = false;
            this.PLOAnalysis = false;
        }
        else if (Title == "Courses Marks Status") {
            this.CourseMarkStatus = true;
            this.SkillCoverage = false;
            this.PLOAnalysis = false;
            this.PLOsCoverage = false;
            this.CourseAssessmentReport = false;
            this.CompiledResultReport = false;
            this.PLOsCoverageCourseWise = false;
            this.CLOPLOMapping = false;
            this.CLOPLOSkillMapping = false;
            this.CLOAttainmentSemesterwise = false;
            this.CLOFailedSemesterwise = false;
            this.CQICourseExecutiveSummary = false;
            this.CQIPLOQuhartLevelFailureSummary = false;
            this.CSPSummary = false;
            this.ExitSummary = false;
            this.InternshipSummary = false;
            this.PLOAnalysisNew = false;
        }
        else if (Title == "PLOs Skills Coverage") {
            this.SkillCoverage = true;
            this.CourseMarkStatus = false;
            this.PLOAnalysis = false;
            this.PLOsCoverage = false;
            this.CourseAssessmentReport = false;
            this.CompiledResultReport = false;
            this.PLOsCoverageCourseWise = false;
            this.CLOPLOMapping = false;
            this.CLOPLOSkillMapping = false;
            this.CLOAttainmentSemesterwise = false;
            this.CLOFailedSemesterwise = false;
            this.CQICourseExecutiveSummary = false;
            this.CQIPLOQuhartLevelFailureSummary = false;
            this.CSPSummary = false;
            this.ExitSummary = false;
            this.InternshipSummary = false;
            this.PLOAnalysisNew = false;
        }
        else if (Title == "PLOs Coverage") {
            this.PLOsCoverage = true;
            this.CourseMarkStatus = false;
            this.PLOAnalysis = false;
            this.SkillCoverage = false;
            this.CourseAssessmentReport = false;
            this.CompiledResultReport = false;
            this.PLOsCoverageCourseWise = false;
            this.CLOPLOMapping = false;
            this.CLOPLOSkillMapping = false;
            this.CLOAttainmentSemesterwise = false;
            this.CLOFailedSemesterwise = false;
            this.CQICourseExecutiveSummary = false;
            this.CQIPLOQuhartLevelFailureSummary = false;
            this.CSPSummary = false;
            this.ExitSummary = false;
            this.InternshipSummary = false;
            this.PLOAnalysisNew = false;
        }
        else if (Title == "Courses Assessment Report") {
            this.CourseAssessmentReport = true;
            this.CourseMarkStatus = false;
            this.PLOAnalysis = false;
            this.SkillCoverage = false;
            this.PLOsCoverage = false;
            this.CompiledResultReport = false;
            this.PLOsCoverageCourseWise = false;
            this.CLOPLOMapping = false;
            this.CLOPLOSkillMapping = false;
            this.CLOAttainmentSemesterwise = false;
            this.CLOFailedSemesterwise = false;
            this.CQICourseExecutiveSummary = false;
            this.CQIPLOQuhartLevelFailureSummary = false;
            this.CSPSummary = false;
            this.ExitSummary = false;
            this.InternshipSummary = false;
            this.PLOAnalysisNew = false;
        }
        else if (Title == "Compiled Result") {
            this.CompiledResultReport = true;
            this.CourseAssessmentReport = false;
            this.CourseMarkStatus = false;
            this.PLOAnalysis = false;
            this.SkillCoverage = false;
            this.PLOsCoverage = false;
            this.PLOsCoverageCourseWise = false;
            this.CLOPLOMapping = false;
            this.CLOPLOSkillMapping = false;
            this.CLOAttainmentSemesterwise = false;
            this.CLOFailedSemesterwise = false;
            this.CQICourseExecutiveSummary = false;
            this.CQIPLOQuhartLevelFailureSummary = false;
            this.CSPSummary = false;
            this.ExitSummary = false;
            this.InternshipSummary = false;
            this.PLOAnalysisNew = false;
        }
        else if (Title == "PLOs Coverage Course Wise") {
            this.PLOsCoverageCourseWise = true;
            this.CourseAssessmentReport = false;
            this.CourseMarkStatus = false;
            this.PLOAnalysis = false;
            this.SkillCoverage = false;
            this.PLOsCoverage = false;
            this.CompiledResultReport = false;
            this.CLOPLOMapping = false;
            this.CLOPLOSkillMapping = false;
            this.CLOAttainmentSemesterwise = false;
            this.CLOFailedSemesterwise = false;
            this.CQICourseExecutiveSummary = false;
            this.CQIPLOQuhartLevelFailureSummary = false;
            this.CSPSummary = false;
            this.ExitSummary = false;
            this.InternshipSummary = false;
            this.PLOAnalysisNew = false;
        }
        else if (Title == "CLOs Mapping") {
            this.CLOPLOMapping = true;
            this.CourseAssessmentReport = false;
            this.CourseMarkStatus = false;
            this.PLOAnalysis = false;
            this.SkillCoverage = false;
            this.PLOsCoverage = false;
            this.CompiledResultReport = false;
            this.PLOsCoverageCourseWise = false;
            this.CLOPLOSkillMapping = false;
            this.CLOAttainmentSemesterwise = false;
            this.CLOFailedSemesterwise = false;
            this.CQICourseExecutiveSummary = false;
            this.CQIPLOQuhartLevelFailureSummary = false;
            this.CSPSummary = false;
            this.ExitSummary = false;
            this.InternshipSummary = false;
            this.PLOAnalysisNew = false;
        }
        else if (Title == "PLOs Skills Mapping") {
            this.CLOPLOSkillMapping = true;
            this.CourseAssessmentReport = false;
            this.CourseMarkStatus = false;
            this.PLOAnalysis = false;
            this.SkillCoverage = false;
            this.PLOsCoverage = false;
            this.CompiledResultReport = false;
            this.PLOsCoverageCourseWise = false;
            this.CLOPLOMapping = false;
            this.CLOAttainmentSemesterwise = false;
            this.CLOFailedSemesterwise = false;
            this.CQICourseExecutiveSummary = false;
            this.CQIPLOQuhartLevelFailureSummary = false;
            this.CSPSummary = false;
            this.ExitSummary = false;
            this.InternshipSummary = false;
            this.PLOAnalysisNew = false;
        }
        else if (Title == "CLOs Attainment") {
            this.CLOAttainmentSemesterwise = true;
            this.CourseAssessmentReport = false;
            this.CourseMarkStatus = false;
            this.PLOAnalysis = false;
            this.SkillCoverage = false;
            this.PLOsCoverage = false;
            this.CompiledResultReport = false;
            this.PLOsCoverageCourseWise = false;
            this.CLOPLOMapping = false;
            this.CLOPLOSkillMapping = false;
            this.CLOFailedSemesterwise = false;
            this.CQICourseExecutiveSummary = false;
            this.CQIPLOQuhartLevelFailureSummary = false;
            this.CSPSummary = false;
            this.ExitSummary = false;
            this.InternshipSummary = false;
            this.PLOAnalysisNew = false;
        }
        else if (Title == "Failed CLOs but Cleared Course") {
            this.CLOFailedSemesterwise = true;
            this.CourseAssessmentReport = false;
            this.CourseMarkStatus = false;
            this.PLOAnalysis = false;
            this.SkillCoverage = false;
            this.PLOsCoverage = false;
            this.CompiledResultReport = false;
            this.PLOsCoverageCourseWise = false;
            this.CLOPLOMapping = false;
            this.CLOPLOSkillMapping = false;
            this.CLOAttainmentSemesterwise = false;
            this.CQICourseExecutiveSummary = false;
            this.CQIPLOQuhartLevelFailureSummary = false;
            this.CSPSummary = false;
            this.ExitSummary = false;
            this.InternshipSummary = false;
            this.PLOAnalysisNew = false;
        }
        else if (Title == "CQI Course Executive Summary") {
            this.CQICourseExecutiveSummary = true;
            this.CLOFailedSemesterwise = false;
            this.CourseAssessmentReport = false;
            this.CourseMarkStatus = false;
            this.PLOAnalysis = false;
            this.SkillCoverage = false;
            this.PLOsCoverage = false;
            this.CompiledResultReport = false;
            this.PLOsCoverageCourseWise = false;
            this.CLOPLOMapping = false;
            this.CLOPLOSkillMapping = false;
            this.CLOAttainmentSemesterwise = false;
            this.CQIPLOQuhartLevelFailureSummary = false;
            this.CSPSummary = false;
            this.ExitSummary = false;
            this.InternshipSummary = false;
            this.PLOAnalysisNew = false;
        }
        else if (Title == "CQI PLO Cohort Level Failure Summary") {
            this.CQIPLOQuhartLevelFailureSummary = true;
            this.CLOFailedSemesterwise = false;
            this.CourseAssessmentReport = false;
            this.CourseMarkStatus = false;
            this.PLOAnalysis = false;
            this.SkillCoverage = false;
            this.PLOsCoverage = false;
            this.CompiledResultReport = false;
            this.PLOsCoverageCourseWise = false;
            this.CLOPLOMapping = false;
            this.CLOPLOSkillMapping = false;
            this.CLOAttainmentSemesterwise = false;
            this.CQICourseExecutiveSummary = false;
            this.CSPSummary = false;
            this.ExitSummary = false;
            this.InternshipSummary = false;
            this.PLOAnalysisNew = false;
        }
        else if (Title == "CSP Summary Report") {
            this.CSPSummary = true;
            this.CLOFailedSemesterwise = false;
            this.CourseAssessmentReport = false;
            this.CourseMarkStatus = false;
            this.PLOAnalysis = false;
            this.SkillCoverage = false;
            this.PLOsCoverage = false;
            this.CompiledResultReport = false;
            this.PLOsCoverageCourseWise = false;
            this.CLOPLOMapping = false;
            this.CLOPLOSkillMapping = false;
            this.CLOAttainmentSemesterwise = false;
            this.CQICourseExecutiveSummary = false;
            this.CQIPLOQuhartLevelFailureSummary = false;
            this.ExitSummary = false;
            this.InternshipSummary = false;
            this.PLOAnalysisNew = false;
        }
        else if (Title == "Exit Summary Report") {
            this.ExitSummary = true;
            this.CLOFailedSemesterwise = false;
            this.CourseAssessmentReport = false;
            this.CourseMarkStatus = false;
            this.PLOAnalysis = false;
            this.SkillCoverage = false;
            this.PLOsCoverage = false;
            this.CompiledResultReport = false;
            this.PLOsCoverageCourseWise = false;
            this.CLOPLOMapping = false;
            this.CLOPLOSkillMapping = false;
            this.CLOAttainmentSemesterwise = false;
            this.CQICourseExecutiveSummary = false;
            this.CQIPLOQuhartLevelFailureSummary = false;
            this.CSPSummary = false;
            this.InternshipSummary = false;
            this.PLOAnalysisNew = false;
        }
        else if (Title == "Internship Summary Report") {
            this.InternshipSummary = true;
            this.CLOFailedSemesterwise = false;
            this.CourseAssessmentReport = false;
            this.CourseMarkStatus = false;
            this.PLOAnalysis = false;
            this.SkillCoverage = false;
            this.PLOsCoverage = false;
            this.CompiledResultReport = false;
            this.PLOsCoverageCourseWise = false;
            this.CLOPLOMapping = false;
            this.CLOPLOSkillMapping = false;
            this.CLOAttainmentSemesterwise = false;
            this.CQICourseExecutiveSummary = false;
            this.CQIPLOQuhartLevelFailureSummary = false;
            this.CSPSummary = false;
            this.ExitSummary = false;
            this.PLOAnalysisNew = false;
        }
        $("#reports-tab").removeClass('active');
        $("#Any-tab").addClass('active');
    }
    CloseTabContent() {
        this.PLOAnalysis = false;
        this.CourseMarkStatus = false;
        this.SkillCoverage = false;
        this.PLOsCoverage = false;
        this.PLOsCoverageCourseWise = false;
        this.CourseAssessmentReport = false;
        this.CompiledResultReport = false;
        $("#Content").addClass('dashboard-bg');
        $("#Any-tab").removeClass('active');
        $("#reports-tab").addClass('active');
        $("#ReportMainTab").addClass('active');
    }
};
ReportMainComponent = __decorate([
    Component({
        selector: 'app-report-main',
        templateUrl: './report-main.component.html',
        styleUrls: ['./report-main.component.css']
    })
], ReportMainComponent);
export { ReportMainComponent };
//# sourceMappingURL=report-main.component.js.map