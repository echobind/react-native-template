import {
  BackgroundColorProps,
  createRestyleComponent,
  createVariant,
  layout,
  LayoutProps,
  spacing,
  SpacingProps,
  VariantProps
} from '@shopify/restyle';
import React, { ReactNode } from 'react';
import { View, ViewProps, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { Theme } from '../../theme';
import { useVariantValue } from '../../utils/theme-utils/theme-utils';
import { Text } from '../Text';

type RestyleProps = TouchableOpacityProps & 
  VariantProps<Theme, 'buttonVariants'> &
  LayoutProps<Theme> &
  SpacingProps<Theme>;
  
interface ButtonProps extends RestyleProps {
  children: ReactNode;
}

const VariantRestyleComponent = createVariant({
  themeKey: 'buttonVariants',
});

const ButtonWrapper = createRestyleComponent<ButtonProps, Theme>(
  [layout, spacing, VariantRestyleComponent],
  TouchableOpacity
);

/**
 * A button with a simple press animation
 */
export const Button = ({ children, ...props }: ButtonProps) => {
  const textStyle = useVariantValue(
    'buttonVariants',
    'textStyle',
    props.variant
  );

  return (
    <ButtonWrapper {...props}>
      <Text {...textStyle}>{children}</Text>
    </ButtonWrapper>
  );
};
