import { Component, OnInit, Input } from '@angular/core';
import { NoticeType } from '../../../notice.config';

@Component({
  selector: 'app-notice-answer-card-top',
  templateUrl: './notice-answer-card-top.component.html',
  styleUrls: ['./notice-answer-card-top.component.scss'],
})
export class NoticeAnswerCardTopComponent implements OnInit {
  @Input() notice: NoticeType
  constructor() { }

  ngOnInit() {
    console.log(this.notice)
  }

}
