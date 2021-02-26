import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { Text } from './Text';

storiesOf('components/Text', module).add('Default', () => <Text>Hello world!</Text>);
