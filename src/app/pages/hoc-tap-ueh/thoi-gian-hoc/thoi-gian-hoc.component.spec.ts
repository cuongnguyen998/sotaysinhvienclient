import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoiGianHocComponent } from './thoi-gian-hoc.component';

describe('ThoiGianHocComponent', () => {
  let component: ThoiGianHocComponent;
  let fixture: ComponentFixture<ThoiGianHocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThoiGianHocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThoiGianHocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
