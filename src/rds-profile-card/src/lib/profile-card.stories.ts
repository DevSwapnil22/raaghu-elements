import { Story, Meta } from '@storybook/angular/types-6-0';
import { RdsProfileCardComponent } from './rds-profile-card.component';


export default {
  title: 'Elements/Profile',

  component: RdsProfileCardComponent,
  argTypes: {
    //backgroundColor: { control: 'color' },
    //bodybackGroundColor: { control: 'color' },
    //color: { control: 'color' },
    //width: { control: 'text' },
    //height: { control: 'text' },
    size: {
      options: ['Small', 'Medium', 'Large'],
      control: { type: 'radio' },
    },
  },

} as Meta;

const Template: Story<RdsProfileCardComponent> = (args: RdsProfileCardComponent) => ({
  props: args,
  template: `<rds-profile-card  [header]="header" [body]="body" [Data]="Data"
     [footer]="footer"
      width="28%"
      class="rounded-avatar-center">
     <ng-template #header>
     <div class="banner-image1"><img class="img-responsive" src="https://picsum.photos/seed/picsum/1200/600"></div>
     <img src="https://placekitten.com/300/300" alt="" class="img-avatar">
     </ng-template>
     <ng-template #body>
     <h5 class="custom-title">{{Data.loginTitle}}</h5>
       </ng-template>
     <ng-template #footer>
     <a href="#" class="btn btn-primary mt-3">Edit Profile</a>
     </ng-template>
     </rds-profile-card>`


});


export const loginProfile = Template.bind({});
loginProfile.args = {
  Size: 'Medium',
  Data: {
    loginTitle: "Alex Doe",

  }
};
export const Basic = Template.bind({});
Basic.args = {
  Size: 'Medium',

};
