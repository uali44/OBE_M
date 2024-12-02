import { async, TestBed } from '@angular/core/testing';
import { UpdateRoleAndPasswordComponent } from './update-role-and-password.component';
describe('UpdateRoleAndPasswordComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UpdateRoleAndPasswordComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(UpdateRoleAndPasswordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=update-role-and-password.component.spec.js.map