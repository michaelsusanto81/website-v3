import { Component, OnInit } from '@angular/core';
import { PORTFOLIOS } from './portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements OnInit {

  portfolios = PORTFOLIOS;

  constructor() { }

  ngOnInit(): void {
  }

}
