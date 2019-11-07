import React, { FC } from 'react';
import {
  color,
  space,
  layout,
  flexbox,
  borders,
  BorderProps,
  ColorProps,
  SpaceProps,
  FlexProps,
} from 'styled-system';
import styled from '@emotion/native';
import { Icon } from 'react-native-elements';
import { Button } from '../Button';
import { Text } from '../Text';
import { TextInput } from '../TextInput';
import { Touchable } from '../Touchable';
import { Container } from '../Container';

import { colors } from '../../styles';
import { Alert } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

interface LoginProps {
  /** the callbacks to be invoked onPress */
  loginPress: () => void;
  registrationPress: () => void;
  forgotPasswordPress: () => void;
}

type ComponentProps = LoginProps & FlexProps & SpaceProps & BorderProps & ColorProps;

const Divider = styled(Container)`
  ${color}
  ${borders}
  ${space}
  ${layout}
  ${flexbox}
`;
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
        placeholder="User name"
        icon={<Icon name="envelope" type={'font-awesome'} color={colors.lightGray} />}
        marginTop={2}
        borderRadius={5}
        borderColor={colors.lightGray}
      />
      <TextInput
        placeholder="Password"
        icon={<Icon name="key" type={'font-awesome'} color={colors.lightGray} />}
        marginTop={2}
        borderRadius={5}
        borderColor={colors.lightGray}
      />
      <Touchable
        onPress={() => {
          forgotPasswordPress();
        }}
        fullWidth
        alignItems={'flex-end'}
      >
        <Text fontSize={1} marginTop={2} color={colors.blue}>
          Forgot Password?
        </Text>
      </Touchable>
      <Button
        width={'100%'}
        marginTop={40}
        label="Login"
        color={colors.white}
        borderRadius={5}
        onPress={() => {
          loginPress();
        }}
      />

      <Divider flexDirection={'row'} marginTop={20}>
        <Container top={-9} flex={1} borderBottomWidth={1} borderBottomColor={colors.gray} />
        <Text color={colors.gray}>&nbsp; or &nbsp;</Text>
        <Container top={-9} flex={1} borderBottomWidth={1} borderBottomColor={colors.gray} />
      </Divider>
      <Button
        width={'100%'}
        marginTop={20}
        label={'Create Account'}
        borderRadius={5}
        backgroundColor={colors.white}
        color={colors.gray}
        borderColor={colors.gray}
        elevation={6}
        borderWidth={.5}
        onPress={() => {
          registrationPress();
        }}
      />
    </Container>
  );
};

Login.defaultProps = {
  loginPress: console.log('implement login press'),
  forgotPasswordPress: console.log('implement forgot password press'),
  registrationPress: console.log('implement registration press'),
};
