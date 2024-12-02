import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PloAnalysisComponent } from './plo-analysis.component';

describe('PloAnalysisComponent', () => {
  let component: PloAnalysisComponent;
  let fixture: ComponentFixture<PloAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PloAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PloAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
