import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
let AuthGuard = class AuthGuard {
    constructor(_router) {
        this._router = _router;
    }
    canActivate(next, state) {
        if (GlobalService.Token == null || GlobalService.Token == undefined || GlobalService.Token == "") {
            document.location.href = GlobalService.AppBaseURL;
            return false;
        }
        return true;
    }
};
AuthGuard = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map