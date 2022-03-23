import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { RdsSelectListComponent } from './rds-select-list.component';

export default {
  title: 'Elements/Select List',
  component: RdsSelectListComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule],
    }),
  ],
  argTypes: {
    size: {
      options: ['default', 'small', 'large'],
      control: { type: 'radio' },
    },
    disabled: { control: { type: 'boolean' } },
    multiple: { control: { type: 'boolean' } },
    customIcon: { control: { type: 'text' } },
    rows: { control: { type: 'text' } },
    LabelType: {
      options: ['Top', 'Bottom', 'Left', 'Right'],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: Story<RdsSelectListComponent> = (args: RdsSelectListComponent) => ({
  props: args,
  template: `<rds-select-list
    size="default"
    rows="3"
    [disabled]="false"
    [multiple]="false"
    customIcon=""
    [listItems]="listItems"
  >
  </rds-select-list>`,
});

export const basic = Template.bind({});

basic.args = {
  rows: '3',
  Label: '',
  LabelType: 'text',
  size: 'default',
  disabled: false,
  multiple: false,
  customIcon: '',
  listItems: [
    { value: 'India', some: 'value' },
    { value: 'USA' },
    { value: 'Canada' },
  ],
};

const tooltipTemplate: Story<RdsSelectListComponent> = (args: RdsSelectListComponent) => ({
  props: args,
  template: `<div class="row mt-5 ml-5"><div class="col-lg-6"><rds-select-list 
    size="default"
    [disabled]="false"
    [multiple]="false"
    customIcon=""
    [listItems]="listItems"
    [tooltipTitle]="tooltipTitle"
    [tooltipPlacement]="tooltipPlacement"
  >
  </rds-select-list></div></div>`,
});

export const Right_Tooltip = tooltipTemplate.bind({});

Right_Tooltip.args = {
  disabled: false,
  multiple: false,
  customIcon: '',
  tooltipPlacement: 'right',
  tooltipTitle: 'Right',
  listItems: [
    { value: 'India', some: 'value' },
    { value: 'USA' },
    { value: 'Canada' },
  ],
};

export const Left_Tooltip = tooltipTemplate.bind({});

Left_Tooltip.args = {
  rows: '3',
  Label: '',
  LabelType: 'text',
  size: 'default',
  disabled: false,
  multiple: false,
  customIcon: '',
  tooltipPlacement: 'left',
  tooltipTitle: 'Left',
  listItems: [
    { value: 'India', some: 'value' },
    { value: 'USA' },
    { value: 'Canada' },
  ],
};

export const Top_Tooltip = tooltipTemplate.bind({});

Top_Tooltip.args = {
  Label: '',
  LabelType: 'text',
  size: 'default',
  disabled: false,
  multiple: false,
  customIcon: '',
  tooltipPlacement: 'top',
  tooltipTitle: 'Top',
  listItems: [
    { value: 'India', some: 'value' },
    { value: 'USA' },
    { value: 'Canada' },
  ],
};

export const Bottom_Tooltip = tooltipTemplate.bind({});

Bottom_Tooltip.args = {
  Label: '',
  LabelType: 'text',
  size: 'default',
  disabled: false,
  multiple: false,
  customIcon: '',
  tooltipPlacement: 'bottom',
  tooltipTitle: 'Bottom',
  listItems: [
    { value: 'India', some: 'value' },
    { value: 'USA' },
    { value: 'Canada' },
  ],
};

export const Auto_Tooltip = tooltipTemplate.bind({});

Auto_Tooltip.args = {
  Label: '',
  LabelType: 'text',
  size: 'default',
  disabled: false,
  multiple: false,
  customIcon: '',
  tooltipPlacement: 'auto',
  tooltipTitle: 'Auto',
  listItems: [
    { value: 'India', some: 'value' },
    { value: 'USA' },
    { value: 'Canada' },
  ],
};
