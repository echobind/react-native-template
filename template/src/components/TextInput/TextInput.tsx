import {
  border,
  BorderProps,
  color,
  ColorProps,
  createRestyleComponent,
  layout,
  LayoutProps,
  spacing,
  SpacingProps,
  typography,
  TypographyProps,
} from '@shopify/restyle';
import React, { FC } from 'react';
import {
  TextInput as ReactNativeTextInput,
  TextInputProps as TextInputBaseProps,
} from 'react-native';

import { colors } from '../../styles';
import { Theme } from '../../theme';
import { Container } from '../Container';
import { Text } from '../Text';

interface TextInputProps extends TextInputBaseProps {
  /** An optional header label to render above the input */
  topLabel?: string;
  //** An option icon to be displayed to the left of the input box */
  icon?: JSX.Element;
  /**
   * Overrides the text that's read by the screen reader when the user interacts with the element. By default, the
   * label is constructed by traversing all the children and accumulating all the Text nodes separated by space.
   */
  accessibilityLabel?: string;
}

type ComponentProps = TextInputProps &
  SpacingProps<Theme> &
  BorderProps<Theme> &
  ColorProps<Theme> &
  LayoutProps<Theme> &
  TypographyProps<Theme> &
  LayoutProps<Theme>;

const Input = createRestyleComponent<ComponentProps, Theme>(
  [spacing, border, color, layout, typography, layout],
  ReactNativeTextInput
);

// NOTE: for layout and dimensioning of TextInput, wrap it in a Container
export const TextInput: FC<ComponentProps> = ({
  topLabel,
  icon,
  accessibilityLabel,
  multiline,
  borderColor = 'backgroundSecondary',
  borderRadius = 'md',
  ...inputProps
}) => (
  <Container flex={multiline ? 1 : undefined} width={'100%'} m={1}>
    {topLabel ? (
      <Text color={'backgroundSecondary'} fontSize={20} style={{ marginVertical: 0.5 }}>
        {topLabel}
      </Text>
    ) : null}
    <Container
      alignItems={'center'}
      backgroundColor="textInputBackground"
      borderColor={borderColor}
      borderRadius={borderRadius}
      borderWidth={1}
      flexDirection={'row'}
      minHeight={40}
      paddingLeft={3}
      width={'100%'}
    >
      {icon ? icon : null}
      <Input
        autoCapitalize="none"
        color={'textPrimary'}
        underlineColorAndroid={colors.transparent}
        multiline={multiline}
        accessibilityLabel={accessibilityLabel}
        width={'100%'}
        {...inputProps}
      />
    </Container>
  </Container>
);

TextInput.defaultProps = {
  padding: 2,
  textAlignVertical: 'center',
  width: '100%',
};
