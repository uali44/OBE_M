import { async, TestBed } from '@angular/core/testing';
import { SearchFormComponent } from './searchForm.component';
describe('SearchFormComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchFormComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(SearchFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=searchForm.component.spec.js.map
