import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { RdsBadgeComponent } from './rds-badge.component';

export default {

  title: 'Elements/Badge',

  component: RdsBadgeComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],

  argTypes: {
    color: { control: 'color' },
    BackgroundColor:{control:'color'},
    size: {
      options: ['xlg', 'lg', 'mid', 'small', 'smaller', 'smallest'],
      control: { type: 'select' }
    },

  },

} as Meta;

const Template: Story<RdsBadgeComponent> = (args: RdsBadgeComponent) => ({
  props: args,
});
export const Basic: Story<RdsBadgeComponent> = (args) => ({
  props: args,
});
Basic.args = {
  BackgroundColor:"#C5F8CF",
  color:"#16BE36",
  size: 'small',
  label: 'new'
};

export const BadgeButton: Story<RdsBadgeComponent> = (args) => ({
  props: args,
  template:
    `<button type="button" class="btn btn-primary">
      <span right>Notification
      <rds-badge
      size="smallest"
      Types="light"
      label="9"
      [pillBadges]="false"
      BackgroundColor="#C5F8CF"
      color="#16BE36"
      ></rds-badge></span>
      </button>
    
  `,

});
BadgeButton.args = {
  size: 'smallest',

};
export const BadgePositioned: Story<RdsBadgeComponent> = (args) => ({
  props: args,
  template:
    `<button type="button" class="btn btn-light position-relative">
      new<span right>
      <rds-badge
      size="smallest"
      BackgroundColor="#C5F8CF"
      label="99+"
      [pillBadges]="true"
      color="#ffffff"
      [positioned]="true"
      ></rds-badge></span>
      </button>
    
  `,

});
BadgePositioned.args = {
  size: 'smallest',
  positioned: true,
  label: '99+'
};

export const BadgeIcon: Story<RdsBadgeComponent> = (args) => ({
  props: args,
  template:
    `<button
      class="position-relative btn btn-ligh">
   <svg right xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-dots" viewBox="0 0 16 16">
    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
    <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
    </svg>
    <rds-badge right
    size="smallest"
    BackgroundColor="#C5F8CF"
    label="9"
    [pillBadges]="false"
    color="#ffffff"
    [positioned]="true"
    [iconBadge] ="true"
    ></rds-badge>
    </button>
    
  `,

});
BadgeIcon.args = {

};

