import { Story, Meta } from '@storybook/angular/types-6-0';
import { RdsSpinnerComponent } from './rds-spinner.component';

export default {
  title: 'Elements/Spinner',
  component: RdsSpinnerComponent,
  argTypes: {
    Color: { control: 'select' },

  },
} as Meta;
const Template: Story<RdsSpinnerComponent> = (args: RdsSpinnerComponent) => ({
  props: args,
});

export const basic = Template.bind({});

basic.args = {
  spinnerType: false,
};

