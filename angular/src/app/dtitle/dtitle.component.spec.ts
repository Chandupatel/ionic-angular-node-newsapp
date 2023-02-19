import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtitleComponent } from './dtitle.component';

describe('DtitleComponent', () => {
  let component: DtitleComponent;
  let fixture: ComponentFixture<DtitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
