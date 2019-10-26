import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab1-ranking-activity',
  templateUrl: './tab1-ranking-activity.component.html',
  styleUrls: ['./tab1-ranking-activity.component.scss'],
})
export class Tab1RankingActivityComponent implements OnInit {

  @Input() content

  constructor() { }

  ngOnInit() {}

}
