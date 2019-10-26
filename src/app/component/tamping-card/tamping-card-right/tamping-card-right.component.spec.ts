import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TampingCardRightComponent } from './tamping-card-right.component';

describe('TampingCardRightComponent', () => {
  let component: TampingCardRightComponent;
  let fixture: ComponentFixture<TampingCardRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TampingCardRightComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TampingCardRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
