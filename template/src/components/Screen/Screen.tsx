import React, { FC, ReactNode } from 'react';
import { StatusBar } from 'react-native';
import { useDarkMode } from 'react-native-dynamic';
import SafeAreaView from 'react-native-safe-area-view';

import { Container, ContainerProps } from '../Container';

interface ScreenProps {
  /** The content to render within the screen */
  children?: ReactNode;
  /** Whether to force the topInset. Use to prevent screen jank on tab screens */
  forceTopInset?: boolean;
}

type ComponentProps = ScreenProps & ContainerProps;

export const Screen: FC<ComponentProps> = ({
  paddingTop,
  paddingBottom,
  forceTopInset,
  children,
  ...screenProps
}) => {
  const isDarkMode = useDarkMode();

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'dark-content' : 'light-content'} />
      <Container flex={1} bg={'backgroundPrimary'}>
        <SafeAreaView
          style={{ flex: 1 }}
          forceInset={{ top: forceTopInset ? 'always' : 'never', bottom: 'never' }}
        >
          <Container flex={1} pt={paddingTop} pb={paddingBottom}>
            <Container flex={1} {...screenProps}>
              {children}
            </Container>
          </Container>
        </SafeAreaView>
      </Container>
    </>
  );
};
