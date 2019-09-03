import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViecLamComponent } from './viec-lam.component';

describe('ViecLamComponent', () => {
  let component: ViecLamComponent;
  let fixture: ComponentFixture<ViecLamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViecLamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViecLamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
