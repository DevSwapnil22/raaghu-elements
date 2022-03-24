import { Story, Meta } from '@storybook/angular/types-6-0';
import { RdsToggleComponent } from './rds-toggle.component';

export default {
  title: 'Elements/Toggle',
  component: RdsToggleComponent,
  argTypes: {

  },
} as Meta;

const Template: Story<RdsToggleComponent> = (args: RdsToggleComponent) => ({
  props: args,
});

export const basic = Template.bind({})
