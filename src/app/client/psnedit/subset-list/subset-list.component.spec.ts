import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsetListComponent } from './subset-list.component';

describe('SubsetListComponent', () => {
  let component: SubsetListComponent;
  let fixture: ComponentFixture<SubsetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubsetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
