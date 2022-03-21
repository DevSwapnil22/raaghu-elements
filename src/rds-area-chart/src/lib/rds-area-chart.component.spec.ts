import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsAreaChartComponent } from './rds-area-chart.component';

describe('RdsAreaChartComponent', () => {
  let component: RdsAreaChartComponent;
  let fixture: ComponentFixture<RdsAreaChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsAreaChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsAreaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
