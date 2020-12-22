import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

    constructor(private basicAuthService: BasicAuthenticationService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // let username = 'tanmay';
        // let password = 'tanmay';
        // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
        let basicAuthHeaderString = this.basicAuthService.getAuthenticatedToken();
        let username = this.basicAuthService.getAuthenticatedUser();

        if (basicAuthHeaderString && username) {
            req = req.clone({
                setHeaders: {
                    Authorization: basicAuthHeaderString
                }
            })
            return next.handle(req);
        }
    }
}
