import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from './component';

storiesOf('components/Text', module)
  .add('Default', () => <Text />)
  .add('with text prop', () => <Text text="hello there" />)
  .add('with child prop', () => <Text>Hello there</Text>);
