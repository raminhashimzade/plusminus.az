import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { bounce } from 'ng-animate';
import { trigger, transition, useAnimation } from '@angular/animations';
import { LoansService } from '../../loans.service';
import { MatDialogRef } from '@angular/material';
import { LoanRequestDialogComponent } from '../loan-request-dialog.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'loan-request-step-done',
  templateUrl: './loan-request-step-done.component.html',
  styleUrls: ['./loan-request-step-done.component.scss'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce))])
  ]
})
export class LoanRequestStepDoneComponent implements OnInit, OnDestroy {
  @Output() public close = new EventEmitter<void>();
  bounce: boolean;
  _onDestroy$ = new Subject<void>();
  constructor(private loansService: LoansService, private dialogRef: MatDialogRef<LoanRequestDialogComponent>) { }

  ngOnInit() {
    this.dialogRef.backdropClick()
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(res => {
      if (res) {
        this.dialogRef.close();
      }
    })
    setTimeout(() => this.bounce = true, 0);
  }
  ngOnDestroy() {
    this._onDestroy$.next();
  }
  onVoteMe(vote: number) {
    console.log(vote);
    this.loansService.voteMe(vote)
    .subscribe(res => {
      console.log(res);
      this.close.next();
    })
  }

}
