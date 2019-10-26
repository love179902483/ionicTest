import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-assistance-card-content',
  templateUrl: './assistance-card-content.page.html',
  styleUrls: ['./assistance-card-content.page.scss'],
})
export class AssistanceCardContentPage implements OnInit {

  @Input() assistContent
  

  constructor() { }

  ngOnInit() {
  }

}
