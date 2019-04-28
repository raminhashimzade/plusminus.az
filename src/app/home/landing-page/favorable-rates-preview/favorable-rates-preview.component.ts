import { Component, OnInit } from '@angular/core';
import {MockFavorableRates} from './mock--favorable-rates';
import {FavorableRatePreview} from './favorable-rate-preview.model';
@Component({
  selector: 'favorable-rates-preview',
  templateUrl: './favorable-rates-preview.component.html',
  styleUrls: ['./favorable-rates-preview.component.scss']
})
export class FavorableRatesPreviewComponent implements OnInit {
  rates: FavorableRatePreview[] = MockFavorableRates;
  constructor() { }

  ngOnInit() {
  }

}
