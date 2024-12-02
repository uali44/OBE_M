import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePlosComponent } from './manage-plos.component';

describe('ManagePlosComponent', () => {
  let component: ManagePlosComponent;
  let fixture: ComponentFixture<ManagePlosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePlosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePlosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
