import React from 'react';

import { GithubContributors } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'Github/GithubContributors',
  component: GithubContributors,
  argTypes: {
     projectname: {control: 'text'},
     title: {control: 'text'},
     auth_token: {control: 'text'},
     limit: {control: 'number'},
     showSearchBar: {control: 'boolean'}
  }
};

export const githubcontributors = (args) => <GithubContributors {...args} />

githubcontributors.args = {
   projectname: "scorelab/webiu",
   title: "Contributors of",
   limit: 10,
   auth_token: "sample-token",
   showSearchBar: true
}