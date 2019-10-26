import { Component, OnInit } from '@angular/core';
import { myconfig, MyConfigType } from '../../my.config';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.page.html',
  styleUrls: ['./business-card.page.scss'],
})
export class BusinessCardPage implements OnInit {

  user:MyConfigType = myconfig

  constructor( public navCtrl: NavController) { }

  ngOnInit() {
  }
  backPage(){
    this.navCtrl.goBack()
  }
}
