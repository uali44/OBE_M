import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloAttainmentComponent } from './clo-attainment.component';

describe('CloAttainmentComponent', () => {
  let component: CloAttainmentComponent;
  let fixture: ComponentFixture<CloAttainmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloAttainmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloAttainmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
