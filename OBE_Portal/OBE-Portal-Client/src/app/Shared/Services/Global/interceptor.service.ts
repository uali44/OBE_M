import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> { 
    if (GlobalService.Token != null) {
      const cloned = req.clone({
        headers: req.headers.set("Authorization",
          'Bearer ' + GlobalService.Token)
      });
      return next.handle(cloned).pipe
        (
          tap(
            succ => { },
            err => {
              if (err.status === 403 || err.status === 401) {
                localStorage.clear();
                document.location.href = GlobalService.AppBaseURL;
              }
            }
          )
        );
    }
    else {
     // document.location.href = GlobalService.AppBaseURL;
      return next.handle(req);
    }
  }
}
