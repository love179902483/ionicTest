import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1-class',
  templateUrl: './tab1-class.page.html',
  styleUrls: ['./tab1-class.page.scss'],
})
export class Tab1ClassPage implements OnInit {

  constructor() { }

  ngOnInit() {


  }
  onMyFrameLoad(iframeName) {
    // var iframe = document.getElementsByTagName("iframe")[0];
    // var win = iframe.contentWindow;  // 通过contentWindow获取ifame子页面的window窗体对象。(不允许跨域名访问)
    // console.log(win);
    // var iframeDocument = iframe.contentWindow.document;

    const thisIframe = document.getElementById('thisIframe').contentWindow.document.getElementsByClassName('footerOppenBox')
    // const test = this
    // const aimElement = thisIframe.getElementsByClassName('footerOppenBox')
    console.log(thisIframe)
  }

}
