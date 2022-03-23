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
  selector: 'rds-chart-polar-area',
  templateUrl: './rds-chart-polar-area.component.html',
  styleUrls: ['./rds-chart-polar-area.component.scss']
})
export class RdsChartPolarAreaComponent implements OnInit {

  canvas: any;
  ctx: any;
  static count = 0;
  chartId = 'polarAreaChart' + RdsChartPolarAreaComponent.count;
  @Input() chartWidth = 400;
  @Input() chartStyle?: any;
  @Input() chartLabels?: any
  @Input() canvasBackgroundColor?: any;
  @Input() chartDatasets?: chartDataset[] | any;
  @Input() chartOptions?: any;
  static inload: boolean;

  constructor() {
    RdsChartPolarAreaComponent.count++;
  }

  ngOnInit(): void {
  }

  public get classes(): string[] {
    var classes = ['res-width']
    if (this.chartStyle === "Dark") {
      classes.push('dark-mode')
      return classes
    }
    return classes
  }

  ngOnChanges() {
    this.polarAreaChartBrowser()
  }

  ngAfterViewInit() {
    this.polarAreaChartBrowser();
  }

  polarAreaChartBrowser(): void {
    let chartStatus = Chart.getChart(this.chartId);
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }
    this.canvas = document.getElementById(this.chartId);
    if (this.canvas !== null) {
      this.canvas.style.backgroundColor = this.canvasBackgroundColor;
      this.ctx = this.canvas.getContext('2d');
      const polarAreaCanvas = new Chart(this.ctx, {
        type: 'polarArea',
        data: {
          labels: this.chartLabels,
          datasets: this.chartDatasets,
        },
        options: this.chartOptions
      });
    }
  }

}
