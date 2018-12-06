import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';

// addons!
import './addons';

// global decorators!
addDecorator(
  withBackgrounds([
    { name: 'light', value: '#fff', default: true },
    { name: 'gray', value: '#808080' },
    { name: 'dark', value: '#000' },
  ])
);

// stories!
configure(() => {
  require('./stories');
}, module);

const StorybookUI = getStorybookUI();

export default StorybookUI;