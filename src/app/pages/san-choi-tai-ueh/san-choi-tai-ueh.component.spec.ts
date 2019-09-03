import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanChoiTaiUehComponent } from './san-choi-tai-ueh.component';

describe('SanChoiTaiUehComponent', () => {
  let component: SanChoiTaiUehComponent;
  let fixture: ComponentFixture<SanChoiTaiUehComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanChoiTaiUehComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanChoiTaiUehComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
