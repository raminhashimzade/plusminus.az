import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { APP_KEY, DEFAULT_LANG } from './app.utils';
import  {detect} from 'detect-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private translateService: TranslateService, private router: Router) {
    this.setDefaultLang();
    this.detectBrowser();
  }
  detectBrowser() {
    const browser = detect();
    console.log(browser.name)
  try {
    switch (browser && browser.name) {
      case 'chrome':
      case 'chromium-webview':
      case 'firefox':
      case 'ios':
      case 'ios-webview':
      case 'searchbot':
      case 'edge':
      case 'edge-chromium':
      case 'opera':
      case 'safari':
      case 'yandexbrowser':
        break;
      default:
        this.router.navigateByUrl('/unsupported-browser');
    }
  } catch(er) {
    this.router.navigateByUrl('/unsupported-browser');
  }
  }
  setDefaultLang() {
    const language = localStorage.getItem(`${APP_KEY}_language`) || DEFAULT_LANG;
    this.translateService.setDefaultLang(language);
  };
}
