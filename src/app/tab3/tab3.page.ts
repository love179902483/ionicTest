import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { myconfig } from '../my.config'
import { BusinessCardPage } from '../pages/business-card/business-card.page'


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  user = myconfig

  constructor(public modalController: ModalController) {}

  ngOnInit() {
    console.log(this.user)
  }

}
