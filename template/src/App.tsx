// import { Provider } from 'mobx-react';
// import ApolloClient, { InMemoryCache } from 'apollo-boost';
import React, { Component, ReactElement } from 'react';
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

interface State {
  removeWhenYouveAddedStateManagement?: true;
  /** The root store or stores to inject into the app. ONLY USED WITH MST / REDUX APPS */
  // store: any; // if you use this, type it to your root store
  /** The configured Apollo client. ONLY USED WITH APOLLO / GRAPHQL APPS */
  // client: ApolloClient<InMemoryCache>;
}

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
    const currentUser = false;

    return currentUser ? <AppNav /> : <GuestNav />;
  };

  public render(): ReactElement | null {
    // uncomment the rest of this method when setting up Apollo or MST/Redux
    const isLoaded = this.state; // && this.state.client or this.state.store

    if (!isLoaded) {
      // render nothing by default, should be covered by the splash screen
      return null;
    }

    return (
      // MST/Redux Provider:
      // <Provider store={rootStore}>
      //   <RootNav />
      // </Provider>

      // Apollo Provider:
      // <ApolloProvider client={client}
      <NavigationContainer>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
            {RENDER_STORYBOOK ? <Storybook /> : this.renderNavigation()}
          </ThemeProvider>
        </SafeAreaProvider>
      </NavigationContainer>
      // </ApolloProvider>
    );
  }
}

// tslint:disable-next-line
export default App;
