import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalService } from './../../Shared/Services/Global/global.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = GlobalService.ApiUrl;
  }

  AddFacultyData<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Profile/AddFacultyData', data);
  }

  AddFacultyEducation<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Profile/AddFacultyEducation', data);
  }
  AddFacultyExperience<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Profile/AddFacultyExperience', data);
  }
  GetActivities<T>(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'Profile/GetActivities');

  }
  GetActivitySubDetails<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Profile/GetActivitySubDetails', data);
  }

  SaveActivity<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Profile/SaveActivityData', data);
  }

  GetFacultyActivity<T>(data: number): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Profile/GetFacultyActivity', data);
  }

  GetFacultyDetails<T>(data: number): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Profile/GetFacultyDetails', data);
  }
  GetEducation<T>(data: number): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Profile/GetEducation', data);
  }
  GetExperience<T>(data: number): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Profile/GetExperience', data);
  }

  DeleteExperience<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Profile/DeleteExperience', data);
  }
  DeleteEducation<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Profile/DeleteEducation', data);
  }
  DeleteActivity<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Profile/DeleteActivity', data);
  }

  getAllData<T>(data: number): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Profile/getAllData', data);
  }

}
