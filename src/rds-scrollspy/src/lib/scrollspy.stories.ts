import { CommonModule } from "@angular/common";
import { moduleMetadata } from "@storybook/angular";
import { Meta, Story } from "@storybook/angular/types-6-0";
import { ScrollspyItemComponent } from "./scrollspy-item/scrollspy-item.component";
import { RdsScrollspyComponent } from "./rds-scrollspy.component";

export default {
    title: 'Elements/Scrollspy',
    component: RdsScrollspyComponent,
    decorators: [
        moduleMetadata({
          declarations: [RdsScrollspyComponent, ScrollspyItemComponent],
          imports: [CommonModule],
        }),
      ],
    argTypes: {

    },
} as Meta

const Template: Story<RdsScrollspyComponent> = (args: RdsScrollspyComponent) => ({
    props: args,
    template: `<rds-scrollspy></rds-scrollspy>`,
});

export const Basic: Story<RdsScrollspyComponent> = (args) =>  ({
props: { ...args },
template: `
<div id="scrollspy" class="container">
<a type="button" href="#scrollspyHeading1" target="_self" class="btn btn-primary m-1">First Header</a>
    <a type="button" href="#scrollspyHeading2" target="_self" class="btn btn-primary m-1">Second Header</a>
    <a type="button" href="#scrollspyHeading3" target="_self" class="btn btn-primary m-1">Third Header</a>
</div>
  <rds-scrollspy scrollId = "scrollspy">
  <scrollspy-item scrollItemId="scrollspyHeading1" header = "First header">
  <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting</p>
  <div class="d-flex justify-content-end">
  <a href="#scrollspy" target="_self" class="m-1">Go Top</a>
  </div>
  </scrollspy-item>
  <scrollspy-item scrollItemId="scrollspyHeading2" header = "Second header">
  <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting</p>
  <div class="d-flex justify-content-end">
  <a href="#scrollspy" target="_self" class="m-1">Go Top</a>
  </div>
  </scrollspy-item>
  <scrollspy-item scrollItemId="scrollspyHeading3" header = "Third header">
  <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting</p>
  <div class="d-flex justify-content-end">
  <a href="#scrollspy" target="_self" class="m-1">Go Top</a>
  </div>
  </scrollspy-item>
  </rds-scrollspy>`,
});