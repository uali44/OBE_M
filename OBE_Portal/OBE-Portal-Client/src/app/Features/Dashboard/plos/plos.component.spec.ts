import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PLOSComponent } from './plos.component';

describe('PLOSComponent', () => {
  let component: PLOSComponent;
  let fixture: ComponentFixture<PLOSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PLOSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PLOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
