import React from 'react';

import { Screen } from '../components/Screen';
import { Container } from '../components/Container';
import { Text } from '../components/Text';

export const createFakeScreen = (text, backgroundColor) => () => (
  <Screen forceTopInset backgroundColor={backgroundColor}>
    <Container fill fullWidth centerContent>
      <Text>Tab {text}</Text>
    </Container>
  </Screen>
);
