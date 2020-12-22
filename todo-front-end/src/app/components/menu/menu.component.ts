import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from 'src/app/services/basic-authentication.service';
import { HardcodedAuthenticationService } from 'src/app/services/hardcoded-authentication.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    isUserLoggedIn: boolean = false;
    constructor(public authService: BasicAuthenticationService) { }

    ngOnInit(): void {
        this.isUserLoggedIn = this.authService.isUserLoggedIn();
    }
}
