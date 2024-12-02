import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PloSkillsMappingComponent } from './plo-skills-mapping.component';

describe('PloSkillsMappingComponent', () => {
  let component: PloSkillsMappingComponent;
  let fixture: ComponentFixture<PloSkillsMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PloSkillsMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PloSkillsMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
