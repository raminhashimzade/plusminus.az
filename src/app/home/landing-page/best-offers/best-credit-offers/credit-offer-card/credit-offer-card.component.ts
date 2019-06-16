import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'credit-offer-card',
  templateUrl: './credit-offer-card.component.html',
  styleUrls: ['./credit-offer-card.component.scss']
})
export class CreditOfferCardComponent implements OnInit {
  @Input() offer: any;
  lang: string;
  constructor(private translateService: TranslateService) {
      this.lang = this.translateService.getDefaultLang();
     this.translateService.onDefaultLangChange.subscribe(res => this.lang = res);
   }

  ngOnInit() {
  }


}
