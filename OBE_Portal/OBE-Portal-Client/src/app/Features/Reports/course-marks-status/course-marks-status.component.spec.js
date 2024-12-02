import { async, TestBed } from '@angular/core/testing';
import { CourseMarksStatusComponent } from './course-marks-status.component';
describe('CourseMarksStatusComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CourseMarksStatusComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CourseMarksStatusComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=course-marks-status.component.spec.js.map