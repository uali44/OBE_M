import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalService } from './../../Shared/Services/Global/global.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  public baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = GlobalService.ApiUrl;
  }

  GetAssessmentDataForDashboardCourse<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Dashboard/GetAssessmentDataForDashboardCourse', data);
  }
}
