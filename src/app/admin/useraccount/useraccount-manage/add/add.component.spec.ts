import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUseraccountComponent } from './add.component';

describe('AddUseraccountComponent', () => {
  let component: AddUseraccountComponent;
  let fixture: ComponentFixture<AddUseraccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUseraccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUseraccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
