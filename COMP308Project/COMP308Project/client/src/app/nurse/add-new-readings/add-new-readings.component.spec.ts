import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewReadingsComponent } from './add-new-readings.component';

describe('AddNewReadingsComponent', () => {
  let component: AddNewReadingsComponent;
  let fixture: ComponentFixture<AddNewReadingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewReadingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewReadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
