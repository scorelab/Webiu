import React from 'react';

import { SearchBar } from './index';

import 'bootstrap/dist/css/bootstrap.css';

import { action } from "@storybook/addon-actions";

export default {
  title: 'General/SearchBar',
  component: SearchBar,
  argTypes: {
     handleSearch: {control: 'function'},
     input: {control: 'text'},
     placeHolder: {control: 'text'},
     header: {control: 'text'}
  }
};

export const searchbar = (args) => <SearchBar {...args} handleSearch={action("function called")} />

searchbar.args = {
   placeHolder: "Search Items",
   header: "Search Bar"
}