import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsBoolChartComponent } from './rds-bool-chart.component';

describe('RdsBoolChartComponent', () => {
  let component: RdsBoolChartComponent;
  let fixture: ComponentFixture<RdsBoolChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsBoolChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsBoolChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
