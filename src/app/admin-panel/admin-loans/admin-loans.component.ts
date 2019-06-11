import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminLoanService } from './admin-loan.service';
import { CrudCommandType } from '../models/crud-command-type.enum';
import { LoanProduct } from 'src/app/home/loans/models/loanGroup.model';
import { MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { AddOrEditLoanComponent } from './add-or-edit-loan/add-or-edit-loan.component';
import { TableDialogConfig } from '../admin-panel.utils';
import { ConfirmDialogComponent } from '../shared/components/confirm-dialog/confirm-dialog.component';
import { AdminPanelService } from '../admin-panel.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'admin-loans',
  templateUrl: './admin-loans.component.html',
  styleUrls: ['./admin-loans.component.scss']
})
export class AdminLoansComponent implements OnInit {
  displayedColumns: string[] = ['bankId', 'loanName', 'loanType', 'currencyCode',  'minRate', 'minAmount', 'maxAmount', 'editer'];
  dataSource: MatTableDataSource<LoanProduct>;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private adminLoanService: AdminLoanService,
    private translateService: TranslateService,
    private dialog: MatDialog,
     private adminService: AdminPanelService) { }
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataSource = undefined;
    this.adminLoanService.crudLoanProduct(CrudCommandType.SELECT, {})
    .subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      setTimeout(() => {
        this.dataSource.sort = this.sort;
      }, 10);
    })
  }
  onEdit(item: LoanProduct) {
    const ref = this.dialog.open(AddOrEditLoanComponent, {
      data: {
        item: item
      },
      ...TableDialogConfig
    });
    ref.afterClosed().subscribe(res => {
      if (res) {
        this.getData();
      }
    });
  }
  onAdd() {
    const ref = this.dialog.open(AddOrEditLoanComponent, {
      data: {
      },
      ...TableDialogConfig
    });
    ref.afterClosed().subscribe(res => res && this.getData());
  }
  onDelete(element: LoanProduct) {
    const ref = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: "Əminsiz silməyə ?"
      }
    });
    ref.afterClosed().subscribe( res => {
      if (res) {
        this.adminLoanService.crudLoanProduct(CrudCommandType.DELETE, element)
        .subscribe(res => {
          if (res) {
            this.adminService
            .createNotification(`[ LOAN ] ${this.translateService.instant('~deleteSuccess')}`, 'OK', 'success');
            this.getData();
           }
        })
      }
    })

  }

}
