import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsBubbleChartComponent } from './rds-bubble-chart.component';

describe('RdsBubbleChartComponent', () => {
  let component: RdsBubbleChartComponent;
  let fixture: ComponentFixture<RdsBubbleChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsBubbleChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsBubbleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
