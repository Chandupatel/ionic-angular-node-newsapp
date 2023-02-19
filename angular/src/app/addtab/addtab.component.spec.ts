import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtabComponent } from './addtab.component';

describe('AddtabComponent', () => {
  let component: AddtabComponent;
  let fixture: ComponentFixture<AddtabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
