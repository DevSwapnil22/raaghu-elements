import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsValidationComponent } from './rds-validation.component';

describe('RdsValidationComponent', () => {
  let component: RdsValidationComponent;
  let fixture: ComponentFixture<RdsValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
