import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HocTapUehComponent } from './hoc-tap-ueh.component';

describe('HocTapUehComponent', () => {
  let component: HocTapUehComponent;
  let fixture: ComponentFixture<HocTapUehComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HocTapUehComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HocTapUehComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
