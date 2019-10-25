import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeCardHeaderPage } from './notice-card-header.page';

describe('NoticeCardHeaderPage', () => {
  let component: NoticeCardHeaderPage;
  let fixture: ComponentFixture<NoticeCardHeaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeCardHeaderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeCardHeaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
