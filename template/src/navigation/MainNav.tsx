import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { ReactElement } from 'react';

import { createFakeScreen } from '../navigation/createFakeScreen';
import { useColor } from '../theme';

const Tab = createBottomTabNavigator();

const TabScreen1 = createFakeScreen('Tab Screen 1', 'backgroundPrimary');
const TabScreen2 = createFakeScreen('Tab Screen 2', 'backgroundSecondary');
const TabScreen3 = createFakeScreen('Tab Screen 3', 'blue');

/**
 * Main Nav is main interface of the app, defaults to tabs.
 */
export const MainNav = (): ReactElement => {
  const textColor = useColor('textPrimary');
  const inactiveTintColor = useColor('textSecondary');
  const backgroundColor = useColor('backgroundSecondary');

  return (
    <Tab.Navigator
      initialRouteName="Tab1"
      tabBarOptions={{
        activeTintColor: textColor,
        inactiveTintColor: inactiveTintColor,
        labelStyle: {
          fontSize: 16,
        },
        style: {
          backgroundColor,
          paddingVertical: 5,
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
