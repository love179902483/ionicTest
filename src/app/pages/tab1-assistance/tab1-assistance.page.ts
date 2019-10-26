import { Component, OnInit } from '@angular/core';


import { assistanceItems } from '../../my.config';
@Component({
  selector: 'app-tab1-assistance',
  templateUrl: './tab1-assistance.page.html',
  styleUrls: ['./tab1-assistance.page.scss'],
})
export class Tab1AssistancePage implements OnInit {

  assistanceItems = assistanceItems;

  constructor() { }

  ngOnInit() {
  }

}
