import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceCardFooterPage } from './assistance-card-footer.page';

describe('AssistanceCardFooterPage', () => {
  let component: AssistanceCardFooterPage;
  let fixture: ComponentFixture<AssistanceCardFooterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistanceCardFooterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistanceCardFooterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
