import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUseraccountComponent } from './edit.component';

describe('EditComponent', () => {
  let component: EditUseraccountComponent;
  let fixture: ComponentFixture<EditUseraccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUseraccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUseraccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
