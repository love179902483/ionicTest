import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReleasePage } from './new-release.page';

describe('NewReleasePage', () => {
  let component: NewReleasePage;
  let fixture: ComponentFixture<NewReleasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewReleasePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReleasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
