import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterPatientIdComponent } from './enter-patient-id.component';

describe('EnterPatientIdComponent', () => {
  let component: EnterPatientIdComponent;
  let fixture: ComponentFixture<EnterPatientIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterPatientIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterPatientIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
