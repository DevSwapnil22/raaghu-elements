import { Meta, Story } from "@storybook/angular/types-6-0";
import { RdsIllustrationComponent } from "./rds-illustration.component";

export default {
    title: 'Elements/Illustration',
    component: RdsIllustrationComponent,
    argTypes: {

    },
} as Meta

const Template: Story<RdsIllustrationComponent> = (args: RdsIllustrationComponent) => ({
    props: args,
});

export const Basic = Template.bind({
    
})

Basic.args = {
    label: 'Currently you do not have Webhook Subscriptions'
}

