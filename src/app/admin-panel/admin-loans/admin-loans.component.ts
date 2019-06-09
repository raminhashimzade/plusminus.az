import { Component, OnInit } from '@angular/core';
import { AdminLoanService } from './admin-loan.service';
import { CrudCommandType } from '../models/crud-command-type.enum';
import { LoanProduct } from 'src/app/home/loans/models/loanGroup.model';

@Component({
  selector: 'admin-loans',
  templateUrl: './admin-loans.component.html',
  styleUrls: ['./admin-loans.component.scss']
})
export class AdminLoansComponent implements OnInit {
  displayedColumns: string[] = ['bankId', 'loanName', 'loanType', 'currencyCode',  'minRate', 'minAmount', 'maxAmount', 'editer'];
  dataSource: LoanProduct[];
  constructor(private adminLoanService: AdminLoanService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.adminLoanService.crudLoanProduct(CrudCommandType.SELECT, {})
    .subscribe(res => {
      this.dataSource = res;
    })
  }

}
