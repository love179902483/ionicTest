import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAnswerPage } from './task-answer.page';

describe('TaskAnswerPage', () => {
  let component: TaskAnswerPage;
  let fixture: ComponentFixture<TaskAnswerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskAnswerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskAnswerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
