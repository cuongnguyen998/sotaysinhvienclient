import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoatDongDoanComponent } from './hoat-dong-doan.component';

describe('HoatDongDoanComponent', () => {
  let component: HoatDongDoanComponent;
  let fixture: ComponentFixture<HoatDongDoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoatDongDoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoatDongDoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
