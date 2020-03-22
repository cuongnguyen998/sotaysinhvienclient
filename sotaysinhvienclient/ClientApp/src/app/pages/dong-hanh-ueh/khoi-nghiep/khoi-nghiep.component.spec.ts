import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhoiNghiepComponent } from './khoi-nghiep.component';

describe('KhoiNghiepComponent', () => {
  let component: KhoiNghiepComponent;
  let fixture: ComponentFixture<KhoiNghiepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhoiNghiepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhoiNghiepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
