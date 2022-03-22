import { FormsModule } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { RdsDropdownlistComponent } from './rds-dropdownlist.component';

export default {

  title: 'Elements/Dropdown List',
  component: RdsDropdownlistComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule],
    }),
  ],
  argTypes: {

    varient: {
      options: ['Primary', 'Secondary', 'Success', 'Danger', 'Info'],
      control: { type: 'select' }
    },
    size: {
      options: ['default', 'small', 'large'],
      control: { type: 'radio' }
    },

  },
} as Meta;

const Template: Story<RdsDropdownlistComponent> = (args: RdsDropdownlistComponent) => ({

  props: args,
});


export const Basic: Story<RdsDropdownlistComponent> = (args) => ({
  props: args,
  template:
    `<rds-dropdownlist [DropdownItems]="DropdownItems" [listItems]="listItems"  size="default"  varient="btn-secondary">
    <ng-template #DropdownItems let-val let-index = "index"> 
    <li [class.active]="index === 1">
    <div class="d-flex align-items-center bind-center-div1 group-list">
        <input type="checkbox" *ngIf="multiSelect"/>
        <img class="drop-round-img bind-avtar" src="https://placekitten.com/50/50">
        <span class="mr-auto">{{val.some}}<br></span>
    </div>
    </li>
    </ng-template>
    </rds-dropdownlist>`
});
Basic.args = {
  placeholder: 'Filter',
  size: 'default',
  multiSelect: false,
  varient: 'btn-secondary',
  listItems: [{ value: 'India', some: 'value 1', status: 'Billable', isSelected: false }, { value: 'USA', some: 'value 2', status: 'Non-Blillable', isSelected: false }, { value: 'Canada', some: 'value 3', status: 'Non-Blillable', isSelected: false }],
};
