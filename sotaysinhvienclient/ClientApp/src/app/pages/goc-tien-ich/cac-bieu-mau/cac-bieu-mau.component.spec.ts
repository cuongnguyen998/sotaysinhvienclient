import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CacBieuMauComponent } from './cac-bieu-mau.component';

describe('CacBieuMauComponent', () => {
  let component: CacBieuMauComponent;
  let fixture: ComponentFixture<CacBieuMauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CacBieuMauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CacBieuMauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
