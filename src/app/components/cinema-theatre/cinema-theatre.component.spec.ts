import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaTheatreComponent } from './cinema-theatre.component';

describe('CinemaTheatreComponent', () => {
  let component: CinemaTheatreComponent;
  let fixture: ComponentFixture<CinemaTheatreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinemaTheatreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaTheatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
