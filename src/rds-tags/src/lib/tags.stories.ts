import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsTagsComponent } from './rds-tags.component';

export default {
  title: 'Elements/Tag',
  component: RdsTagsComponent,
  decorators: [
    moduleMetadata({

      imports: [CommonModule, FormsModule],
    }),
  ],
  argTypes: {

    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' },
    Color: { control: 'color' },
    Tagtype: {
      options: ['Square', 'Round'],
      control: { type: 'radio' }
    },
    Borderstyle: {
      options: ['dotted', 'solid', 'none'],
      control: { type: 'select' }
    },
    InputBorderstyle: {
      options: ['dotted', 'solid'],
      control: { type: 'select' }

    },
    inputBackgroundColor: { control: 'color' },
    inputBorderColor: { control: 'color' },
    CloseButtonStyle: {
      options: ['Normal', 'Fill'],
      control: { type: 'radio' }
    }

  }
} as Meta

const Template: Story<RdsTagsComponent> = (args: RdsTagsComponent) => ({
  props: args,
});

export const basic = Template.bind({})
basic.args = {

  backgroundColor: '',
  borderColor: '',
  color: '',
  tagType: 'Square',
  closeButtonStyle: 'Normal',
  roles: 'Basic'

}

export const TagWithScroll = Template.bind({})
TagWithScroll.args = {

  backgroundColor: '',
  borderColor: '',
  color: '',
  tagType: 'Square',
  closeButtonStyle: 'Normal',
  roles: 'TagWithScroll'

}
