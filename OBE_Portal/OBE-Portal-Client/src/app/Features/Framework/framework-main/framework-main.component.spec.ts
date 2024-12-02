import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkMainComponent } from './framework-main.component';

describe('FrameworkMainComponent', () => {
  let component: FrameworkMainComponent;
  let fixture: ComponentFixture<FrameworkMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FrameworkMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworkMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
