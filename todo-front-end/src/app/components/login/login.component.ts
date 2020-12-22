import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from 'src/app/services/basic-authentication.service';
import { HardcodedAuthenticationService } from 'src/app/services/hardcoded-authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    errorMsg: string = "Invalid Credentials";

    username: string;
    password: string;
    invalidLogin = false;

    constructor(private basicAuthService: BasicAuthenticationService, private authService: HardcodedAuthenticationService, private router: Router) { }

    ngOnInit(): void {
    }

    handleLogin() {
        const result = this.authService.authenticate(this.username, this.password);
        if (result) {
            this.invalidLogin = false;
            this.router.navigate(["/welcome", this.username]);
        } else {
            this.invalidLogin = true;
        }
    }

    handleJwtAuthLogin() {
        this.basicAuthService.executeJwtAuthenticationService(this.username, this.password)
            .subscribe(
                data => {
                    console.log(data);
                    this.router.navigate(['welcome', this.username]);
                    this.invalidLogin = false;
                },
                error => {
                    console.log(error);
                    this.invalidLogin = true;
                }
            )
    }

    handleBasicAuthLogin() {
        this.basicAuthService.executeAuthenticationService(this.username, this.password).subscribe(
            data => {
                console.log(data);
                this.invalidLogin = false;
                this.router.navigate(["/welcome", this.username]);
            },
            error => {
                console.log(error);
                this.invalidLogin = true;
            }
        )
    }
}
