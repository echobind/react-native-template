import React from 'react';
import { ImageBackground, StatusBar, StyleSheet } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import styled from '@emotion/native';

import { Button } from '../../components/Button';
import { Screen } from '../../components/Screen';
import { Text } from '../../components/Text';
import { Container } from '../../components/Container';
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
        <Container alignItems="center">
          <Text testID="introScreenText" fontSize={5} color={colors.white}>
            Welcome to the intro Screen!
          </Text>
          <Button
            label="Login"
            backgroundColor={colors.primary}
            color={colors.white}
            onPress={() => props.navigation.navigate('Login')}
            borderRadius={5}
          />
        </Container>
      </Screen>
    </BackgroundImage>
  );
}
