import React, { ReactElement, useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'emotion-theming';

import Storybook from '../storybook';
import { AppNav } from './navigation/AppNav';
import { GuestNav } from './navigation/GuestNav';

import { theme } from './styles';

// NOTE: Change this boolean to true to render the Storybook view for development!
const RENDER_STORYBOOK = false;

const App = (): ReactElement | null => {
  // hide the splashscreen on mount
  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);

  const renderNavigation = (): ReactElement => {
    // replace with actual user profile data once loaded, or fallback to guest nav
    const currentUser = false;

    return currentUser ? <AppNav /> : <GuestNav />;
  };

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          {RENDER_STORYBOOK ? <Storybook /> : renderNavigation()}
        </ThemeProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
