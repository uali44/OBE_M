import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FypSettingsComponent } from './fyp-settings.component';

describe('FypSettingsComponent', () => {
  let component: FypSettingsComponent;
  let fixture: ComponentFixture<FypSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FypSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FypSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
