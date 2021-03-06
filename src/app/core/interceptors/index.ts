import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { SpinnerInterceptor } from './spinner.interceptor';

 
export const authInterceptor = [
    { provide: AuthInterceptor, useClass: AuthInterceptor, multi: true },
];

export const httpErrorInterceptor = [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
];

export const spinnerInterceptor = [
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
];

export const httpInterceptorProviders = [
   // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
   // { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
];
