import { MatInput } from '@angular/material/input';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
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
export class CustomerNotePopupComponent implements OnInit, AfterViewInit {
  @ViewChild('f') form: NgForm;
  @ViewChild('bankNoteInput') bankNoteInput: MatInput;
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
  ngAfterViewInit() {
   setTimeout(() => {
    this.form.form.controls['bankNote'].setValue(this.order.bankNote);
    this.bankNoteInput.focus();
   }, 100)
  }
  close() {
    this.popoverRef.close();
  }

  onSubmit() {
    if (!this.form.valid) {return;}
    this.loading = true;
    this.postLoanOrderCalled();
  }
  postLoanOrderCalled() {
    this.bankService.postLoanOrderCalled(this.order, this.form.value.bankNote)
    .pipe(finalize(() => this.loading = false))
    .subscribe(res => this.popoverRef.close(res));
  }

}
