import { Story, Meta } from '@storybook/angular/types-6-0';
import { RdsValidationComponent } from './rds-validation.component';

export default {
    title: 'Elements/Validation',
    component: RdsValidationComponent,
    argTypes: {

    }
} as Meta

const Template: Story<RdsValidationComponent> = (args: RdsValidationComponent) => ({
    props: args,
});

export const validation = Template.bind({})
