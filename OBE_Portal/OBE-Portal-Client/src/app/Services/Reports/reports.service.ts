import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalService } from './../../Shared/Services/Global/global.service';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  public baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = GlobalService.ApiUrl;
  }
  Get_PLOs_Analysis_For_Selected_Intake<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Reporting/GetPLOsAnalysisForSelectedIntake', data);
  }
  Get_PLOs_Analysis_For_Selected_Intake_Average_Attainment<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Reporting/GetPLOsAnalysisForSelectedIntakeAverageAttainment', data);
  }
  Get_PLOs_Analysis_For_Selected_Intake_CQI<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Reporting/Get_PLOs_Analysis_For_Selected_Intake_CQI', data);
  }
  GetPLOsAnalysisForSelectedIntakeIncludedFGrade<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Reporting/GetPLOsAnalysisForSelectedIntakeIncludedFGrade', data);
  }
  Get_All_OfferedCourses_SemesterWise<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Reporting/GetAllOfferedCoursesSemesterWise', data);
  }
  Get_Selected_PLO_Student_Details<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Reporting/GetSelectedPLOStudentDetails', data);
  }
  Get_All_Skills_Count_Intake_wise<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Reporting/GetAllSkillsCountIntakeWise', data);
  }
  Get_All_Skills_Details_Intake_wise<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Reporting/GetAllSkillsDetailsIntakeWise', data);
  }
  Get_All_PLOs_Coverage_Count_Intake_wise<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Reporting/GetAllPLOsCoverageCountIntakeWise', data);
  }
  Get_All_CLOs_Details_Intake_wise<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Reporting/GetAllCLOsDetailsIntakeWise', data);
  }
  Get_All_Course_Data_For_Analysis<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Reporting/GetAllCourseDataForAnalysis', data);
  }
  SaveDirectRemarks<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Reporting/SaveDirectRemarks', data);
  }
  SaveIndirectRemarks<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Reporting/SaveIndirectRemarks', data);
  }
  SaveTable1Form<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Reporting/SaveTable1Form', data);
  }
  SaveTable2Form<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Reporting/SaveTable2Form', data);
  }
  SaveTable3Form<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Reporting/SaveTable3Form', data);
  }
  SaveTable4Form<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Reporting/SaveTable4Form', data);
  }
  Get_PLOs_Course_Wise_Details<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Reporting/GetPLOsCourseWiseDetails', data);
  }
  CLO_PLO_Mapping_Intakewise<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Reporting/CLOPLOMappingIntakewise', data);
  }
  CLO_PLO_Skills_Mapping_Intakewise<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Reporting/CLOPLOSkillsMappingIntakeWise', data);
  }
  UpdateCourseStatus<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Reporting/UpdateCourseStatus', data);
  }
  UpdateCourseCategory<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Reporting/UpdateCourseCategory', data);
  }

  updateFacultyAssignedCourses<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Reporting/updateFacultyAssignedCourses', data);
  }

  DeleteStudentFromAnalysis<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Reporting/DeleteStudentFromAnalysis', data);
  }
  ExcludeCLOFromAnalysis<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Reporting/ExcludeCLOFromAnalysis', data);
  }
  GetCLOsAttainment<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Reporting/GetCLOsAttainment', data);
  }
  GetCLOsAttainmentDetails<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Reporting/GetCLOsAttainmentDetails', data);
  }
  GetCoursesInWhichStudentPassedButCLOsFailed<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Reporting/GetCoursesInWhichStudentPassedButCLOsFailed', data);
  }
  GetAllStudentOfCourseInWhichStudentPassedButCLOsFailed<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Reporting/GetAllStudentOfCourseInWhichStudentPassedButCLOsFailed', data);
  }
  AddCQIActionForStudent<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Reporting/AddCQIActionForStudent', data);
  }
  CQISubmitted<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Reporting/CQISubmitted', data);
  }
  GetCSPData<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Reporting/GetCSPData', data);
  }
  GetExitData<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Reporting/GetExitData', data);
  }
  GetInternshipData<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Reporting/GetInternshipData', data);
  }
  GetAllIntakeStudents<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Reporting/GetAllIntakeStudents', data);
  }
}
