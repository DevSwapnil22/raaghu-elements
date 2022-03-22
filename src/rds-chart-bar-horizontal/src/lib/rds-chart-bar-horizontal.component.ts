import { Component, Input, OnInit } from '@angular/core';
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
  selector: 'rds-chart-bar-horizontal',
  templateUrl: './rds-chart-bar-horizontal.component.html',
  styleUrls: ['./rds-chart-bar-horizontal.component.scss']
})
export class RdsChartBarHorizontalComponent implements OnInit {

  static count = 0;
  canvas: any;
  ctx: any;
  chartId = 'horizontalChart' + RdsChartBarHorizontalComponent.count;
  @Input() chartWidth = 400;
  @Input() chartStyle?: any;
  @Input() chartLabels?: any
  @Input() canvasBackgroundColor?: any;
  @Input() chartDatasets?: chartDataset[] | any;
  @Input() chartOptions?: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.barChartBrowser();
  }

  ngAfterViewInit(): void {
    this.barChartBrowser();
  }

  public get classes(): string[] {
    var classes = ['res-width']
    if (this.chartStyle === "Dark") {
      classes.push('dark-mode')
      return classes
    }

    return classes
  }

  barChartBrowser(): void {
    let chartStatus = Chart.getChart(this.chartId);
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }
    this.canvas = document.getElementById(this.chartId);
    if (this.canvas !== null) {
      this.canvas.style.backgroundColor = this.canvasBackgroundColor;
      this.ctx = this.canvas.getContext('2d');
      const canvas = new Chart(this.ctx, {
        type: 'bar',
        data: {
          labels: this.chartLabels,
          datasets: this.chartDatasets,
        },
        options: this.chartOptions
      });
    }
  }

}
