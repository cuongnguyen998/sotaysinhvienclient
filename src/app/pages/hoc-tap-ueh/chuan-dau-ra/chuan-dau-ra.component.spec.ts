import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuanDauRaComponent } from './chuan-dau-ra.component';

describe('ChuanDauRaComponent', () => {
  let component: ChuanDauRaComponent;
  let fixture: ComponentFixture<ChuanDauRaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuanDauRaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuanDauRaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
