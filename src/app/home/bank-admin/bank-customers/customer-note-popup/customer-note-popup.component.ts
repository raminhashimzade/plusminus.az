import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderShowInfo } from '../../models/order-show-info.model';
import { CustomerOrder } from '../../models/customer-order.model';
import { PopoverRef } from 'src/app/popover/popover-ref';
import { BankAdminService } from '../../bank-admin.service';
import { NgForm } from '@angular/forms';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'customer-note-popup',
  templateUrl: './customer-note-popup.component.html',
  styleUrls: ['./customer-note-popup.component.scss']
})
export class CustomerNotePopupComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  order: CustomerOrder;
  loading: boolean;
  constructor(
    private popoverRef: PopoverRef,
    private bankService: BankAdminService
    ) {
    this.order  = this.popoverRef.data.order;
  }
  ngOnInit() {

  }
  close() {
    this.popoverRef.close();
  }

  onSubmit() {
    this.loading = true;
    this.postLoanOrderCalled();
  }
  postLoanOrderCalled() {
    this.bankService.postLoanOrderCalled(this.order, this.form.value.note)
    .pipe(finalize(() => this.loading = false))
    .subscribe(res => this.popoverRef.close(res));
  }

}
