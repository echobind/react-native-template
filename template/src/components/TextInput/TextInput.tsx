import React, { FC } from 'react';
import { TextInputProps as TextInputBaseProps } from 'react-native';
import styled from '@emotion/native';
import {
  borders,
  color,
  layout,
  space,
  flex,
  typography,
  textStyle,
  BorderProps,
  FlexProps,
  ColorProps,
  LayoutProps,
  SpaceProps,
  TextStyleProps,
  TypographyProps,
} from 'styled-system';
import { Icon } from 'react-native-elements';
import { Container } from '../Container';
import { Text } from '../Text';
import { colors } from '../../styles';

interface TextInputProps extends TextInputBaseProps {
  /** An optional header label to render above the input */
  topLabel?: string;
  //** An option icon to be displayed to the left of the input box */
  icon?: Icon;
  /**
  * Overrides the text that's read by the screen reader when the user interacts with the element. By default, the
  * label is constructed by traversing all the children and accumulating all the Text nodes separated by space.
  */
   accessibilityLabel?: string;
}

type ComponentProps = TextInputProps &
  ColorProps &
  SpaceProps &
  TextStyleProps &
  TypographyProps &
  BorderProps &
  LayoutProps &
  FlexProps;

const InputContainer = styled(Container)``;

const Input = styled.TextInput`
  ${flex};
  ${borders};
  ${color};
  ${layout};
  ${space};
  ${textStyle};
  ${typography};
`;

// NOTE: for layout and dimensioning of TextInput, wrap it in a Container
export const TextInput: FC<ComponentProps> = ({
  topLabel,
  icon,
  accessibilityLabel,
  multiline,
  borderColor,
  borderRadius,
  ...inputProps
}) => (
  <Container fill={multiline} fullWidth my={1}>
    {topLabel ? (
      <Text color={colors.gray} fontSize={2} marginVertical={0.5}>
        {topLabel}
      </Text>
    ) : null}
    <InputContainer borderRadius={borderRadius} borderColor={borderColor}>
      {icon ? icon : null}
      <Input
        autoCapitalize="none"
        underlineColorAndroid={colors.transparent}
        selectionColor={colors.primary}
        multiline={multiline}
        accessibilityLabel={accessibilityLabel}
        {...inputProps}
      />
    </InputContainer>
  </Container>
);

InputContainer.defaultProps = {
  flexDirection: 'row',
  bg: colors.white,
  borderWidth: 1,
  borderColor: colors.black,
  minHeight: 40,
  paddingLeft: 10,
  alignItems: 'center',
};

TextInput.defaultProps = {
  p: 2,
  textAlignVertical: 'center',
  width: '100%',
};
