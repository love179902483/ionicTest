import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab1TaskPage } from './tab1-task.page';

describe('Tab1TaskPage', () => {
  let component: Tab1TaskPage;
  let fixture: ComponentFixture<Tab1TaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab1TaskPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab1TaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
