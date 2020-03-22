import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoVanHocTapComponent } from './co-van-hoc-tap.component';

describe('CoVanHocTapComponent', () => {
  let component: CoVanHocTapComponent;
  let fixture: ComponentFixture<CoVanHocTapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoVanHocTapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoVanHocTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
