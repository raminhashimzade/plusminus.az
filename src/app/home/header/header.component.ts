import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  defaultLang: string;
  showProfileSettings = false;
  constructor(private translateService: TranslateService,
     private router: Router
      ) {}

  ngOnInit() {
    this.defaultLang = this.translateService.getDefaultLang();
    this.translateService.onDefaultLangChange.subscribe(res => {
      this.defaultLang = res && res.lang;
    });
    this.showProfileSettings = this.router.url.includes('bank-admin/customers');
    this.listenToRouteChange();
  }
  onLangChange(lang) {
    this.translateService.setDefaultLang(lang);
  }
  listenToRouteChange() {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd ) {
        if (event && event.url.includes('bank-admin/customers')) {
          this.showProfileSettings= true;
        } else {
          this.showProfileSettings= false;
        }
      }
    })
  }
}
