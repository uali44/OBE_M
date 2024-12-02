import { async, TestBed } from '@angular/core/testing';
import { CloPloMappingComponent } from './clo-plo-mapping.component';
describe('CloPloMappingComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CloPloMappingComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CloPloMappingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=clo-plo-mapping.component.spec.js.map