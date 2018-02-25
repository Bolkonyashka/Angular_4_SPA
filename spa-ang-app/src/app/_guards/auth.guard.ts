import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService, AlertService } from '../_services/index';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
@Injectable()
export class AuthGuard implements CanActivate {

    securStat: boolean = false;
 
    constructor(private router: Router, private autser: AuthenticationService, private http: HttpClient) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (sessionStorage.getItem('currentUser')) {
            // logged in so return true
            //var user = JSON.parse(sessionStorage.getItem('currentUser'));
            //alert(user.token);
            return true;
        }
 
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}