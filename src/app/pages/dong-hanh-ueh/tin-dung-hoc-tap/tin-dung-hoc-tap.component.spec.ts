import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinDungHocTapComponent } from './tin-dung-hoc-tap.component';

describe('TinDungHocTapComponent', () => {
  let component: TinDungHocTapComponent;
  let fixture: ComponentFixture<TinDungHocTapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinDungHocTapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinDungHocTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
