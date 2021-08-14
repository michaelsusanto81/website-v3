import { Component, OnInit } from '@angular/core';
import { CONTACTS } from './home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  contacts = CONTACTS;

  constructor() { }

  ngOnInit(): void {
  }

}
