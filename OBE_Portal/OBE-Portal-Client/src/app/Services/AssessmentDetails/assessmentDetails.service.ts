import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalService } from './../../Shared/Services/Global/global.service';

@Injectable({
  providedIn: 'root'
})
export class AssessmentDetailsService {
  public baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = GlobalService.ApiUrl;
  }
  GetAssessmentDetailsCourse<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'AssessmentDetails/GetAssessmentDetailsCourse', data);
  }
  SaveAssessmentDetailsCourse<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'AssessmentDetails/SaveAssessmentDetailsCourse', data);
  }
  DeleteSelectedAssessmentDetails<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'AssessmentDetails/DeleteSelectedAssessmentDetails', data);
  }
  UpdateAssessmentDetailsCourse<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'AssessmentDetails/UpdateAssessmentDetailsCourse', data);
  }
  SaveAssessmentDetailsLab<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'AssessmentDetails/SaveAssessmentDetailsLab', data);
  }
  UpdateAssessmentDetailsLab<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'AssessmentDetails/UpdateAssessmentDetailsLab', data);
  }
  SaveAssessmentDetailsFYP<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'AssessmentDetails/SaveAssessmentDetailsFYP', data);
  }
  UpdateAssessmentDetailsFYP<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'AssessmentDetails/UpdateAssessmentDetailsFYP', data);
  }
}
