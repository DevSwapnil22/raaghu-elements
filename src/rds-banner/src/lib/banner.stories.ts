import { Story, Meta } from '@storybook/angular/types-6-0';
import { RdsBannerComponent } from './rds-banner.component';

export default {
  title: 'ELEMENTS/Banner',
  component: RdsBannerComponent,
  argTypes: {
    position: {
      options: ['top', 'bottom'],
      control: { type: 'radio' }
    }
  }
} as Meta

const Template: Story<RdsBannerComponent> = (args: RdsBannerComponent) => ({
    props: args
});

export const Basic = Template.bind({})
Basic.args = {
  backgroundColor: '#4F46E5',
  color: '#fff',
  alignCenter: false,
  bannerText: 'Big news! We are excited to announce a brand new product.',
  sticky: false,
  position: 'top'
}
