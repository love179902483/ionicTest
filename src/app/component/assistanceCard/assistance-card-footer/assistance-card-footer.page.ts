import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-assistance-card-footer',
  templateUrl: './assistance-card-footer.page.html',
  styleUrls: ['./assistance-card-footer.page.scss'],
})
export class AssistanceCardFooterPage implements OnInit {
  
  @Input() assistFooter
  assistStatus = "未通过"

  toggleThank:boolean = false
  constructor() { }

 
  ngOnInit() {
    if(this.assistFooter["progress"] === 1){
      this.assistStatus = "已提交"
    }else if(this.assistFooter["progress"] === 2){
      this.assistStatus = "进行中"
    }else if(this.assistFooter["progress"] === 3){
      this.assistStatus = '已完成'
    }
    
  }
  ToggleThank(){
    
    this.toggleThank = !this.toggleThank
  }
}
