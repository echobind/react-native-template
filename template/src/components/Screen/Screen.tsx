import React, { ReactNode, FC } from 'react';
import styled from '@emotion/native';
import { color, space, FlexProps, SpaceProps } from 'styled-system';

import { theme } from '../../styles';
import { colors } from '../../styles';

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  ${color};
`;

const VerticallyPaddedView = styled.View`
  flex: 1;
  ${space};
  ${color};
`;

const InnerView = styled.View`
  flex: 1;
  ${space};
`;

interface ScreenProps {
  /** the content to render within the screen */
  children?: ReactNode;
}

type ComponentProps = ScreenProps & FlexProps & SpaceProps;

export const Screen: FC<ComponentProps> = ({
  backgroundColor,
  paddingTop,
  paddingBottom,
  children,
  ...screenProps
}) => (
  <SafeAreaView bg={backgroundColor}>
    <VerticallyPaddedView pt={paddingTop} pb={paddingBottom}>
      <InnerView {...screenProps}>{children}</InnerView>
    </VerticallyPaddedView>
  </SafeAreaView>
);

SafeAreaView.defaultProps = {
  bg: colors.white,
};

VerticallyPaddedView.defaultProps = {
  pt: theme.space[2],
  pb: theme.space[2],
};

InnerView.defaultProps = {};

Screen.defaultProps = {};
