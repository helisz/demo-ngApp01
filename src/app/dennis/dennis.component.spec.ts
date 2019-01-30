import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DennisComponent } from './dennis.component';

describe('DennisComponent', () => {
  let component: DennisComponent;
  let fixture: ComponentFixture<DennisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DennisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DennisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
