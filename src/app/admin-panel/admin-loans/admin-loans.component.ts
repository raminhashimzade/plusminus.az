import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AdminLoanService } from './admin-loan.service';
import { CrudCommandType } from '../models/crud-command-type.enum';
import { LoanProduct } from 'src/app/home/loans/models/loanGroup.model';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  allColumns: string[];
  visibleColumns: string[];
  toggleColumnsControl: FormControl = new FormControl();
  dataSource: MatTableDataSource<LoanProduct>;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

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
    this.toggleColumnsControl.setValue(this.allColumns);
    this.toggleColumnsControl.valueChanges.subscribe(res => {
      this.allColumns = res;
      // this.changeRef.detectChanges();
    })
  }
  applyFilter(column, filterValue: string) {
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
    this.adminLoanService.crudProduct(CrudCommandType.SELECT, {})
    .subscribe(res => {
      if (!(res && res[0])) {return;}
      this.dataSource = new MatTableDataSource(res);
      const columns = Object.keys(res[0]);
      columns.push('editer');
      this.allColumns = [...columns].filter( column => (column !== 'description') && (column !=='descriptionPD') && (column !== 'descriptionDOC') );
      const localStorageColumns = localStorage.getItem('loansVisibleColumns');
      if (localStorageColumns) {
        this.visibleColumns = JSON.parse(localStorageColumns);
      } else {
        this.visibleColumns = [...this.allColumns];
      }
      setTimeout(() => {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
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
        this.adminLoanService.crudProduct(CrudCommandType.DELETE, element)
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
    this.visibleColumns = [...this.allColumns];
    localStorage.removeItem('loansVisibleColumns');
  }
  hideAllColumns() {
    this.visibleColumns = [];
    localStorage.removeItem('loansVisibleColumns');
  }
  onToggleColumns(columns: string[]) {
    this.visibleColumns = columns;
    localStorage.setItem('loansVisibleColumns', JSON.stringify(columns));
  }


}
