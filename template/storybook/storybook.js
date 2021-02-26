// addons!
import './rn-addons';

import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { addDecorator, addParameters, configure, getStorybookUI } from '@storybook/react-native';
import React from 'react';
import { AppRegistry } from 'react-native';

import { name as appName } from '../app.json';
import { Screen } from '../src/components/Screen';

// adding a centered-view layout!
const CenterView = ({ children }) => (
  <Screen alignItems={'center'} justifyContent={'center'}>
    {children}
  </Screen>
);

// global decorators!
addDecorator(getStory => <CenterView>{getStory()}</CenterView>);
addDecorator(withBackgrounds);
addParameters({
  backgrounds: [
    { name: 'light', value: '#fff', default: true },
    { name: 'gray', value: '#808080' },
    { name: 'dark', value: '#000' },
  ],
});

// stories!
configure(() => {
  require('./stories');
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

AppRegistry.registerComponent(appName, () => StorybookUIRoot);

export default StorybookUIRoot;
