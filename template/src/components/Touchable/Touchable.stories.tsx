import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { Text } from '../Text';
import { Touchable } from './Touchable';

storiesOf('components/Touchable', module).add('Default', () => (
  <Touchable onPress={() => console.log('Touchable pressed!')}>
    <Text>{'Touchable'}</Text>
  </Touchable>
));
