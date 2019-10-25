import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab1HotPage } from './tab1-hot.page';

describe('Tab1HotPage', () => {
  let component: Tab1HotPage;
  let fixture: ComponentFixture<Tab1HotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab1HotPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab1HotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
