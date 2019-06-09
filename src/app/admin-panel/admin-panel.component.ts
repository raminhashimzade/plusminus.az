import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { AdminPanelService } from './admin-panel.service';
import { Key } from '../app.utils';

@Component({
  selector: 'admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  @HostBinding('class.--full-screen') isFullScreen: boolean;
  @HostListener('document:keydown', ['$event'])
  handleEsc(event: KeyboardEvent) {
    if (event.keyCode === Key.Escape) {
      event.preventDefault();
      this.adminPanelService.fullScreen$.next(false);
    }
  }
  constructor(private adminPanelService: AdminPanelService) {
    this.adminPanelService.fullScreen$.subscribe(
      res => (this.isFullScreen = res)
    );
  }

  ngOnInit() {
  }

}
