import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AdminLoanService } from './admin-loan.service';
import { CrudCommandType } from '../models/crud-command-type.enum';
import { LoanProduct } from 'src/app/home/loans/models/loanGroup.model';
import { MatSort, MatTableDataSource, MatDialog, MatSelectChange } from '@angular/material';
import { AddOrEditLoanComponent } from './add-or-edit-loan/add-or-edit-loan.component';
import { TableDialogConfig } from '../admin-panel.utils';
import { ConfirmDialogComponent } from '../shared/components/confirm-dialog/confirm-dialog.component';
import { AdminPanelService } from '../admin-panel.service';
import { TranslateService } from '@ngx-translate/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'admin-loans',
  templateUrl: './admin-loans.component.html',
  styleUrls: ['./admin-loans.component.scss'],
 // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminLoansComponent implements OnInit {
  allColumns: string[] = ['bankId', 'loanName', 'loanType', 'currencyCode',
   'minRate', 'minAmount', 'maxAmount', 'comissionCash', 'comissionLoan',
   'minAge', 'maxAge', 'minEffectiveRate', 'maxEffectiveRate', 'minPeriod',
   'maxPeriod', 'withCollateral', 'withEmpReference', 'withGracePeriod', 'prodStatus', 'insurance', 'priority',
   'editer'
 //  'description', 'desciprtionDOC', 'descriptionPD'
   ];
  displayedColumns: string[] = this.allColumns.slice();
  toggleColumnsControl: FormControl = new FormControl();
  dataSource: MatTableDataSource<LoanProduct>;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private adminLoanService: AdminLoanService,
    private translateService: TranslateService,
    private dialog: MatDialog,
     private adminService: AdminPanelService,
     private changeRef: ChangeDetectorRef
     ) { }
  ngOnInit() {
    this.getData();
  }
  initToggleColumnControl() {
    this.toggleColumnsControl.setValue(this.displayedColumns);
    this.toggleColumnsControl.valueChanges.subscribe(res => {
      this.displayedColumns = res;
      // this.changeRef.detectChanges();
    })
  }
  applyFilter(column, filterValue: string) {
    console.log(column)
    this.dataSource.filterPredicate =
    (data: LoanProduct, filter: string) => data[column].toString().toLowerCase().includes(filter.toLowerCase());
    this.dataSource.filter = filterValue;
  //  this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  applyMultiLangFilter(column, filterValue: string) {
    this.dataSource.filterPredicate =
    (data: LoanProduct, filter: string) => data[column]['az'].toLowerCase().includes(filter.toLowerCase());
    this.dataSource.filter = filterValue;
  //  this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  isMultiLang(column: string): string {
    if (column === 'editer') {
  //    console.log('editer')
      return 'editer';
    }
    return (column === 'loanName' || column === 'description' || column ==='descriptionPD' || column === 'descriptionDOC') ? 'multilang' : 'standard';
  }
  getData() {
    this.dataSource = undefined;
    this.adminLoanService.crudLoanProduct(CrudCommandType.SELECT, {})
    .subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      setTimeout(() => {
        this.dataSource.sort = this.sort;

       // this.initToggleColumnControl();
        // this.changeRef.detectChanges();
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

  showAllColumns() {
    this.displayedColumns = [...this.allColumns];
  //  this.toggleColumnsControl.setValue(this.displayedColumns);
    // this.changeRef.detectChanges();
  }
  hideAllColumns() {
    this.displayedColumns = [];
 //   this.toggleColumnsControl.setValue(this.displayedColumns);
    // this.changeRef.detectChanges();
  }


}
