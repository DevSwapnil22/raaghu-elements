import { Story, Meta } from '@storybook/angular/types-6-0';
import { RdsOffcanvasComponent } from './rds-offcanvas.component';

export default {
  title: 'Elements/Offcanvas',
  component: RdsOffcanvasComponent,
  argTypes: {
    onShow: { click: "clicked" },
    onClose: { click: "clicked" },

  },
} as Meta;
const Template: Story<RdsOffcanvasComponent> = (args: RdsOffcanvasComponent) => ({
  props: args,
});


export const basic = Template.bind({});
basic.args = {
  // offId:'canvas1',
  backDrop: true,
  scrolling: true,
  buttonTitle: 'Button'
}
