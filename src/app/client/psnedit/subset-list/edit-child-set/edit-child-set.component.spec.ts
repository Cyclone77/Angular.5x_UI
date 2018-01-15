import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChildSetComponent } from './edit-child-set.component';

describe('EditChildSetComponent', () => {
  let component: EditChildSetComponent;
  let fixture: ComponentFixture<EditChildSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditChildSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChildSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
