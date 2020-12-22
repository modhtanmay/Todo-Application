import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class WelcomeDataService {

    constructor(private http: HttpClient) { }

    baseUrl = "http://localhost:8081/hello-world-bean";

    baseVariableUrl = "http://localhost:8081/hello-world";

    getWelcomeMsg() {
        return this.http.get(this.baseUrl);
    }

    getVariableMsg(name) {
        //     let basicAuthHeaderString = this.createBasicAuthenticationHeader();

        //     let headers = new HttpHeaders({
        //         Authorization: basicAuthHeaderString
        //     })

        return this.http.get(`http://localhost:8081/hello-world/${name}`);
    }

    // createBasicAuthenticationHeader() {
    //     let username = 'tanmay';
    //     let password = 'tanmay';
    //     let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    //     return basicAuthHeaderString;
    // }

}
