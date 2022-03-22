import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator } from '@storybook/angular';
import { RdsDoubleRangeComponent } from './rds-double-range.component';


export default {
  title: 'Elements/Double Range',
  component: RdsDoubleRangeComponent,
  argTypes: {

  },
  decorators: [componentWrapperDecorator((story: any) => `<div style="margin: 3em">${story}</div>`)]
} as Meta

const Template: Story<RdsDoubleRangeComponent> = (args: RdsDoubleRangeComponent) => ({
  props: args,

});
export const Basic = Template.bind({})
Basic.args = {}
