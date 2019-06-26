import { DepositProduct } from 'src/app/home/deposits/models/deposit-group.model';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { AdminDepositService } from '../admin-deposit.service';
import { CrudCommandType } from '../../models/crud-command-type.enum';
import { NgForm } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { SelectType } from 'src/app/shared/models/select-type.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SharedAdminService } from '../../shared/shared-admin.service';
import { AdminPanelService } from '../../admin-panel.service';
import { TranslateService } from '@ngx-translate/core';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'add-or-edit-deposit',
  templateUrl: './add-or-edit-deposit.component.html',
  styleUrls: ['./add-or-edit-deposit.component.scss']
})
export class AddOrEditDepositComponent implements OnInit {

  @ViewChild('f', { static: false }) form:NgForm;
  depositProduct: DepositProduct;
  banks$: Observable<SelectType[]> = of([]);
  curCodes$: Observable<SelectType[]> = of([]);
  loading: boolean;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {item: DepositProduct | undefined},
    public dialogRef: MatDialogRef<AddOrEditDepositComponent>,
    private sharedAdminService: SharedAdminService,
    private adminDepositService: AdminDepositService,
    private adminService: AdminPanelService,
    private translateService: TranslateService
    ) {
      this.banks$ = this.sharedAdminService.getBankList(true);
      this.curCodes$ = this.sharedAdminService.getCurrCodeList('loans');
     }

  ngOnInit() {
    console.log(this.data.item)
    this.depositProduct = this.data.item ? this.data.item : new DepositProduct();
  }

  onUpdate() {
    if(!this.form.valid) {return;}
    this.loading = true;
    this.adminDepositService.crudDepositProduct(CrudCommandType.UPDATE, this.depositProduct )
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
    this.adminDepositService.crudDepositProduct(CrudCommandType.INSERT , this.depositProduct )
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
          .createNotification(`[ Deposit ] ${this.translateService.instant('~addSuccess')}`, 'OK', 'success');
       this.dialogRef.close(res);
   }
   onUpdateSuccess(res) {
    this.adminService
    .createNotification(`[ Deposit ] ${this.translateService.instant('~updateSuccess')}`, 'OK', 'success');
       this.dialogRef.close(res);
   }

}
