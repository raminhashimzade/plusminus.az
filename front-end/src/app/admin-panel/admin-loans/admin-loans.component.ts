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
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  allColumns: string[];
  visibleColumns: string[];
  toggleColumnsControl: FormControl = new FormControl();
  dataSource: MatTableDataSource<LoanProduct>;
  dataFilterState: { column: string, filterValue: string, multi: boolean };
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
    this.dataFilterState = { column, filterValue, multi: false };
  }
  applyMultiLangFilter(column, filterValue: string) {
    this.dataSource.filterPredicate =
      (data: LoanProduct, filter: string) => data[column]['az'].toLowerCase().includes(filter.toLowerCase());
    this.dataSource.filter = filterValue;
    this.dataFilterState = { column, filterValue, multi: true };
  }

  isMultiLang(column: string): string {
    if (column === 'editer') {
      return 'editer';
    }
    return (column === 'loanName' || column === 'description' || column === 'descriptionPD' || column === 'descriptionDOC') ? 'multilang' : 'standard';
  }
  getData() {
    this.dataSource = undefined;
    this.adminLoanService.crudProduct(CrudCommandType.SELECT, {})
      .subscribe(res => {
        if (!(res && res[0])) { return; }
        this.dataSource = new MatTableDataSource(res);
        if (this.dataFilterState) {
          const { column, filterValue, multi } = { ...this.dataFilterState };
          multi ? this.applyMultiLangFilter(column, filterValue) :
            this.applyFilter(column, filterValue);
        }
        const columns = Object.keys(res[0]);
        columns.push('editer');
        this.allColumns = [...columns].
          filter(column => (column !== 'description') && (column !== 'descriptionPD') && (column !== 'descriptionDOC') && (column !== 'lnId'));
        this.allColumns.unshift('lnId');
        this.visibleColumns = [...this.allColumns];
        setTimeout(() => {
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        }, 10);
      })
  }

  getFilterValue(column: string): string | void {
    if (!(this.dataFilterState && this.dataFilterState.column === column)) { return; }
    return this.dataFilterState.filterValue;
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
    ref.afterClosed().subscribe(res => {
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
  }
  hideAllColumns() {
    this.visibleColumns = [];
  }
  onToggleColumns(columns: string[]) {
    this.visibleColumns = columns;
  }


}
