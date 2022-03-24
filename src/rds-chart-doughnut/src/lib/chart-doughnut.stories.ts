import { Story, Meta } from '@storybook/angular/types-6-0';
import { updateLocale } from 'ngx-bootstrap/chronos';
import { RdsChartDoughnutComponent } from './rds-chart-doughnut.component';

export default {
  title: 'Charts/Doughnut Chart',
  component: RdsChartDoughnutComponent,
  argTypes: {
    canvasBackgroundColor: { control: 'color' },
    chartStyle: {
      options: ['Dark', 'light'],
      control: 'radio'
    }
  },

} as Meta;

const Template: Story<RdsChartDoughnutComponent> = (args: RdsChartDoughnutComponent) => ({
  props: args,

});

export const Basic = Template.bind({});
Basic.args = {
  chartDatasets: [
    {
      label: 'Dataset 1',
      data: [20, 10, 30, 40],
      backgroundColor: [
        '#ff6384',
        '#ff9f40',
        '#ffcd56',
        '#4bc0c0'
      ],
      borderColor: [
        '#fff',
      ],
    }
  ],

  chartLabels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
  chartWidth: 300,
  chartOptions: {
    type: 'doughnut',
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Doughnut Chart'
        }
      }
    },
  }
}