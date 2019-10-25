import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab1RankingPage } from './tab1-ranking.page';

describe('Tab1RankingPage', () => {
  let component: Tab1RankingPage;
  let fixture: ComponentFixture<Tab1RankingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab1RankingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab1RankingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
