import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermoduleManageComponent } from './usermodule-manage.component';

describe('UsermoduleManageComponent', () => {
  let component: UsermoduleManageComponent;
  let fixture: ComponentFixture<UsermoduleManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermoduleManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermoduleManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
