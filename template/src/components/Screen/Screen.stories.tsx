import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { Screen } from './Screen';

storiesOf('components/Screen', module)
  .add('Default', () => <Screen />)
  .add('with backgroundColor', () => <Screen backgroundColor="rebeccapurple" />);
