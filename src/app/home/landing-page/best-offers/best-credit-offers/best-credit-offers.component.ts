import { Component, OnInit } from '@angular/core';
import { MockCreditOffers } from './mock-credit-offer';

@Component({
  selector: 'best-credit-offers',
  templateUrl: './best-credit-offers.component.html',
  styleUrls: ['./best-credit-offers.component.scss']
})
export class BestCreditOffersComponent implements OnInit {
    creidtOffers = MockCreditOffers;
  constructor() { }

  ngOnInit() {
  }

}
