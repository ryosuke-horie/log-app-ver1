import React from 'react';
import { Meta, Story } from '@storybook/react';
import Header, { HeaderProps } from './index';

export default {
  component: Header,
  title: 'Molecules/Header',
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  onMenuClose: () => {},
};
