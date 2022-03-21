
import { Story, Meta } from '@storybook/angular/types-6-0';
import { RdsAlertComponent } from './rds-alert.component';

export default {
  title: 'Elements/Alert',
  component: RdsAlertComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' }
  },
} as Meta;

const Template: Story<RdsAlertComponent> = (args: RdsAlertComponent) => ({
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  // showicon:false,
  dismisable: true,
  alertOpen: true,
  heading: '',
  icon:'bi bi-info-circle',
  position: 'bottom',

}

