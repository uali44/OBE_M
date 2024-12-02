import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseMarksStatusComponent } from './course-marks-status.component';

describe('CourseMarksStatusComponent', () => {
  let component: CourseMarksStatusComponent;
  let fixture: ComponentFixture<CourseMarksStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseMarksStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseMarksStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
