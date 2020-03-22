import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HocPhanKhoaLuanComponent } from './hoc-phan-khoa-luan.component';

describe('HocPhanKhoaLuanComponent', () => {
  let component: HocPhanKhoaLuanComponent;
  let fixture: ComponentFixture<HocPhanKhoaLuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HocPhanKhoaLuanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HocPhanKhoaLuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
