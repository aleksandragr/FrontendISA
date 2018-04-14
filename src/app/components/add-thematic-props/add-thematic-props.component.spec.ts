import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddThematicPropsComponent } from './add-thematic-props.component';

describe('AddThematicPropsComponent', () => {
  let component: AddThematicPropsComponent;
  let fixture: ComponentFixture<AddThematicPropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddThematicPropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddThematicPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
