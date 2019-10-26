import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

import { data, HotDataType } from '../../hot.config';
import { images } from '../../hotImg.config';

@Component({
  selector: 'app-tab1-hot',
  templateUrl: './tab1-hot.page.html',
  styleUrls: ['./tab1-hot.page.scss'],
})
export class Tab1HotPage implements OnInit {

  data: HotDataType[] = data;
  images = images;


  constructor(private router: Router, private dataService: DataService) { }
  ngOnInit() {
    console.log(data)
  }

  onClick() {
  }

}
