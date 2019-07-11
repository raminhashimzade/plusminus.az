import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { DebitCard } from 'src/app/home/debit-cards/models/debit-card.model';
import { NgForm } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { SelectType } from 'src/app/shared/models/select-type.model';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SharedAdminService } from '../../shared/shared-admin.service';
import { AdminPanelService } from '../../admin-panel.service';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/auth/auth.service';
import { CrudCommandType } from '../../models/crud-command-type.enum';
import { finalize } from 'rxjs/operators';
import { AdminDebitCardsService } from '../admin-debit-cards.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'add-or-edit-debit-card',
  templateUrl: './add-or-edit-debit-card.component.html',
  styleUrls: ['./add-or-edit-debit-card.component.scss']
})
export class AddOrEditDebitCardComponent implements OnInit {

  @ViewChild('f', { static: false }) form:NgForm;
  product: DebitCard;
  banks$: Observable<SelectType[]> = of([]);
  curCodes$: Observable<SelectType[]> = of([]);
  loading: boolean;
  imageUrl: SafeUrl;
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
    @Inject(MAT_DIALOG_DATA) public data: {item: DebitCard| undefined},
    public dialogRef: MatDialogRef<AddOrEditDebitCardComponent>,
    private sharedAdminService: SharedAdminService,
    private productService: AdminDebitCardsService,
    private adminService: AdminPanelService,
    private translateService: TranslateService,
    ) {
      this.banks$ = this.sharedAdminService.getBankList(true);
      this.curCodes$ = this.sharedAdminService.getCurrCodeList('loans');
     }

  ngOnInit() {
    this.product = this.data.item ? this.data.item : new DebitCard();
  }

  onUpdate() {
    console.log(this.form.value);
    console.log(this.product);
    if(!this.form.valid) {return;}
    this.loading = true;
    this.productService.crudProduct(CrudCommandType.UPDATE, this.product )
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
    console.log(this.form.value);
    return;
    if(!this.form.valid) {return;}
    this.loading = true;
    this.productService.crudProduct(CrudCommandType.INSERT , this.product )
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
        .createNotification(`[ Debit CARD] ${this.translateService.instant('~addSuccess')}`, 'OK', 'success');
     this.dialogRef.close(res);
   }
   onUpdateSuccess(res) {
    this.adminService
    .createNotification(`[ Debit CARD] ${this.translateService.instant('~updateSuccess')}`, 'OK', 'success');
       this.dialogRef.close(res);
   }


}
