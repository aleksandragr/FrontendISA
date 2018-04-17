import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MineAnnouncementComponent } from './mine-announcement.component';

describe('MineAnnouncementComponent', () => {
  let component: MineAnnouncementComponent;
  let fixture: ComponentFixture<MineAnnouncementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MineAnnouncementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MineAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
