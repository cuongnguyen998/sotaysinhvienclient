import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinLienHeCacDonViComponent } from './thong-tin-lien-he-cac-don-vi.component';

describe('ThongTinLienHeCacDonViComponent', () => {
  let component: ThongTinLienHeCacDonViComponent;
  let fixture: ComponentFixture<ThongTinLienHeCacDonViComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinLienHeCacDonViComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinLienHeCacDonViComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
