import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentForCqiComponent } from './student-for-cqi.component';

describe('StudentForCqiComponent', () => {
  let component: StudentForCqiComponent;
  let fixture: ComponentFixture<StudentForCqiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentForCqiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentForCqiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
