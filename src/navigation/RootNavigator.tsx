import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import { RegistrationScreen } from '../../src/screens/RegistrationScreen';
import { Screen } from '../components/Screen';
import { Text } from '../components/Text';
import { IntroScreen } from '../screens/IntroScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { colors } from '../styles';

const createFakeScreen = (text, backgroundColor) => () => (
  <Screen backgroundColor={backgroundColor}>
    <Text>Tab {text}</Text>
  </Screen>
);

/**
 * Base Nav contains the tab navigation screen at the bottom of the login stack.
 */
const HomeNav = createBottomTabNavigator(
  {
    Tab1: {
      screen: createFakeScreen('Tab 1', colors.black),
      navigationOptions: {
        tabBarTestID: 'tab1',
        // tabBarIcon: ({ tintColor }) => <Icon name="search" size={32} color={tintColor} />,
      },
    },
    Tab2: {
      screen: createFakeScreen('Tab 2', colors.gray),
      navigationOptions: {
        tabBarTestID: 'tab2',
        // tabBarIcon: ({ tintColor }) => <Icon name="search" size={32} color={tintColor} />,
      },
    },
  },
  {
    initialRouteName: 'Tab1',
    headerMode: 'none',
    tabBarOptions: {
      activeTintColor: colors.white,
      inactiveTintColor: colors.lightGray,
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: colors.blue,
        paddingVertical: 10,
        height: 70,
      },
    },
  },
);

/**
 * AppNav is the primary stack visible to a logged-in user.
 */
const AppNav = createStackNavigator(
  {
    Home: {
      screen: HomeNav,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  },
);

/**
 * Onboarding Stack Nav is shown before a user registers
 */
const OnboardingStack = createStackNavigator(
  {
    Onboarding1: {
      screen: createFakeScreen('Onboarding 1', colors.blue),
    },
    Onboarding2: {
      screen: createFakeScreen('Onboarding 2', colors.white),
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Onboarding1',
  },
);

/**
 * Guest nav consists of screens where the user is logged out:
 *   Onboarding
 *   Registration
 *   Login
 *   Forgot Password
 */
const GuestNav = createStackNavigator(
  {
    Intro: {
      screen: IntroScreen,
      navigationOptions: {
        header: null,
      },
    },
    Onboard: {
      screen: OnboardingStack,
      navigationOptions: {
        header: null,
      },
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
      },
    },
    Registration: {
      screen: RegistrationScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Intro',
  },
);

/**
 * Creates a top level Switch Navigator, using User.isLoggedIn to set the
 * initial route (App or Guest Nav)
 */
export const createRootNav = ({ user }: any) => {
  return createSwitchNavigator(
    {
      AppNav,
      GuestNav,
    },
    {
      // TODO: update this to your logged in method!
      initialRouteName: user.isLoggedIn ? 'AppNav' : 'GuestNav',
    },
  );
};
