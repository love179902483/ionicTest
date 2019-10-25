import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {Subject} from 'rxjs';


@Component({
  selector: 'app-new-release',
  templateUrl: './new-release.page.html',
  styleUrls: ['./new-release.page.scss'],
})
export class NewReleasePage implements OnInit {


  constructor( public navCtrl: NavController) { }

  ngOnInit() {
  }

  backPage(){
    this.navCtrl.goBack()
  }
}
