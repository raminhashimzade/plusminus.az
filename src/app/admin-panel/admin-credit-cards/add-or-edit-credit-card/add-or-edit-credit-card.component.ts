import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreditCard } from 'src/app/home/credit-cards/models/credit-card.model';
import { Observable, of } from 'rxjs';
import { SelectType } from 'src/app/shared/models/select-type.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddOrEditLoanComponent } from '../../admin-loans/add-or-edit-loan/add-or-edit-loan.component';
import { SharedAdminService } from '../../shared/shared-admin.service';
import { AdminPanelService } from '../../admin-panel.service';
import { TranslateService } from '@ngx-translate/core';
import { CrudCommandType } from '../../models/crud-command-type.enum';
import { finalize } from 'rxjs/operators';
import { AdminCreditCardService } from '../admin-credit-card.service';

@Component({
  selector: 'add-or-edit-credit-card',
  templateUrl: './add-or-edit-credit-card.component.html',
  styleUrls: ['./add-or-edit-credit-card.component.scss']
})
export class AddOrEditCreditCardComponent implements OnInit {

  @ViewChild('f', { static: false }) form:NgForm;
  creditCard: CreditCard;
  banks$: Observable<SelectType[]> = of([]);
  curCodes$: Observable<SelectType[]> = of([]);
  loading: boolean;
  config = {
    fileExtensions: [ 'png', 'jpg', 'jpeg'],
    enableCropper: true,
    cropperOptions: {
      dragMode: 'crop',
      autoCrop: true,
      movable: true,
      zoomable: true,
      scalable: true,
    }
  }
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {item: CreditCard | undefined},
    public dialogRef: MatDialogRef<AddOrEditLoanComponent>,
    private sharedAdminService: SharedAdminService,
    private productService: AdminCreditCardService,
    private adminService: AdminPanelService,
    private translateService: TranslateService,
    ) {
      this.banks$ = this.sharedAdminService.getBankList(true);
      this.curCodes$ = this.sharedAdminService.getCurrCodeList('loans');
     }

  ngOnInit() {
    this.creditCard = this.data.item ? this.data.item : new CreditCard();
  }


  onUpdate() {
    if(!this.form.valid) {return;}
    this.loading = true;
    this.productService.crudProduct(CrudCommandType.UPDATE, this.creditCard )
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
    this.productService.crudProduct(CrudCommandType.INSERT , this.creditCard )
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
