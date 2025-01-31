import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, Inject, PLATFORM_ID } from '@angular/core';
import { NgForm } from '@angular/forms';
import { deepClone } from 'src/app/app.utils';
import { ExchangeRatesService } from '../exchange-rates.service';
import { CurrencyArchieve } from '../models/currency-archieve.model';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { SelectType } from 'src/app/shared/models/select-type.model';
import { SharedService } from 'src/app/shared/shared.service';
import { isPlatformBrowser } from '@angular/common';
declare var google: any;
import { Moment } from 'moment';
import * as moment from 'moment';
@Component({
  selector: 'exchange-rate-visualize',
  templateUrl: './exchange-rate-visualize.component.html',
  styleUrls: ['./exchange-rate-visualize.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExchangeRateVisualizeComponent implements OnInit {
  @ViewChild('f', { static: true }) form: NgForm;
  dataSource: any;
  data: any;
  loading: boolean;
  currCodes$: Observable<SelectType[]>;
  constructor(private exchangeRateService: ExchangeRatesService,
     private changeRef: ChangeDetectorRef,
     private sharedService: SharedService,
     private translateService: TranslateService,
     @Inject(PLATFORM_ID) private platformId: Object
     ) {
      this.currCodes$ = this.sharedService.getCurrCodeList('exchange-rates');
     }

  ngOnInit() {

  }
  initChart() {
    google.charts.load('current', {'packages':['line']});
    google.charts.setOnLoadCallback(this.drawChart.bind(this));
  }
  drawChart() {
    const data = new google.visualization.DataTable();
  data.addColumn('string', this.translateService.instant('~date'));
    data.addColumn('number', this.form.value.currencyCode);
    data.addRows(this.data);
    const options = {
      chart: {
        title: this.translateService.instant('~exchangeVisualizeChart'),
        subtitle: this.form.value.currencyCode
      }
    };
    this.loading = false;
    this.changeRef.detectChanges();
    setTimeout(() => {
      if (!isPlatformBrowser(this.platformId)) {return;}
      const chart = new google.charts.Line(document.getElementById('linechart_material'));
      chart.draw(data, google.charts.Line.convertOptions(options));
      this.changeRef.detectChanges();
    });
  }
  onSubmit() {
    this.data = null;
    this.loading = true;
    const newFormValue = this.parseMomentToString(deepClone(this.form.value));
    this.exchangeRateService.getcurrRateArchive(newFormValue)
    .subscribe((items: CurrencyArchieve[]) => {
      if (!items) {return;}
      const dataSource = items.map(item => {
        return [item.date, item.rate];
      }).reverse();
      this.data = dataSource;
      this.changeRef.detectChanges();
      this.initChart();
    });
  }
  parseMomentToString(formValue: Object): Object {
    try {
      const newFormValue: string = Object.assign(formValue);
      Object.keys(newFormValue).forEach(key => {
        if (key.toLowerCase().includes('date') || moment.isMoment(key)) {
          newFormValue[key] = this.momentToString(newFormValue[key]);
        }
      });
      return newFormValue;
    } catch (er) {
      console.log(er);
      return formValue;
    }
  }
   momentToString(date: Moment) {
    if (!date) {
      return date;
    }
    return date.format('YYYYMMDD');
  }

}
