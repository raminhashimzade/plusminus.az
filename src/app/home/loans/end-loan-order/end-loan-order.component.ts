import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { HomeService } from '../../home.service';
import { MatCheckboxChange } from '@angular/material';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'end-loan-order',
  templateUrl: './end-loan-order.component.html',
  styleUrls: ['./end-loan-order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EndLoanOrderComponent implements OnInit {
  options: {checked: boolean, bankID: number}[];
  loading: boolean;
  constructor(private homeService: HomeService, private changeRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.getBankList();
  }
  getBankList() {
    this.loading = true;
    this.homeService.getBankList(true)
    .pipe(finalize(() =>  {
      this.loading = false;
      this.changeRef.detectChanges();
    }))
    .subscribe(res => {
      this.options = res && res.map(bank => {
        return {
          bankID: bank.bankID,
          checked: false
        }
      })
    });
  }
 get isChecked(): boolean {
   if (!this.options) {return;}
   return this.options.some(option => option.checked);
 }
  onBankToggle(event: MatCheckboxChange, bankID: number) {
    this.options = [...this.options].map(option => {
      return {
        ...option,
        checked: option.bankID === bankID ? true: false
      }
    })
  }

}
