import { Story, Meta } from '@storybook/angular/types-6-0';

import { action } from "@storybook/addon-actions";
import { RdsCheckboxComponent } from './rds-checkbox.component';
export default {
    title: 'Elements/Checkbox',
    component: RdsCheckboxComponent ,
    argTypes: {
         
    },
    excludeStories: /.*Data$/
} as Meta

const Template: Story<RdsCheckboxComponent> = (args: RdsCheckboxComponent) => ({
    props: { 
      ...args,
      onCheck: actionsData.onCheck,
      onUncheck: actionsData.onUncheck
    }
});
export const actionsData = {
  onUncheck: action("onUncheck"),
  onCheck: action("onCheck")
};

export const Basic = Template.bind({})
Basic.args = {
 label:'default checkbox',
 checked:false,
 disabled:false,
 switch:false,
 inline:false,
 state:'checkbox',
 id:"checkboxid",
 withLabel: true,
 isInputGroup: true
}
