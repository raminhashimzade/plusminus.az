import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup,  NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminPanelService } from '../admin-panel.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  @ViewChild('f', { static: true }) form: NgForm;
  hide = true;
  isLoading: boolean;
   constructor(
               private router: Router,
               private adminService: AdminPanelService
               ) {
   }

   ngOnInit() {
    setTimeout(() => {
    //  this.form.controls['login'].setValue('plusm');
    //  this.form.controls['password'].setValue('123');
    //  this.login();
    }, 100)
   }
   login() {
     this.isLoading = true;
     if (!this.form.valid) {return; }
     this.adminService.fetchToken(this.form.value)
     .pipe(
       finalize(() => {
         this.isLoading = false;
       })
     )
       .subscribe((res: any) => {
       this.router.navigateByUrl('/admin');
         }
   );
   }
}
