import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-view-header',
  templateUrl: './card-view-header.component.html',
  styleUrls: ['./card-view-header.component.scss'],
})
export class CardViewHeaderComponent implements OnInit {
  @Input() header
  constructor() { }

  ngOnInit() {}

}
