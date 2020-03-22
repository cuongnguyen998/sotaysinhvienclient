import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuongTrinhClcComponent } from './chuong-trinh-clc.component';

describe('ChuongTrinhClcComponent', () => {
  let component: ChuongTrinhClcComponent;
  let fixture: ComponentFixture<ChuongTrinhClcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuongTrinhClcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuongTrinhClcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
