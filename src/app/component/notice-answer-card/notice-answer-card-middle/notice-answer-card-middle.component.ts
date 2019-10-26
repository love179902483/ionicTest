import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { NoticeType } from '../../../notice.config';
@Component({
  selector: 'app-notice-answer-card-middle',
  templateUrl: './notice-answer-card-middle.component.html',
  styleUrls: ['./notice-answer-card-middle.component.scss'],
})
export class NoticeAnswerCardMiddleComponent implements OnInit {
  @Input() notice: NoticeType

  openNoticeList = false;

  constructor() { }

  ngOnInit() { }

  noticeListOpen() {
    this.openNoticeList = !this.openNoticeList
  }

}
