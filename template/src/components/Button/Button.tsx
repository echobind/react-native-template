import React, { FC } from 'react';
import { ActivityIndicator } from 'react-native';
import {
  backgroundColor,
  BorderProps,
  ColorProps,
  SpaceProps,
  FlexProps,
  LayoutProps,
} from 'styled-system';

import { Container } from '../Container';
import { Text } from '../Text';
import { Touchable } from '../Touchable';
import { colors } from '../../styles';
import { AccessbilityRole } from '../../types/AccessibilityRole';

interface ButtonProps {
  /**
  * Overrides the text that's read by the screen reader when the user interacts with the element. By default, the
  * label is constructed by traversing all the children and accumulating all the Text nodes separated by space.
  */
  accessibilityLabel: string;
  /** Accessibility Role tells a person using either VoiceOver on iOS or TalkBack on Android the type of element that is focused on.  */
  accessbilityRole?: AccessbilityRole;
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
}) => {
  const ButtonContainer = disabled ? Container : Touchable;
  const onPressAction = loading ? null : onPress;

  return (
    <ButtonContainer
      centerContent
      bg={disabled ? colors.disabled : backgroundColor}
      borderRadius={40}
      height={50}
      width={0.6}
      accessibilityLabel={accessibilityLabel}
      onPress={onPressAction}
      disabled={disabled}
      {...props}
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text color={disabled ? colors.gray : componentColor} fontWeight="bold" fontSize={2}>
          {label}
        </Text>
      )}
    </ButtonContainer>
  );
};

Button.defaultProps = {
  disabled: false,
  borderColor: colors.transparent,
  borderWidth: 1,
  backgroundColor: colors.orange,
};
