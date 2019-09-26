import { colors } from '../styles';
import { createBottomTabNavigator } from 'react-navigation';
import { createFakeScreen } from '../navigation/createFakeScreen';
/**
 * Main Nav is main interface of the app, defaults to tabs.
 */
export const MainNav = createBottomTabNavigator(
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
