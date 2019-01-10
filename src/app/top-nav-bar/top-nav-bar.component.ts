import { Component, OnInit } from '@angular/core';
import { Paths } from '../paths';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {

  protected Paths = Paths;

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() { }

  signOut() {
    this.afAuth.auth.signOut().
      finally(() => this.router.navigate([Paths.SIGN_IN_PATH]));
  }
}
