import { async, TestBed } from '@angular/core/testing';
import { PloAnalysisNewComponent } from './plo-analysis-new.component';
describe('PloAnalysisNewComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PloAnalysisNewComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(PloAnalysisNewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=plo-analysis-new.component.spec.js.map