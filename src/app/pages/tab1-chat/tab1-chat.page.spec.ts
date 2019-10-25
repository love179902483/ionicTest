import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab1ChatPage } from './tab1-chat.page';

describe('Tab1ChatPage', () => {
  let component: Tab1ChatPage;
  let fixture: ComponentFixture<Tab1ChatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab1ChatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab1ChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
