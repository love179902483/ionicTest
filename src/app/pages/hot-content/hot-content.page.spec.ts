import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotContentPage } from './hot-content.page';

describe('HotContentPage', () => {
  let component: HotContentPage;
  let fixture: ComponentFixture<HotContentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotContentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
