import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsChartingComponent } from './rds-charting.component';

describe('RdsChartingComponent', () => {
  let component: RdsChartingComponent;
  let fixture: ComponentFixture<RdsChartingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsChartingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsChartingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
