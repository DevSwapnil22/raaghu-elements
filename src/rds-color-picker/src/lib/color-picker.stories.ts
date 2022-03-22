import { Story, Meta } from '@storybook/angular/types-6-0';
import { RdsColorPickerComponent } from './rds-color-picker.component';

export default {
    title: 'Elements/Color Picker',
    component: RdsColorPickerComponent,
} as Meta

const Template: Story<RdsColorPickerComponent> = (args: RdsColorPickerComponent) => ({
    props: args,
});

export const Basic = Template.bind({})
Basic.args = {
    title: 'Pick your color',
    label: 'Color picker',
    value: '#800080',
    disabled: false
}
