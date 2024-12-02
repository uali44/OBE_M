import { async, TestBed } from '@angular/core/testing';
import { PloCoverageSemesterwiseComponent } from './plo-coverage-semesterwise.component';
describe('PloCoverageSemesterwiseComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PloCoverageSemesterwiseComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(PloCoverageSemesterwiseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=plo-coverage-semesterwise.component.spec.js.map