import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadamicComponent } from './acadamic.component';

describe('AcadamicComponent', () => {
  let component: AcadamicComponent;
  let fixture: ComponentFixture<AcadamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcadamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcadamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
