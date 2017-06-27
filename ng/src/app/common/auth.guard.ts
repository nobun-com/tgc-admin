import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from "rxjs/Rx";
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        if (Cookie.get('currentUser')) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page
        this.router.navigate(['/session/admin-login']);
        return false;
    }
}