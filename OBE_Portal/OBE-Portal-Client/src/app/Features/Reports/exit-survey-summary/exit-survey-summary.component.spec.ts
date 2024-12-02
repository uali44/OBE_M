import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitSurveySummaryComponent } from './exit-survey-summary.component';

describe('ExitSurveySummaryComponent', () => {
  let component: ExitSurveySummaryComponent;
  let fixture: ComponentFixture<ExitSurveySummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExitSurveySummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitSurveySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
