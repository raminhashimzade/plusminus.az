import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminLoanService } from './admin-loan.service';
import { CrudCommandType } from '../models/crud-command-type.enum';
import { LoanProduct } from 'src/app/home/loans/models/loanGroup.model';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'admin-loans',
  templateUrl: './admin-loans.component.html',
  styleUrls: ['./admin-loans.component.scss']
})
export class AdminLoansComponent implements OnInit {
  displayedColumns: string[] = ['bankId', 'loanName', 'loanType', 'currencyCode',  'minRate', 'minAmount', 'maxAmount', 'editer'];
  dataSource: MatTableDataSource<LoanProduct>;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private adminLoanService: AdminLoanService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.adminLoanService.crudLoanProduct(CrudCommandType.SELECT, {})
    .subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      setTimeout(() => {
        this.dataSource.sort = this.sort;
      }, 10);
    })
  }

}
