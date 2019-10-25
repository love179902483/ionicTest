import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCardPage } from './business-card.page';

describe('BusinessCardPage', () => {
  let component: BusinessCardPage;
  let fixture: ComponentFixture<BusinessCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessCardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
