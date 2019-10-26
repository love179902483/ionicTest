import { Component, OnInit, Input } from '@angular/core';
import { all } from 'q';
import { DataService } from '../../../services/data.service';
import { Router } from '@angular/router';
import { HotDataType } from '../../../hot.config';

@Component({
  selector: 'app-card-view-content',
  templateUrl: './card-view-content.component.html',
  styleUrls: ['./card-view-content.component.scss'],
})
export class CardViewContentComponent implements OnInit {
 
  @Input() content: HotDataType

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

  constructor(private router: Router, private dataService: DataService) { }
  ngOnInit() {
    if(this.content.hasOwnProperty('path') === true){
      // console.log(this.content['path'])
      this.classification(this.content.path)
      this.content['afterClassfication'] = this.afterClassfication;
    }
   
  }

  jumpToContent(jumpUrl) {
    this.dataService.setData(42, this.content)
    this.router.navigateByUrl(`${jumpUrl}/42`)
  }

}
