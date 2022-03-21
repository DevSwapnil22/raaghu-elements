// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
// import {AppComponent as RdsAccordianComponent } from './app.component';
import { RdsAccordianComponent } from './rds-accordian.component';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { AccordionItemComponent } from './accordian-item/accordion-item.component';
import { CommonModule } from '@angular/common';

export default {
  title: 'Elements/Accordion',
  component: RdsAccordianComponent,
  decorators: [
    moduleMetadata({
      declarations: [RdsAccordianComponent, AccordionItemComponent],
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    onClose: { action: 'clicked' },
    onShow: { action: 'clicked' },
  },
} as Meta;

const Template: Story<RdsAccordianComponent> = (args: RdsAccordianComponent) => ({
  props: { ...args },
  template: `<rds-accordion></rds-accordion>`,
});
export const Basic: Story<RdsAccordianComponent> = (args) => ({
  props: args,
  template: `
    <rds-accordion>
      <accordion-item title="Section 1 title" (onClose)="onClose($event)" (onShow)="onShow($event)" [expanded]="expand"  [content]="content">
      <ng-template #content>
      <h3>Custom </h3>
      </ng-template>
      </accordion-item>
    </rds-accordion>
      <ng-template #accordion>
        <span>Custom content</span>
      </ng-template>
      
      <rds-accordion>
      <accordion-item title="Section 2 title" (onClose)="onClose($event)" (onShow)="onShow($event)" [expanded]="expand"  [content]="content">
      <ng-template #content>
      <h3>Custom </h3>
      </ng-template>
      </accordion-item>
    </rds-accordion>
      <ng-template #accordion>
        <span>Custom content</span>
      </ng-template>`,
});
Basic.args = {
  expand: true,
};
export const withFlush: Story<RdsAccordianComponent> = (args) => ({
  props: args,
  template: `
    <rds-accordion [flush]= "flush">
      <accordion-item title="Section 1 title" (onClose)="onClose($event)" (onShow)="onShow($event)" [expanded]="expand" [content]="content">
      <ng-template #content>
      this is content updated
      </ng-template>

      </accordion-item>
    </rds-accordion>
    
    <rds-accordion>
      <accordion-item title="Section 2 title" (onClose)="onClose($event)" (onShow)="onShow($event)" [expanded]="expand"  [content]="content">
      <ng-template #content>
      <h3>Custom </h3>
      </ng-template>
      </accordion-item>
    </rds-accordion>
      <ng-template #accordion>
        <span>Custom content</span>
      </ng-template>`,
});
withFlush.args = {
  flush: true,
  expand: false,
};
