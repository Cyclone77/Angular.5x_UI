import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryPostComponent } from './salary-post.component';

describe('SalaryPostComponent', () => {
  let component: SalaryPostComponent;
  let fixture: ComponentFixture<SalaryPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
