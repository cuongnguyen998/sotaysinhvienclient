import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MienGiamHocPhiComponent } from './mien-giam-hoc-phi.component';

describe('MienGiamHocPhiComponent', () => {
  let component: MienGiamHocPhiComponent;
  let fixture: ComponentFixture<MienGiamHocPhiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MienGiamHocPhiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MienGiamHocPhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
