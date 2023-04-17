import React from 'react';
import { Meta, Story } from '@storybook/react';
import Text, { TextProps } from './index';

export default {
  component: Text,
  title: 'Atoms/Text',
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Lorem ipsum dolor sit amet',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  children: 'Lorem ipsum dolor sit amet',
  color: 'red',
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  children: 'Lorem ipsum dolor sit amet',
  size: '24px',
};

export const CustomWeight = Template.bind({});
CustomWeight.args = {
  children: 'Lorem ipsum dolor sit amet',
  weight: 'bold',
};
