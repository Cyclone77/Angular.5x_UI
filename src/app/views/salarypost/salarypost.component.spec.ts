import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarypostComponent } from './salarypost.component';

describe('SalarypostComponent', () => {
  let component: SalarypostComponent;
  let fixture: ComponentFixture<SalarypostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalarypostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarypostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
