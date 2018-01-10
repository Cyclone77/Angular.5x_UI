import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganOptionComponent } from './organ-option.component';

describe('OrganOptionComponent', () => {
  let component: OrganOptionComponent;
  let fixture: ComponentFixture<OrganOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
