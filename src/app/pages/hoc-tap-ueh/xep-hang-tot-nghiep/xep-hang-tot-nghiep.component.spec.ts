import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XepHangTotNghiepComponent } from './xep-hang-tot-nghiep.component';

describe('XepHangTotNghiepComponent', () => {
  let component: XepHangTotNghiepComponent;
  let fixture: ComponentFixture<XepHangTotNghiepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XepHangTotNghiepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XepHangTotNghiepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
