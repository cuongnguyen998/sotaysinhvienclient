import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DangKyHocPhanComponent } from './dang-ky-hoc-phan.component';

describe('DangKyHocPhanComponent', () => {
  let component: DangKyHocPhanComponent;
  let fixture: ComponentFixture<DangKyHocPhanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangKyHocPhanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DangKyHocPhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
