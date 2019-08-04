import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { MatDialog} from '@angular/material';
import { LoanRequestDialogComponent } from '../loan-request-dialog/loan-request-dialog.component';
import { isMobileSize } from 'src/app/app.utils';

@Component({
  selector: 'loan-request-wrapper',
  template: ''
})
export class LoanRequestWrapperComponent implements OnInit {

  constructor( private dialog: MatDialog, private route: ActivatedRoute, private router: Router) {
   }

  ngOnInit() {
      this.getRequestBankId();
  }
  getRequestBankId() {
    this.route.params.subscribe(params => {
      const requestBankId = params['requestBankId'];
       this.openDialog(requestBankId);
      })
  }
  openDialog(requestBankId: string) {
    console.log(requestBankId);
    const ref = this.dialog.open(LoanRequestDialogComponent, {
      panelClass: 'loanRequestDialog',
      autoFocus: false,
      maxWidth: '90vw',
      disableClose: true,
      position: isMobileSize() && {top: '10px'},
      data: {
        requestBankId: requestBankId
      }
    });
  }
}
