import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloPloSkillMappingComponent } from './clo-plo-skill-mapping.component';

describe('CloPloSkillMappingComponent', () => {
  let component: CloPloSkillMappingComponent;
  let fixture: ComponentFixture<CloPloSkillMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloPloSkillMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloPloSkillMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
