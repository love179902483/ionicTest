import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notice-card-header',
  templateUrl: './notice-card-header.page.html',
  styleUrls: ['./notice-card-header.page.scss'],
})
export class NoticeCardHeaderPage implements OnInit {
  showIcon: string = 'finished';

  @Input() notice;

  constructor() { }

  ngOnInit() {
  }

}
