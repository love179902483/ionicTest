import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  isAndroid: boolean = false;

  activeItem = "hot"

  paths = [
    {
      title: "热门",
      name: 'hot',
      url: '/tabs/tab1/hot'
    },
    {
      title: "排行",
      name: 'ranking',
      url: '/tabs/tab1/ranking'
    },
    {
      title: "课程",
      name: 'class',
      url: '/tabs/tab1/classes'
    },
    {
      title: "托起",
      name: 'assistance',
      url: '/tabs/tab1/assistance'
    },

    {
      title: "作业",
      name: 'task',
      url: '/tabs/tab1/task'
    },
    {
      title: "传达",
      name: 'notice',
      url: '/tabs/tab1/notice'
    },
    {
      title: "十大夯实",
      name: 'chat',
      url: '/tabs/tab1/chat'
    },
  ]


  constructor(private router: Router) { }

  openHotLink() {
    this.router.navigateByUrl('/tabs/tab1/hot')
  }

  geturl(thisPath) {
    console.log(this.router.url)
    for (let path of this.paths) {
      if (thisPath.url === path.url) {
        this.activeItem = path.name
      }
    }

  }
}
