import { IntroScreen } from '../screens/IntroScreen';
import { RegistrationScreen } from '../../src/screens/RegistrationScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { createStackNavigator } from 'react-navigation';
import { OnboardingNav } from './OnboardingNav';

/**
 * Guest nav typically consists of screens where the user is logged out:
 *   Onboarding
 *   Registration
 *   Login
 *   Forgot Password
 *
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
