import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VangThiComponent } from './vang-thi.component';

describe('VangThiComponent', () => {
  let component: VangThiComponent;
  let fixture: ComponentFixture<VangThiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VangThiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VangThiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
