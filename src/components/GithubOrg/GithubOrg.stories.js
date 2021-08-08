import React from 'react';

import { GithubOrg } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'Github/GithubOrg',
  component: GithubOrg,
  argTypes: {
     orgname: {control: 'text'},
     title: {control: 'text'},
     limit: {control: 'number'},
     auth_token: {control: 'text'}
  }
};

export const githuborg = (args) => <GithubOrg {...args} />

githuborg.args = {
   orgname: "scorelab",
   title: "GitHub Organization",
   limit: 12,
   auth_token: "sample-token"
}