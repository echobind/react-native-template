import React, { useEffect, ReactElement } from 'react';
import SplashScreen from 'react-native-splash-screen';
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
    SplashScreen.hide();
  }, []);

class App extends Component<{}, State> {
  public state = {};

  private setupApp = (): void => {
    try {
      // Use this block to setup either the store or the apollo client
      // const rootStore = await setupRootStore();
      // this.setState({ store });
      //
      // const client = await setupApolloClient();
      // this.setState({ client })
    } catch (error) {
      throw error;
    } finally {
      // Now that everything is hydrated, hide the splashscreen
      SplashScreen.hide();
    }
  };

  public componentDidMount = async (): Promise<void> => {
    this.setupApp();
  };

  public renderNavigation = (): ReactElement => {
    // Generate the root nav of the app based on presence of a user (restored in setup functions above)
    const currentUser = true;

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
