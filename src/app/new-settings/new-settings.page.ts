import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-settings',
  templateUrl: './new-settings.page.html',
  styleUrls: ['./new-settings.page.scss'],
})
export class NewSettingsPage implements OnInit {

  testData: any = {
    test:'memeda!',
    data: 'hehe'
  } 

  // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
  constructor() { }

  ngOnInit() { }
  
}
