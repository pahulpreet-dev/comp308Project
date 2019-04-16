import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPreviousVisitsComponent } from './list-previous-visits.component';

describe('ListPreviousVisitsComponent', () => {
  let component: ListPreviousVisitsComponent;
  let fixture: ComponentFixture<ListPreviousVisitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPreviousVisitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPreviousVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
