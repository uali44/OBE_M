import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalService } from '../../Shared/Services/Global/global.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  public baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = GlobalService.ApiUrl;
  }
  GetPLOsResultForStudent<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Student/GetPLOsResultForStudent', data);
  }
  GetRegisteredCoursesDetails<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Student/GetRegisteredCoursesDetails', data);
  }
  GetCourseCLOSForStudent<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Student/GetCourseCLOSForStudent', data);
  }
  GetCourseAssessmentDetailsForStudent<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Student/GetCourseAssessmentDetailsForStudent', data);
  }
  
}
