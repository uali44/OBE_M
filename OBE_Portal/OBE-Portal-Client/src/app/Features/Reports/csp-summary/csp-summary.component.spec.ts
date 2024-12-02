import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSPSummaryComponent } from './csp-summary.component';

describe('CSPSummaryComponent', () => {
  let component: CSPSummaryComponent;
  let fixture: ComponentFixture<CSPSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSPSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSPSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
