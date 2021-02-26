import {
  createRestyleComponent,
  layout,
  LayoutProps,
  spacing,
  SpacingProps,
} from '@shopify/restyle';
import { ReactNode } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { Theme } from '../../theme';

type RestyleProps = TouchableOpacityProps & LayoutProps<Theme> & SpacingProps<Theme>;

export interface TouchableProps extends RestyleProps {
  children: ReactNode;
}

/**
 * This is our primitive TouchableOpacity component with restyle props applied
 */
export const Touchable = createRestyleComponent<TouchableProps, Theme>(
  [layout, spacing],
  TouchableOpacity
);
