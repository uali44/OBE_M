import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalService } from '../../Shared/Services/Global/global.service';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  public baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = GlobalService.ApiUrl;
  }
  SendSurveyForm<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Settings/SendSurveyForm', data);
  }
  EnableExitSurveyForSelctedIntake<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Settings/EnableExitSurveyForSelctedIntake', data);
  }
  getUserForUpdates<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Settings/getUserForUpdates', data);
  }
  updatePassword<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Settings/updatePassword', data);
  }
  updateRole<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Settings/updateRole', data);
  }
  SaveAddedPEOS<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Settings/SaveAddedPEOS', data);
  }

  GetPeosInformation<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Settings/getPeosInformation', data);
  }

  DeletePeo<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Settings/DeletePeo', data);
  }

  GetPlosInformation<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Settings/GetPlosInformation', data);
  }

  SaveAddedPLOS<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Settings/SaveAddedPLOS', data);
  }

  AddNewPeos<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Settings/AddNewPeos', data);
  }

  AddNewPlos<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Settings/AddNewPlos', data);
  }

  DeletePlo<T>(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Settings/DeletePlo', data);
  }
}
