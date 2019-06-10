import { MatDialogConfig } from '@angular/material';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

export const TableDialogConfig = <MatDialogConfig>{
    disableClose: true,
    position: {
      top: "4px",
      // right: "4px",
    },
    height: "98vh",
    minWidth: 600,
    maxWidth: "100%",
    panelClass: 'add-or-edit-dialog'
  };

  export function getFormErrors(
    ntForm: NgForm,
    str: string,
    translateService: TranslateService
  ) {
    if (!ntForm) {
      return;
    }
    if (ntForm && ntForm.controls[str]) {
   //   console.log(ntForm.controls['userRoleId'].errors)
      const control = ntForm.controls[str];
      return getFormControlError(control, translateService)
    }
  }

  export function getFormControlError(
    control,
    translateService: TranslateService
  ) {
    const errors = control.errors;
    if (!errors) {
      return;
    }
    if (errors.minlength) {
      return `* Minmimum length ${errors.minlength.requiredLength} required`;
    } else if (errors.maxlength) {
      return `* Max length ${errors.maxlength.requiredLength} required`;
    } else if (errors.required) {
      return `${translateService.instant("~requiredField")}`;
    } else if (errors.email) {
      return `* Please enter valid email`;
    } else if (errors.min) {
      return `* Minmimum  ${errors.requiredValue} required`;
    } else if (errors.max) {
      return `* Max  ${errors.requiredValue} required`;
    } else if (errors.phone) {
      return `* Not valid phone number`;
    } else if (errors.serverError) {
      return errors.serverError;
    } else {
      return errors;
    }
  }