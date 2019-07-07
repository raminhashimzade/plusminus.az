import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'credit-card-loader',
  templateUrl: './credit-card-loader.component.html',
  styleUrls: ['./credit-card-loader.component.scss']
})
export class CreditCardLoaderComponent implements OnInit {
 items = new Array(5);
  constructor() { }

  ngOnInit() {
  }

}
