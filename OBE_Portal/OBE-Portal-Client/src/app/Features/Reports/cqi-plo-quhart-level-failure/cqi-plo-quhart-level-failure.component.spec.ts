import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CQIPloQuhartLevelFailureComponent } from './cqi-plo-quhart-level-failure.component';

describe('CQIPloQuhartLevelFailureComponent', () => {
  let component: CQIPloQuhartLevelFailureComponent;
  let fixture: ComponentFixture<CQIPloQuhartLevelFailureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CQIPloQuhartLevelFailureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CQIPloQuhartLevelFailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
