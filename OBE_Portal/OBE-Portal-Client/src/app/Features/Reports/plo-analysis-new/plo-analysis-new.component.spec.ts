import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PloAnalysisNewComponent } from './plo-analysis-new.component';

describe('PloAnalysisNewComponent', () => {
  let component: PloAnalysisNewComponent;
  let fixture: ComponentFixture<PloAnalysisNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PloAnalysisNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PloAnalysisNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
