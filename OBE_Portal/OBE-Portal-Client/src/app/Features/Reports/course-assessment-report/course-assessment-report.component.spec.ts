import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAssessmentReportComponent } from './course-assessment-report.component';

describe('CourseAssessmentReportComponent', () => {
  let component: CourseAssessmentReportComponent;
  let fixture: ComponentFixture<CourseAssessmentReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseAssessmentReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAssessmentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
