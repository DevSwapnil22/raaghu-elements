import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsProfileCardComponent } from './rds-profile-card.component';

describe('RdsProfileCardComponent', () => {
  let component: RdsProfileCardComponent;
  let fixture: ComponentFixture<RdsProfileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsProfileCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
