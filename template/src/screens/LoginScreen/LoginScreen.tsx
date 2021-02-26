import React, { FC } from 'react';
import { Alert } from 'react-native';

import { Login } from '../../components/Login';
import { Screen } from '../../components/Screen';

export const LoginScreen: FC<{ navigation: any }> = ({ navigation }) => {
  const loginClick = (): void => {
    navigation.navigate('Intro');
  };

  const registrationClick = (): void => {
    navigation.navigate('Registration');
  };

  const forgotPwdClick = (): void => {
    Alert.alert('Forgot Pwd Clicked!', 'Further implement screen');
  };

  return (
    <Screen alignItems={'center'} justifyContent={'center'} testID="introScreen">
      <Login
        loginPress={loginClick}
        registrationPress={registrationClick}
        forgotPasswordPress={forgotPwdClick}
      />
    </Screen>
  );
};
