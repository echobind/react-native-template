import React, { FC } from 'react';
import { ActivityIndicator } from 'react-native';
import {
  backgroundColor,
  color,
  space,
  layout,
  flexbox,
  borders,
  BorderProps,
  ColorProps,
  SpaceProps,
  FlexProps,
  LayoutProps,
} from 'styled-system';
import styled from '@emotion/native';

import { Container } from '../Container';
import { Text } from '../Text';
import { Touchable } from '../Touchable';
import { colors } from '../../styles';

interface ButtonProps {
  /** accessibility label */
  accessibilityLabel: string;
  /** disabled button state */
  disabled?: boolean;
  /** loading button state */
  loading?: boolean;
  /** the text label of the button */
  label: string;
  /** the callback to be invoked onPress */
  onPress: () => void;
}

type ComponentProps = ButtonProps & BorderProps & ColorProps & SpaceProps & FlexProps & LayoutProps;

const Wrapper = styled(Touchable)`
  ${color}
  
  ${borders}
  ${space}
  ${layout}
  ${flexbox}
`;

const DisabledWrapper = styled(Container)`
  ${color}
  ${borders}
  ${space}
  ${layout}
  ${flexbox}
`;

const Label = styled(Text)`
  ${props =>
    props.disabled &&
    `
      color: ${props.theme.colors.gray9};
    `}
`;

/**
 * notes:
 * - restricting inner text style from being directly configurable to avoid style prop conflicts
 * - if button is disabled it will not render a touchableOpacity at all
 */
export const Button: FC<ComponentProps> = ({
  accessibilityLabel,
  label,
  onPress,
  disabled,
  loading,
  color: componentColor,
  ...props
}) =>
  disabled ? (
    <DisabledWrapper accessibilityLabel={accessibilityLabel} {...props}>
      {loading ? <ActivityIndicator /> : <Label disabled>{label}</Label>}
    </DisabledWrapper>
  ) : (
    <Wrapper
      accessibilityLabel={accessibilityLabel}
      onPress={loading ? null : onPress}
      bg={backgroundColor}
      {...props}
    >
      {loading ? <ActivityIndicator /> : <Label color={componentColor}>{label}</Label>}
    </Wrapper>
  );

Wrapper.defaultProps = {
  alignItems: 'center',
  bg: colors.orange,
  borderRadius: 40,
  height: 50,
  justifyContent: 'center',
  width: 0.6,
};

DisabledWrapper.defaultProps = {
  alignItems: 'center',
  bg: colors.gray,
  borderRadius: 40,
  height: 50,
  justifyContent: 'center',
  width: 0.6,
};

Label.defaultProps = {
  color: colors.white,
  fontWeight: 'bold',
  fontSize: 2,
};

Button.defaultProps = {
  disabled: false,
};
