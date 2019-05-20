import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { parseMomentToString, deepClone } from 'src/app/app.utils';
import { ExchangeRatesService } from '../exchange-rates.service';
import { CurrencyArchieve } from '../models/currency-archieve.model';
import { finalize } from 'rxjs/operators';
import { ExchangeRate } from '../models/exchange-rate.model';
import { TranslateService } from '@ngx-translate/core';
declare var google: any;
@Component({
  selector: 'exchange-rate-visualize',
  templateUrl: './exchange-rate-visualize.component.html',
  styleUrls: ['./exchange-rate-visualize.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExchangeRateVisualizeComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  dataSource: any;
  data: any;
  loading: boolean;
  constructor(private exchangeRateService: ExchangeRatesService,
     private changeRef: ChangeDetectorRef,
     private translateService: TranslateService
     ) { }

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
      const chart = new google.charts.Line(document.getElementById('linechart_material'));
      chart.draw(data, google.charts.Line.convertOptions(options));
      this.changeRef.detectChanges();
    });
  }
  onSubmit() {
    this.data = null;
    this.loading = true;
    const newFormValue = parseMomentToString(deepClone(this.form.value));
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
}
