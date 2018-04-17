import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MineNotificationComponent } from './mine-notification.component';

describe('MineNotificationComponent', () => {
  let component: MineNotificationComponent;
  let fixture: ComponentFixture<MineNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MineNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MineNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
