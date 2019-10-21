import styled from '@emotion/native';
import React, { ReactNode, SFC } from 'react';
import { SafeAreaView, ViewStyle } from 'react-native';

import { colors, margins } from '../../styles';

/**
 * A base screen component that allows for background-color to be specified
 */

const SafeView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${props => props.backgroundColor || colors.white};
`;

const PaddedView = styled.View`
  padding-horizontal: ${`${margins.screenMargin}px`};
`;

interface ScreenProps {
  /** the background color of the screen */
  backgroundColor?: string;
  /** main part of the screen */
  children?: ReactNode;
  /** view styles to override the base */
  style?: ViewStyle;
}

export const Screen: SFC<ScreenProps> = ({ backgroundColor, children, style }) => (
  <SafeView backgroundColor={backgroundColor} style={style}>
    <PaddedView style={style}>{children}</PaddedView>
  </SafeView>
);

export default Screen;
