import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'deposits',
  templateUrl: './deposits.component.html',
  styleUrls: ['./deposits.component.scss']
})
export class DepositsComponent implements OnInit {

  constructor(
    private titleService: Title,
    private tanslateService: TranslateService
    ) {
    this.titleService.setTitle(this.tanslateService.instant('~deposits'));
  }

  ngOnInit() {
  }

}
