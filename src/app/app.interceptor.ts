import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { EMPTY, Observable, catchError, finalize, map } from 'rxjs';
import { AppService } from './app.service';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  counter = 1;
  
  constructor(private appService: AppService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


    console.log("AA", this.counter, request.url);
    this.appService.loader$.next(true);
    const response = next.handle(request).pipe(

      catchError((error: HttpErrorResponse) => {
        alert(error.status);
        return EMPTY;
      }),
      finalize(() => {
          this.counter--;
          console.log("BB", this.counter);
          if(this.counter <= 0) {
            console.log("ZZ", this.counter);
            this.appService.loader$.next(false);
        }
      })

    );

    return response;
  }

}