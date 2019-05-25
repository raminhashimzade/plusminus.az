import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ProductCompareEnum } from './product-compare.enum';

@Component({
  selector: 'compare-preview',
  templateUrl: './compare-preview.component.html',
  styleUrls: ['./compare-preview.component.scss']
})
export class ComparePreviewComponent implements OnInit {
  type: string;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.setCompareType(this.router.url);
    this.listenToRouterEvents();
  }
  setCompareType(url: string):void {
    if (url && url.includes('loans')) {
      console.log('loans')
      this.type = 'loans';
    } else if (url && url.includes('deposits')) {
      this.type = 'deposits';
    }
  }
  listenToRouterEvents() {
    this.router.events.subscribe(res =>{
      if (res && res instanceof NavigationEnd) {
        this.setCompareType(res.url);
      }
    })
  }

}
