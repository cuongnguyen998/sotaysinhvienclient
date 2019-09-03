import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoComponent } from './co-so.component';

describe('CoSoComponent', () => {
  let component: CoSoComponent;
  let fixture: ComponentFixture<CoSoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoSoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
