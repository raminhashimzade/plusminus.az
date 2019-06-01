import { Component, OnInit, HostListener, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FavorableRatePreview } from '../landing-page/favorable-rates-preview/favorable-rate-preview.model';
import { ExchangeRatesService } from './exchange-rates.service';
import { ExchangeRate, Rate } from './models/exchange-rate.model';
import { isMobileSize } from 'src/app/app.utils';
import { finalize } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExchangeRatesComponent implements OnInit {
  favorableCurrencies: FavorableRatePreview[];
  allCurrencies: ExchangeRate[];
  filteredCurrencies: ExchangeRate[];
  rateList: string[];
  sortState: {rate: string, type: string, sortBy: string};
  isMobile: boolean;
  loading: boolean;
  constructor(
    private exchangeRatesService: ExchangeRatesService,
    private changeRef: ChangeDetectorRef,
    private titlseService: Title,
    private translateService: TranslateService
    ) {
      this.titlseService.setTitle(this.translateService.instant('~exchange-rates'));
    }

  ngOnInit() {
    this.getBestRates();
    this.getAllRates();
  }
  getBestRates() {
    this.exchangeRatesService.getcurrBestRateList().subscribe(res => {
      this.favorableCurrencies = res;
      this.changeRef.detectChanges();
    });
  }
  onSort(rate: string, type: string, sortBy: string) {
    try {
    this.sortState = {rate, type, sortBy};
    let sortedCurrencies: ExchangeRate[];
    if (sortBy === 'desc') {
      sortedCurrencies  =  [...this.allCurrencies].sort((a: ExchangeRate, b: ExchangeRate) => {
      if (+a.bankCurrRate.CASH[0][rate][type] > +b.bankCurrRate.CASH[0][rate][type]) {return -1;}
      if (+a.bankCurrRate.CASH[0][rate][type] < +b.bankCurrRate.CASH[0][rate][type]) {return 1;}
      return 0;
      });
    } else {
       sortedCurrencies = [...this.allCurrencies].sort((a: ExchangeRate, b: ExchangeRate) =>
      {
         if (+a.bankCurrRate.CASH[0][rate][type] > +b.bankCurrRate.CASH[0][rate][type]) {return 1;}
         if (+a.bankCurrRate.CASH[0][rate][type] < +b.bankCurrRate.CASH[0][rate][type]) {return -1;}
         return 0;
     })
    }
    this.allCurrencies  = [...sortedCurrencies];
    } catch (er) {
      console.log(er);
    } finally {
      this.changeRef.detectChanges();
    }
  }
  isActiveSort(rate: string, type: string, sortBy: string) {
    return JSON.stringify(this.sortState) === JSON.stringify({rate, type, sortBy});
  }
  getAllRates() {
    this.loading = true;
    this.exchangeRatesService.getCurrRateList()
    .pipe(
      finalize(() => {
        this.loading = false;
        this.changeRef.detectChanges();
      })
    )
    .subscribe(res => {
      this.allCurrencies = res;
      this.filteredCurrencies = res;
      if (this.allCurrencies && this.allCurrencies[0]
            && this.allCurrencies[0].bankCurrRate
           && this.allCurrencies[0].bankCurrRate.CASH
           && this.allCurrencies[0].bankCurrRate.CASH[0]) {
           this.buildRateList();
            this.changeRef.detectChanges();
      }
    });
  }
  buildRateList() {
    const rateList = Object.keys(this.allCurrencies[0].bankCurrRate.CASH[0]);
   // this.rateList = rateList ? rateList.filter(rate => (rate !== 'OIL') && (rate !== 'GOLD')) : [];
    this.rateList = ['USD', 'EUR', 'RUB', 'TRY'];
    this.changeRef.detectChanges();
  }
  onNextRateScroll() {
    try {
      const el = document.getElementsByClassName('exchange-rates-full__table')[0];
      el.scrollBy({
      left: 200,
      behavior: 'smooth'
    });
    } catch(er) {
      console.log(er);
    } finally {
      this.changeRef.detectChanges();
    }
  }
  filterBanks(str: string) {
    if (!str) {
      this.filteredCurrencies = [...this.allCurrencies];
    } else {
      this.filteredCurrencies = [...this.allCurrencies].filter(cur => cur.bankName.toLowerCase().includes(str));
    }
  }

}
