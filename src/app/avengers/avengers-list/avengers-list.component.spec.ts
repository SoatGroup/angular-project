import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvengersListComponent } from './avengers-list.component';

describe('AvengersListComponent', () => {
  let component: AvengersListComponent;
  let fixture: ComponentFixture<AvengersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvengersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvengersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
