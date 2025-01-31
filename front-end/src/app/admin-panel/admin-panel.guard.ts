import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { AdminPanelService } from './admin-panel.service';

@Injectable()
export class AdminPanelGuard implements CanActivate {
    path: ActivatedRouteSnapshot[];
    route: ActivatedRouteSnapshot;
  constructor(private adminPanelService: AdminPanelService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      const token = this.adminPanelService.getToken();
      if (token) {return true;}
      this.router.navigateByUrl('/admin/login');
  }
}