import { createRestyleComponent, createVariant, VariantProps } from '@shopify/restyle';
import React from 'react';

import { Theme } from '../../theme';
import { useVariantValue } from '../../utils/theme-utils/theme-utils';
import { Text } from '../Text';
import { Touchable, TouchableProps } from '../Touchable';

type ButtonProps = TouchableProps & VariantProps<Theme, 'buttonVariants'>;

const VariantRestyleComponent = createVariant({
  themeKey: 'buttonVariants',
});

const ButtonWrapper = createRestyleComponent<ButtonProps, Theme>(
  [VariantRestyleComponent],
  Touchable
);

/**
 * A simple button
 */
export const Button = ({ children, ...props }: ButtonProps) => {
  const textStyle = useVariantValue('buttonVariants', 'textStyle', props.variant);

  return (
    <ButtonWrapper {...props}>
      <Text {...textStyle}>{children}</Text>
    </ButtonWrapper>
  );
};
