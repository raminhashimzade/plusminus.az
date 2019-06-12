import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from '../../home.service';
import { FavorableRatePreview } from '../../landing-page/favorable-rates-preview/favorable-rate-preview.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'exchange-rate-calculator',
  templateUrl: './exchange-rate-calculator.component.html',
  styleUrls: ['./exchange-rate-calculator.component.scss']
})
export class ExchangeRateCalculatorComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  currencyCodeIn = 'USD';
  currencyCodeOut = 'AZN';
  result: string;
  rates: FavorableRatePreview[];
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.getcurrBestRateList();
  }
  getcurrBestRateList() {
    this.homeService.getcurrBestRateList().subscribe(res => {
      this.rates = res;
    });
  }
  calcInResult() {
    console.log('calc in')
    const inCurrencyCode = this.form.controls['currencyCodeIn'].value;
    const inRate = this.getRate('buy', inCurrencyCode);
    const outAmount = this.form.controls['amountOut'].value;
    const outCurrencyCode = this.form.controls['currencyCodeOut'].value;
    const outRate = this.getRate('sell', outCurrencyCode);
    const result = (outAmount * outRate / inRate).toFixed(2);
    this.form.controls['amountIn'].setValue(result);
  }
  calcOutResult() {
    console.log('calc out')
    const inAmount = this.form.controls['amountIn'].value;
    const inCurrencyCode = this.form.controls['currencyCodeIn'].value;
    const inRate = this.getRate('buy', inCurrencyCode);
    const outCurrencyCode = this.form.controls['currencyCodeOut'].value;
    const outRate = this.getRate('sell', outCurrencyCode);
    const result = (inAmount * inRate / outRate).toFixed(2);
    this.form.controls['amountOut'].setValue(result);
  }
  getRate(type: string, currencyCode: string) {
    if (currencyCode === 'AZN') {
      console.log('AZN')
      return 1;
    }
    return +this.rates.find(r => r.currencyCode === currencyCode).rates[0][type].rate;
  }

}
