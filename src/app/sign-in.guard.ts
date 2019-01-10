import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { Paths } from './paths';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.afAuth.user.pipe(
        first(),
        map(user => {
          if (user) {
            this.router.navigate([Paths.MAIN_PATH]);
            return false;
          } else {
            return true;
          }
        })
      );
  }
}
