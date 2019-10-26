import { Component, OnInit, Input } from '@angular/core';
import { NoticeType } from '../../../notice.config';

import { NoticeService } from '../../../services/notice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notice-card-content',
  templateUrl: './notice-card-content.page.html',
  styleUrls: ['./notice-card-content.page.scss'],
})
export class NoticeCardContentPage implements OnInit {

  @Input() notice: NoticeType

  constructor(private router: Router, private dataService: NoticeService) { }

  ngOnInit() {
  }

  jumpToContent(jumpUrl) {
    this.dataService.setData(55, this.notice)
    this.router.navigateByUrl(`${jumpUrl}/55`)
  }
}
