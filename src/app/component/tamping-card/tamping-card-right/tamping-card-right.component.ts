import { Component, OnInit } from '@angular/core';
import { tampingContent } from '../../../my.config';

@Component({
  selector: 'app-tamping-card-right',
  templateUrl: './tamping-card-right.component.html',
  styleUrls: ['./tamping-card-right.component.scss'],
})
export class TampingCardRightComponent implements OnInit {
  tampingContent= tampingContent
  constructor() { }
  
  ngOnInit() {}

}
