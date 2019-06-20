import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { LoanProduct } from 'src/app/home/loans/models/loanGroup.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import { of, Observable } from 'rxjs';
import { SelectType } from 'src/app/shared/models/select-type.model';
import { SharedAdminService } from '../../shared/shared-admin.service';
import { AdminLoanService } from '../admin-loan.service';
import { CrudCommandType } from '../../models/crud-command-type.enum';
import { finalize } from 'rxjs/operators';
import { AdminPanelService } from '../../admin-panel.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'add-or-edit-loan',
  templateUrl: './add-or-edit-loan.component.html',
  styleUrls: ['./add-or-edit-loan.component.scss']
})
export class AddOrEditLoanComponent implements OnInit {
  @ViewChild('f') form:NgForm;
  product: LoanProduct;
  banks$: Observable<SelectType[]> = of([]);
  curCodes$: Observable<SelectType[]> = of([]);
  loading: boolean;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {item: LoanProduct | undefined},
    public dialogRef: MatDialogRef<AddOrEditLoanComponent>,
    private sharedAdminService: SharedAdminService,
    private adminLoanService: AdminLoanService,
    private adminService: AdminPanelService,
    private translateService: TranslateService
    ) {
      this.banks$ = this.sharedAdminService.getBankList(true);
      this.curCodes$ = this.sharedAdminService.getCurrCodeList('loans');
     }

  ngOnInit() {
    this.product = this.data.item ? this.data.item : new LoanProduct();
  }

  onUpdate() {
    if(!this.form.valid) {return;}
    this.loading = true;
    this.adminLoanService.crudProduct(CrudCommandType.UPDATE, this.product )
    .pipe(
      finalize(() => this.loading = false)
    )
    .subscribe(res => {
      if(res) {
        this.onUpdateSuccess(res);
      }
    })
  }
  onAdd() {
    if(!this.form.valid) {return;}
    this.loading = true;
    this.adminLoanService.crudProduct(CrudCommandType.INSERT , this.product )
    .pipe(
      finalize(() => this.loading = false)
    )
    .subscribe(res => {
      if(res) {
        this.onAddSuccess(res);
      }
    })
  }
  onAddSuccess(res) {
        this.adminService
          .createNotification(`[ LOAN ] ${this.translateService.instant('~addSuccess')}`, 'OK', 'success');
       this.dialogRef.close(res);
   }
   onUpdateSuccess(res) {
    this.adminService
    .createNotification(`[ LOAN ] ${this.translateService.instant('~updateSuccess')}`, 'OK', 'success');
       this.dialogRef.close(res);
   }


}
