import { Component, OnInit } from '@angular/core';
import { notice } from '../../notice.config';


@Component({
  selector: 'app-tab1-notice',
  templateUrl: './tab1-notice.page.html',
  styleUrls: ['./tab1-notice.page.scss'],
})
export class Tab1NoticePage implements OnInit {
  notice = notice
  constructor() { }

  ngOnInit() {
  }

}
