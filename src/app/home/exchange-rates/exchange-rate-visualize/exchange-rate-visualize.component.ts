import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { parseMomentToString } from 'src/app/app.utils';
import { ExchangeRatesService } from '../exchange-rates.service';
import { CurrencyArchieve } from '../models/currency-archieve.model';
import { finalize } from 'rxjs/operators';
import { ExchangeRate } from '../models/exchange-rate.model';
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
  constructor(private exchangeRateService: ExchangeRatesService, private changeRef: ChangeDetectorRef) { }

  ngOnInit() {

  }
  initChart() {
    google.charts.load('current', {'packages':['line']});
    google.charts.setOnLoadCallback(this.drawChart.bind(this));
  }
  drawChart() {
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Tarix');
    data.addColumn('number', 'USD');
    data.addRows(this.data);

    const options = {
      chart: {
        title: 'Valyuta dəyişmə qrafikasl',
        subtitle: '(USD)'
      }
    };

    const chart = new google.charts.Line(document.getElementById('linechart_material'));

    chart.draw(data, google.charts.Line.convertOptions(options));
    this.changeRef.detectChanges();
  }
  onSubmit() {
    this.data = null;
    this.loading = true;
     parseMomentToString(this.form.value);
    this.exchangeRateService.getcurrRateArchive(this.form.value)
      .pipe(finalize(() => {
        setTimeout(() => {
          this.loading  = false
          this.changeRef.detectChanges();
        }, 0);
      }))
    .subscribe((items: CurrencyArchieve[]) => {
      if (!items) {return;}
      const dataSource = items.map(item => {
        return [item.date, item.rate];
      }).reverse();
      this.data = dataSource;
      this.changeRef.detectChanges();
      this.initChart();
    })
  }
}
