import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab1-ranking-record',
  templateUrl: './tab1-ranking-record.component.html',
  styleUrls: ['./tab1-ranking-record.component.scss'],
})
export class Tab1RankingRecordComponent implements OnInit {
  @Input() content
  constructor() { }

  ngOnInit() {}

}
