import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitdendrogramComponent } from './unitdendrogram.component';

describe('UnitdendrogramComponent', () => {
  let component: UnitdendrogramComponent;
  let fixture: ComponentFixture<UnitdendrogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitdendrogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitdendrogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
