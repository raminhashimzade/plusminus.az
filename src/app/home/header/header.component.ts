import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  defaultLang: string;
  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.defaultLang = this.translateService.getDefaultLang();
    this.translateService.onDefaultLangChange.subscribe(res => {
      this.defaultLang = res && res.lang;
    });
  }
  onLangChange(lang) {
    this.translateService.setDefaultLang(lang);
  }
}
