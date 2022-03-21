import { AfterViewInit, Component, Input, OnInit, SimpleChanges } from '@angular/core';
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
  selector: 'rds-bool-chart',
  templateUrl: './rds-bool-chart.component.html',
  styleUrls: ['./rds-bool-chart.component.scss']
})
export class RdsBoolChartComponent implements OnInit, AfterViewInit {

  title = "rds-bool-chart";
  static count = 0;
  canvas: any;
  ctx: any;
  value: any;

  CanvasbackgroundColor: any;

  chartdata: any;
  chartId = 'mychart' + RdsBoolChartComponent.count;
  @Input()
  chartWidth = 400;

  @Input()
  ChartStyle?: any;
  @Input()
  chartLabels?: any
  @Input()
  canvasBackgroundColor?: any;

  @Input()
  chartDatasets?: chartDataset[] | any;

  @Input()
  chartType: 'bar' | 'line' | 'pie' | 'doughnut' | 'radar' | 'polarArea' | 'bubble' | 'scatter' = 'bar';

  @Input()
  chartOptions?: any;
  static inload: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  public get classes(): string[] {
    var classes = ['res-width']
    if (this.ChartStyle === "Dark") {
      classes.push('dark-mode')
      return classes
    }

    return classes
  }

  ngOnChanges(changes: SimpleChanges) {

    // console.log(this.chartId);
    var canvass = document.getElementById(this.chartId) as HTMLCanvasElement;
    if (changes['canvasBackgroundColor']) {
      this.CanvasbackgroundColor = changes['canvasBackgroundColor'].currentValue

    }
  }

  // tslint:disable-next-line:typedef
  ngAfterViewChecked() {
    this.canvas = document.getElementById(this.chartId);
    this.canvas.style.backgroundColor = this.CanvasbackgroundColor;
  }

  ngAfterViewInit() {
    this.canvas = document.getElementById(this.chartId);

    //this.canvas.style.backgroundColor=this.CanvasbackgroundColor;
    this.ctx = this.canvas.getContext('2d');

    const myChart = new Chart(this.ctx, {
      type: this.chartType,
      data: {
        labels: this.chartLabels,
        datasets: this.chartDatasets,
      },

      options: this.chartOptions,
    });
  }

  setCanvasBackground(): void {
    this.canvas = document.getElementById(this.chartId);
    // console.log(this.chartId);
    this.canvas.style.backgroundColor = this.CanvasbackgroundColor;
    this.ctx = this.canvas.getContext('2d');
  }

}
