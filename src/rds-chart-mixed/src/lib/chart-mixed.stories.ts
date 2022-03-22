import { Story, Meta } from '@storybook/angular/types-6-0';
import { RdsChartMixedComponent } from './rds-chart-mixed.component';

export default {
  title: 'Elements/Mixed Chart',
  component: RdsChartMixedComponent,
  argTypes: {
    canvasBackgroundColor: { control: 'color' },
    chartStyle: {
      options: ['Dark', 'light'],
      control: 'radio'
    }
  },

} as Meta;

const Template: Story<RdsChartMixedComponent> = (args: RdsChartMixedComponent) => ({
  props: args,

});
export const MixedChart = Template.bind({});
MixedChart.args = {

  chartDatasets: [
    {
      type: 'bar',
      label: 'Bar Dataset',
      data: [10, 20, 30, 32],
      backgroundColor: ['orange'],
      order: 2
    },
    {
      type: 'line',
      label: 'Line Dataset',
      data: [10, 20, 30, 32],
      borderColor: 'rgba(75, 192, 192, 0.8)',
      order: 1
    }
  ],

  chartLabels: ['January', 'February', 'March', 'April'],
  chartWidth: 500,

  chartOptions: {
    radius: 10,
    pointStyle: 'triangle',
    plugins: {
      legend: {
        position: 'left',
        align: "start",
        pointStyle: "bottom",
        labels: {
          usePointStyle: true
        }
      },
      tooltip: {
        usePointStyle: true,
      },
    },
    responsive: true,

    scales: {
      y: {
        beginAtZero: true
      }
    }
  },

};