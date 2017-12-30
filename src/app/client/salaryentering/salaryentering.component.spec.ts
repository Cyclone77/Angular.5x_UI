import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryenteringComponent } from './salaryentering.component';

describe('SalaryenteringComponent', () => {
  let component: SalaryenteringComponent;
  let fixture: ComponentFixture<SalaryenteringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryenteringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryenteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
