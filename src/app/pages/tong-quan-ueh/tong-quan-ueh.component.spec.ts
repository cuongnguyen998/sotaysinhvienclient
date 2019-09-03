import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TongQuanUehComponent } from './tong-quan-ueh.component';

describe('TongQuanUehComponent', () => {
  let component: TongQuanUehComponent;
  let fixture: ComponentFixture<TongQuanUehComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TongQuanUehComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TongQuanUehComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
