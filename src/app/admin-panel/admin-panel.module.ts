import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPanelRoutingModule } from './admin-panel.routing';
import { SharedModule } from '../shared/shared.module';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminNavigationComponent } from './admin-navigation/admin-navigation.component';
import { AdminPanelGuard } from './admin-panel.guard';
import { SharedAdminService } from './shared/shared-admin.service';

@NgModule({
  declarations: [
    AdminPanelComponent,
    AdminLoginComponent,
    AdminSidebarComponent,
    AdminNavigationComponent
  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    SharedModule
  ],
  providers: [AdminPanelGuard, SharedAdminService]
})
export class AdminPanelModule { }
