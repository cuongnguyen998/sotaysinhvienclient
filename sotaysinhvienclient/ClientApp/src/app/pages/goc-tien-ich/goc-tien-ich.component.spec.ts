import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GocTienIchComponent } from './goc-tien-ich.component';

describe('GocTienIchComponent', () => {
  let component: GocTienIchComponent;
  let fixture: ComponentFixture<GocTienIchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GocTienIchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GocTienIchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
