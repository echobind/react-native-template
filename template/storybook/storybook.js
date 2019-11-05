import React from 'react';
import { AppRegistry, View } from 'react-native';
import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';

import { name as appName } from '../app.json';

// addons!
import './rn-addons';

// global decorators!
addDecorator(
  withBackgrounds([
    { name: 'light', value: '#fff', default: true },
    { name: 'gray', value: '#808080' },
    { name: 'dark', value: '#000' },
  ]),
);

// stories!
configure(() => {
  require('./stories');
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

// If you are using React Native vanilla write your app name here.
// If you use Expo you can safely remove this line.
AppRegistry.registerComponent(appName, () => StorybookUIRoot);

export default () => (
  <View style={{ flex: 1, backgroundColor: '#fff' }}>
    <StorybookUIRoot />
  </View>
);
