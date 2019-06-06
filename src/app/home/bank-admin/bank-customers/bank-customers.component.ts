import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { BankAdminService } from '../bank-admin.service';
import { CustomerOrder } from '../models/customer-order.model';
import { finalize } from 'rxjs/operators';
import { Popover } from 'src/app/popover/popover.service';
import { CustomerContactPopupComponent } from './customer-contact-popup/customer-contact-popup.component';
import { CustomerNotePopupComponent } from './customer-note-popup/customer-note-popup.component';

@Component({
  selector: 'bank-customers',
  templateUrl: './bank-customers.component.html',
  styleUrls: ['./bank-customers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BankCustomersComponent implements OnInit {
  orders: CustomerOrder[];
  loading: boolean;
  constructor(
    private bankService: BankAdminService,
    private changeRef: ChangeDetectorRef,
    private popper: Popover
    ) { }

  ngOnInit() {
  this.getOrderList();
  }
  getOrderList() {
    this.orders = undefined;
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
  onCustomerContactPopup(order: CustomerOrder, target) {
    const ref = this.popper.open({
      content: CustomerContactPopupComponent,
      origin: target,
      width: '196px',
      data: {
       order: order
      }
    });

    ref.afterClosed$.subscribe(res => {
      //  console.log(res);
    })

  }
  onCustomerNotePopup(order, target) {
    const ref = this.popper.open({
      content: CustomerNotePopupComponent,
      origin: target,
      width: '242px',
      height: '340px',
      data: {
       order: order
      }
    });

    ref.afterClosed$.subscribe(res => {
     if (res) {this.getOrderList();}
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
  show(order: CustomerOrder, origin) {
    const ref = this.popper.open({
      content: CustomerContactPopupComponent,
      //  content: 'Hello world!',
      // content: InsidePopoverComponent,
      origin,
      width: '200px',
      data: {
       orderId: order
      }
    });

    ref.afterClosed$.subscribe(res => {
        console.log(res);
    })

  }

}
