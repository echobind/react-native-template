import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MainNav } from './MainNav';

const Stack = createStackNavigator();

/**
 * This is the main App Navigator for a logged-in user.
 */
export const AppNav = (): ReactElement => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Home">
      <Stack.Screen name="Home" component={MainNav} />
      {/* If you need a top level modal, for logged in users, put it here */}
    </Stack.Navigator>
  );
};
