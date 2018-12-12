import { Component, OnInit } from '@angular/core';
import { Paths } from '../paths';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {

  protected Paths = Paths;
  protected isSignedIn: boolean;
  protected user: string;

  constructor() { }

  ngOnInit() {
    this.isSignedIn = false;
    this.user = 'John B';
  }

  signIn() {
    this.isSignedIn = true;
  }

  signOut() {
    this.isSignedIn = false;
  }
}
