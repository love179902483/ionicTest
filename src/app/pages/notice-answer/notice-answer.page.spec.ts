import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeAnswerPage } from './notice-answer.page';

describe('NoticeAnswerPage', () => {
  let component: NoticeAnswerPage;
  let fixture: ComponentFixture<NoticeAnswerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeAnswerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeAnswerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
