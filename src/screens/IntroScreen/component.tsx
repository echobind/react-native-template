import React, { Component } from 'react';
import { ImageBackground, StatusBar, StyleSheet, ViewStyle } from 'react-native';
import backgroundImage from '../../assets/images/background.png';
import { Text } from '../../components/Text';
import styled from '@emotion/native';

const Background = styled(ImageBackground)`
  ${StyleSheet.absoluteFillObject};
`;

interface Props {
  style?: ViewStyle;
}

export class IntroScreen extends Component<Props> {
  public render() {
    return (
      <Background source={backgroundImage} resizeMode="cover">
        <StatusBar
          translucent
          animated
          backgroundColor="rgba(0, 0, 0, 0.20)"
          barStyle="light-content"
        />
        <Text>Intro Screen!</Text>
      </Background>
    );
  }
}
