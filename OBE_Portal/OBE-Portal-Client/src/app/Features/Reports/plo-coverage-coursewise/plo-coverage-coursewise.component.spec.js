import { async, TestBed } from '@angular/core/testing';
import { PloCoverageCoursewiseComponent } from './plo-coverage-coursewise.component';
describe('PloCoverageCoursewiseComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PloCoverageCoursewiseComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(PloCoverageCoursewiseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=plo-coverage-coursewise.component.spec.js.map