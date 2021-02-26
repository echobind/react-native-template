import React, { ReactElement } from 'react';

import { Container } from '../components/Container';
import { Screen } from '../components/Screen';
import { Text } from '../components/Text';

export const createFakeScreen = (screenName, backgroundColor) => (): ReactElement => {
  return (
    <Screen backgroundColor={backgroundColor}>
      <Container
        alignItems={'center'}
        padding={5}
        width={'100%'}
        height={'100%'}
        justifyContent={'center'}
      >
        <Text variant="bold" fontSize={26}>
          {screenName}
        </Text>
      </Container>
    </Screen>
  );
};
