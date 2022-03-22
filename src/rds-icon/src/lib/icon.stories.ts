import { Meta, Story } from "@storybook/angular/types-6-0";
import { RdsIconComponent } from "./rds-icon.component";

export default {
    title: 'Elements/Icon',
    component: RdsIconComponent,
    argTypes: {

    },
} as Meta

const Template: Story<RdsIconComponent> = (args: RdsIconComponent) => ({
    props: args,
});

export const Basic = Template.bind({})
Basic.args = {

  icon: 'calendar-date',
  size:15
}
