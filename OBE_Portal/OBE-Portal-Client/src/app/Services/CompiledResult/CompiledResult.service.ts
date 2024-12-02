import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalService } from './../../Shared/Services/Global/global.service';

@Injectable({
  providedIn: 'root'
})
export class CompiledResultservice {
  public baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = GlobalService.ApiUrl;
  }
  GetAllStudentAndGradesForCourse<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'CompiledResult/GetAllStudentAndGradesForCourse', data);
  }
  GetAssessmentMarksDetails<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'CompiledResult/GetAssessmentMarksDetails', data);
  }
  GetCLOSMarksDetails<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'CompiledResult/GetCLOSMarksDetails', data);
  }
  SubmitResult<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'CompiledResult/SubmitResult', data);
  }
  GetAllStudentAndGradesForFYP<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'CompiledResult/GetAllStudentAndGradesForFYP', data);
  }
}
