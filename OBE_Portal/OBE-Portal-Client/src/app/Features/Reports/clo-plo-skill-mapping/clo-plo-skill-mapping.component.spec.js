import { async, TestBed } from '@angular/core/testing';
import { CloPloSkillMappingComponent } from './clo-plo-skill-mapping.component';
describe('CloPloSkillMappingComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CloPloSkillMappingComponent]
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
//# sourceMappingURL=clo-plo-skill-mapping.component.spec.js.map