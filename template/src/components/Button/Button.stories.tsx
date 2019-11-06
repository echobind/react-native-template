import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { Button } from './Button';

storiesOf('components/Button', module).add('Default', () => (
  <Button label="Button" />
));
