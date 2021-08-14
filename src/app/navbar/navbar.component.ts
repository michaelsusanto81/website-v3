import { Component, OnInit } from '@angular/core';
import { NAV_MENUS } from './navbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  nav_menus = NAV_MENUS;

  constructor() { }

  ngOnInit(): void {
  }

}
