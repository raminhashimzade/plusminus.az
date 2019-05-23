import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { LoansService } from '../loans/loans.service';
import { Observable } from 'rxjs';
import { LoanProduct } from '../loans/models/loanGroup.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  defaultLang: string;
  showloanCompare= false;
  productList$: Observable<LoanProduct[]>;
  constructor(private translateService: TranslateService,
     private router: Router,
      private loansService: LoansService) {
        this.productList$ = this.loansService.getSavedCompareProductList();
      }

  ngOnInit() {
    this.defaultLang = this.translateService.getDefaultLang();
    this.translateService.onDefaultLangChange.subscribe(res => {
      this.defaultLang = res && res.lang;
    });
    this.showloanCompare= this.router.url.includes('loans');
    this.listenToRouteChange();
  }
  onLangChange(lang) {
    this.translateService.setDefaultLang(lang);
  }
  listenToRouteChange() {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd ) {
        if (event && event.url.includes('loans')) {
          this.showloanCompare= true;
        } else {
          this.showloanCompare= false;
        }
      }
    })
  }
}
