import styled from '@emotion/native';
import React, { Component, FC } from 'react';
import { ImageBackground, StatusBar, StyleSheet, ViewStyle } from 'react-native';
import backgroundImage from '../../assets/images/background.png';
import { Text } from '../../components/Text';

const Background = styled(ImageBackground)`
  ${StyleSheet.absoluteFillObject};
`;

interface Props {
  style?: ViewStyle;
}

export const LoginScreen: FC<Props> = ({ }) => {
  return (
    <Background source={backgroundImage} resizeMode="cover">
      <StatusBar
        translucent
        animated
        backgroundColor="rgba(0, 0, 0, 0.20)"
        barStyle="light-content"
      />
      <Text testID="introScreenText">Intro Screen!</Text>
    </Background>
  );
}
