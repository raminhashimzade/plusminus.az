import { Component, OnInit } from '@angular/core';
import { BankAdminService } from '../bank-admin.service';
import { CustomerOrder } from '../models/customer-order.model';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'bank-customers',
  templateUrl: './bank-customers.component.html',
  styleUrls: ['./bank-customers.component.scss']
})
export class BankCustomersComponent implements OnInit {
  orders: CustomerOrder[];
  loading: boolean;
  constructor(private bankService: BankAdminService) { }

  ngOnInit() {
  this.getOrderList();
  }
  getOrderList() {
    this.loading = true;
    this.bankService.getOrderList()
    .pipe(finalize(() => this.loading = false))
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

}
