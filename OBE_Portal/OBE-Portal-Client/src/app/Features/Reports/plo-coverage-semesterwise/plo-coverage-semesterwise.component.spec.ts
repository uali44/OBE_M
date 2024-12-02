import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PloCoverageSemesterwiseComponent } from './plo-coverage-semesterwise.component';

describe('PloCoverageSemesterwiseComponent', () => {
  let component: PloCoverageSemesterwiseComponent;
  let fixture: ComponentFixture<PloCoverageSemesterwiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PloCoverageSemesterwiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PloCoverageSemesterwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
