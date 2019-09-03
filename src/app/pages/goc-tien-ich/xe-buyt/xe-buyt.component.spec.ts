import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XeBuytComponent } from './xe-buyt.component';

describe('XeBuytComponent', () => {
  let component: XeBuytComponent;
  let fixture: ComponentFixture<XeBuytComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XeBuytComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XeBuytComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
