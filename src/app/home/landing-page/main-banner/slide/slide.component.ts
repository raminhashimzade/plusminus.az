import { SlideModel } from './../slide.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {
  @Input() slide: SlideModel;
  constructor() {}

  ngOnInit() {}
}
