import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuyenDiemComponent } from './chuyen-diem.component';

describe('ChuyenDiemComponent', () => {
  let component: ChuyenDiemComponent;
  let fixture: ComponentFixture<ChuyenDiemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuyenDiemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuyenDiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
