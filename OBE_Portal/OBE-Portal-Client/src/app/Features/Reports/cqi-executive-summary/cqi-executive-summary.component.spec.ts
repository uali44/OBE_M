import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CQIExecutiveSummaryComponent } from './cqi-executive-summary.component';

describe('CQIExecutiveSummaryComponent', () => {
  let component: CQIExecutiveSummaryComponent;
  let fixture: ComponentFixture<CQIExecutiveSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CQIExecutiveSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CQIExecutiveSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
