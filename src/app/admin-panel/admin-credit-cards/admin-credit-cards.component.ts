import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';
import { CreditCard } from 'src/app/home/credit-cards/models/credit-card.model';
import { AdminCreditCardService } from './admin-credit-card.service';
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

  @ViewChild(MatPaginator) paginator: MatPaginator;
  allColumns: string[] = [];
//   allColumns: string[] = ['bankId', 'bankName', 'cardName', 'cardType', 'currencyCode',
//    'minRate', 'minAmount', 'maxAmount', 'comissionCash', 'comissionLoan',
//    'minAge', 'maxAge', 'minEffectiveRate', 'maxEffectiveRate', 'minPeriod',
//    'maxPeriod', 'withCollateral', 'withEmpReference', 'withGracePeriod', 'prodStatus', 'insurance', 'priority',
//    'editer'
//  //  'description', 'desciprtionDOC', 'descriptionPD'
//    ];
  displayedColumns: string[] = this.allColumns.slice();
  toggleColumnsControl: FormControl = new FormControl();
  dataSource: MatTableDataSource<CreditCard>;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private adminCreditCardService: AdminCreditCardService,
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
    (data: CreditCard, filter: string) => data[column].toString().toLowerCase().includes(filter.toLowerCase());
    this.dataSource.filter = filterValue;
  //  this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  applyMultiLangFilter(column, filterValue: string) {
    this.dataSource.filterPredicate =
    (data: CreditCard, filter: string) => data[column]['az'].toLowerCase().includes(filter.toLowerCase());
    this.dataSource.filter = filterValue;
  //  this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  isMultiLang(column: string): string {
    if (column === 'editer') {
  //    console.log('editer')
      return 'editer';
    }
    return (column === 'cardName' || column === 'description' || column ==='descriptionPD' || column === 'descriptionDOC') ? 'multilang' : 'standard';
  }
  getData() {
    this.dataSource = undefined;
    this.adminCreditCardService.cardCreditProduct(CrudCommandType.SELECT, {})
    .subscribe(res => {
      if (res && res[0]) {
        const columns = Object.keys(res[0]);
        columns.push('editer');
        this.allColumns = columns;
        this.displayedColumns = [...this.allColumns];
      }
      console.log(res)
      this.dataSource = new MatTableDataSource(res);
      setTimeout(() => {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
       // this.initToggleColumnControl();
        // this.changeRef.detectChanges();
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
        this.adminCreditCardService.cardCreditProduct(CrudCommandType.DELETE, element)
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
