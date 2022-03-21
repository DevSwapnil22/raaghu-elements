import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsAccordianComponent } from './rds-accordian.component';

describe('RdsAccordianComponent', () => {
  let component: RdsAccordianComponent;
  let fixture: ComponentFixture<RdsAccordianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsAccordianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsAccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
