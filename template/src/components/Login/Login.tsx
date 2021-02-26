import React, { FC } from 'react';
import { Icon } from 'react-native-elements';

import { useColor } from '../../theme';
import { Button } from '../Button';
import { Container } from '../Container';
import { Text } from '../Text';
import { TextInput } from '../TextInput';
import { Touchable } from '../Touchable';

interface LoginProps {
  /** the callbacks to be invoked onPress */
  loginPress: () => void;
  registrationPress: () => void;
  forgotPasswordPress: () => void;
}

export const Login: FC<LoginProps> = ({ loginPress, registrationPress, forgotPasswordPress }) => {
  const textSecondary = useColor('textSecondary');

  return (
    <Container alignItems={'center'} padding={5}>
      <Text style={{ marginBottom: '10%', marginTop: '10%' }}>Welcome, please sign in.</Text>
      <TextInput
        testID="email-input"
        placeholder="Email"
        accessibilityLabel="Email Address Input"
        icon={<Icon name="envelope" type={'font-awesome'} color={textSecondary} />}
      />
      <TextInput
        testID="password-input"
        placeholder="Password"
        accessibilityLabel="Password Input"
        icon={<Icon name="key" type={'font-awesome'} color={textSecondary} />}
      />
      <Touchable
        testID="forgotpwd-link"
        onPress={(): void => {
          forgotPasswordPress();
        }}
        alignItems={'flex-end'}
        accessibilityLabel="Forgot Password Button"
      >
        <Text fontSize={1} marginTop={2} color={'blue'}>
          Forgot Password?
        </Text>
      </Touchable>
      <Button
        testID="loginButton"
        marginTop={10}
        onPress={(): void => {
          loginPress();
        }}
        accessibilityLabel="Login Button"
      >
        {'Login'}
      </Button>

      <Container flexDirection={'row'} marginTop={5}>
        <Container
          top={-9}
          flex={1}
          borderBottomWidth={1}
          borderBottomColor={'backgroundSecondary'}
        />
        <Text color={'backgroundSecondary'}>&nbsp; or &nbsp;</Text>
        <Container
          top={-9}
          flex={1}
          borderBottomWidth={1}
          borderBottomColor={'backgroundSecondary'}
        />
      </Container>
      <Button
        testID="registration-button"
        marginTop={5}
        onPress={(): void => {
          registrationPress();
        }}
        accessibilityLabel="Create Account Button"
        variant={'secondary'}
      >
        {'Create Account'}
      </Button>
    </Container>
  );
};
