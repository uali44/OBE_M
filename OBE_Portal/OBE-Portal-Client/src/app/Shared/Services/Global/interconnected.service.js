import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
let InterconnectedService = class InterconnectedService {
    constructor() {
        this.messageSource = new BehaviorSubject('');
        this.CurrentSemesterID = this.messageSource.asObservable();
        this.searchSource = new BehaviorSubject('');
        this.searchvaluetemp = this.searchSource.asObservable();
        this.GetSelectedCoursesCLOs = new BehaviorSubject('');
        this.SetSelectedCoursesCLOs = this.GetSelectedCoursesCLOs.asObservable();
        this.GetSelectedFacultyDashboard = new BehaviorSubject('');
        this.SetSelectedFacultyDashboard = this.GetSelectedFacultyDashboard.asObservable();
        this.CloseTab = new BehaviorSubject('');
        this.TriggerCloseTab = this.CloseTab.asObservable();
        this.GetCourseDetailsCounts = new BehaviorSubject('');
        this.SetCourseDetailsCounts = this.GetCourseDetailsCounts.asObservable();
    }
    ChangeSemesterID(searchvalue) {
        this.searchSource.next(searchvalue);
    }
    SetSelectedCoursesData(searchvalue) {
        this.GetSelectedCoursesCLOs.next(searchvalue);
    }
    SetSelectedFacultyDataForDashboard(searchvalue) {
        this.GetSelectedFacultyDashboard.next(searchvalue);
    }
    CloseTriggeredTab(searchvalue) {
        this.CloseTab.next(searchvalue);
    }
    UpdateCourseDetailsCounts(searchvalue) {
        this.GetCourseDetailsCounts.next(searchvalue);
    }
};
InterconnectedService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], InterconnectedService);
export { InterconnectedService };
//# sourceMappingURL=interconnected.service.js.map