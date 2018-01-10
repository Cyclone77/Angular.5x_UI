import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalRepresetComponent } from './legal-represet.component';

describe('LegalRepresetComponent', () => {
  let component: LegalRepresetComponent;
  let fixture: ComponentFixture<LegalRepresetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalRepresetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalRepresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
