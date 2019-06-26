import { SharedService } from './../../../shared/shared.service';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { BankAdminService } from '../bank-admin.service';
import { CustomerOrder } from '../models/customer-order.model';
import { finalize } from 'rxjs/operators';
import { Popover } from 'src/app/popover/popover.service';
import { CustomerContactPopupComponent } from './customer-contact-popup/customer-contact-popup.component';
import { CustomerNotePopupComponent } from './customer-note-popup/customer-note-popup.component';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/admin-panel/shared/components/confirm-dialog/confirm-dialog.component';
import { OrderStats } from '../models/order-stats.model';

@Component({
  selector: 'bank-customers',
  templateUrl: './bank-customers.component.html',
  styleUrls: ['./bank-customers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BankCustomersComponent implements OnInit {
  orders: CustomerOrder[];
  loading: boolean;
  orderStats: OrderStats;
  cancelled: boolean  = false;
  called: boolean = false;
  constructor(
    private bankService: BankAdminService,
    private changeRef: ChangeDetectorRef,
    private popper: Popover,
    private titleService: Title,
    private translateService: TranslateService,
    private sharedService: SharedService,
    private dialog: MatDialog
    ) {
      this.titleService.setTitle(this.translateService.instant('~forBanks'));
    }

  ngOnInit() {
  this.getOrderList();
  this.getOrderStats();
  }
  getOrderList() {
    this.orders = undefined;
    this.loading = true;
    this.changeRef.detectChanges();
    this.bankService.getOrderList(this.cancelled, this.called)
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
  }
  onCustomerNotePopup(order, target) {
    const ref = this.popper.open({
      content: CustomerNotePopupComponent,
      origin: target,
      width: '242px',
      height: '341px',
      data: {
       order: order
      }
    });

    ref.afterClosed$.subscribe((res: any) => {
     if (res && res && res.data && res.data.success) {
       this.getOrderList();
       this.getOrderStats();
      }
    })
  }
  onCancelOrder(order: CustomerOrder) {
    const ref = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: `${this.translateService.instant('~confirmOrderCancel')} ?`
      }
    });
    ref.afterClosed().subscribe(res => {
      if (res) {
        this.bankService.postLoanOrderCancel(order)
        .pipe(finalize(() => this.loading = false))
        .subscribe(res => {
          if (res.success) {
            this.sharedService.createNotification(this.translateService.instant('~orderCancelled'), 'OK', 'success');
            this.getOrderList();
             this.getOrderStats();

          }
        });
      }
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

  }
  getOrderStats() {
    this.orderStats = undefined;
    this.bankService.getOrderStats()
    .pipe(
      finalize(() => {
        this.changeRef.detectChanges();
      })
    )
    .subscribe(res => {
      this.orderStats = res;
    })
  }

  onGetCalled() {
    this.cancelled = false;
     this.called = true;
      this.getOrderList();
  }
  onGetCancelled() {
     this.cancelled= true;
     this.called = false;
      this.getOrderList();
  }
  onGetAll() {
    this.called = false;
    this.cancelled = false;
    this.getOrderList();
  }
}
