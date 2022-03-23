import { Component, Input, OnInit } from '@angular/core';
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
  selector: 'rds-chart-pie',
  templateUrl: './rds-chart-pie.component.html',
  styleUrls: ['./rds-chart-pie.component.scss']
})
export class RdsChartPieComponent implements OnInit {

  static count = 0;
  chartId = 'pieChart' + RdsChartPieComponent.count;
  canvas: any;
  context: any;
  @Input() chartWidth = 400;
  @Input() chartStyle?: any;
  @Input() chartLabels?: any
  @Input() canvasBackgroundColor?: any;
  @Input() chartDatasets?: chartDataset[] | any;
  @Input() chartOptions?: any;

  constructor() {
    RdsChartPieComponent.count++;
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
    this.pieChartBrowser();
  }

  ngAfterViewInit(): void {
    this.pieChartBrowser();
  }

  pieChartBrowser(): void {
    let chartStatus = Chart.getChart(this.chartId);
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }
    this.canvas = document.getElementById(this.chartId);
    if (this.canvas !== null) {
      this.canvas.style.backgroundColor = this.canvasBackgroundColor;
      this.context = this.canvas.getContext('2d');

      const myChart = new Chart(this.context, {
        type: 'pie',
        data: {
          labels: this.chartLabels,
          datasets: this.chartDatasets,
        },
        options: this.chartOptions
      });
    }
  }

}
