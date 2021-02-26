import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider as ShopifyThemeProvider } from '@shopify/restyle';
import { ThemeProvider } from 'emotion-theming';
import React, { ReactElement, useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { useDarkMode } from 'react-native-dynamic';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Storybook from '../storybook';
import { AppNav } from './navigation/AppNav';
import { GuestNav } from './navigation/GuestNav';
import { theme as emotionTheme } from './styles';
import { darkModeTheme, lightModeTheme } from './theme';

// NOTE: Change this boolean to true to render the Storybook view for development!
const RENDER_STORYBOOK = false;

const App = (): ReactElement | null => {
  const isDarkMode = useDarkMode();
  const theme = isDarkMode ? darkModeTheme : lightModeTheme;

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
    <NavigationContainer theme={theme.navigation}>
      <SafeAreaProvider>
        <ThemeProvider theme={emotionTheme}>
          <ShopifyThemeProvider theme={theme}>
            {RENDER_STORYBOOK ? <Storybook /> : renderNavigation()}
          </ShopifyThemeProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
