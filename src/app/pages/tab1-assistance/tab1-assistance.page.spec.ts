import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab1AssistancePage } from './tab1-assistance.page';

describe('Tab1AssistancePage', () => {
  let component: Tab1AssistancePage;
  let fixture: ComponentFixture<Tab1AssistancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab1AssistancePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab1AssistancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
