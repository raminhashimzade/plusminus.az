import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { CreditCard } from 'src/app/home/credit-cards/models/credit-card.model';
import {  AdminCreditCardService } from './admin-credit-card.service';
import { TranslateService } from '@ngx-translate/core';
import { AdminPanelService } from '../admin-panel.service';
import { CrudCommandType } from '../models/crud-command-type.enum';
import { TableDialogConfig } from '../admin-panel.utils';
import { ConfirmDialogComponent } from '../shared/components/confirm-dialog/confirm-dialog.component';
import { AddOrEditCreditCardComponent } from './add-or-edit-credit-card/add-or-edit-credit-card.component';

@Component({
  selector: 'admin-credit-cards',
  templateUrl: './admin-credit-cards.component.html',
  styleUrls: ['./admin-credit-cards.component.scss']
})
export class AdminCreditCardsComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  allColumns: string[] = [];
  visibleColumns: string[] = [];
  dataSource: MatTableDataSource<CreditCard>;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    private productService: AdminCreditCardService,
    private translateService: TranslateService,
    private dialog: MatDialog,
     private adminService: AdminPanelService,
     private changeRef: ChangeDetectorRef
     ) { }
  ngOnInit() {
    this.getData();
  }
  applyFilter(column, filterValue: string) {
    console.log(column)
    this.dataSource.filterPredicate =
    (data: CreditCard, filter: string) => data[column].toString().toLowerCase().includes(filter.toLowerCase());
    this.dataSource.filter = filterValue;
  }
  applyMultiLangFilter(column, filterValue: string) {
    this.dataSource.filterPredicate =
    (data: CreditCard, filter: string) => data[column]['az'].toLowerCase().includes(filter.toLowerCase());
    this.dataSource.filter = filterValue;
  }

  isMultiLang(column: string): string {
    if (column === 'editer') {
      return 'editer';
    }
    return (column === 'cardName' ) ? 'multilang' : 'standard';
  }
  getData() {
    this.dataSource = undefined;
    this.productService.crudProduct(CrudCommandType.SELECT, {})
    .subscribe(res => {
      if (!(res && res[0])) {return;}
      this.dataSource = new MatTableDataSource(res);
      const columns = Object.keys(res[0]);
      columns.push('editer');
      this.allColumns = [...columns].filter( column => (column !== 'description') && (column !=='descriptionPD') && (column !== 'descriptionDOC') );
      const localStorageColumns = localStorage.getItem('creditCardsVisibleColumns');
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
  onEdit(item: CreditCard) {
    const ref = this.dialog.open(AddOrEditCreditCardComponent, {
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
    const ref = this.dialog.open(AddOrEditCreditCardComponent, {
      data: {
      },
      ...TableDialogConfig
    });
    ref.afterClosed().subscribe(res => res && this.getData());
  }
  onDelete(element: CreditCard) {
    const ref = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: "Əminsiz silməyə ?"
      }
    });
    ref.afterClosed().subscribe( res => {
      if (res) {
        this.productService.crudProduct(CrudCommandType.DELETE, element)
        .subscribe(res => {
          if (res) {
            this.adminService
            .createNotification(`[ CREDIT CARD ] ${this.translateService.instant('~deleteSuccess')}`, 'OK', 'success');
            this.getData();
           }
        })
      }
    })

  }

  showAllColumns() {
    this.visibleColumns = [...this.allColumns];
    localStorage.removeItem('creditCardsVisibleColumns');
  }
  hideAllColumns() {
    this.visibleColumns = [];
    localStorage.removeItem('creditCardsVisibleColumns');
  }
  onToggleColumns(columns: string[]) {
    this.visibleColumns = columns;
    localStorage.setItem('creditCardsVisibleColumns', JSON.stringify(columns));
  }


}
