import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoatDongVanTheMyComponent } from './hoat-dong-van-the-my.component';

describe('HoatDongVanTheMyComponent', () => {
  let component: HoatDongVanTheMyComponent;
  let fixture: ComponentFixture<HoatDongVanTheMyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoatDongVanTheMyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoatDongVanTheMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
