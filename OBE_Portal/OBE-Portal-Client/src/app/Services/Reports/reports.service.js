import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { GlobalService } from './../../Shared/Services/Global/global.service';
let ReportsService = class ReportsService {
    constructor(http) {
        this.http = http;
        this.baseUrl = GlobalService.ApiUrl;
    }
    Get_PLOs_Analysis_For_Selected_Intake(data) {
        return this.http.post(this.baseUrl + 'Reporting/GetPLOsAnalysisForSelectedIntake', data);
    }
    Get_PLOs_Analysis_For_Selected_Intake_Average_Attainment(data) {
        return this.http.post(this.baseUrl + 'Reporting/GetPLOsAnalysisForSelectedIntakeAverageAttainment', data);
    }
    Get_PLOs_Analysis_For_Selected_Intake_CQI(data) {
        return this.http.post(this.baseUrl + 'Reporting/Get_PLOs_Analysis_For_Selected_Intake_CQI', data);
    }
    GetPLOsAnalysisForSelectedIntakeIncludedFGrade(data) {
        return this.http.post(this.baseUrl + 'Reporting/GetPLOsAnalysisForSelectedIntakeIncludedFGrade', data);
    }
    Get_All_OfferedCourses_SemesterWise(data) {
        return this.http.post(this.baseUrl + 'Reporting/GetAllOfferedCoursesSemesterWise', data);
    }
    Get_Selected_PLO_Student_Details(data) {
        return this.http.post(this.baseUrl + 'Reporting/GetSelectedPLOStudentDetails', data);
    }
    Get_All_Skills_Count_Intake_wise(data) {
        return this.http.post(this.baseUrl + 'Reporting/GetAllSkillsCountIntakeWise', data);
    }
    Get_All_Skills_Details_Intake_wise(data) {
        return this.http.post(this.baseUrl + 'Reporting/GetAllSkillsDetailsIntakeWise', data);
    }
    Get_All_PLOs_Coverage_Count_Intake_wise(data) {
        return this.http.post(this.baseUrl + 'Reporting/GetAllPLOsCoverageCountIntakeWise', data);
    }
    Get_All_CLOs_Details_Intake_wise(data) {
        return this.http.post(this.baseUrl + 'Reporting/GetAllCLOsDetailsIntakeWise', data);
    }
    Get_All_Course_Data_For_Analysis(data) {
        return this.http.post(this.baseUrl + 'Reporting/GetAllCourseDataForAnalysis', data);
    }
    SaveDirectRemarks(data) {
        return this.http.post(this.baseUrl + 'Reporting/SaveDirectRemarks', data);
    }
    SaveIndirectRemarks(data) {
        return this.http.post(this.baseUrl + 'Reporting/SaveIndirectRemarks', data);
    }
    SaveTable1Form(data) {
        return this.http.post(this.baseUrl + 'Reporting/SaveTable1Form', data);
    }
    SaveTable2Form(data) {
        return this.http.post(this.baseUrl + 'Reporting/SaveTable2Form', data);
    }
    SaveTable3Form(data) {
        return this.http.post(this.baseUrl + 'Reporting/SaveTable3Form', data);
    }
    SaveTable4Form(data) {
        return this.http.post(this.baseUrl + 'Reporting/SaveTable4Form', data);
    }
    Get_PLOs_Course_Wise_Details(data) {
        return this.http.post(this.baseUrl + 'Reporting/GetPLOsCourseWiseDetails', data);
    }
    CLO_PLO_Mapping_Intakewise(data) {
        return this.http.post(this.baseUrl + 'Reporting/CLOPLOMappingIntakewise', data);
    }
    CLO_PLO_Skills_Mapping_Intakewise(data) {
        return this.http.post(this.baseUrl + 'Reporting/CLOPLOSkillsMappingIntakeWise', data);
    }
    UpdateCourseStatus(data) {
        return this.http.post(this.baseUrl + 'Reporting/UpdateCourseStatus', data);
    }
    UpdateCourseCategory(data) {
        return this.http.post(this.baseUrl + 'Reporting/UpdateCourseCategory', data);
    }
    updateFacultyAssignedCourses(data) {
        return this.http.post(this.baseUrl + 'Reporting/updateFacultyAssignedCourses', data);
    }
    DeleteStudentFromAnalysis(data) {
        return this.http.post(this.baseUrl + 'Reporting/DeleteStudentFromAnalysis', data);
    }
    ExcludeCLOFromAnalysis(data) {
        return this.http.post(this.baseUrl + 'Reporting/ExcludeCLOFromAnalysis', data);
    }
    GetCLOsAttainment(data) {
        return this.http.post(this.baseUrl + 'Reporting/GetCLOsAttainment', data);
    }
    GetCLOsAttainmentDetails(data) {
        return this.http.post(this.baseUrl + 'Reporting/GetCLOsAttainmentDetails', data);
    }
    GetCoursesInWhichStudentPassedButCLOsFailed(data) {
        return this.http.post(this.baseUrl + 'Reporting/GetCoursesInWhichStudentPassedButCLOsFailed', data);
    }
    GetAllStudentOfCourseInWhichStudentPassedButCLOsFailed(data) {
        return this.http.post(this.baseUrl + 'Reporting/GetAllStudentOfCourseInWhichStudentPassedButCLOsFailed', data);
    }
    AddCQIActionForStudent(data) {
        return this.http.post(this.baseUrl + 'Reporting/AddCQIActionForStudent', data);
    }
    CQISubmitted(data) {
        return this.http.post(this.baseUrl + 'Reporting/CQISubmitted', data);
    }
    GetCSPData(data) {
        return this.http.post(this.baseUrl + 'Reporting/GetCSPData', data);
    }
    GetExitData(data) {
        return this.http.post(this.baseUrl + 'Reporting/GetExitData', data);
    }
    GetInternshipData(data) {
        return this.http.post(this.baseUrl + 'Reporting/GetInternshipData', data);
    }
    GetAllIntakeStudents(data) {
        return this.http.post(this.baseUrl + 'Reporting/GetAllIntakeStudents', data);
    }
};
ReportsService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ReportsService);
export { ReportsService };
//# sourceMappingURL=reports.service.js.map