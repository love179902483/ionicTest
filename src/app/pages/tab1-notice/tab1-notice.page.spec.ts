import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab1NoticePage } from './tab1-notice.page';

describe('Tab1NoticePage', () => {
  let component: Tab1NoticePage;
  let fixture: ComponentFixture<Tab1NoticePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab1NoticePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab1NoticePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
