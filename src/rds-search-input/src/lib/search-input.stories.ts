import { Story, Meta } from '@storybook/angular/types-6-0';
import { RdsSearchInputComponent } from './rds-search-input.component';

export default {
  title: 'Elements/Search',
  component: RdsSearchInputComponent,
  // argTypes: {
  //     inputType: {
  //         options: ['email','text','password'],
  //         control: { type: 'select' }
  //       },
  //     size: {
  //         options: ['default', 'small','large'],
  //         control: { type: 'radio' }
  //       },
  //     disabled:{control:{ type:'boolean'}},
  //     readonly:{control:{ type:'boolean'}},
  //     value:{control:{ type:'text'}},
  // }
} as Meta

const Template: Story<RdsSearchInputComponent> = (args: RdsSearchInputComponent) => ({
  props: args,
});

export const Basic = Template.bind({})
Basic.args = {

  Placeholder: 'Search',
  icon: 'bi bi-search',
  size: 'small',

}