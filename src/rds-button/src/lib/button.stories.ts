// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { RdsButtonComponent } from './rds-button.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Elements/Button',
  component: RdsButtonComponent,

  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {

    click: { action: 'clicked' },
    color: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      control: { type: 'select' }
    },
    size: {
      options: ['small', 'large', 'medium'],
      control: { type: 'select' }
    }
  }
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<RdsButtonComponent> = (args: RdsButtonComponent) => ({
  props: args,
});

// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/angular/writing-stories/args
// Primary.args = {
//   label: 'Button',
// };

// export const Sec = Template.bind({});
// // More on args: https://storybook.js.org/docs/angular/writing-stories/args
// Primary.args = {
//   label: 'Button',
// };

export const Basic = Template.bind({});
Basic.args = {
  color: 'primary',
  label: 'button',
  block: false,
  size: 'medium'
};

export const Disable = Template.bind({});
Disable.args = {
  label: 'Disable',
  color: 'primary',
  disabled: true,
  size: 'medium'
};

export const Outline = Template.bind({});
Outline.args = {
  outlineButton: true,
  color: 'primary',
  label: 'outline',
  size: 'medium'
};

// export const CloseButton = Template.bind({});
// CloseButton.args = {
//   iconClass: 'bi bi-x-lg',
//   colorType: 'primary',
//   label: '',
//   size: 'medium'
// };

export const With_Icon = Template.bind({});
With_Icon.args = {
  roundedButton: false,
  icon: 'bi bi-pencil-fill',
  color: 'primary',
  label: '',
  size: 'medium'
};

export const Icon_With_label = Template.bind({});
Icon_With_label.args = {
  roundedButton: false,
  icon: 'bi bi-pencil-fill',
  color: 'primary',
  label: 'button',
  size: 'medium'
};
export const Right_Tooltip = Template.bind({});
Right_Tooltip.args = {
  color: 'primary',
  label: 'button',
  block: false,
  size: 'medium',
  tooltipPlacement:'right',
  tooltipTitle:'Right'
};

export const left_Tooltip = Template.bind({});
left_Tooltip.args = {
  color: 'primary',
  label: 'button',
  block: false,
  size: 'medium',
  tooltipPlacement:'left',
  tooltipTitle:'Left'
};
export const top_Tooltip = Template.bind({});
top_Tooltip.args = {
  color: 'primary',
  label: 'button',
  block: false,
  size: 'medium',
  tooltipPlacement:'top',
  tooltipTitle:'Top'
};
export const bottom_Tooltip = Template.bind({});
bottom_Tooltip.args = {
  color: 'primary',
  label: 'button',
  block: false,
  size: 'medium',
  tooltipPlacement:'bottom',
  tooltipTitle:'bottom'
};
export const auto_tooltip = Template.bind({});
auto_tooltip.args = {
  color: 'primary',
  label: 'button',
  block: false,
  size: 'medium',
  tooltipPlacement:'auto',
  tooltipTitle:'Auto'
};

// export const Toggle = Template.bind({});
// Toggle.args = {
//   toggleButton: true,
//   label: 'check button',
//   colorType: 'primary',
// };
