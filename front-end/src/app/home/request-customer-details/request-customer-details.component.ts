import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { LoansService } from '../loans/loans.service';
import { HttpResponseEnum } from 'src/app/shared/enums/http-response.enum';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'request-customer-details',
  templateUrl: './request-customer-details.component.html',
  styleUrls: ['./request-customer-details.component.scss']
})
export class RequestCustomerDetailsComponent implements OnInit {
  success: boolean;
  constructor(private router: Router, private loansService: LoansService,
    @Inject(PLATFORM_ID) private platformId: Object
    ) { }

  ngOnInit() {
   this.postLoanOrderCheckLink();
  }
  postLoanOrderCheckLink() {
    try {
      if (!isPlatformBrowser(this.platformId)) {return;}
      let url = new URL(`${window.location.protocol}/${window.location.host}/${window.location.hash.substr(2)}`);
      const data = {
        linkHash: url.searchParams.get('h'),
        orderID: url.searchParams.get('id'),
        bankID: url.searchParams.get('bankid'),
        channel: 'SITE'
      }
      this.loansService.postLoanOrderCheckLink(data)
      .subscribe(res => {
        if (res && (res.success === HttpResponseEnum.success)) {
          this.success = true;
        } else {
          this.router.navigateByUrl('/error-page');
        }
      })
    } catch (er) {
      this.router.navigateByUrl('/error-page');
    }

  }

}
