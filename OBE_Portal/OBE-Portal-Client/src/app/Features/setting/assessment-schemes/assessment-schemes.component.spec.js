import { async, TestBed } from '@angular/core/testing';
import { AssessmentSchemesComponent } from './assessment-schemes.component';
describe('AssessmentSchemesComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AssessmentSchemesComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(AssessmentSchemesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=assessment-schemes.component.spec.js.map