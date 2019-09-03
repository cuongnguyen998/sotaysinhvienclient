import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoLopHocPhanComponent } from './mo-lop-hoc-phan.component';

describe('MoLopHocPhanComponent', () => {
  let component: MoLopHocPhanComponent;
  let fixture: ComponentFixture<MoLopHocPhanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoLopHocPhanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoLopHocPhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
