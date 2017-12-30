import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsneditComponent } from './psnedit.component';

describe('PsneditComponent', () => {
  let component: PsneditComponent;
  let fixture: ComponentFixture<PsneditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsneditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
