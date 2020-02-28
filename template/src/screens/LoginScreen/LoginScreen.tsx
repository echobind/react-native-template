import React, { FC } from 'react';
import { Alert, ImageBackground, StatusBar, StyleSheet } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import styled from '@emotion/native';

import { Login } from '../../components/Login';
import { Screen } from '../../components/Screen';
import bgImage from '../../assets/images/background.png';
import { colors } from '../../styles';

const BackgroundImage = styled(ImageBackground)`
  ${StyleSheet.absoluteFillObject};
`;
export const LoginScreen: FC<NavigationScreenProps> = ({ navigation }) => {
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
    <BackgroundImage source={bgImage} resizeMode="cover">
      <StatusBar
        translucent
        animated
        backgroundColor="rgba(0, 0, 0, 0.20)"
        barStyle="light-content"
      />
      <Screen testID="loginScreen" backgroundColor={colors.transparent} paddingTop={60} margin={20}>

        <Login
          loginPress={loginClick}
          registrationPress={registrationClick}
          forgotPasswordPress={forgotPwdClick}
        />
      </Screen>
    </BackgroundImage>
  );
};
