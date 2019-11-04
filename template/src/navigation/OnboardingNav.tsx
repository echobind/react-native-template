import { createStackNavigator } from 'react-navigation';

import { createFakeScreen } from '../navigation/createFakeScreen';
import { colors } from '../styles';

/**
 * Onboarding Nav is shown before a user registers. Typically as a swiper
 */
export const OnboardingNav = createStackNavigator(
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
