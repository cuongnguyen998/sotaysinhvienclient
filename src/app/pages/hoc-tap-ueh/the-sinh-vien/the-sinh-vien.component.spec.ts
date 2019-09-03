import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheSinhVienComponent } from './the-sinh-vien.component';

describe('TheSinhVienComponent', () => {
  let component: TheSinhVienComponent;
  let fixture: ComponentFixture<TheSinhVienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheSinhVienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheSinhVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
