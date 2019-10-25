import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeCardFooterPage } from './notice-card-footer.page';

describe('NoticeCardFooterPage', () => {
  let component: NoticeCardFooterPage;
  let fixture: ComponentFixture<NoticeCardFooterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeCardFooterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeCardFooterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
