import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { GlobalService } from './../../Shared/Services/Global/global.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  public baseUrl: string;
  constructor(private http: HttpClient,) {
    this.baseUrl = GlobalService.ApiUrl;
  }
  GetSemesterListBasedOnFaculty<T>(data: any): Observable<T> {
    return this.http.post<T>(this.baseUrl + 'Header/GetSemesterListBasedOnFaculty', data);
  }
  UpdatePassword<T>(data: any): Observable<T> {
    return this.http.post<T>(this.baseUrl + 'Header/UpdatePassword', data);
  }
}
