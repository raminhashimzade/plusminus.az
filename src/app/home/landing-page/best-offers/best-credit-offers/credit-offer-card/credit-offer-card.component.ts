import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'credit-offer-card',
  templateUrl: './credit-offer-card.component.html',
  styleUrls: ['./credit-offer-card.component.scss']
})
export class CreditOfferCardComponent implements OnInit {
  @Input() offer: any;
  constructor() { }

  ngOnInit() {
  }

}
