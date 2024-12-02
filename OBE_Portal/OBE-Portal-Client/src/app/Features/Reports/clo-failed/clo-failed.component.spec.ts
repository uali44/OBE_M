import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloFailedComponent } from './clo-failed.component';

describe('CloFailedComponent', () => {
  let component: CloFailedComponent;
  let fixture: ComponentFixture<CloFailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloFailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
