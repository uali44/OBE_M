import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeosComponent } from './peos.component';

describe('PeosComponent', () => {
  let component: PeosComponent;
  let fixture: ComponentFixture<PeosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
