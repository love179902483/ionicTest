import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-hot-content-card-footer',
  templateUrl: './hot-content-card-footer.component.html',
  styleUrls: ['./hot-content-card-footer.component.scss'],
})
export class HotContentCardFooterComponent implements OnInit {
  @Input() content;

  constructor() { }

  ngOnInit() {}

}
