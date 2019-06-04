import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { loadExternalScripts } from 'src/app/app.utils';
import { NgForm } from '@angular/forms';
import { BankAdminService } from '../bank-admin.service';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
declare var Typed;
@Component({
  selector: 'bank-login',
  templateUrl: './bank-login.component.html',
  styleUrls: ['./bank-login.component.scss']
})
export class BankLoginComponent implements OnInit, AfterViewInit {
  @ViewChild('f') form: NgForm;
  typed: any;
  loading: boolean;
  constructor(private bankAdminService: BankAdminService, private router: Router) { }

  ngOnInit() {
 // this.autoLogin();
  }
  ngAfterViewInit() {
    // const options = {
    //   strings: ['Username'],
    //   typeSpeed: 40
    // };
    //  loadExternalScripts('./assets/scripts/defaults.js')
    //  .then(res => loadExternalScripts('./assets/scripts/initializer.js'))
    //  .then(res => loadExternalScripts('./assets/scripts/html-parser.js'))
    //  .then(res => loadExternalScripts('./assets/scripts/typed.js'))
    //  .then(res => {
    //   this.typed = new Typed('.form-field', options);
    // }).catch(er => console.log(er));
  }
  onSubmit() {
    if(!this.form.valid) {return;}
    this.loading = true;
    const login = this.form.value['login'];
    const password = this.form.value['password'];
    this.bankAdminService.fetchToken(login, password)
    .pipe(finalize(() => this.loading = false))
    .subscribe(res => {
      this.router.navigateByUrl('/home/bank-admin/customers');
    });
    }
    autoLogin() {
      this.bankAdminService.fetchToken('32', '1')
      .pipe(finalize(() => this.loading = false))
      .subscribe(res => {
        this.router.navigateByUrl('/home/bank-admin/customers');
      });
    }

}
