import { Component, OnInit } from '@angular/core';

import { tampingContent } from '../../../my.config';

@Component({
  selector: 'app-tamping-card-left',
  templateUrl: './tamping-card-left.component.html',
  styleUrls: ['./tamping-card-left.component.scss'],
})
export class TampingCardLeftComponent implements OnInit {
  activeBtn = 0;
  tampingContent = tampingContent

  constructor() { }

  ngOnInit() { }

  onClick(index) {
    tampingContent['clickid'] = index;
    this.activeBtn = index;
  }
}
