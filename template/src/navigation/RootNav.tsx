import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import { GuestNav } from './GuestNav';
import { MainNav } from './MainNav';

/**
 * AppNav is the primary stack visible to a logged-in user.
 */
const AppNav = createStackNavigator(
  {
    Home: {
      screen: MainNav,
    },
    // If you need a top level modal, for logged in users, put it here
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  },
);

/**
 * Creates a top level Switch Navigator, using currentUser to set the
 * initial route (App or Guest Nav)
 */
export interface CreateRootNavParams {
  /** Current user of the app. If truthy, renders AppNav. Otherwise, GuestNav. Typically an object, but booleans and strings will also work. */
  currentUser?: Record<any, string> | boolean | string;
}

export const createRootNav = ({ currentUser }: CreateRootNavParams) => {
  const rootNav = createSwitchNavigator(
    {
      AppNav,
      GuestNav,
    },
    {
      initialRouteName: currentUser ? 'AppNav' : 'GuestNav',
    },
  );

  return createAppContainer(rootNav)
};
