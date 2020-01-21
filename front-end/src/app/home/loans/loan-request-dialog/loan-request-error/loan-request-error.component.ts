import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LoanRequestDialogComponent } from '../loan-request-dialog.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'loan-request-error',
  templateUrl: './loan-request-error.component.html',
  styleUrls: ['./loan-request-error.component.scss']
})
export class LoanRequestErrorComponent implements OnInit, OnDestroy {
  @Output() public close = new EventEmitter<void>();
  _onDestroy$ = new Subject<void>();
  constructor( private dialogRef: MatDialogRef<LoanRequestDialogComponent>) { }

  ngOnInit() {
    this.dialogRef.backdropClick()
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(res => {
      if (res) {
        this.dialogRef.close();
      }
    })
  }
  ngOnDestroy() {
    this._onDestroy$.next();
  }

}
