import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RdsDatepickerComponent } from './rds-datepicker.component';

export default {
  title: 'Elements/Datepicker',
  component: RdsDatepickerComponent,
  decorators: [
    moduleMetadata({
      imports: [BsDatepickerModule.forRoot(), BrowserAnimationsModule],
    }),
  ],
  argTypes: {
  },
} as Meta;

const Template: Story<RdsDatepickerComponent> = (args: RdsDatepickerComponent) => ({
  props: args,
});
export const Basic = Template.bind({});

Basic.args = {
  Label: 'Date Range',
}
