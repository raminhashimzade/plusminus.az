import { Component, OnInit, Input } from '@angular/core';
import { FavorableRatePreview } from '../favorable-rate-preview.model';

@Component({
  selector: 'favorable-rates-preview-table',
  templateUrl: './favorable-rates-preview-table.component.html',
  styleUrls: ['./favorable-rates-preview-table.component.scss']
})
export class FavorableRatesPreviewTableComponent implements OnInit {
  @Input() currencies: FavorableRatePreview[];
  constructor() { }

  ngOnInit() {
//    console.log(this.currencies[0].rates[0].buy)
  //  console.log(this.currencies[0].rates['buy'])
  }

}
