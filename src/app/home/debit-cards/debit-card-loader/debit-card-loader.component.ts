import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'debit-card-loader',
  templateUrl: './debit-card-loader.component.html',
  styleUrls: ['./debit-card-loader.component.scss']
})
export class DebitCardLoaderComponent implements OnInit {
  items = new Array(5);
  constructor() { }

  ngOnInit() {
  }

}
