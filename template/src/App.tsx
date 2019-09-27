// import ApolloClient, { InMemoryCache } from 'apollo-boost';
import React, { Component, FC } from 'react';
// import SplashScreen from 'react-native-splash-screen';
import { createRootNav } from './navigation/RootNav';

interface State {
  removeWhenYouveAddedStateManagement?: true;
  /** The configured Apollo client. ONLY USED WITH APOLLO / GRAPHQL APPS */
  // client: ApolloClient<InMemoryCache>;
}

export const App: FC = () => {


  // Generate the root nav of the app based on presence of a user (restored in setup functions above)
  const currentUser = false;
  const RootNav = createRootNav({ currentUser });

  return (

    // Apollo Provider:
    // <ApolloProvider client={client}
    <RootNav />
    // </ApolloProvider>
  );
}
