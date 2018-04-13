import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialstoreComponent } from './officialstore.component';

describe('OfficialstoreComponent', () => {
  let component: OfficialstoreComponent;
  let fixture: ComponentFixture<OfficialstoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficialstoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficialstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
