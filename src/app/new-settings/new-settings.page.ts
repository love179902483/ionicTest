import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

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
  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() { }
  
  jumpPage(){
    this.dataService.setData(42, this.testData)
    this.router.navigateByUrl('/login/42')
  }
}
