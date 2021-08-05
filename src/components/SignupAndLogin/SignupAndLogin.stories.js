import React from 'react';

import { SignupAndLogin } from './index';

import 'bootstrap/dist/css/bootstrap.css';
import { action } from '@storybook/addon-actions';

export default {
  title: 'General/SignupAndLogin',
  component: SignupAndLogin,
  argTypes: {
     signupMessage: {control: 'text'},
     loginMessage: {control: 'text'},
     handleSignup: {control: 'function'},
     handleLogin: {control: 'function'}
  }
};

export const signupandlogin = (args) => <SignupAndLogin {...args} handleLogin={action("login clicked")} handleSignup={action("signup clicked")} />

signupandlogin.args = {
   signupMessage: "Sign up",
   loginMessage: "Log in"
}