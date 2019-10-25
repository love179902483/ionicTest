import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-card-header',
  templateUrl: './task-card-header.page.html',
  styleUrls: ['./task-card-header.page.scss'],
})
export class TaskCardHeaderPage implements OnInit {

  showIcon:string = 'finished';

  constructor() { }

  ngOnInit() {
  }

}
