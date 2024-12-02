import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class InterconnectedService {

  public messageSource = new BehaviorSubject('');
  CurrentSemesterID = this.messageSource.asObservable();

  public searchSource = new BehaviorSubject('');
  searchvaluetemp = this.searchSource.asObservable();

  public GetSelectedCoursesCLOs = new BehaviorSubject('');
  SetSelectedCoursesCLOs = this.GetSelectedCoursesCLOs.asObservable();

  public GetSelectedFacultyDashboard = new BehaviorSubject('');
  SetSelectedFacultyDashboard = this.GetSelectedFacultyDashboard.asObservable();

  public CloseTab = new BehaviorSubject('');
  TriggerCloseTab = this.CloseTab.asObservable();

  public GetCourseDetailsCounts = new BehaviorSubject('');
  SetCourseDetailsCounts = this.GetCourseDetailsCounts.asObservable();


  constructor() { }
  ChangeSemesterID(searchvalue: string) {
    this.searchSource.next(searchvalue);
  }
  SetSelectedCoursesData(searchvalue: string) {
    this.GetSelectedCoursesCLOs.next(searchvalue);
  }
  SetSelectedFacultyDataForDashboard(searchvalue: string) {
    this.GetSelectedFacultyDashboard.next(searchvalue);
  }
  CloseTriggeredTab(searchvalue: string) {
    this.CloseTab.next(searchvalue);
  }
  UpdateCourseDetailsCounts(searchvalue: string) {
    this.GetCourseDetailsCounts.next(searchvalue);
  }

}
