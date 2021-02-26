import React, { FC } from 'react';

import { Registration } from '../../components/Registration';
import { Screen } from '../../components/Screen';

export const RegistrationScreen: FC<{ navigation: any }> = ({ navigation }) => {
  const createClick = (): void => {
    navigation.navigate('Intro');
  };

  return (
    <Screen testID="registrationScreen" alignItems={'center'} justifyContent={'center'}>
      <Registration createPress={createClick} goBack={navigation.goBack} />
    </Screen>
  );
};
