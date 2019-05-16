import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { parseMomentToString } from 'src/app/app.utils';
import { ExchangeRatesService } from '../exchange-rates.service';
import { CurrencyArchieve } from '../models/currency-archieve.model';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'exchange-rate-visualize',
  templateUrl: './exchange-rate-visualize.component.html',
  styleUrls: ['./exchange-rate-visualize.component.scss']
})
export class ExchangeRateVisualizeComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  dataSource: any;
  data: any;
  loading: boolean;
  constructor(private exchangeRateService: ExchangeRatesService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.data = null;
    this.loading = true;
   parseMomentToString(this.form.value);
    this.exchangeRateService.getcurrRateArchive(this.form.value)
      .pipe(finalize(() => {
        setTimeout(() => this.loading  = false, 0)
      }))
    .subscribe((items: CurrencyArchieve[]) => {
      if (!items) {return;}
      const dataSource = items.map(item => {
        return {
          label: item.date,
          value: item.rate
        }
      }).reverse();
      this.data = {
        chart: {
          plottooltext: "Valyuta dəyişmə qrafikası",
          yaxisname: this.form.value['currencyCode'],
          anchorradius: "1",
          showhovereffect: "1",
          showvalues: "0",
          theme: "fusion",
          anchorbgcolor: "FFC400",
          palettecolors: "FFC400"
        },
        data: dataSource
      }
    })
  }
}