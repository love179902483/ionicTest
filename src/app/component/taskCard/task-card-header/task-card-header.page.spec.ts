import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCardHeaderPage } from './task-card-header.page';

describe('TaskCardHeaderPage', () => {
  let component: TaskCardHeaderPage;
  let fixture: ComponentFixture<TaskCardHeaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskCardHeaderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCardHeaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
