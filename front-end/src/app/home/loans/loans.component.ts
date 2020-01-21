import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent {

  constructor(
    private titleService: Title,
    private tanslateService: TranslateService
    ) {
    this.titleService.setTitle(this.tanslateService.instant('~loans'));
  }
}
