import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { HotDataType } from '../../hot.config';

@Component({
  selector: 'app-hot-content',
  templateUrl: './hot-content.page.html',
  styleUrls: ['./hot-content.page.scss'],
})
export class HotContentPage implements OnInit {

  itemData:HotDataType;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.route.snapshot.data['data']){
      this.itemData = this.route.snapshot.data['data']
    }
  }

}
