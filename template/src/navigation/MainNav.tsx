import React, { ReactElement } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createFakeScreen } from '../navigation/createFakeScreen';
import { colors } from '../styles';

const Tab = createBottomTabNavigator();

const TabScreen1 = createFakeScreen('Tab Screen 1', colors.white);
const TabScreen2 = createFakeScreen('Tab Screen 2', colors.gray);
const TabScreen3 = createFakeScreen('Tab Screen 3', colors.orange);

/**
 * Main Nav is main interface of the app, defaults to tabs.
 */
export const MainNav = (): ReactElement => {
  return (
    <Tab.Navigator
      initialRouteName="Tab1"
      tabBarOptions={{
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
      }}
    >
      <Tab.Screen name="Tab1" component={TabScreen1} options={{ tabBarTestID: 'tab1' }} />
      <Tab.Screen name="Tab2" component={TabScreen2} options={{ tabBarTestID: 'tab1' }} />
      <Tab.Screen name="Tab3" component={TabScreen3} options={{ tabBarTestID: 'tab1' }} />
    </Tab.Navigator>
  );
};
