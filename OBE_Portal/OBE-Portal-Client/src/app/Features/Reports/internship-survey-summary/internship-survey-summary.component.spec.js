import { async, TestBed } from '@angular/core/testing';
import { InternshipSurveySummaryComponent } from './internship-survey-summary.component';
describe('InternshipSurveySummaryComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InternshipSurveySummaryComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(InternshipSurveySummaryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=internship-survey-summary.component.spec.js.map