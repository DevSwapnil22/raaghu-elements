import { Story, Meta } from '@storybook/angular/types-6-0';
import { RdsCardComponent } from './rds-card.component';

export default {
  title: 'Elements/Card',
  component: RdsCardComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
    bodybackGroundColor: { control: 'color' },
    color: { control: 'color' },
    width: { control: 'text' },
    height: { control: 'text' },
  },
} as Meta;

const Template: Story<RdsCardComponent> = (args: RdsCardComponent) => ({
  props: args,
  template: `<rds-card  [header]="header" [body]="body" [backgroundColor]="backgroundColor" [bodybackGroundColor]="'#DFE5F6'"
   [footer]="footer" [Paddig]="10" [Data]="Data"
    [width]="width" class="rounded-avatar-basic">
   <ng-template #header>
   <div class="col-md-12"  style="text-align: center;">
   <img src="https://picsum.photos/seed/picsum/1200/600" class="card-img-top" alt="">
    </div>
   </ng-template>
   <ng-template #body>
  <h5 class="custom-title">{{Data.headerTitle}}</h5>
   <p class="custom-desc">{{Data.cardDescription}}</p>
    </ng-template>
   <ng-template #footer>
   <a href="#" class="btn btn-primary mt-3">Go somewhere</a>
   </ng-template>
   </rds-card>`
});

// const teletext = "some text"
export const Basic = Template.bind({});
Basic.args = {
  width: '30%',
  backgroundColor: '#DFE5F6',
  Data: {
    headerTitle: "Header Title",
    cardDescription: "Some quick example text to build on the card title and make up the bulk of the card\'s content"

  }
};

const Avatar: Story<RdsCardComponent> = (args: RdsCardComponent) => ({
  props: args,
  template: `<rds-card  [header]="header" [body]="body" [Data]="Data"
   [footer]="footer"
    width="30%"
    class="rounded-avatar-left">
   <ng-template #header>
   <div class="banner-image1"><img class="img-responsive" src="https://picsum.photos/seed/picsum/1200/600"></div>
   <img src="https://placekitten.com/300/300" alt="" class="img-avatar-left">
   </ng-template>
   <ng-template #body>
   <h5 class="custom-title">{{Data.headerTitle}}</h5>
    <p class="custom-desc">{{Data.cardDescription}}</p>
     </ng-template>
   <ng-template #footer>
   <a href="#" class="btn btn-primary mt-3">Go somewhere</a>
   </ng-template>  
   </rds-card>`
});

// const teletext = "some text"
export const withAvatar = Avatar.bind({});
withAvatar.args = {
  width: '30%',
  Data: {
    headerTitle: "Header Title",
    cardDescription: "Some quick example text to build on the card title and make up the bulk of the card\'s content"

  }
};
const Avatarpos: Story<RdsCardComponent> = (args: RdsCardComponent) => ({
  props: args,
  template: `<rds-card  [header]="header" [body]="body" [Data]="Data"
     [footer]="footer"
      width="28%"
      class="rounded-avatar-center">
     <ng-template #header>
     <div class="banner-image1"><img class="img-responsive" src="https://picsum.photos/seed/picsum/1200/600"></div>
     <img src="https://placekitten.com/300/300" alt="" class="img-avatar">
     </ng-template>  
     <ng-template #body>
     <h5 class="custom-title">{{Data.headerTitle}}</h5>
      <p class="custom-desc">{{Data.cardDescription}}</p>
       </ng-template>
     <ng-template #footer>
     <a href="#" class="btn btn-primary mt-3">Go somewhere</a>  
     </ng-template>    
     </rds-card>`
});

// const teletext = "some text"
export const withAvatarcenter = Avatarpos.bind({});
withAvatarcenter.args = {
  width: '30%',
  Data: {
    headerTitle: "Header Title",
    cardDescription: "Some quick example text to build on the card title and make up the bulk of the card\'s content"

  }
};