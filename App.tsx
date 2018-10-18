// import { Provider } from 'mobx-react';
import React, { Component } from 'react';
// import SplashScreen from 'react-native-splash-screen';
// import { setupRootStore } from './src/config/setup-root-store';
import './src/config/reactotron';
import { createRootNav } from './src/navigation/RootNavigator';
import Storybook from './storybook';

interface State {}

class App extends Component<{}, State> {
  // public async componentDidMount() {
  //   try {
  //     const rootStore = await setupRootStore();
  //     this.setState({ rootStore });
  //   } catch (error) {
  //     throw error;
  //   } finally {
  //     SplashScreen.hide();
  //   }
  // }

  public render() {
    // enable the following once a store is in place.
    // const rootStore = this.state && this.state.rootStore;

    // if (!rootStore) {
    // render nothing, should be covered by a splash screen
    //   return null;
    // }

    // const RootNav = createRootNav(rootStore);
    const RootNav = createRootNav({ user: { isLoggedIn: false } });

    return (
      // <Provider rootStore={rootStore}>
      <RootNav />
      // </Provider>
    );
  }
}

// tslint:disable-next-line
export default (__DEV__ ? console.tron.storybookSwitcher(Storybook)(App) : App);
