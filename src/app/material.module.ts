import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs'
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatMomentDateModule, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';


@NgModule({
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatTabsModule,
    MatDialogModule,
    MatStepperModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDatepickerModule,
    MatMomentDateModule,
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatTabsModule,
    MatDialogModule,
    MatStepperModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDatepickerModule,
    MatMomentDateModule,
  ],
  providers: [

  ]
})
export class MaterialModule { }
