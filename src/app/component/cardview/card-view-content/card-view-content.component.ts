import { Component, OnInit } from '@angular/core';
import { all } from 'q';

@Component({
  selector: 'app-card-view-content',
  templateUrl: './card-view-content.component.html',
  styleUrls: ['./card-view-content.component.scss'],
})
export class CardViewContentComponent implements OnInit {

  data = {
    title: '企航集团一年一度《管理营销大系统》镇海来袭！',
    content: '起航资源平台共享！最新商业模式，如何制定自己家企业的系统，如何转型《管理营销大系统》课程（2019年11月4日-1日）',
    path : [
      {
        url:'../../../../assets/images/image1.jpeg',
        type: 'image',
      },
      {
        url:'',
        type: 'video',
      },
      {
        url:'../../../../assets/images/image3.png',
        type: 'image',
      },
      {
        url:'../../../../assets/images/image2.png',
        type: 'image',
      },
      {
        url:'',
        type: 'voice',
      }
    ]
  }

  path = [
    {
      url:'',
      type: 'image',
    },
    {
      url:'',
      type: 'video',
    },
    {
      url:'',
      type: 'image',
    },
    {
      url:'',
      type: 'image',
    },
    {
      url:'',
      type: 'voice',
    }
  ]

  afterClassfication= {
    "video": [],
    "images": [],
    "voice": [],
    "singleImage": '',
  }

  // 将传过来的图片视频等数据分类
  classification(allArray){
    let images = []
    for(let i of allArray){
      if(i.type === 'video' && i.url !==''){
        this.afterClassfication.video.push(i.url)
      }else if(i.type === 'voice'　&& i.url !==''){
        this.afterClassfication.voice.push(i.url)
      }else if(i.type === 'image'　&& i.url !==''){
        images.push(i.url)
      }
    }

    if(images.length === 1){
      this.afterClassfication.singleImage = images[0]
    }else if(images.length > 3){
      this.afterClassfication.images = images.slice(0,3)
    }else{
      this.afterClassfication.images = images
    }
  }

  constructor() { }

  ngOnInit() {
    this.classification(this.data.path)
    console.log(this.afterClassfication)
  }

}
