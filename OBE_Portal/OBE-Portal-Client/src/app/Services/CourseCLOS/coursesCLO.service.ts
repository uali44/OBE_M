import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalService } from './../../Shared/Services/Global/global.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesCLOSService {
  public baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = GlobalService.ApiUrl;
  }
  GetCourseCLOS<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'CourseCLOS/GetCourseCLOS', data);
  }
  SaveCourseAddedCLOS<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'CourseCLOS/SaveCourseAddedCLOS', data);
  }
  DeleteCourseAddedCLOS<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'CourseCLOS/DeleteCourseAddedCLOS', data);
  }
  UpdateCourseAddedCLOS<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'CourseCLOS/UpdateCourseAddedCLOS', data);
  }
}
