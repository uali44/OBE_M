import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRoleAndPasswordComponent } from './update-role-and-password.component';

describe('UpdateRoleAndPasswordComponent', () => {
  let component: UpdateRoleAndPasswordComponent;
  let fixture: ComponentFixture<UpdateRoleAndPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRoleAndPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRoleAndPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
