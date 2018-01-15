import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntellSuperComponent } from './intell-super.component';

describe('IntellSuperComponent', () => {
  let component: IntellSuperComponent;
  let fixture: ComponentFixture<IntellSuperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntellSuperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntellSuperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
