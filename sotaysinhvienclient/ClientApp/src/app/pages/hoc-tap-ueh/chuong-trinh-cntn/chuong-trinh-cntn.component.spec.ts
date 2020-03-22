import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuongTrinhCntnComponent } from './chuong-trinh-cntn.component';

describe('ChuongTrinhCntnComponent', () => {
  let component: ChuongTrinhCntnComponent;
  let fixture: ComponentFixture<ChuongTrinhCntnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuongTrinhCntnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuongTrinhCntnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
