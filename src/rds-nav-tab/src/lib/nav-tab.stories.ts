import { Story, Meta } from '@storybook/angular/types-6-0';
import { RdsNavTabComponent } from './rds-nav-tab.component';

export default {
    title: 'Elements/Navtabs',
    component: RdsNavTabComponent,
    argTypes: {
    },
} as Meta;

const Template: Story<RdsNavTabComponent> = (args: RdsNavTabComponent) => ({
    props: args,
});
export const Basic: Story<RdsNavTabComponent> = (args) => ({
    props: args,
    template:
        `<div class="col-md-12">
        <rds-nav-tab 
        [navtabsItems]="navtabsItems"
        horizontalAlignment="start"
        [verticalAlignment]="false"
        [pills]="false"
        [tabs]="false"
        [fill]="false"
        [justified]="false"
        [flex]="false"
        ></rds-nav-tab>
        <div naveContent class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <p>This is some placeholder content the Profile tab's associated content. Clicking another tab will toggle the visibility of this one for the next.<br>
             The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other</p></div>
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">This is some placeholder content the Home tab's associated content. Clicking another tab will toggle the visibility of this one for the next.<br>
             The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.</div>
            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">Tab3</div>
            <div class="tab-pane fade" id="nav-deabled" role="tabpanel" aria-labelledby="nav-contact-tab">test</div>
          </div>
        </div>
    `,

});
Basic.args = {
    verticalAlignment: false,
    navtabsItems: [
        { label: 'Active', tablink: '#nav-home', ariacontrols: 'nav-home' },
        { label: 'Link', tablink: '#nav-profile', ariacontrols: 'nav-profile' },
        { label: 'Link', tablink: '#nav-contact', ariacontrols: 'nav-contact' },
        { label: 'Disabled', tablink: '#nav-deabled', disabled: "true" },
    ]
}
export const Tabs: Story<RdsNavTabComponent> = (args) => ({
    props: args,
    template:
        `<div class="col-md-12">
        <rds-nav-tab 
        [navtabsItems]="navtabsItems"
        horizontalAlignment="start"
        [verticalAlignment]="false"
        [pills]="false"
        [tabs]="true"
        [fill]="false"
        [justified]="false"
        [flex]="false"
        ></rds-nav-tab>
        <div naveContent class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <p>This is some placeholder content the Profile tab's associated content. Clicking another tab will toggle the visibility of this one for the next.<br>
             The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other</p></div>
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">This is some placeholder content the Home tab's associated content. Clicking another tab will toggle the visibility of this one for the next.<br>
             The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.</div>
            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">Tab3</div>
            <div class="tab-pane fade" id="nav-deabled" role="tabpanel" aria-labelledby="nav-contact-tab">test</div>
          </div>
        </div>
    `,

});
Tabs.args = {
    tabs: true,
    navtabsItems: [
        { label: 'Active', tablink: '#nav-home', ariacontrols: 'nav-home' },
        { label: 'Link', tablink: '#nav-profile', ariacontrols: 'nav-profile' },
        { label: 'Link', tablink: '#nav-contact', ariacontrols: 'nav-contact' },
        { label: 'Disabled', tablink: '#nav-deabled', disabled: "true" },
    ]
}
export const Pills: Story<RdsNavTabComponent> = (args) => ({
    props: args,
    template:
        `<div class="col-md-12">
        <rds-nav-tab 
        [navtabsItems]="navtabsItems"
        horizontalAlignment="start"
        [verticalAlignment]="false"
        [pills]="true"
        [tabs]="false"
        [fill]="false"
        [justified]="false"
        [flex]="false"
        ></rds-nav-tab>
        <div naveContent class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <p>This is some placeholder content the Profile tab's associated content. Clicking another tab will toggle the visibility of this one for the next.<br>
             The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other</p></div>
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">This is some placeholder content the Home tab's associated content. Clicking another tab will toggle the visibility of this one for the next.<br>
             The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.</div>
            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">Tab3</div>
            <div class="tab-pane fade" id="nav-deabled" role="tabpanel" aria-labelledby="nav-contact-tab">test</div>
          </div>
        </div>
    `,

});
Pills.args = {
    pills: true,
    fill: false,
    justified: false,
    flex: false,
    navtabsItems: [
        { label: 'Active', tablink: '#nav-home', ariacontrols: 'nav-home' },
        { label: 'Link', tablink: '#nav-profile', ariacontrols: 'nav-profile' },
        { label: 'Link', tablink: '#nav-contact', ariacontrols: 'nav-contact' },
        { label: 'Disabled', tablink: '#nav-deabled', disabled: "true" },
    ]
}






