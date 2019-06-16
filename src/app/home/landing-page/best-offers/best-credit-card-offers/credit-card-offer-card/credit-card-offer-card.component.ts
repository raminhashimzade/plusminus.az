import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'credit-card-offer-card',
  templateUrl: './credit-card-offer-card.component.html',
  styleUrls: ['./credit-card-offer-card.component.scss']
})
export class CreditCardOfferCardComponent implements OnInit {
  @Input() offer: any;
  lang: string;
  constructor(private translateService: TranslateService) {
      this.lang = this.translateService.getDefaultLang();
     this.translateService.onDefaultLangChange.subscribe(res => this.lang = res);
   }

  ngOnInit() {
  }

}
