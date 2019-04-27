import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { APP_KEY, DEFAULT_LANG } from './app.utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private translateService: TranslateService) {
    this.setDefaultLang();
  }
  setDefaultLang() {
    const language = localStorage.getItem(`${APP_KEY}_language`) || DEFAULT_LANG;
    this.translateService.setDefaultLang(language);
  }
}
