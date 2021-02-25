import React, { FC } from 'react';
import { Icon } from 'react-native-elements';
import { BorderProps, ColorProps, FlexProps, SpaceProps } from 'styled-system';

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

type ComponentProps = LoginProps & FlexProps & SpaceProps & BorderProps & ColorProps;

export const Login: FC<ComponentProps> = ({
  loginPress,
  registrationPress,
  forgotPasswordPress,
  ...props
}) => {
  const backgroundSecondary = useColor('textSecondary');

  return (
    <Container
      alignItems={'center'}
      borderRadius={'md'}
      elevation={4}
      overflow="visible"
      padding={4}
      {...props}
    >
      <Text style={{ marginBottom: '10%', marginTop: '10%' }}>Welcome, please sign in.</Text>
      <TextInput
        testID="email-input"
        placeholder="Email"
        accessibilityLabel="Email Address Input"
        icon={<Icon name="envelope" type={'font-awesome'} color={backgroundSecondary} />}
      />
      <TextInput
        testID="password-input"
        placeholder="Password"
        accessibilityLabel="Password Input"
        icon={<Icon name="key" type={'font-awesome'} color={backgroundSecondary} />}
      />
      <Touchable
        testID="forgotpwd-link"
        onPress={(): void => {
          forgotPasswordPress();
        }}
        fullWidth
        alignItems={'flex-end'}
        accessibilityLabel="Forgot Password Button"
        accessbilityRole="button"
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

Login.defaultProps = {
  loginPress: console.log('implement login press'),
  forgotPasswordPress: console.log('implement forgot password press'),
  registrationPress: console.log('implement registration press'),
};
