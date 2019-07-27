import { Component, OnInit, Output, EventEmitter, PLATFORM_ID, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AdminPanelService } from '../admin-panel.service';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.scss']
})
export class AdminNavigationComponent implements OnInit {

  @Output() userClicked = new EventEmitter<void>();
  currentLang: string;
  previousTheme= 'purple';
  constructor(
    private translateService: TranslateService,
     private adminPanelService: AdminPanelService,
     private router: Router,
     @Inject(PLATFORM_ID) private platformId: Object
     ) {
    this.currentLang = this.translateService.getDefaultLang();
  }

  ngOnInit() {
  }
  goToMainPage() {
    if (!isPlatformBrowser(this.platformId)) {return;}
    let root = document.documentElement;
    root.style.setProperty('--primary-default', '#20a62c');
    root.style.setProperty('--primary-dark', '#20a62c');
    root.style.setProperty('--background-secondary', '#f3f3f3');
    this.router.navigateByUrl('/');
  }
  onLangChange(lang: string) {
    this.currentLang  = lang;
    this.translateService.setDefaultLang(lang);
  //  this.adminPanelService.langChange$.next(lang);
  }
  onFullScreen() {
    this.adminPanelService.fullScreen$.next(true);
    this.adminPanelService.
   createNotification(`${this.translateService.instant('~fullScreenExitMsg')}`, 'Full screen', 'success', 5000, 'top', 'center');
  }
  onThemeChange() {
    if (!isPlatformBrowser(this.platformId)) {return;}
    let root = document.documentElement;

    if (this.previousTheme=== 'purple') {
      this.previousTheme= 'green-sea'
      root.style.setProperty('--primary-default', '#20a62c');
      root.style.setProperty('--primary-dark', '#20a62c');
      root.style.setProperty('--background-secondary', '#f3f3f3');
    } else if (this.previousTheme=== 'green-sea'){
      this.previousTheme= 'indigo';
      root.style.setProperty('--primary-default', '#3F51B5');
      root.style.setProperty('--primary-dark', '#535392');
      root.style.setProperty('--background-secondary', '#535392');
    } else if(this.previousTheme=== 'indigo') {
      this.previousTheme= 'purple';
      root.style.setProperty('--primary-default', '#e91e63');
      root.style.setProperty('--primary-dark', '#e91e63');
      root.style.setProperty('--background-secondary', '#e91e63');
    }
  }

}
