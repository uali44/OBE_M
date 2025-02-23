import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePeosComponent } from './manage-peos.component';

describe('ManagePeosComponent', () => {
  let component: ManagePeosComponent;
  let fixture: ComponentFixture<ManagePeosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePeosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePeosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
