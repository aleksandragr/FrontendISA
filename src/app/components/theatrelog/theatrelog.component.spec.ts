import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatrelogComponent } from './theatrelog.component';

describe('TheatrelogComponent', () => {
  let component: TheatrelogComponent;
  let fixture: ComponentFixture<TheatrelogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheatrelogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheatrelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
