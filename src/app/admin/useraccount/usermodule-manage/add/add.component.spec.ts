import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUsermoduleComponent } from './add.component';

describe('AddUsermoduleComponent', () => {
  let component: AddUsermoduleComponent;
  let fixture: ComponentFixture<AddUsermoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUsermoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUsermoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

