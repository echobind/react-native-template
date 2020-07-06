import React, { ReactElement } from 'react';

import { Screen } from '../components/Screen';
import { Container } from '../components/Container';
import { Text } from '../components/Text';

export const createFakeScreen = (screenName, backgroundColor) => (): ReactElement => (
  <Screen forceTopInset backgroundColor={backgroundColor}>
    <Container fill fullWidth centerContent>
      <Text>{screenName}</Text>
    </Container>
  </Screen>
);
