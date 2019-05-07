import { Component, OnInit, Input, ChangeDetectionStrategy, HostListener, ChangeDetectorRef } from '@angular/core';
import { FavorableRatePreview } from '../favorable-rate-preview.model';

@Component({
  selector: 'favorable-rates-preview-table',
  templateUrl: './favorable-rates-preview-table.component.html',
  styleUrls: ['./favorable-rates-preview-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavorableRatesPreviewTableComponent implements OnInit {
  @Input() currency: FavorableRatePreview;
  @Input() index: number;
  @HostListener('window:resize', ['$event']) resize() {
    this.onWindowResize();
    this.changeRef.detectChanges();
   }
  constructor(private changeRef: ChangeDetectorRef) { }

  ngOnInit() {
  }
  get showThead(): boolean {
    console.log('calc th');
    return  (window.innerWidth > 768) || (window.innerWidth <=768 && this.index === 0);
  }
  onWindowResize() {

  }

}
