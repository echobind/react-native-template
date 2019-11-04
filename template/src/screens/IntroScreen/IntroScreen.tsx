import React from 'react';
import { ImageBackground, StatusBar, StyleSheet } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import styled from '@emotion/native';

import { Screen } from '../../components/Screen';
import { Text } from '../../components/Text';
import { View } from '../../components/View';
import { colors } from '../../styles';
import bgImage from '../../assets/images/background.png';

const BackgroundImage = styled(ImageBackground)`
  ${StyleSheet.absoluteFillObject};
`;

/**
 * First screen a logged out user sees, welcoming them to the app.
 */
export function IntroScreen(props: NavigationScreenProps) {
  return (
    <BackgroundImage source={bgImage} resizeMode="cover">
      <StatusBar barStyle="light-content" />
      <Screen backgroundColor={colors.transparent} paddingTop={60}>
        <View alignItems="center">
          <Text testID="introScreenText" fontSize={5}>Welcome to the intro Screen!</Text>
        </View>
      </Screen>
    </BackgroundImage>
  );
}
