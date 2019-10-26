import { Component, OnInit, Input } from '@angular/core';
import { NoticeType } from '../../../notice.config';
@Component({
  selector: 'app-notice-answer-card-footer',
  templateUrl: './notice-answer-card-footer.component.html',
  styleUrls: ['./notice-answer-card-footer.component.scss'],
})
export class NoticeAnswerCardFooterComponent implements OnInit {
  @Input() notice: NoticeType
  constructor() { }

  ngOnInit() { }

}
