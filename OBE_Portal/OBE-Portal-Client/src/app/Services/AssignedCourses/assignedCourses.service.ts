import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalService } from './../../Shared/Services/Global/global.service';

@Injectable({
  providedIn: 'root'
})
export class AssignedCoursesService {
  public baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = GlobalService.ApiUrl;
  }
  GetAssignedCourses<T>(data: any): Observable<T> {
    return this.http.post<T>(this.baseUrl + 'AssignedCourses/GetAssignedCourses', data);
  }
}
