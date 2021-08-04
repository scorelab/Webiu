import React from 'react';

import { ListPagination } from './index';

import 'bootstrap/dist/css/bootstrap.css';

import { action } from "@storybook/addon-actions";

export default {
  title: 'ListPagination',
  component: ListPagination,
  argTypes: {
     pageSize: {control: 'number'},
     total: {control: 'number'}, 
     onChange: {control: 'function'}
  }
};

export const listpagination = (args) => <ListPagination {...args} onChange={action("function called")} />

listpagination.args = {
   pageSize: 8,
   total: 24
}