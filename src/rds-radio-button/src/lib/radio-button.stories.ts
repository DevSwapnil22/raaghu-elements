import { Story, Meta } from '@storybook/angular/types-6-0';
import { RdsRadioButtonComponent } from './rds-radio-button.component';

export default {
  title: 'Elements/Radio Button',
  component: RdsRadioButtonComponent,
  argTypes: {

  }
} as Meta
const Template: Story<RdsRadioButtonComponent> = (args: RdsRadioButtonComponent) => ({
  props: args,
});
export const basic = Template.bind({})
basic.args = {
  label: 'default radio',
  checked: false,
  disabled: false,
  switch: false,
  inline: false,
  name: 'Name for Radio Button',
  id: "Checkid",
  isInputGroup: true
}
