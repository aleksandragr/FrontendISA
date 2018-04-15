import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditThematicPropsComponent } from './edit-thematic-props.component';

describe('EditThematicPropsComponent', () => {
  let component: EditThematicPropsComponent;
  let fixture: ComponentFixture<EditThematicPropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditThematicPropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditThematicPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
