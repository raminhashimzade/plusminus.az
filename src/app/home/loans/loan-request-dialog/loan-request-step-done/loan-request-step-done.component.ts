import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { bounce } from 'ng-animate';
import { trigger, transition, useAnimation } from '@angular/animations';
import { LoansService } from '../../loans.service';
@Component({
  selector: 'loan-request-step-done',
  templateUrl: './loan-request-step-done.component.html',
  styleUrls: ['./loan-request-step-done.component.scss'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce))])
  ]
})
export class LoanRequestStepDoneComponent implements OnInit {
  @Output() public close = new EventEmitter<void>();
  bounce: boolean;
  constructor(private loansService: LoansService) { }

  ngOnInit() {
    setTimeout(() => this.bounce = true, 0);
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
