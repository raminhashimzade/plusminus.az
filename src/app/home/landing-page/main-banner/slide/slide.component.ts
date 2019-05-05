import { SlideModel } from './../slide.model';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoanRequestDialogComponent } from 'src/app/home/loans/loan-request-dialog/loan-request-dialog.component';

@Component({
  selector: 'slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {
  @Input() slide: SlideModel;
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}
  onRequestLoansFromAllBanks() {
    const ref  = this.dialog.open(LoanRequestDialogComponent, {
      panelClass: 'loanRequestDialog',
      autoFocus: false,
      maxWidth: '99vw',
      disableClose: true
    //  backdropClass: 'loanRequestDialogBackdrop'
    });
  }

}
