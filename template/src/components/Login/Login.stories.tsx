import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { Login } from './Login';

storiesOf('components/Login', module).add('Default', () => (
  <Login
    loginPress={() => console.log('Login pressed!')}
    forgotPasswordPress={() => console.log('Forgot password pressed!')}
    registrationPress={() => console.log('Registration pressed!')}
  />
));
