import { Component, OnInit } from '@angular/core';
import { PORTFOLIOS } from './portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  portfolios = PORTFOLIOS;

  constructor() { }

  ngOnInit(): void {
  }

}
