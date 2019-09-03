import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanHoaUehComponent } from './van-hoa-ueh.component';

describe('VanHoaUehComponent', () => {
  let component: VanHoaUehComponent;
  let fixture: ComponentFixture<VanHoaUehComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanHoaUehComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanHoaUehComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
