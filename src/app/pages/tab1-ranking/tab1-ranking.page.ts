import { Component, OnInit } from '@angular/core';

import { rankingItems } from '../../my.config';

@Component({
  selector: 'app-tab1-ranking',
  templateUrl: './tab1-ranking.page.html',
  styleUrls: ['./tab1-ranking.page.scss'],
})
export class Tab1RankingPage implements OnInit {

  datas = rankingItems
  winner = rankingItems['winner']
  content = rankingItems['content']

  activity: string = "left"
  btnColor1: string = 'dark'
  btnColor2: string = 'light'

  constructor() { }

  ngOnInit() {
  }

  changeTab(tab){
    console.log(tab)
    this.activity = tab

    if(tab==='left'){
      this.btnColor1 = 'dark';
      this.btnColor2 = 'light'
    }else if(tab ==='right'){
     
      this.btnColor1 = 'light';
      this.btnColor2 = 'dark'
    }
  }
}
