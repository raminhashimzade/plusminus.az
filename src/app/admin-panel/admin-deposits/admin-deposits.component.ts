import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';
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
  @ViewChild(MatPaginator) paginator: MatPaginator;
  allColumns: string[] = ['bankId', 'depositName', 'currencyCode',
    'minRate', 'maxRate', 'minPeriod', 'maxPeriod', 'minAmount', 'maxAmount', 'liqType',
    'website', 'description', 'present',
    'withCollateral', 'withAutoProloing', 'withCapitalisation', 'withRefill', 'withWithdraw', 'priority', 'prodStatus',
   'editer'
 //  'description', 'desciprtionDOC', 'descriptionPD'
   ];
  displayedColumns: string[] = this.allColumns.slice();
  toggleColumnsControl: FormControl = new FormControl();
  dataSource: MatTableDataSource<DepositProduct>;
  @ViewChild(MatSort) sort: MatSort;

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
    (data: DepositProduct, filter: string) => data[column].toString().toLowerCase().includes(filter.toLowerCase());
    this.dataSource.filter = filterValue;
  }
  applyMultiLangFilter(column, filterValue: string) {
    this.dataSource.filterPredicate =
    (data: DepositProduct, filter: string) => data[column]['az'].toLowerCase().includes(filter.toLowerCase());
    this.dataSource.filter = filterValue;
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
      this.dataSource = new MatTableDataSource(res);
      setTimeout(() => {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
       // this.initToggleColumnControl();
        // this.changeRef.detectChanges();
      }, 10);
    })
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