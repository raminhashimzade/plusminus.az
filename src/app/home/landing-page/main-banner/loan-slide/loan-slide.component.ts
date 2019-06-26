import { Component, OnInit, Input } from '@angular/core';
import { SlideModel } from '../slide.model';
import { MatDialog } from '@angular/material/dialog';
import { LoanRequestDialogComponent } from 'src/app/home/loans/loan-request-dialog/loan-request-dialog.component';
import { isMobileSize } from 'src/app/app.utils';

@Component({
  selector: 'loan-slide',
  templateUrl: './loan-slide.component.html',
  styleUrls: ['./loan-slide.component.scss']
})
export class LoanSlideComponent implements OnInit {

  @Input() slide: SlideModel;
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}
  onRequestLoansFromAllBanks() {
    const ref  = this.dialog.open(LoanRequestDialogComponent, {
      panelClass: 'loanRequestDialog',
      autoFocus: false,
      maxWidth: '99vw',
      disableClose: true,
      position: isMobileSize() && {top: '10px'}
    //  backdropClass: 'loanRequestDialogBackdrop'
    });
  }

}
