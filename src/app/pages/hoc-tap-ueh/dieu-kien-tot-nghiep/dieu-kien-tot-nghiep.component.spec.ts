import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DieuKienTotNghiepComponent } from './dieu-kien-tot-nghiep.component';

describe('DieuKienTotNghiepComponent', () => {
  let component: DieuKienTotNghiepComponent;
  let fixture: ComponentFixture<DieuKienTotNghiepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DieuKienTotNghiepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DieuKienTotNghiepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
