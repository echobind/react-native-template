import styled from '@emotion/native';
import React, { Component } from 'react';
import { ImageBackground, StatusBar, StyleSheet, View, ViewStyle } from 'react-native';
import bgImage from '../../assets/images/background.png';
import { Screen } from '../../components/Screen';
import { Text } from '../../components/Text';
import { colors } from '../../styles';

const Background = styled(ImageBackground)`
  ${StyleSheet.absoluteFillObject};
`;

interface Props {
  style?: ViewStyle;
}

const StyledScreen = styled(Screen)`
  align-items: center;
  margin-top: 60px;
`;

const StyledText = styled(Text)`
  color: ${colors.white};
  font-size: 24px;
`;

/**
 * First screen a logged out user sees, welcoming them to the app.
 */
export class IntroScreen extends Component<Props> {
  public render() {
    return (
      <Background source={bgImage} resizeMode="cover">
        <StatusBar barStyle="light-content" />
        <StyledScreen backgroundColor={colors.transparent} style={this.props.style}>
          <StyledText>Welcome to the intro Screen!</StyledText>
        </StyledScreen>
      </Background>
    );
  }
}
