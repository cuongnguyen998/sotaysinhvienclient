import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinDoanHoiComponent } from './thong-tin-doan-hoi.component';

describe('ThongTinDoanHoiComponent', () => {
  let component: ThongTinDoanHoiComponent;
  let fixture: ComponentFixture<ThongTinDoanHoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinDoanHoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinDoanHoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
