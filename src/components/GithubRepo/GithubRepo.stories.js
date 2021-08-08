import React from 'react';

import { GithubRepo } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'Github/GithubRepo',
  component: GithubRepo,
  argTypes: {
     reponame: {control: 'text'},
     title: {control: 'text'},
     auth_token: {control: 'text'}
  }
};

export const githubrepo = (args) => <GithubRepo {...args} />

githubrepo.args = {
   reponame: "scorelab/webiu",
   title: "GitHub Repository",
   auth_token: "sample-token"
}