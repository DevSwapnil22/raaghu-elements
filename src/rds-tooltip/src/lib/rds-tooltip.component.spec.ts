import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsTooltipComponent } from './rds-tooltip.component';

describe('RdsTooltipComponent', () => {
  let component: RdsTooltipComponent;
  let fixture: ComponentFixture<RdsTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsTooltipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
