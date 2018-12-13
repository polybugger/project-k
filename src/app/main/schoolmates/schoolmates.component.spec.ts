import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolmatesComponent } from './schoolmates.component';

describe('SchoolmatesComponent', () => {
  let component: SchoolmatesComponent;
  let fixture: ComponentFixture<SchoolmatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolmatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolmatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
