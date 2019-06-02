import {
    HttpErrorResponse,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse
  } from '@angular/common/http';
  import { Observable } from 'rxjs/internal/Observable';
  import {catchError,  map } from 'rxjs/operators';
  import { Injectable } from '@angular/core';
  import { throwError, } from 'rxjs';
  import { TranslateService } from '@ngx-translate/core';
import { SharedService } from '../shared.service';

  @Injectable()
  export class ErrorInterceptor implements HttpInterceptor {
    constructor(private sharedService: SharedService, private translateService: TranslateService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
      return next.handle(req).pipe(
        catchError((er: HttpErrorResponse) => {
          console.log(er);
         return this.handleCatchError(er);
        }),
        map(
          response => {
            if (response instanceof HttpResponse) {
              if (response.body && response.body.success === 'false') {
                this.handleError(response.body.errorText);
                throwError(response.body.errorText);
                return response;
              }
            return response;
          }
        }
        )
      );
    }
    handleError(msg = `${this.translateService.instant('~somethingWentWrong')} !`): void {
      this.sharedService.createNotification(msg, 'error', 'error');
    }
    handleCatchError(err: HttpErrorResponse) {
      console.log(err);
      const errMsg = err.error && err.error[0] || this.translateService.instant('~somethingWentWrong');
      this.sharedService.createNotification(errMsg, 'error', 'error');
      return throwError(err);
    }
  }
