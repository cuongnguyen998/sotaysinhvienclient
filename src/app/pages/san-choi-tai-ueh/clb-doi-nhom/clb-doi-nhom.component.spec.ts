import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClbDoiNhomComponent } from './clb-doi-nhom.component';

describe('ClbDoiNhomComponent', () => {
  let component: ClbDoiNhomComponent;
  let fixture: ComponentFixture<ClbDoiNhomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClbDoiNhomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClbDoiNhomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
