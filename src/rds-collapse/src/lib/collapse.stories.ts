// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { RdsCollapseComponent } from './rds-collapse.component';

export default {
    title: 'Elements/Collapse',
    component: RdsCollapseComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
        borderColor: { control: 'color' },
        Color: { control: 'color' },
        button_backgroundColor: { control: 'color' },
        button_borderColor: { control: 'color' },
        button_Color: { control: 'color' },
    },
} as Meta;

const Template: Story<RdsCollapseComponent> = (args: RdsCollapseComponent) => ({
    props: args,
});

export const Basic: Story<RdsCollapseComponent> = (args) => ({
    props: args,
    template: `
    <rds-collapse
    collapseId="collapseExample4"
    label="collapse button"
    content="placeholder content for collapse. Its hidden by default and shown when triggered."
    (toggle)="toggle($event)"
    (onClose)="onClose($event)"
    (onShow)="onShow($event)"
    ></rds-collapse>`
});

export const Horizontal: Story<RdsCollapseComponent> = (args) => ({
    props: args,
    template: `
  <rds-collapse
  collapseId="collapseExample4"
  label = "button"
  [Horizontal]="true"
  content="placeholder content for a horizontal collapse. Its hidden by default and shown when triggered."
  (toggle)="toggle($event)"
  (onClose)="onClose($event)"
  (onShow)="onShow($event)"
  ></rds-collapse>
  `,
});
