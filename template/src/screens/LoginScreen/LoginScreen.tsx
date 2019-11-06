import React from 'react';
import { Alert, ImageBackground, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import styled from '@emotion/native';

import { Login } from '../../components/Login';
import bgImage from '../../assets/images/background.png';

const BackgroundImage = styled(ImageBackground)`
  ${StyleSheet.absoluteFillObject};
`;

export function LoginScreen(props: NavigationScreenProps) {
  const loginClick = () => {
    props.navigation.navigate('Intro');
  };

  const registrationClick = () => {
    props.navigation.navigate('Registration');
  };
  const forgotPwdClick = () => {
    Alert.alert('Forgot Pwd Clicked!', 'Further implement screen');
  };

  return (
    <BackgroundImage source={bgImage} resizeMode="cover">
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          margin: 20,
        }}
      >
        <StatusBar
          translucent
          animated
          backgroundColor="rgba(0, 0, 0, 0.20)"
          barStyle="light-content"
        />
        <Login
          loginPress={loginClick}
          registrationPress={registrationClick}
          forgotPasswordPress={forgotPwdClick}
        />
      </SafeAreaView>
    </BackgroundImage>
  );
}
