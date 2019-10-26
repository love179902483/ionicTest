import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NoticeType } from '../../notice.config';

@Component({
  selector: 'app-notice-answer',
  templateUrl: './notice-answer.page.html',
  styleUrls: ['./notice-answer.page.scss'],
})
export class NoticeAnswerPage implements OnInit {

  notice: NoticeType

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.data['notice']) {
      console.log(this.route.snapshot.data['notice'])
      this.notice = this.route.snapshot.data['notice']
    }
  }

}
