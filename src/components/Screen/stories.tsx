import { storiesOf } from '@storybook/react-native';
import * as React from 'react';
import { Screen } from './index';

storiesOf('components/Screen', module)
  .add('Default', () => <Screen />)
  .add('with backgroundColor', () => (
    <Screen backgroundColor="rebeccapurple" />
  ));
