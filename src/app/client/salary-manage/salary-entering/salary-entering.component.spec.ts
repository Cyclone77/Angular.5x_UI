import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryEnteringComponent } from './salary-entering.component';

describe('SalaryEnteringComponent', () => {
  let component: SalaryEnteringComponent;
  let fixture: ComponentFixture<SalaryEnteringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryEnteringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryEnteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
