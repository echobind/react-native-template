import React from 'react';
import { Screen } from '../components/Screen';
import { Text } from '../components/Text';

export const createFakeScreen = (text, backgroundColor) => () => (
  <Screen backgroundColor={backgroundColor}>
    <Text>Tab {text}</Text>
  </Screen>
);
