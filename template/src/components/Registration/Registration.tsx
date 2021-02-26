import React, { FC } from 'react';
import { Icon } from 'react-native-elements';

import { useColor } from '../../theme';
import { Button } from '../Button';
import { Container } from '../Container';
import { Text } from '../Text';
import { TextInput } from '../TextInput';

interface RegistrationProps {
  /** the callbacks to be invoked onPress */
  createPress: () => void;
}

export const Registration: FC<RegistrationProps> = ({ createPress }) => {
  const textSecondary = useColor('textSecondary');

  return (
    <Container alignItems={'center'} padding={5} width={'100%'}>
      <Text fontSize={28} fontWeight={'bold'} style={{ marginBottom: '10%', marginTop: '10%' }}>
        Let's create your account!
      </Text>
      <TextInput
        placeholder="Full name"
        icon={<Icon name="user" type={'font-awesome'} color={textSecondary} />}
      />
      <TextInput
        placeholder="Email"
        icon={<Icon name="envelope" type={'font-awesome'} color={textSecondary} />}
      />
      <TextInput
        placeholder="Password"
        icon={<Icon name="key" type={'font-awesome'} color={textSecondary} />}
      />
      <Button
        marginTop={10}
        onPress={(): void => {
          createPress();
        }}
      >
        {'Create Account'}
      </Button>
    </Container>
  );
};
