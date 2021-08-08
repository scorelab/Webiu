import React from 'react';

import { GithubOrgMembers } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'Github/GithubOrgMembers',
  component: GithubOrgMembers,
  argTypes: {
     orgname: {control: 'text'},
     title: {control: 'text'},
     limit: {control: 'number'},
     auth_token: {control: 'text'},
     showSearchBar: {control: 'boolean'}
  }
};

export const githuborgmembers = (args) => <GithubOrgMembers {...args} />

githuborgmembers.args = {
   orgname: "scorelab",
   title: "GitHub Community of",
   limit: 10,
   auth_token: "sample-token",
   showSearchBar: true
}