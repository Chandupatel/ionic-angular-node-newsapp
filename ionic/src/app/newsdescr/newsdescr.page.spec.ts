import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsdescrPage } from './newsdescr.page';

describe('NewsdescrPage', () => {
  let component: NewsdescrPage;
  let fixture: ComponentFixture<NewsdescrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsdescrPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsdescrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
