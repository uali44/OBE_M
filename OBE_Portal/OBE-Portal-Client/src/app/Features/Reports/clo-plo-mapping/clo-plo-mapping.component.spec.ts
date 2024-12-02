import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloPloMappingComponent } from './clo-plo-mapping.component';

describe('CloPloMappingComponent', () => {
  let component: CloPloMappingComponent;
  let fixture: ComponentFixture<CloPloMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloPloMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloPloMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
