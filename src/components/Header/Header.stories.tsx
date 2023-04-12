import React from 'react';
import Header from './index';

export default {
  title: 'Header',
  component: Header,
};
const handleMenuClose = () => {
    console.log('Menu closed!')
  }

export const Default = () => <Header onMenuClose={handleMenuClose} />;
