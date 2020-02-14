import React, { ReactNode, FC } from 'react';
import styled from '@emotion/native';
import SafeAreaView from 'react-native-safe-area-view';
import { color, space, FlexProps, SpaceProps } from 'styled-system';

import { Container } from '../Container';

import { theme } from '../../styles';
import { colors } from '../../styles';

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
  /** The content to render within the screen */
  children?: ReactNode;
  /** Whether to force the topInset. Use to prevent screen jank on tab screens */
  forceTopInset?: Boolean;
}

type ComponentProps = ScreenProps & FlexProps & SpaceProps;

export const Screen: FC<ComponentProps> = ({
  backgroundColor,
  paddingTop,
  paddingBottom,
  forceTopInset,
  children,
  ...screenProps
}) => (
  <Container fill bg={backgroundColor}>
    <SafeAreaView
      style={{ flex: 1 }}
      forceInset={{ top: forceTopInset ? 'always' : 'never', bottom: 'never' }}
    >
      <VerticallyPaddedView pt={paddingTop} pb={paddingBottom}>
        <InnerView {...screenProps}>{children}</InnerView>
      </VerticallyPaddedView>
    </SafeAreaView>
  </Container>
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
