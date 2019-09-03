import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NghienCuuComponent } from './nghien-cuu.component';

describe('NghienCuuComponent', () => {
  let component: NghienCuuComponent;
  let fixture: ComponentFixture<NghienCuuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NghienCuuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NghienCuuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
