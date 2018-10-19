import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Screen } from './component';

storiesOf('components/Screen', module)
  .add('Default', () => <Screen />)
  .add('with backgroundColor', () => <Screen backgroundColor="rebeccapurple" />);
