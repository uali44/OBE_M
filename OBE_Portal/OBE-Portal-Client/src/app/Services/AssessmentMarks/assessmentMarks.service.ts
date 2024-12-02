import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalService } from './../../Shared/Services/Global/global.service';

@Injectable({
  providedIn: 'root'
})
export class AssessmentMarksService {
  public baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = GlobalService.ApiUrl;
  }
  GetRegisteredStudent<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'AssessmentMarks/GetRegisteredStudent', data);
  }
  AddMarksThroughExcel<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'AssessmentMarks/AddMarksThroughExcel', data);
  }
  GetStudentsMarksForSelectedAssessment<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'AssessmentMarks/GetStudentsMarksForSelectedAssessment', data);
  }
  SaveUpdatedMarks<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'AssessmentMarks/SaveUpdatedMarks', data);
  }
}
