import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

export interface chartlabel {
  labelname: Array<string>;

}
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
  selector: 'rds-chart-area',
  templateUrl: './rds-chart-area.component.html',
  styleUrls: ['./rds-chart-area.component.scss']
})
export class RdsChartAreaComponent implements OnInit, OnChanges, AfterViewInit {

  static count = 0;
  canvas: any;
  ctx: any;
  chartId = 'ChartArea' + RdsChartAreaComponent.count;
  @Input() chartWidth = 400;

  @Input() chartStyle?: any;
  @Input() chartLabels?: any
  @Input() canvasBackgroundColor?: any;
  @Input() chartDatasets?: chartDataset[] | any;
  @Input() chartOptions?: any;

  constructor() {
    RdsChartAreaComponent.count++;
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.ChartAreaBrowser();
  }

  ngAfterViewInit(): void {
    this.ChartAreaBrowser();
  }

  public get classes(): string[] {
    var classes = ['res-width']
    if (this.chartStyle === "Dark") {
      classes.push('dark-mode')
      return classes
    }
    return classes
  }

  ChartAreaBrowser(): void {
    let chartStatus = Chart.getChart(this.chartId);
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }
    this.canvas = document.getElementById(this.chartId);
    if (this.canvas !== null) {
      this.canvas.style.backgroundColor = this.canvasBackgroundColor;
      this.ctx = this.canvas.getContext('2d');
      const areaCanvas = new Chart(this.ctx, {
        type: 'line',
        data: {
          labels: this.chartLabels,
          datasets: this.chartDatasets,
        },
        options: this.chartOptions
      });
    }
  }

}
