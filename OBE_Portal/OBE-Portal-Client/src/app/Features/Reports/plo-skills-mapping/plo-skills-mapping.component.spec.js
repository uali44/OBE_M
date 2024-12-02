import { async, TestBed } from '@angular/core/testing';
import { PloSkillsMappingComponent } from './plo-skills-mapping.component';
describe('PloSkillsMappingComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PloSkillsMappingComponent]
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
//# sourceMappingURL=plo-skills-mapping.component.spec.js.map