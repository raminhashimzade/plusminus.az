import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { APP_KEY, DEFAULT_LANG, isTestMode } from './app.utils';
import  {detect} from 'detect-browser';
import { Router } from '@angular/router';
import { SharedService } from './shared/shared.service';
import { environment } from 'src/environments/environment';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'plus-minus',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private translateService: TranslateService,
    private sharedService: SharedService,
    @Inject(PLATFORM_ID) private platformId: Object,
     private router: Router) {
    this.setDefaultLang();
  //  this.detectBrowser();
    if (!this.isTestMode()) {
  //    this.router.navigateByUrl('/countdown');
     }
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
  isTestMode() {
    return isTestMode();
  }
  setDefaultLang() {
    if (isPlatformBrowser(this.platformId)) {
      const language = localStorage.getItem(`${APP_KEY}_language`) || DEFAULT_LANG;
      this.translateService.setDefaultLang(language);
    }
  };
}
