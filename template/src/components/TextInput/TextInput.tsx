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

import { Container } from '../Container';
import { Text } from '../Text';
import { colors } from '../../styles';

interface TextInputProps extends TextInputBaseProps {
  /** An optional header label to render about the input */
  topLabel?: string;
}

type ComponentProps = TextInputProps &
  ColorProps &
  SpaceProps &
  TextStyleProps &
  TypographyProps &
  BorderProps &
  LayoutProps &
  FlexProps;

const Wrapper = styled(Container)`
  ${props =>
    props.grow &&
    `
      flex: 1;
    `}
`;

const TopLabel = styled(Text)``;

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
export const TextInput: FC<ComponentProps> = ({ topLabel, multiline, ...inputProps }) => (
  <Container fill={multiline} fullWidth>
    {topLabel ? <TopLabel>{topLabel}</TopLabel> : null}
    <Input
      autoCapitalize="none"
      underlineColorAndroid={colors.transparent}
      selectionColor={colors.primary}
      multiline={multiline}
      {...inputProps}
    />
  </Wrapper>
);

// grow to the full width of its parent container
Wrapper.defaultProps = {
  width: '100%',
  grow: false,
};

TopLabel.defaultProps = {
  color: colors.gray,
  fontSize: 2,
  my: 0.5,
};

TextInput.defaultProps = {
  bg: colors.white,
  borderWidth: 1,
  borderColor: colors.black,
  minHeight: 40,
  p: 2,
  textAlignVertical: 'center',
  width: '100%',
};
