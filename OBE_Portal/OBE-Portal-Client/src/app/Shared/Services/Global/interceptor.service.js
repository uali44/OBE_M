import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { tap } from 'rxjs/operators';
import { GlobalService } from './global.service';
let InterceptorService = class InterceptorService {
    intercept(req, next) {
        if (GlobalService.Token != null) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization", 'Bearer ' + GlobalService.Token)
            });
            return next.handle(cloned).pipe(tap(succ => { }, err => {
                if (err.status === 403 || err.status === 401) {
                    localStorage.clear();
                    document.location.href = GlobalService.AppBaseURL;
                }
            }));
        }
        else {
            // document.location.href = GlobalService.AppBaseURL;
            return next.handle(req);
        }
    }
};
InterceptorService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], InterceptorService);
export { InterceptorService };
//# sourceMappingURL=interceptor.service.js.map