import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhucKhaoComponent } from './phuc-khao.component';

describe('PhucKhaoComponent', () => {
  let component: PhucKhaoComponent;
  let fixture: ComponentFixture<PhucKhaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhucKhaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhucKhaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
