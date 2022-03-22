import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
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
  selector: 'rds-bubble-chart',
  templateUrl: './rds-bubble-chart.component.html',
  styleUrls: ['./rds-bubble-chart.component.scss']
})
export class RdsBubbleChartComponent implements OnInit, OnChanges, AfterViewInit {

  static count = 0;
  canvas: any;
  ctx: any;
  @Input() chartId = 'bubbleChart' + RdsBubbleChartComponent.count;
  @Input() chartWidth = 400;
  @Input() chartStyle?: any;
  @Input() chartLabels?: any;
  @Input() canvasBackgroundColor?: any;
  @Input() chartDatasets?: chartDataset[] | any;
  @Input() chartOptions?: any;

  constructor() {
    RdsBubbleChartComponent.count++;
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

  ngOnChanges(): void {
    this.bubbleChartBrowser();
  }

  ngAfterViewInit(): void {
    this.bubbleChartBrowser();
  }

  bubbleChartBrowser(): void {
    let chartStatus = Chart.getChart(this.chartId);
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }
    this.canvas = document.getElementById(this.chartId);
    if (this.canvas !== null) {
      this.canvas.style.backgroundColor = this.canvasBackgroundColor;
      this.ctx = this.canvas.getContext('2d');
      const canvas = new Chart(this.ctx, {
        type: 'bubble',
        data: {
          labels: this.chartLabels,
          datasets: this.chartDatasets,
        },
        options: this.chartOptions
      });
    }
  }

}
