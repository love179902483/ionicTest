import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab1RankingActivityLevelPage } from './tab1-ranking-activity-level.page';

describe('Tab1RankingActivityLevelPage', () => {
  let component: Tab1RankingActivityLevelPage;
  let fixture: ComponentFixture<Tab1RankingActivityLevelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab1RankingActivityLevelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab1RankingActivityLevelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
