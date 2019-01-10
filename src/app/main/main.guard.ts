import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { Paths } from './../paths';

@Injectable({
  providedIn: 'root'
})
export class MainGuard implements CanActivate, CanActivateChild {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.afAuth.user.pipe(
        first(),
        map(user => {
          if (user) {
            return true;
          } else {
            this.router.navigate([Paths.SIGN_IN_PATH]);
            return false;
          }
        })
      );
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.canActivate(next, state);
  }
}
