import { createStackNavigator } from 'react-navigation';

import { IntroScreen } from '../screens/IntroScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { RegistrationScreen } from '../screens/RegistrationScreen';
import { OnboardingNav } from './OnboardingNav';

/**
 * Guest nav typically consists of screens where the user is logged out:
 *   Onboarding
 *   Registration
 *   Login
 *   Forgot Password
 */
export const GuestNav = createStackNavigator(
  {
    Intro: {
      screen: IntroScreen,
      navigationOptions: {
        header: null,
      },
    },
    Onboard: {
      screen: OnboardingNav,
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
