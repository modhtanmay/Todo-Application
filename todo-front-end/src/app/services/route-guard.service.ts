import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
    providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

    constructor(private router: Router, private authService: HardcodedAuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.isUserLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }

}
