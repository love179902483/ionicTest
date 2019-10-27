import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

import { data, HotDataType } from '../../hot.config';
import { images } from '../../hotImg.config';

import { Subject } from 'rxjs';

import { Slides } from 'ionic-angular';
import { video } from '../../video.config';

@Component({
  selector: 'app-tab1-hot',
  templateUrl: './tab1-hot.page.html',
  styleUrls: ['./tab1-hot.page.scss'],
})
export class Tab1HotPage implements OnInit {

  data: HotDataType[] = data;
  images = images;
  video = video

  constructor(private router: Router, private dataService: DataService) { }
  ngOnInit() {

    // @ViewChild(Slides) slider: Slides
    console.log(data)
    // console.log(this.slider)
  }

  onClick() {
  }

}
