import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { createFakeScreen } from '../navigation/createFakeScreen';
import { colors } from '../styles';

const Stack = createStackNavigator();

const OnboardingScreen1 = createFakeScreen('Onboarding Screen 1', colors.blue);
const OnboardingScreen2 = createFakeScreen('Onboarding Screen 2', colors.white);

/**
 * Onboarding Nav is shown before a user registers. Typically as a swiper
 */
export const OnboardingNav = (): ReactElement => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Onboarding1">
      <Stack.Screen name="Onboarding1" component={OnboardingScreen1} />
      <Stack.Screen name="Onbaording2" component={OnboardingScreen2} />
    </Stack.Navigator>
  );
};
