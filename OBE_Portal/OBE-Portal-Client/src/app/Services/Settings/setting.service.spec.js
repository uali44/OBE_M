import { TestBed } from '@angular/core/testing';
import { SettingService } from './setting.service';
describe('SettingService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SettingService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=setting.service.spec.js.map