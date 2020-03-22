import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhungThoiGianComponent } from './khung-thoi-gian.component';

describe('KhungThoiGianComponent', () => {
  let component: KhungThoiGianComponent;
  let fixture: ComponentFixture<KhungThoiGianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhungThoiGianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhungThoiGianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
