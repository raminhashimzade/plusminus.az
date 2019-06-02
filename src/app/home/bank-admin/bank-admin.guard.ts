import { BankAdminService } from './bank-admin.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class BankAdminGuard implements CanActivate {
    path: ActivatedRouteSnapshot[];
    route: ActivatedRouteSnapshot;
  constructor(private bankService: BankAdminService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      const token = this.bankService.getToken();
      if (token) {return true;}
      this.router.navigateByUrl('/home/bank-admin/login');
  }
}