import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation';
import { RegistrationScreen } from '../../src/screens/RegistrationScreen';
import { IntroScreen } from '../screens/IntroScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { colors } from '../styles';

/**
 * Base Nav contains the tab navigation screen at the bottom of the login stack.
 */
const HomeNav = createBottomTabNavigator(
  {
    Discover: {
      screen: DiscoverScreen,
      navigationOptions: {
        tabBarTestID: 'discoverTab',
        tabBarIcon: ({ focused, tintColor }) => {
          // image size needs to be a bit smaller
          const size = (focused ? TAB_ICON_FOCUSED_SIZE : TAB_ICON_SIZE) - 3;

          return (
            <Image
              source={DiscoverIcon}
              style={{
                width: size,
                height: size,
                tintColor
              }}
            />
          );
        }
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarTestID: 'searchTab',
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon
            name="search"
            size={focused ? TAB_ICON_FOCUSED_SIZE : TAB_ICON_SIZE}
            color={tintColor}
          />
        )
      }
    },
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: {
        tabBarTestID: 'favoritesTab',
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon
            name="favorite"
            size={focused ? TAB_ICON_FOCUSED_SIZE : TAB_ICON_SIZE}
            color={tintColor}
          />
        )
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarTestID: 'settingsTab',
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon
            name="settings"
            size={focused ? TAB_ICON_FOCUSED_SIZE : TAB_ICON_SIZE}
            color={tintColor}
          />
        )
      }
    }
  },
  {
    initialRouteName: 'Discover',
    headerMode: 'none',
    tabBarOptions: {
      activeTintColor: colors.white,
      inactiveTintColor: colors.lightGray,
      labelStyle: {
        fontSize: 12
      },
      style: {
        backgroundColor: colors.darkBlue,
        paddingVertical: 10,
        height: 70
      }
    }
  }
);

/**
 * AppNav is the primary stack visible to a logged-in user.
 * To use a drawer nav, just swap it out here.
 */
const AppNav = createStackNavigator(
  {
    Home: {
      screen: HomeNav
    },
    Tab1: {
      screen: Tab1
    },
    Tab2: {
      screen: Tab2
    },
    Tab3: {
      screen: Tab3
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home'
  }
);

/**
 * Onboarding Stack Nav is shown before a user registers
 */
const OnboardingStack = createStackNavigator(
  {
    Onboarding1: {
      screen: Onboarding1
    },
    Onboarding2: {
      screen: Onboarding2
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'Onboarding1'
  }
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
        header: null
      }
    },
    Onboard: {
      screen: OnboardingStack,
      navigationOptions: {
        header: null
      }
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    },
    Registration: {
      screen: RegistrationScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'Intro'
  }
);

/**
 * Creates a top level Switch Navigator, using User.isLoggedIn to set the
 * initial route (App or Guest Nav)
 */
export const createRootNav = ({ user }: any) => {
  return createSwitchNavigator(
    {
      AppNav,
      GuestNav
    },
    {
      // TODO: update this to your logged in method!
      initialRouteName: user.isLoggedIn ? 'AppNav' : 'GuestNav'
    }
  );
};
