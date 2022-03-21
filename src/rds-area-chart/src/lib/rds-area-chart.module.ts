import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsAreaChartComponent } from './rds-area-chart.component';

@NgModule({
  declarations: [
    RdsAreaChartComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RdsAreaChartComponent
  ]
})
export class RdsAreaChartModule { }
