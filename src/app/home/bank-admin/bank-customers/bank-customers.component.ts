import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { BankAdminService } from '../bank-admin.service';
import { CustomerOrder } from '../models/customer-order.model';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'bank-customers',
  templateUrl: './bank-customers.component.html',
  styleUrls: ['./bank-customers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BankCustomersComponent implements OnInit {
  orders: CustomerOrder[];
  loading: boolean;
  constructor(private bankService: BankAdminService, private changeRef: ChangeDetectorRef) { }

  ngOnInit() {
  this.getOrderList();
  }
  getOrderList() {
    this.loading = true;
    this.bankService.getOrderList()
    .pipe(finalize(() => {
      this.loading = false;
      this.changeRef.detectChanges();
    }))
    .subscribe(res =>{
      this.orders = res;
    } )
  }
  onShowInfoClick(order: CustomerOrder) {
    this.bankService.postLoanOrderShowInfo(order)
    .subscribe(res =>{
      console.log(res);
    })
  }

  onNextRateScroll() {
    try {
      const el = document.getElementById('customers-table');
      el.scrollBy({
      left: 200,
      behavior: 'smooth'
    });
    } catch(er) {
      console.log(er);
    } finally {
     this.changeRef.detectChanges();
    }
  }
  onPrevRateScroll() {
    try {
      const el = document.getElementById('customers-table');
      el.scrollBy({
      left: -200,
      behavior: 'smooth'
    });
    } catch(er) {
      console.log(er);
    } finally {
   this.changeRef.detectChanges();
    }
  }

}
