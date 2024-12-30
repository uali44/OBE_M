import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalService } from './../../Shared/Services/Global/global.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesSearchService {
  public baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = GlobalService.ApiUrl;
  }
  Get_Institute<T>(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'CourseSearch/GetInstitute');
  }
  Get_Department<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'CourseSearch/GetDepartment', data);
  }

  getFacultyMember<T>(data: any): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'CourseSearch/getFacultyMember?username='+data);
  }
  Get_FacultyMembers_For_Selected_Department_And_Semester<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'CourseSearch/GetFacultyMembersForSelectedDepartmentAndSemester', data);
  }
  Get_Intakes<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'CourseSearch/GetIntakes', data);
  }
  Get_Programs<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'CourseSearch/GetPrograms', data);
  }
  Get_Status<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'CourseSearch/GetStatus', data);
  }
  Get_Institute_dean<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'CourseSearch/GetInstitutedean', data);
  }
  Get_All_Semester<T>(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'CourseSearch/GetAllSemester');
  }
  GetIntakeStudents<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'CourseSearch/GetIntakeStudents', data);
  }
  GetCQILevelCourses<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'CourseSearch/GetCQILevelCourses', data);
  }
  GetSelectedFacultyCourses<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'CourseSearch/GetSelectedFacultyCourses', data);
  }
  DeleteStudentFromCourse<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'CourseSearch/DeleteStudentFromCourse', data);
  }

}
