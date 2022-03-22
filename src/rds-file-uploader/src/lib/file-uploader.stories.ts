import { Story, Meta } from '@storybook/angular/types-6-0';
import { RdsFileUploaderComponent } from './rds-file-uploader.component';

export default {
  title: 'Elements/File Uploader',
  component: RdsFileUploaderComponent,
  argTypes: {
    maxfilesize: { control: { type: 'number' } },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' }
    },
    multipleFiles: { control: { type: 'boolean' } },
    //extension: {
    //  control: {},
    //  options:['png,jpg']

    //}
  }
} as Meta

const Template: Story<RdsFileUploaderComponent> = (args: RdsFileUploaderComponent) => ({
  props: args,
});

export const Basic = Template.bind({})
Basic.args = {
  size: 'medium',
  multipleFiles: false,
  role: 'fileUpload',
  label: 'Upload Files',
}


export const multiple_file_uploader = Template.bind({})
multiple_file_uploader.args = {
  size: 'medium',
  multipleFiles: true,
  role: 'fileUpload',
  label: 'Upload Files',
  extensions: 'png, jpg, doc, ,pdf, ppt'
}
