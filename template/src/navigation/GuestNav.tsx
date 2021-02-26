import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { IntroScreen } from '../screens/IntroScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { RegistrationScreen } from '../screens/RegistrationScreen';

const Stack = createStackNavigator();

/**
 * Guest nav typically consists of screens where the user is logged out:
 *   Registration
 *   Login
 *   Forgot Password
 */
export const GuestNav = (): ReactElement => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Intro">
      <Stack.Screen name="Intro" component={IntroScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
    </Stack.Navigator>
  );
};
