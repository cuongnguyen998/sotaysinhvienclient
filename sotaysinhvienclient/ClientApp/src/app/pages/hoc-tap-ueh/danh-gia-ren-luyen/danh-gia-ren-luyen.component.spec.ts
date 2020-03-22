import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhGiaRenLuyenComponent } from './danh-gia-ren-luyen.component';

describe('DanhGiaRenLuyenComponent', () => {
  let component: DanhGiaRenLuyenComponent;
  let fixture: ComponentFixture<DanhGiaRenLuyenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhGiaRenLuyenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhGiaRenLuyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
