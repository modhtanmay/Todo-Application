import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';

@Injectable({
    providedIn: 'root'
})
export class BasicAuthenticationService {

    constructor(private http: HttpClient) { }

    authenticate(username, password) {
        // console.log('before ' + this.isUserLoggedIn());
        if (username === "tanmay" && password === "tanmay") {
            sessionStorage.setItem('authenticatedUser', username);
            // console.log('after ' + this.isUserLoggedIn());
            return true;
        } else {
            return false;
        }
    }


    executeAuthenticationService(username, password) {

        let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);


        let headers = new HttpHeaders({
            Authorization: basicAuthHeaderString
        })
        return this.http.get(`${API_URL}/basicAuth`, { headers }).pipe(map(
            data => {
                sessionStorage.setItem(AUTHENTICATED_USER, username);
                sessionStorage.setItem(TOKEN, basicAuthHeaderString);
                return data;
            }
        ));
    }

    executeJwtAuthenticationService(username, password): Observable<any> {
        console.log("in executeJWt");
        const headers = new HttpHeaders({ 'No-Auth': 'True' });
        headers.append('Content-Type', 'application/json');
        return this.http.post<any>(`${API_URL}/authenticate`, { username, password }, { headers: headers }).pipe(map(
            data => {
                sessionStorage.setItem(AUTHENTICATED_USER, username);
                sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
                return data;
            }
        ));
    }

    // createBasicAuthenticationHeader() {
    //     let username = 'tanmay';
    //     let password = 'tanmay';
    //     let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    //     return basicAuthHeaderString;
    // }

    getAuthenticatedUser() {
        return sessionStorage.getItem(AUTHENTICATED_USER);
    }

    getAuthenticatedToken() {
        if (this.getAuthenticatedUser())
            return sessionStorage.getItem(TOKEN);
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(AUTHENTICATED_USER);
        return !(user === null);
    }

    userLogout() {
        sessionStorage.removeItem(AUTHENTICATED_USER);
        sessionStorage.removeItem(TOKEN);
    }
}
