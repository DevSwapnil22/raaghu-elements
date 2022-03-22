import { Story, Meta } from '@storybook/angular/types-6-0';
import { RdsDropdownComponent } from './rds-dropdown.component';

export default {
  title: 'Elements/Dropdown',
  component: RdsDropdownComponent,
  argTypes: {
    dropdownStyle: {
      options: [
        'btn-primary',
        'btn-secondary',
        'btn-success',
        'btn-danger',
        'btn-warning',
        'btn-info',
      ],
      control: { type: 'select' },
    },
    size: {
      options: ['default', 'small', 'large'],
      control: { type: 'radio' },
    },
    direction: {
      options: ['Drop-down', 'Drop-up', 'Drop-end', 'Drop-start'],
      control: { type: 'radio' },
    },
    role: {
      options: ['dropdown-button', 'with_split'],
      control: { type: 'radio' },
    }
  },
} as Meta;

const Template: Story<RdsDropdownComponent> = (args: RdsDropdownComponent) => ({
  props: args,
  template: `<rds-dropdown
  [listItems]="listItems"
  label="EXCEL OPERATIONS"
   size="default"
   role= 'dropdown-button'
   dropdownStyle="btn-secondary"
   (click)="onclick($event,item)"
   >
    </rds-dropdown>`,
});

export const basic = Template.bind({});

basic.args = {
  dropdownStyle: 'btn-secondary',
  size: 'default',
  darkDropdown: false,
  listItems: [
    { value: 'Export to excel', some: 'value', id: 1, href: '', icon: 'bi bi-upload' },
    { value: 'Import from excel', some: 'value', id: 2, href: '', icon: 'bi bi-download' },
    { value: 'Click here download sample import file.', some: 'value', id: 3, href: '', icon: '' },
  ],
  label: 'EXCEL OPERATIONS',
  direction: 'Drop-down',
  color: '',
  textColor: '',
  dropdownAlignment: [],
  role: 'dropdown-button',
};

// export const Dropdown_with_split = Template.bind({});

// Dropdown_with_split.args = {
//   dropdownStyle: 'btn-secondary',
//   size: 'default',
//   darkDropdown: false,
//   listItems : [
//     { value: 'Export to excel', some: 'value', id: 1, href: '',icon :'bi bi-upload' },
//     { value: 'import from excel', some: 'value', id: 2,href: '',icon :'bi bi-download' },
//     { value: 'click here download sample import file.', some: 'value', id: 3,href: '',icon :'' },
//   ],
//   label: 'EXCEL OPERATIONS',
//   direction: 'Drop-down',
//   color: '',
//   textColor: '',
//   dropdownAlignment: [],
//   role: 'with_split',
// };
