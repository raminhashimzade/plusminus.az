import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TranslateService } from '@ngx-translate/core';
import { AdminPanelService } from '../admin-panel.service';
import { CrudCommandType } from '../models/crud-command-type.enum';
import { TableDialogConfig } from '../admin-panel.utils';
import { ConfirmDialogComponent } from '../shared/components/confirm-dialog/confirm-dialog.component';
import { DepositProduct } from 'src/app/home/deposits/models/deposit-group.model';
import { AdminDepositService } from './admin-deposit.service';
import { AddOrEditDepositComponent } from './add-or-edit-deposit/add-or-edit-deposit.component';

@Component({
  selector: 'admin-deposits',
  templateUrl: './admin-deposits.component.html',
  styleUrls: ['./admin-deposits.component.scss']
})
export class AdminDepositsComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  allColumns: string[] = [];
  visibleColumns: string[] = [];
  dataSource: MatTableDataSource<DepositProduct>;
  dataFilterState: {column: string, filterValue: string, multi: boolean};
  constructor(
    private adminDepositService: AdminDepositService,
    private translateService: TranslateService,
    private dialog: MatDialog,
     private adminService: AdminPanelService,
     private changeRef: ChangeDetectorRef
     ) { }
  ngOnInit() {
   this.getData();
  }

  applyFilter(column, filterValue: string) {
    this.dataSource.filterPredicate =
    (data: DepositProduct, filter: string) => data[column].toString().toLowerCase().includes(filter.toLowerCase());
    this.dataSource.filter = filterValue;
    this.dataFilterState = {column, filterValue, multi: false};

  }
  applyMultiLangFilter(column, filterValue: string) {
    this.dataSource.filterPredicate =
    (data: DepositProduct, filter: string) => data[column]['az'].toLowerCase().includes(filter.toLowerCase());
    this.dataSource.filter = filterValue;
    this.dataFilterState = {column, filterValue, multi: true};

  }

  isMultiLang(column: string): string {
    if (column === 'editer') {
      return 'editer';
    }
    return (column === 'depositName' || column === 'description' || column ==='present') ? 'multilang' : 'standard';
  }
  getData() {
    this.dataSource = undefined;
    this.adminDepositService.crudDepositProduct(CrudCommandType.SELECT, {})
    .subscribe(res => {
      if (!(res && res[0])) {return;}
      this.dataSource = new MatTableDataSource(res);
      if (this.dataFilterState) {
        const {column, filterValue, multi} = {...this.dataFilterState};
        multi ? this.applyMultiLangFilter(column, filterValue) :
                                      this.applyFilter(column, filterValue);
      }
      const columns = Object.keys(res[0]);
      columns.push('editer');
      this.allColumns = [...columns].
      filter( column => (column !== 'description') && (column !=='descriptionPD') && (column !== 'descriptionDOC') && (column !== 'dpId'));
      this.allColumns.unshift('dpId');
      this.visibleColumns = [...this.allColumns];
      setTimeout(() => {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }, 10);
    })
  }

    getFilterValue(column: string): string | void {
      if (!(this.dataFilterState && this.dataFilterState.column === column)) {return;}
       return this.dataFilterState.filterValue;
    }
  onEdit(item: DepositProduct) {
    const ref = this.dialog.open(AddOrEditDepositComponent, {
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
    const ref = this.dialog.open(AddOrEditDepositComponent, {
      data: {
      },
      ...TableDialogConfig
    });
    ref.afterClosed().subscribe(res => res && this.getData());
  }
  onDelete(element: DepositProduct) {
    const ref = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: "Əminsiz silməyə ?"
      }
    });
    ref.afterClosed().subscribe( res => {
      if (res) {
        this.adminDepositService.crudDepositProduct(CrudCommandType.DELETE, element)
        .subscribe(res => {
          if (res) {
            this.adminService
            .createNotification(`[ Deposit ] ${this.translateService.instant('~deleteSuccess')}`, 'OK', 'success');
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