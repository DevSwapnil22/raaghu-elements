import { Story, Meta } from '@storybook/angular/types-6-0';
import { RdsTileComponent } from './rds-tile.component';

export default {
  title: 'Elements/Tile',

  component: RdsTileComponent,
} as Meta;

const Template: Story<RdsTileComponent> = (args: RdsTileComponent) => ({});

export const basic = Template.bind({});
