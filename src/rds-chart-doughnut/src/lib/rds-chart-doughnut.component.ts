import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import Chart from 'chart.js/auto';

export interface chartDataset {
  label: string,
  data: Array<number>;
  fill: boolean,
  borderColor: string,
  tension: number,
  backgroundColor: Array<string>;
  borderWidth: number;
}

@Component({
  selector: 'rds-chart-doughnut',
  templateUrl: './rds-chart-doughnut.component.html',
  styleUrls: ['./rds-chart-doughnut.component.scss']
})
export class RdsChartDoughnutComponent implements OnInit {

  static count = 0;
  canvas: any;
  ctx: any;
  chartId = 'doughnutChart' + RdsChartDoughnutComponent.count;
  @Input() chartWidth = 400;
  @Input() chartStyle?: any;
  @Input() chartLabels?: any
  @Input() canvasBackgroundColor?: any;
  @Input() chartDatasets?: chartDataset[] | any;
  @Input() chartOptions?: any;

  constructor() {
    RdsChartDoughnutComponent.count++;
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.doughnutChartBrowser();
  }

  ngAfterViewInit(): void {
    this.doughnutChartBrowser();
  }

  public get classes(): string[] {
    var classes = ['res-width']
    if (this.chartStyle === "Dark") {
      classes.push('dark-mode')
      return classes
    }
    return classes
  }

  doughnutChartBrowser(): void {
    let chartStatus = Chart.getChart(this.chartId);
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }
    this.canvas = document.getElementById(this.chartId);
    if (this.canvas !== null) {
      this.canvas.style.backgroundColor = this.canvasBackgroundColor;
      this.ctx = this.canvas.getContext('2d');
      const canvas = new Chart(this.ctx, {
        type: 'doughnut',
        data: {
          labels: this.chartLabels,
          datasets: this.chartDatasets,
        },
        options: this.chartOptions
      });
    }
  }

}
