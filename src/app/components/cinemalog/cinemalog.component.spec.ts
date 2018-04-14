import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemalogComponent } from './cinemalog.component';

describe('CinemalogComponent', () => {
  let component: CinemalogComponent;
  let fixture: ComponentFixture<CinemalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinemalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
