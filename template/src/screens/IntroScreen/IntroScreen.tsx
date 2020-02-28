import React, { FC } from 'react';
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
export const IntroScreen: FC<NavigationScreenProps> = ({ navigation }) => {
  return (
    <BackgroundImage source={bgImage} resizeMode="cover">
      <StatusBar barStyle="light-content" />
      <Screen testID="introScreen" backgroundColor={colors.transparent} paddingTop={60}>
        <Container alignItems="center">
          <Text testID="introScreenText" fontSize={5} color={colors.white}>
            Welcome to the intro Screen!
          </Text>
          <Button
            testID="login-button"
            label="Login"
            backgroundColor={colors.primary}
            color={colors.white}
            onPress={() => navigation.navigate('Login')}
            borderRadius={5}
          />
        </Container>
      </Screen>
    </BackgroundImage>
  );
};
