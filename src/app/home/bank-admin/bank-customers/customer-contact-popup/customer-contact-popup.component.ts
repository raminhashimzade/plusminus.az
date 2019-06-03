import { Component, OnInit } from '@angular/core';
import { PopoverRef } from 'src/app/popover/popover-ref';
import { BankAdminService } from '../../bank-admin.service';
import { CustomerOrder } from '../../models/customer-order.model';
import { OrderShowInfo } from '../../models/order-show-info.model';

@Component({
  selector: 'customer-contact-popup',
  templateUrl: './customer-contact-popup.component.html',
  styleUrls: ['./customer-contact-popup.component.scss']
})
export class CustomerContactPopupComponent  {
  data: OrderShowInfo;
  order: CustomerOrder;
  constructor(
    private popoverRef: PopoverRef,
    private bankService: BankAdminService
    ) {
    this.order  = this.popoverRef.data.order;
  }
  ngOnInit() {
   this.postLoanOrderShowInfo();
  }
  close() {
    this.popoverRef.close();
  }
  postLoanOrderShowInfo() {
     this.bankService.postLoanOrderShowInfo(this.order)
    .subscribe(res =>{
      console.log(res);
      this.data = res;
    })
  }

}
