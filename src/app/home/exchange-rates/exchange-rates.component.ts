import { Component, OnInit } from '@angular/core';
import { FavorableRatePreview } from '../landing-page/favorable-rates-preview/favorable-rate-preview.model';
import { HomeService } from '../home.service';
import { ExchangeRatesService } from './exchange-rates.service';
import { ExchangeRate, Rate } from './models/exchange-rate.model';

@Component({
  selector: 'exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.scss']
})
export class ExchangeRatesComponent implements OnInit {
  favorableCurrencies: FavorableRatePreview[];
  allCurrencies: ExchangeRate[];
  rateList: string[];
  constructor(private exchangeRatesService: ExchangeRatesService) {  }

  ngOnInit() {
    this.getBestRates();
    this.getAllRates();
  }
  getBestRates() {
    this.exchangeRatesService.getcurrBestRateList().subscribe(res => {
      this.favorableCurrencies = res;
    });
  }
  getAllRates() {
    this.exchangeRatesService.getCurrRateList().subscribe(res => {
      this.allCurrencies = res;
      console.log(this.allCurrencies[0].bankCurrRate.CASH)
      if (this.allCurrencies && this.allCurrencies[0]
            && this.allCurrencies[0].bankCurrRate
           && this.allCurrencies[0].bankCurrRate.CASH
           && this.allCurrencies[0].bankCurrRate.CASH[0]) {
        const rateList = Object.keys(this.allCurrencies[0].bankCurrRate.CASH[0]);
       this.rateList = rateList ? rateList.filter(rate => (rate !== 'OIL') && (rate !== 'GOLD')) : [];

        console.log(this.allCurrencies)
      }
    });
  }

}
