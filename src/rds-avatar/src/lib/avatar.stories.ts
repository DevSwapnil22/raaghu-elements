import { Story, Meta } from '@storybook/angular/types-6-0';
import { RdsAvatarComponent } from './rds-avatar.component';


export default {
  title: 'Elements/Avatar',
  component: RdsAvatarComponent,
  argTypes: {
    Size: {
      options: ['Small', 'Medium', 'Large'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<RdsAvatarComponent> = (args: RdsAvatarComponent) => ({
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  Size: 'Medium',
  WithProfilePic: false,
  profilePic: '',
  FirstName: '',
  LastName: '',
};
