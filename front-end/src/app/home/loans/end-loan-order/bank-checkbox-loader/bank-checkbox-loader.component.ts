import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bank-checkbox-loader',
  templateUrl: './bank-checkbox-loader.component.html',
  styleUrls: ['./bank-checkbox-loader.component.scss']
})
export class BankCheckboxLoaderComponent implements OnInit {
  items = new Array(7);
  constructor() { }

  ngOnInit() {
  }

}
