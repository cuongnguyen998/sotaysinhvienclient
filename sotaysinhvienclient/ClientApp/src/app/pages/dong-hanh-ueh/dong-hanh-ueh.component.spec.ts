import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DongHanhUehComponent } from './dong-hanh-ueh.component';

describe('DongHanhUehComponent', () => {
  let component: DongHanhUehComponent;
  let fixture: ComponentFixture<DongHanhUehComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DongHanhUehComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DongHanhUehComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
