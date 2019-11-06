import React from 'react';
import { AppRegistry } from 'react-native';
import { addParameters, getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';

import { name as appName } from '../app.json';
import { Container } from '../src/components/Container';

// addons!
import './rn-addons';

// adding a centered-view layout!
const CenterView = ({ children }) => (
  <Container fill fullWidth centerContent>
    {children}
  </Container>
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
