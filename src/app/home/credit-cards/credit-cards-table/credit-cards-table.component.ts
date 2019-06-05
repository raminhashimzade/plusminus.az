import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'credit-cards-table',
  templateUrl: './credit-cards-table.component.html',
  styleUrls: ['./credit-cards-table.component.scss']
})
export class CreditCardsTableComponent implements OnInit {
  items = new Array(5);
  constructor(
    private titleService: Title,
    private translateService: TranslateService) {
    this.titleService.setTitle(this.translateService.instant('~credit-cards'));
   }

  ngOnInit() {
  }

}
