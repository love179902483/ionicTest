import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assistance-card-footer',
  templateUrl: './assistance-card-footer.page.html',
  styleUrls: ['./assistance-card-footer.page.scss'],
})
export class AssistanceCardFooterPage implements OnInit {
  toggleThank:boolean = false
  constructor() { }

  ngOnInit() {
  }
  ToggleThank(){
    this.toggleThank = !this.toggleThank
  }
}
