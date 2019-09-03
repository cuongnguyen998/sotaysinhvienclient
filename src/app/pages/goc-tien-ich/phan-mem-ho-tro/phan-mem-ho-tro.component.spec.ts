import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhanMemHoTroComponent } from './phan-mem-ho-tro.component';

describe('PhanMemHoTroComponent', () => {
  let component: PhanMemHoTroComponent;
  let fixture: ComponentFixture<PhanMemHoTroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhanMemHoTroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhanMemHoTroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
