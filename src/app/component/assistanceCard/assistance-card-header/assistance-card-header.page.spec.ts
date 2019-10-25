import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceCardHeaderPage } from './assistance-card-header.page';

describe('AssistanceCardHeaderPage', () => {
  let component: AssistanceCardHeaderPage;
  let fixture: ComponentFixture<AssistanceCardHeaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistanceCardHeaderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistanceCardHeaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
