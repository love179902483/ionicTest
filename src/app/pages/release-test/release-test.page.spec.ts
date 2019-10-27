import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseTestPage } from './release-test.page';

describe('ReleaseTestPage', () => {
  let component: ReleaseTestPage;
  let fixture: ComponentFixture<ReleaseTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleaseTestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
