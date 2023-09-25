// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(): boolean {
    // Check if session data exists in sessionStorage
    const userData = sessionStorage.getItem('userData');
    if (userData) {
        //if session data exists we can redirect to home
        return true;
    } else {
        // if session data not exists we can´t redirect to home
        this.router.navigate(['/']);
        return false;
        }
    }
}
