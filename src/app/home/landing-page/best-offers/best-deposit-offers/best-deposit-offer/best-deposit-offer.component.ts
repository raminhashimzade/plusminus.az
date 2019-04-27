import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'best-deposit-offer',
  templateUrl: './best-deposit-offer.component.html',
  styleUrls: ['./best-deposit-offer.component.scss']
})
export class BestDepositOfferComponent implements OnInit {
  @Input() type: string;
  constructor() { }

  ngOnInit() {
  }

}
