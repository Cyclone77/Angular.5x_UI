import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitRenameComponent } from './unit-rename.component';

describe('UnitRenameComponent', () => {
  let component: UnitRenameComponent;
  let fixture: ComponentFixture<UnitRenameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitRenameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitRenameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
