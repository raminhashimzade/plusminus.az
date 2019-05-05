import { Component, OnInit, EventEmitter, ViewChild, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { LoansService } from '../loans.service';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'loans-banner',
  templateUrl: './loans-banner.component.html',
  styleUrls: ['./loans-banner.component.scss']
})
export class LoansBannerComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  loanPeriods$: Observable<any>;
  @Output() bannerFormSubmit = new EventEmitter<NgForm>();
  loanCurrency = 'AZN';
  constructor(private loansService: LoansService, private translateService: TranslateService) {
    this.loanPeriods$ = this.loansService.listLoanPeriods();
   }

  ngOnInit() {
  }
  onSubmit(f: NgForm) {
    if (!f.valid) {return;}
    this.bannerFormSubmit.next(f);
  }
  onNumInput(e: any) {
    const value = e.target.value;
    this.form.controls['loanAmount'].setValue(value.replace(/[^\d]/,''))
  }
  getErrorMessage(controlKey: string) {
    return this.form.controls[controlKey].hasError('required') ?
    this.translateService.instant('~requiredField') : '';
  }

}
