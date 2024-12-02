import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitSurveyFormComponent } from './exit-survey-form.component';

describe('ExitSurveyFormComponent', () => {
  let component: ExitSurveyFormComponent;
  let fixture: ComponentFixture<ExitSurveyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExitSurveyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitSurveyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
