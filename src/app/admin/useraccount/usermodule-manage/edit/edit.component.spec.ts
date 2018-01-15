import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUsermoduleComponent } from './edit.component';

describe('EditComponent', () => {
  let component: EditUsermoduleComponent;
  let fixture: ComponentFixture<EditUsermoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUsermoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUsermoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

