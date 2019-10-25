import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCardFooterPage } from './task-card-footer.page';

describe('TaskCardFooterPage', () => {
  let component: TaskCardFooterPage;
  let fixture: ComponentFixture<TaskCardFooterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskCardFooterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCardFooterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
