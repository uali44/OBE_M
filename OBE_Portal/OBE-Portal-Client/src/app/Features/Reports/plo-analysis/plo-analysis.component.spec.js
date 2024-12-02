import { async, TestBed } from '@angular/core/testing';
import { PloAnalysisComponent } from './plo-analysis.component';
describe('PloAnalysisComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PloAnalysisComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(PloAnalysisComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=plo-analysis.component.spec.js.map