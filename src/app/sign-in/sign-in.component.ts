import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { Paths } from './../paths';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(() => this.router.navigate([Paths.MAIN_PATH]))
      .catch(() => this.router.navigate([Paths.SIGN_IN_PATH]));
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
