import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hot-content-card-content',
  templateUrl: './hot-content-card-content.component.html',
  styleUrls: ['./hot-content-card-content.component.scss'],
})
export class HotContentCardContentComponent implements OnInit {
  @Input() content

  constructor() { }

  ngOnInit() {
    console.log(this.content)
  }

}
