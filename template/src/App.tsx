// import { Provider } from 'mobx-react';
// import ApolloClient, { InMemoryCache } from 'apollo-boost';
import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'emotion-theming';

import { createRootNav } from './navigation/RootNav';
import { theme } from './styles';
import Storybook from '../storybook';

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

  public async componentDidMount() {
    this.setupApp();
  }

  public render() {
    // uncomment the rest of this method when setting up Apollo or MST/Redux
    const isLoaded = this.state; // && this.state.client or this.state.store

    if (!isLoaded) {
      // render nothing by default, should be covered by the splash screen
      return null;
    }

    // Generate the root nav of the app based on presence of a user (restored in setup functions above)
    const currentUser = false;
    const RootNav = createRootNav({ currentUser });

    return (
      // MST/Redux Provider:
      // <Provider store={rootStore}>
      //   <RootNav />
      // </Provider>

      // Apollo Provider:
      // <ApolloProvider client={client}
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          {RENDER_STORYBOOK ? (
            <Storybook />
          ) : (
            <RootNav />
          )}
        </ThemeProvider>
      </SafeAreaProvider>
      // </ApolloProvider>
    );
  }

  private setupApp() {
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
  }
}

// tslint:disable-next-line
export default App;
