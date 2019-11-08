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
import { Icon, Input } from 'react-native-elements';
import { Button } from '../Button';
import { Text } from '../Text';
import { TextInput } from '../TextInput';
import { Touchable } from '../Touchable';
import { Container } from '../Container';

import { colors } from '../../styles';

interface RegistrationProps {
  /** the callbacks to be invoked onPress */
  createPress: () => void;
  goBack: () => void;
}

type ComponentProps = RegistrationProps & FlexProps & SpaceProps & BorderProps & ColorProps;

export const Registration: FC<ComponentProps> = ({ createPress, goBack, children, ...props }) => {
  return (
    <Container
      bg={colors.bgGray}
      borderRadius={20}
      height={'85%'}
      elevation={4}
      overflow="visible"
      padding={4}
      shadowColor={colors.gray}
      shadowOffset={{ width: 0, height: 0 }}
      shadowOpacity={0.15}
      shadowRadius={5}
      {...props}
    >
      <Container flex={0.1} fullWidth>
        <Touchable onPress={() => goBack()} fullWidth alignItems="flex-start">
          <Icon name="arrow-back" />
        </Touchable>
      </Container>

      <Container flex={0.9} fullWidth>
        <Text fontSize={32} fontWeight={'bold'} marginBottom={'10%'} marginTop={'5%'}>
          Let's create your{'\n'}account!
        </Text>
        <TextInput
          placeholder="Full name"
          icon={<Icon name="user" type={'font-awesome'} color={colors.lightGray} />}
          marginTop={2}
          borderRadius={5}
          borderColor={colors.lightGray}
        />

        <TextInput
          placeholder="Email"
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

        <Button
          width={'100%'}
          marginTop={40}
          label="Create Account"
          color={colors.orange}
          backgroundColor={colors.white}
          borderRadius={5}
          borderColor={colors.orange}
          onPress={() => {
            createPress();
          }}
        />
      </Container>
    </Container>
  );
};

Registration.defaultProps = {
  createPress: console.log('implement event'),
};
