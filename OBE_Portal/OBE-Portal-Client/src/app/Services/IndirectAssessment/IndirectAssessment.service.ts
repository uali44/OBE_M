import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalService } from '../../Shared/Services/Global/global.service';

@Injectable({
  providedIn: 'root'
})
export class IndirectAssessment {

  public baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = GlobalService.ApiUrl;
  }
 
  SaveExitForm<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'IndirectAssessment/SaveExitForm', data);
  }
 

  AddSurvey<T>(data: any): Observable < any > {
  return this.http.post<any>(this.baseUrl + 'IndirectAssessment/AddSurvey', data);
}
  GetSurvey<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'IndirectAssessment/GetSurvey', data);
  }
  GetAllSurvey<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'IndirectAssessment/GetAllSurvey', data);
  }

  DeleteQuestion<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'IndirectAssessment/DeleteQuestion', data);
  }
  SaveSurvey<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'IndirectAssessment/SaveSurveyResponses', data);
  }

  GetStudentSurvey<T>(data: number): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'IndirectAssessment/GetSurveyResponse', data);
  }



}
