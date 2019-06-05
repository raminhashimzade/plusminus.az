import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'credit-cards-table',
  templateUrl: './credit-cards-table.component.html',
  styleUrls: ['./credit-cards-table.component.scss']
})
export class CreditCardsTableComponent implements OnInit {
  items = new Array(5);
  constructor() { }

  ngOnInit() {
  }

}
