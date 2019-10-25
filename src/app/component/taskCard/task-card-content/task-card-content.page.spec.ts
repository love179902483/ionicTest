import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCardContentPage } from './task-card-content.page';

describe('TaskCardContentPage', () => {
  let component: TaskCardContentPage;
  let fixture: ComponentFixture<TaskCardContentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskCardContentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCardContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
