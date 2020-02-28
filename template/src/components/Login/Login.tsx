import React, { FC } from 'react';
import { BorderProps, ColorProps, SpaceProps, FlexProps } from 'styled-system';
import { Icon } from 'react-native-elements';
import { Button } from '../Button';
import { Text } from '../Text';
import { TextInput } from '../TextInput';
import { Touchable } from '../Touchable';
import { Container } from '../Container';

import { colors } from '../../styles';

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
  children,
  ...props
}) => {
  return (
    <Container
      bg={colors.bgGray}
      borderRadius={20}
      elevation={4}
      overflow="visible"
      padding={4}
      shadowColor={colors.gray}
      shadowOffset={{ width: 0, height: 0 }}
      shadowOpacity={0.15}
      shadowRadius={5}
      {...props}
    >
      <Text fontSize={32} fontWeight={'bold'} marginBottom={'10%'} marginTop={'10%'}>
        Welcome, please {'\n'}sign in.
      </Text>
      <TextInput
        testID="email-input"
        placeholder="Email"
        accessibilityLabel="Email Address Input"
        icon={<Icon name="envelope" type={'font-awesome'} color={colors.lightGray} />}
        marginTop={2}
        borderRadius={5}
        borderColor={colors.lightGray}
      />
      <TextInput
        testID="password-input"
        placeholder="Password"
        accessibilityLabel="Password Input"
        icon={<Icon name="key" type={'font-awesome'} color={colors.lightGray} />}
        marginTop={2}
        borderRadius={5}
        borderColor={colors.lightGray}
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
        <Text fontSize={1} marginTop={2} color={colors.blue}>
          Forgot Password?
        </Text>
      </Touchable>
      <Button
        testID="loginButton"
        width={'100%'}
        marginTop={40}
        label="Login"
        color={colors.white}
        borderRadius={5}
        onPress={(): void => {
          loginPress();
        }}
        accessibilityLabel="Login Button"
      />

      <Container flexDirection={'row'} marginTop={20}>
        <Container top={-9} flex={1} borderBottomWidth={1} borderBottomColor={colors.gray} />
        <Text color={colors.gray}>&nbsp; or &nbsp;</Text>
        <Container top={-9} flex={1} borderBottomWidth={1} borderBottomColor={colors.gray} />
      </Container>
      <Button
        testID="registration-button"
        width={'100%'}
        marginTop={20}
        label={'Create Account'}
        borderRadius={5}
        backgroundColor={colors.white}
        color={colors.gray}
        borderColor={colors.lightGray}
        elevation={6}
        borderWidth={1}
        onPress={(): void => {
          registrationPress();
        }}
        accessibilityLabel="Create Account Button"
      />
    </Container>
  );
};

Login.defaultProps = {
  loginPress: console.log('implement login press'),
  forgotPasswordPress: console.log('implement forgot password press'),
  registrationPress: console.log('implement registration press'),
};
