import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { Text } from '../Text';
import { Screen } from './Screen';

storiesOf('components/Screen', module).add('Default', () => (
  <Screen backgroundColor="backgroundPrimary">
    <Text>{'Content wrapped in a screen'}</Text>
  </Screen>
));
