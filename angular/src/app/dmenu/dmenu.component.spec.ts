import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmenuComponent } from './dmenu.component';

describe('DmenuComponent', () => {
  let component: DmenuComponent;
  let fixture: ComponentFixture<DmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
