import React, { SFC } from 'react';
import styled from '@emotion/native';
import { Text as RNText, TextProperties, TextStyle } from 'react-native';
import { fonts, colors } from '../../styles';

const StyledText = styled(RNText)`
  ${fonts.regular};
  color: ${colors.black}
  font-size: 15px;
`;

export interface Props extends TextProperties {
  /** Children components */
  children?: React.ReactNode;
  /** The text to display if not using children components. */
  text?: string;
  /** Style override */
  style?: TextStyle;
}

/**
 * Text component that wraps the built-in React Native Text
 */
export const Text: SFC<Props> = (props: Props) => {
  // grab the props
  const { text, children, style: styleOverride, ...rest } = props;

  // figure out which content to use
  const content = text || children;

  return (
    <StyledText {...rest} style={styleOverride}>
      {content}
    </StyledText>
  );
};
