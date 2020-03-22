import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuongTrinhDtt2Component } from './chuong-trinh-dtt2.component';

describe('ChuongTrinhDtt2Component', () => {
  let component: ChuongTrinhDtt2Component;
  let fixture: ComponentFixture<ChuongTrinhDtt2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuongTrinhDtt2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuongTrinhDtt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
