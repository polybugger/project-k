import { Component, OnInit } from '@angular/core';
import { Paths } from '../../paths';

@Component({
  selector: 'app-main-nav-bar',
  templateUrl: './main-nav-bar.component.html',
  styleUrls: ['./main-nav-bar.component.css']
})
export class MainNavBarComponent implements OnInit {

  protected Paths = Paths;
  protected _isNavBarCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

}
