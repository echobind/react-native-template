import React, { FC } from 'react';

import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { Screen } from '../../components/Screen';
import { Text } from '../../components/Text';

/**
 * First screen a logged out user sees, welcoming them to the app.
 */
export const IntroScreen: FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <Screen alignItems={'center'} justifyContent={'center'} testID="introScreen">
      <Container height={'35%'}>
        <Text testID="introScreenText" fontSize={20}>
          Welcome to the Echobind template app!
        </Text>
        <Button
          testID="login-button"
          onPress={(): void => navigation.navigate('Login')}
          marginTop={4}
        >
          {'Login'}
        </Button>
      </Container>
    </Screen>
  );
};
