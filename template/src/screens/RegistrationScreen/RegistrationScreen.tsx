import styled from '@emotion/native';
import React, { FC } from 'react';
import { ImageBackground, StatusBar, StyleSheet } from 'react-native';

import bgImage from '../../assets/images/background.png';
import { Registration } from '../../components/Registration';
import { Screen } from '../../components/Screen';

const BackgroundImage = styled(ImageBackground)`
  ${StyleSheet.absoluteFillObject};
`;

export const RegistrationScreen: FC<{ navigation: any }> = ({ navigation }) => {
  const createClick = (): void => {
    navigation.navigate('Intro');
  };

  return (
    <BackgroundImage source={bgImage} resizeMode="cover">
      <StatusBar
        translucent
        animated
        backgroundColor="rgba(0, 0, 0, 0.20)"
        barStyle="light-content"
      />
      <Screen testID="registrationScreen" paddingTop={60} margin={20}>
        <Registration createPress={createClick} goBack={(): void => navigation.goBack()} />
      </Screen>
    </BackgroundImage>
  );
};
