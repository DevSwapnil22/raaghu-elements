import { Story, Meta } from '@storybook/angular/types-6-0';
import { RdsTextareaComponent } from './rds-textarea.component';

export default {
    title: 'Elements/Textarea',
    component: RdsTextareaComponent,
    argTypes: {
        disabled: { control: { type: 'boolean' } },
        rows: { control: { type: 'text' } },
        readonly: { control: { type: 'boolean' } },
        value: { control: { type: 'text' } },
    }
} as Meta

const Template: Story<RdsTextareaComponent> = (args: RdsTextareaComponent) => ({
    props: args,
});

export const basic = Template.bind({})
basic.args = {
    disabled: false,
    rows: '3',
    readonly: false,
    label: 'Text area',
    placeholderText: "Add Placeholder",
    floatinginputLabel: ""
}
export const Right_Tooltip = Template.bind({})
Right_Tooltip.args = {
    disabled: false,
    rows: '3',
    readonly: false,
    label: 'Text area',
    placeholderText: "Add Placeholder",
    floatinginputLabel: "",
    tooltipPlacement: 'right',
    tooltipTitle: 'Right'
}
export const Left_Tooltip = Template.bind({})
Left_Tooltip.args = {
    disabled: false,
    rows: '3',
    readonly: false,
    label: 'Text area',
    placeholderText: "Add Placeholder",
    floatinginputLabel: "",
    tooltipPlacement: 'left',
    tooltipTitle: 'left'
}
export const Top_Tooltip = Template.bind({})
Top_Tooltip.args = {
    disabled: false,
    rows: '3',
    readonly: false,
    label: 'Text area',
    placeholderText: "Add Placeholder",
    floatinginputLabel: "",
    tooltipPlacement: 'top',
    tooltipTitle: 'Top'
}
export const Bottom_Tooltip = Template.bind({})
Bottom_Tooltip.args = {
    disabled: false,
    rows: '3',
    readonly: false,
    label: 'Text area',
    placeholderText: "Add Placeholder",
    floatinginputLabel: "",
    tooltipPlacement: 'bottom',
    tooltipTitle: 'Bottom'
}
export const Auto_Tooltip = Template.bind({})
Auto_Tooltip.args = {
    disabled: false,
    rows: '3',
    readonly: false,
    label: 'Text area',
    placeholderText: "Add Placeholder",
    floatinginputLabel: "",
    tooltipPlacement: 'auto',
    tooltipTitle: 'Auto'
}
