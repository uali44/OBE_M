import { async, TestBed } from '@angular/core/testing';
import { ExitSurveyFormEnableComponent } from './exit-survey-form-enable.component';
describe('ExitSurveyFormEnableComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ExitSurveyFormEnableComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ExitSurveyFormEnableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=exit-survey-form-enable.component.spec.js.map