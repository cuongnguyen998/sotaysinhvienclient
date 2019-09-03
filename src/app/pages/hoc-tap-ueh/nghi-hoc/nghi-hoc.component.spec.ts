import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NghiHocComponent } from './nghi-hoc.component';

describe('NghiHocComponent', () => {
  let component: NghiHocComponent;
  let fixture: ComponentFixture<NghiHocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NghiHocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NghiHocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
