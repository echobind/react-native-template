import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { Registration } from './Registration';

storiesOf('components/Registration', module).add('Default', () => (
  <Registration createPress={() => console.log('Create account pressed!')} />
));
