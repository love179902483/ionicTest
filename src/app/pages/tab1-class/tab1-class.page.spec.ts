import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab1ClassPage } from './tab1-class.page';

describe('Tab1ClassPage', () => {
  let component: Tab1ClassPage;
  let fixture: ComponentFixture<Tab1ClassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab1ClassPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab1ClassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
