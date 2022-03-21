import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { RdsInputComponent } from './rds-input.component';

export default {
  title: 'Elements/Input',
  component: RdsInputComponent,
  decorators: [
    moduleMetadata({
          imports: [CommonModule, FormsModule],
    }),
],
  argTypes: {
    inputType: {
      options: ['email', 'text', 'password'],
      control: { type: 'select' },
    },
    TitleType: {
      options: ['Top', 'Bottom','Floating'],
      control: { type: 'select' },
    },
    size: {
      options: ['default', 'small', 'large'],
      control: { type: 'radio' },
    },
    disabled: { control: { type: 'boolean' } },
    readonly: { control: { type: 'boolean' } },
    value: { control: { type: 'text' } },
  },
} as Meta;

const Template: Story<RdsInputComponent> = (args: RdsInputComponent) => ({
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  size: 'default',
  disabled: false,
  readonly: false,
  value: '',
  inputType: 'text',
  placeholder: 'Add placeholder',
  Title: '',
  TitleType: 'text'
};
export const Right_Tooltip = Template.bind({});
Right_Tooltip.args = {
  size: 'default',
  disabled: false,
  readonly: false,
  value: '',
  inputType: 'text',
  placeholder: 'Add placeholder',
  Title: '',
  TitleType: 'text',
  tooltipPlacement:'right',
  tooltipTitle:'Right'
};
export const Left_Tooltip = Template.bind({});
Left_Tooltip.args = {
  size: 'default',
  disabled: false,
  readonly: false,
  value: '',
  inputType: 'text',
  placeholder: 'Add placeholder',
  Title: '',
  TitleType: 'text',
  tooltipPlacement:'left',
  tooltipTitle:'Left'
};
export const Top_Tooltip = Template.bind({});
Top_Tooltip.args = {
  size: 'default',
  disabled: false,
  readonly: false,
  value: '',
  inputType: 'text',
  placeholder: 'Add placeholder',
  Title: '',
  TitleType: 'text',
  tooltipPlacement:'top',
  tooltipTitle:'Top'
};
export const Bottom_Tooltip = Template.bind({});
Bottom_Tooltip.args = {
  size: 'default',
  disabled: false,
  readonly: false,
  value: '',
  inputType: 'text',
  placeholder: 'Add placeholder',
  Title: '',
  TitleType: 'text',
  tooltipPlacement:'bottom',
  tooltipTitle:'Bottom'
};
export const Auto_Tooltip = Template.bind({});
Auto_Tooltip.args = {
  size: 'default',
  disabled: false,
  readonly: false,
  value: '',
  inputType: 'text',
  placeholder: 'Add placeholder',
  Title: '',
  TitleType: 'text',
  tooltipPlacement:'auto',
  tooltipTitle:'Auto'
};
