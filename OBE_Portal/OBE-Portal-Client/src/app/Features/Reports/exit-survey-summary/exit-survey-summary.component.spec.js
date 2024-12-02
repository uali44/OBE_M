import { async, TestBed } from '@angular/core/testing';
import { ExitSurveySummaryComponent } from './exit-survey-summary.component';
describe('ExitSurveySummaryComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ExitSurveySummaryComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ExitSurveySummaryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=exit-survey-summary.component.spec.js.map