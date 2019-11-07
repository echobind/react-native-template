import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { Login } from './Login';
import { Screen } from '../Screen';
import { colors } from '../../styles';

const ScreenDecorator = storyFn => <Screen padding={10}>{storyFn()}</Screen>;

storiesOf('components/Login', module)
  .addDecorator(ScreenDecorator)
  .add('Default', () => (
    <Login
      loginPress={() => console.log('login pressed')}
      forgotPasswordPress={() => console.log('forgot password pressed')}
      registrationPress={() => console.log('registration pressed')}
    />
  ));
