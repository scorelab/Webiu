import React from 'react';

import { GithubUser } from './index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'Github/GithubUser',
  component: GithubUser,
  argTypes: {
     user: {control: 'text'},
     title: {control: 'text'},
     auth_token: {control: 'text'}
  }
};

export const githubuser = (args) => <GithubUser {...args} />

githubuser.args = {
   username: "grumpyyash",
   title: "GitHub Profile",
   auth_token: "sample-token"
}