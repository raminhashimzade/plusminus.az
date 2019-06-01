import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'mortgage',
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.scss']
})
export class MortgageComponent {

  constructor(
    private titleService: Title,
    private translateService: TranslateService
    ) {
    this.titleService.setTitle(this.translateService.instant('~mortgage'));
  }

}
